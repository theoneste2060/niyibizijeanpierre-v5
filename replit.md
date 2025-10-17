# NIYIBIZI Jean Pierre - Professional Portfolio Website

## 📋 Project Overview

This is a professional static website for **NIYIBIZI Jean Pierre**, a Geotechnical Engineer, Researcher & AI Innovator, and Owner & CEO of **GEO-HOME SERVICES LTD** in Rwanda.

**Last Updated**: October 16, 2025

## 🎯 Purpose

The website showcases:
- Professional expertise in geotechnical engineering
- AI and machine learning research applications
- Agricultural innovation projects
- Research publications and achievements
- Company services (GEO-HOME SERVICES LTD)

## 🏗️ Project Architecture

### Technology Stack
- **Frontend**: Static HTML5, CSS3, JavaScript
- **Backend**: Node.js HTTP server with SQLite database
- **Database**: SQLite (better-sqlite3) for view counts, contact forms, newsletter
- **Deployment Target**: Replit Autoscale / GitHub Pages
- **SEO**: JSON-LD structured data, Open Graph tags, XML sitemap

### File Structure
```
/
├── index.html                          # Homepage with hero, Quick Facts, newsletter, and featured content
├── about.html                          # Professional background and company info
├── projects.html                       # Portfolio of engineering and AI projects
├── publications.html                   # Research papers and publications
├── blog.html                           # Blog listing page (main blog page)
├── blog-ai-geotech.html                # Blog post: AI in geotechnical engineering
├── blog-ai-driven-soil-analysis.html   # Blog post: AI-driven soil analysis
├── blog-sustainable-construction.html  # Blog post: Climate-resilient infrastructure
├── media.html                          # Image gallery and press resources
├── contact.html                        # Contact form and information
├── style.css                           # Main stylesheet with animations, responsive design, and blog styles
├── navbar.js                           # Mobile menu toggle and scroll animations
├── blog-views.js                       # Blog view counter with SQLite backend
├── contact-form.js                     # Contact form handler with API submission
├── newsletter.js                       # Newsletter subscription handler
├── logo.jpg                            # Logo/profile image
├── server.js                           # Node.js server with SQLite + API endpoints
├── portfolio.db                        # SQLite database (gitignored)
├── sitemap.xml                         # SEO sitemap (includes blog pages)
├── robots.txt                          # Search engine directives
├── README.md                           # Detailed documentation
├── FAVICON_INSTRUCTIONS.md             # Favicon creation guide
├── .gitignore                          # Git ignore rules
└── replit.md                           # This file
```

## 🎨 Design System

### Color Palette
- **Engineering Blue**: `#2E86C1` (primary actions, accents)
- **Dark Gray**: `#1B2631` (navbar, footer, headings)
- **Light Gray**: `#F8F9F9` (background)

### Typography
- **Headings**: Montserrat, Poppins (fallback)
- **Body Text**: Open Sans, Lato (fallback)

### Key Features
- Fully responsive (mobile-first design with hamburger menu)
- Smooth scroll-triggered fade-in animations (IntersectionObserver)
- Enhanced hover effects (buttons, cards, navbar)
- Clean URLs without .html extensions for better SEO and UX
- Modern minimalist design with zero border-radius on all elements
- Blog cards with featured images
- WCAG accessibility compliant (keyboard navigation, ARIA, alt text)
- SEO optimized with meta tags, JSON-LD, sitemap
- Social media integration (Open Graph, Twitter Cards)
- Professional gradient design with engineering blue theme

## 🔧 Recent Changes

### October 16, 2025 - Blog View Counter & Database Verification
- ✅ **GET /api/views Endpoint**: Added new endpoint to fetch all blog view counts at once
- ✅ **Blog.html View Counter**: Verified and tested view count display on all blog cards
- ✅ **Newsletter Database**: Verified newsletter subscriptions save correctly to SQLite
- ✅ **Contact Form Database**: Verified contact form submissions save correctly to SQLite
- ✅ **API Testing**: All endpoints (views, contact, newsletter) tested and working perfectly
- ✅ **Database Persistence**: Confirmed all data persists correctly in portfolio.db (SQLite)
- ✅ **Architect Review**: All functionality reviewed and approved

