// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('subject').value + '\n\n' + document.getElementById('message').value
      };
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Success message
          formMessage.innerHTML = `
            <div style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 4px; margin-top: 15px;">
              ✅ ${data.message}
            </div>
          `;
          
          // Reset form
          contactForm.reset();
        } else {
          // Error message
          formMessage.innerHTML = `
            <div style="background-color: #f8d7da; color: #721c24; padding: 15px; border-radius: 4px; margin-top: 15px;">
              ❌ Error: ${data.error || 'Failed to send message'}
            </div>
          `;
        }
      } catch (error) {
        // Network error
        formMessage.innerHTML = `
          <div style="background-color: #f8d7da; color: #721c24; padding: 15px; border-radius: 4px; margin-top: 15px;">
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
