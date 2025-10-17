// Newsletter Subscription Handler
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMessage = document.getElementById('newsletter-message');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Get email
      const email = document.getElementById('newsletter-email').value;
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
      
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Success message
          newsletterMessage.innerHTML = `
            <div style="background-color: #d4edda; color: #155724; padding: 12px; border-radius: 4px; margin-top: 10px;">
              ✅ ${data.message}
            </div>
          `;
          
          // Reset form
          newsletterForm.reset();
        } else {
          // Error message
          const errorMsg = data.error === 'Email already subscribed' 
            ? 'You are already subscribed to our newsletter!' 
            : data.error || 'Failed to subscribe';
          
          newsletterMessage.innerHTML = `
            <div style="background-color: #fff3cd; color: #856404; padding: 12px; border-radius: 4px; margin-top: 10px;">
              ℹ️ ${errorMsg}
            </div>
          `;
        }
      } catch (error) {
        // Network error
        newsletterMessage.innerHTML = `
          <div style="background-color: #f8d7da; color: #721c24; padding: 12px; border-radius: 4px; margin-top: 10px;">
            ❌ Network error. Please try again later.
          </div>
        `;
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }
});