### October 16, 2025 - SQLite Database & Dynamic Features Implementation
- ✅ **SQLite Database**: Implemented better-sqlite3 for persistent data storage
- ✅ **Blog View Counter**: Real-time view tracking with sessionStorage (prevents duplicate counts per session)
- ✅ **Database Tables**: Created 3 tables (blog_views, contact_submissions, newsletter_subscribers)
- ✅ **API Endpoints**: 
  - GET /api/views - Fetch all blog view counts
  - GET /api/views/:page - Fetch view count for specific page
  - POST /api/views/:page - Increment view count
  - POST /api/contact - Submit contact form
  - POST /api/newsletter - Subscribe to newsletter
- ✅ **Contact Form**: Replaced mailto with AJAX submission, success/error feedback
- ✅ **Newsletter Section**: Added beautiful gradient newsletter signup on homepage
- ✅ **Form Validation**: Client-side and server-side validation with duplicate email handling
- ✅ **CSS Styling**: Added newsletter and form styles with responsive design
- ✅ **Testing Complete**: All features tested and verified with database persistence

### October 16, 2025 - Comprehensive Production Audit & SEO Fixes
- ✅ **Navigation Links Fixed**: All internal links now include .html extensions for static hosting compatibility (href="index.html" instead of href="index")
- ✅ **SEO Meta Tags**: Added comprehensive keywords meta tags to all pages
- ✅ **Social Media Tags**: Added complete Open Graph and Twitter Card meta tags to all pages
- ✅ **Canonical URLs Fixed**: All canonical, og:url, and Twitter URLs now include .html extensions
- ✅ **Removed Duplicate Canonicals**: Fixed duplicate canonical tag issue in index.html
- ✅ **Footer Standardization**: Consistent footer format across all pages
- ✅ **Sitemap Updated**: Added blog-sustainable-construction.html to sitemap.xml
- ✅ **Image Optimization**: Added lazy loading (loading="lazy") to all images
- ✅ **Accessibility Enhanced**: Improved all image alt texts with descriptive, keyword-rich content
- ✅ **Blog View Counter**: Implemented localStorage-based view counter (removed PostgreSQL dependencies for static hosting)
- ✅ **Server Simplified**: Cleaned up server.js by removing database dependencies
- ✅ **Production Ready**: Website fully optimized and ready for deployment to GitHub Pages/Netlify

### October 15, 2025 - Design Overhaul & Clean URLs
- ✅ **Blog Card Images**: Added featured images to all blog cards for better visual appeal
- ✅ **Clean URLs**: Removed .html extensions from all URLs across the site (e.g., /blog instead of /blog.html)
- ✅ **Server Update**: Modified server.js to automatically handle clean URLs by appending .html internally
- ✅ **Design Simplification**: Removed all border-radius from cards, buttons, and UI elements for a cleaner, more modern look
- ✅ **Category Tags Removed**: Cleaned up blog cards by removing category badges
- ✅ **New Blog Post**: Published "Building Climate-Resilient Infrastructure in East Africa" with stock images
- ✅ **Image Updates**: Changed soil analysis blog image to showcase Rwandan farmland (rwanda-farmland-drone.jpg)
- ✅ **Navigation Updates**: All internal links now use clean URLs site-wide (removed .html from href, canonical, and og:url)

### October 15, 2025 - Blog Section Added
- ✅ **Blog Menu**: Added "Blog" navigation item to all pages
- ✅ **Blog Listing Page**: Created blog.html as the main blog page
- ✅ **New Blog Post**: Published "Smart Agriculture: AI-Driven Soil Analysis for Better Crop Yields"
- ✅ **Blog Styling**: Added comprehensive CSS styles for blog cards, articles, and responsive design
- ✅ **SEO Updates**: Updated sitemap.xml to include all blog pages
- ✅ **Navigation**: Integrated blog seamlessly into existing navigation structure

### October 11, 2025 - Server Migration & Mobile Menu Fix
- ✅ **Node.js Server**: Migrated from Python to Node.js HTTP server with security hardening
- ✅ **Security**: Implemented path traversal protection with proper sanitization
- ✅ **Mobile Menu Fix**: Enhanced hamburger icon visibility and functionality
- ✅ **CSS Improvements**: Fixed mobile menu positioning and z-index issues
- ✅ **Deployment**: Updated to use Node.js for both development and production
- ✅ **Workflow**: Configured to run Node.js server on port 5000

