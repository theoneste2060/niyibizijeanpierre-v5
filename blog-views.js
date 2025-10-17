// Blog View Counter - Fetches and displays real-time view counts from SQLite database

(function() {
  // Get the current page name from the URL
  const pageName = window.location.pathname.split('/').pop().replace('.html', '');
  
  // Function to get view count
  async function getViewCount() {
    try {
      const response = await fetch(`/api/views/${pageName}`);
      const data = await response.json();
      
      // Update the view count display
      const viewElement = document.getElementById('view-count');
      if (viewElement) {
        viewElement.textContent = data.views.toLocaleString();
      }
    } catch (error) {
      console.error('Error fetching view count:', error);
      const viewElement = document.getElementById('view-count');
      if (viewElement) {
        viewElement.textContent = '0';
      }
    }
  }
  
  // Function to increment view count
  async function incrementViewCount() {
    try {
      const response = await fetch(`/api/views/${pageName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      // Update the view count display with new count
      const viewElement = document.getElementById('view-count');
      if (viewElement && data.success) {
        viewElement.textContent = data.views.toLocaleString();
      }
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  }
  
  // Check if this is a unique view (using sessionStorage to prevent multiple counts per session)
  const viewKey = `viewed_${pageName}`;
  
  if (!sessionStorage.getItem(viewKey)) {
    // First visit in this session - increment view count
    incrementViewCount();
    sessionStorage.setItem(viewKey, 'true');
  } else {
    // Already viewed in this session - just get the count
    getViewCount();
  }
})();
