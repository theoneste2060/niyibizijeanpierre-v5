const http = require('http');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const PORT = 5000;

// Initialize SQLite database
const db = new Database('portfolio.db');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS blog_views (
    page TEXT PRIMARY KEY,
    views INTEGER DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('✅ Database initialized successfully');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

// Helper function to parse request body
function parseRequestBody(req, callback) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      callback(null, data);
    } catch (e) {
      callback(e, null);
    }
  });
}

const server = http.createServer((req, res) => {
  const publicRoot = __dirname;
  const method = req.method;
  let requestPath = req.url.split('?')[0];

  // API Routes
  if (requestPath.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json');
    
    // Get all blog view counts
    if (method === 'GET' && requestPath === '/api/views') {
      const rows = db.prepare('SELECT page, views FROM blog_views').all();
      const viewCounts = {};
      rows.forEach(row => {
        viewCounts[row.page] = row.views;
      });
      
      res.writeHead(200);
      res.end(JSON.stringify(viewCounts));
      return;
    }
    
    // Get blog view count
    if (method === 'GET' && requestPath.match(/^\/api\/views\/(.+)$/)) {
      const page = requestPath.match(/^\/api\/views\/(.+)$/)[1];
      
      let row = db.prepare('SELECT views FROM blog_views WHERE page = ?').get(page);
      
      if (!row) {
        // Initialize page with 0 views
        db.prepare('INSERT INTO blog_views (page, views) VALUES (?, 0)').run(page);
        row = { views: 0 };
      }
      
      res.writeHead(200);
      res.end(JSON.stringify({ page, views: row.views }));
      return;
    }
    
    // Increment blog view count
    if (method === 'POST' && requestPath.match(/^\/api\/views\/(.+)$/)) {
      const page = requestPath.match(/^\/api\/views\/(.+)$/)[1];
      
      const stmt = db.prepare(`
        INSERT INTO blog_views (page, views, last_updated) 
        VALUES (?, 1, CURRENT_TIMESTAMP)
        ON CONFLICT(page) DO UPDATE SET 
          views = views + 1,
          last_updated = CURRENT_TIMESTAMP
      `);
      
      stmt.run(page);
      
      const row = db.prepare('SELECT views FROM blog_views WHERE page = ?').get(page);
      
      res.writeHead(200);
      res.end(JSON.stringify({ page, views: row.views, success: true }));
      return;
    }
    
    // Contact form submission
    if (method === 'POST' && requestPath === '/api/contact') {
      parseRequestBody(req, (err, data) => {
        if (err || !data.name || !data.email || !data.message) {
          res.writeHead(400);
          res.end(JSON.stringify({ success: false, error: 'Invalid data' }));
          return;
        }
        
        const stmt = db.prepare('INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)');
        stmt.run(data.name, data.email, data.message);
        
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, message: 'Thank you! Your message has been received.' }));
      });
      return;
    }
    
    // Newsletter subscription
    if (method === 'POST' && requestPath === '/api/newsletter') {
      parseRequestBody(req, (err, data) => {
        if (err || !data.email) {
          res.writeHead(400);
          res.end(JSON.stringify({ success: false, error: 'Invalid email' }));
          return;
        }
        
        try {
          const stmt = db.prepare('INSERT INTO newsletter_subscribers (email) VALUES (?)');
          stmt.run(data.email);
          
          res.writeHead(200);
          res.end(JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter!' }));
        } catch (e) {
          if (e.message.includes('UNIQUE')) {
            res.writeHead(409);
            res.end(JSON.stringify({ success: false, error: 'Email already subscribed' }));
          } else {
            res.writeHead(500);
            res.end(JSON.stringify({ success: false, error: 'Server error' }));
          }
        }
      });
      return;
    }
    
    // Unknown API route
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'API endpoint not found' }));
    return;
  }

  // Static file serving
  if (requestPath === '/') {
    requestPath = '/index.html';
  }
  
  // If path doesn't have an extension and doesn't end with a slash, try to find .html file
  if (!path.extname(requestPath) && !requestPath.endsWith('/')) {
    requestPath = requestPath + '.html';
  }

  const resolvedPath = path.resolve(publicRoot, '.' + requestPath);
  const relative = path.relative(publicRoot, resolvedPath);
  
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>', 'utf-8');
    return;
  }
  
  const filePath = resolvedPath;

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
  console.log(`API endpoints available:
  - GET  /api/views/:page - Get view count
  - POST /api/views/:page - Increment view count
  - POST /api/contact - Submit contact form
  - POST /api/newsletter - Subscribe to newsletter`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