### October 11, 2025 - Visual & Accessibility Enhancements
- ✅ **Enhanced Hero Section**: Deeper gradient (0D1B2A → 1B3A52 → 2E86C1) for visual impact
- ✅ **Improved Navbar**: Thinner height (60px), hover underline animations, smooth transitions
- ✅ **Scroll Animations**: Fade-in animations for all sections using IntersectionObserver
- ✅ **Quick Facts Section**: Added 3 key statistics in gradient card style on homepage
- ✅ **Enhanced Buttons**: Shimmer animation, lift effect, enhanced shadows
- ✅ **Mobile Responsiveness**: Hamburger menu with proper accessibility (button semantics, ARIA, keyboard support)
- ✅ **Accessibility (WCAG)**: Alt text, aria-labels, keyboard navigation, proper heading structure
- ✅ **Mobile Menu**: Fully keyboard accessible with Enter/Space, aria-expanded, focus outline
- ✅ **Card Hover Effects**: Enhanced animations and shadows for projects and publications
- ✅ **Favicon Setup**: Created FAVICON_INSTRUCTIONS.md with creation guide

### October 11, 2025 - Initial Setup
- ✅ Removed "Dr." title, updated to "NIYIBIZI Jean Pierre"
- ✅ Added CEO role: "Owner & CEO of GEO-HOME SERVICES LTD"
- ✅ Updated all meta tags and SEO information
- ✅ Created new pages: contact.html, projects.html
- ✅ Implemented modern color scheme (Engineering Blue #2E86C1)
- ✅ Updated JSON-LD structured data for Person and Organization
- ✅ Created comprehensive README.md with deployment instructions
- ✅ Updated sitemap.xml and robots.txt
- ✅ Added .gitignore for clean repository
- ✅ All pages now use correct branding and contact info

## 🚀 Development Workflow

### Local Development
1. The Node.js server runs automatically on port 5000
2. Access the site at the Webview panel in Replit
3. Changes to HTML/CSS/JS are reflected immediately

### Running the Server
```bash
node server.js
```

### File Editing
- HTML files: Update content directly
- CSS: Modify `style.css` for styling changes
- Images: Add to root directory or create `images/` folder

## 📝 User Preferences

### Branding
- Always use full name: **NIYIBIZI Jean Pierre**
- Company name: **GEO-HOME SERVICES LTD**
- Email: **contact@niyibizijeanpierre.rw**
- Domain: **niyibizijeanpierre.rw**

### Content Guidelines
- Professional tone, focused on engineering expertise
- Highlight AI and innovation aspects
- Emphasize leadership role as CEO
- Showcase both research and practical applications

## 🌐 Deployment Information

### Target Platform
- **Primary**: GitHub Pages
- **Domain**: niyibizijeanpierre.rw
- **Secondary**: niyibizijeanpierre.com (redirect)

### Deployment Steps
1. All files are ready for GitHub Pages deployment
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Configure custom domain (niyibizijeanpierre.rw)
5. Set up DNS records with domain provider

See `README.md` for detailed deployment instructions.

## ✅ SEO Optimization

The website includes:
- ✓ Meta descriptions on all pages
- ✓ Open Graph tags for social sharing
- ✓ Twitter Card meta tags
- ✓ JSON-LD structured data (Person + Organization)
- ✓ XML sitemap
- ✓ Robots.txt configuration
- ✓ Semantic HTML5 structure
- ✓ Mobile-responsive design
- ✓ Fast load times (static files)
- ✓ Canonical URLs

## 📞 Contact Information

- **Email**: contact@niyibizijeanpierre.rw
- **Website**: https://niyibizijeanpierre.rw
- **Company**: GEO-HOME SERVICES LTD
- **Location**: Rwanda

## 🔄 Future Enhancements

Potential improvements to consider:
- [ ] Add real project images (replace placeholders)
- [ ] Integrate contact form service (Formspree or similar)
- [ ] Add Google Analytics for visitor tracking
- [ ] Create blog section with multiple articles
- [ ] Add team members page for GEO-HOME SERVICES LTD
- [ ] Implement dark mode toggle
- [ ] Add language switcher (English/French/Kinyarwanda)
- [ ] Create downloadable CV/resume
- [ ] Add testimonials section
- [ ] Integrate live chat support

## 📊 Performance Notes

- All pages are static HTML (fast loading)
- No external dependencies or frameworks
- Images should be optimized before adding
- CSS is concatenated in a single file
- No JavaScript required for core functionality

## 🔐 Security

- Static site (no server-side vulnerabilities)
- HTTPS enforced on GitHub Pages
- No sensitive data stored in repository
- Contact form uses external service (secure)

---

**Maintained by**: Replit Agent
**Project Status**: ✅ Ready for Production
**Last Review**: October 11, 2025
