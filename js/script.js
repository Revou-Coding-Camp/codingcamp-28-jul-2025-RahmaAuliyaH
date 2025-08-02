document.addEventListener('DOMContentLoaded', function() {
    // Personalize welcome message
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (name) {
        welcomeMessage.textContent = `Hi ${name}, Welcome to Our Website`;
    }

    // Form validation
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');
    const submittedData = document.getElementById('submitted-data');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });

        // Validate form
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        // Name validation
        if (!nameInput.value.trim()) {
            document.getElementById('name-error').textContent = 'Name is required';
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            document.getElementById('email-error').textContent = 'Email is required';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        // Phone validation (optional but must be valid if provided)
        if (phoneInput.value.trim() && !/^[\d\s\-()+]+$/.test(phoneInput.value)) {
            document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
            document.getElementById('phone-error').style.display = 'block';
            isValid = false;
        }

        // Message validation
        if (!messageInput.value.trim()) {
            document.getElementById('message-error').textContent = 'Message is required';
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, show results
            contactForm.classList.add('hidden');
            formResult.classList.remove('hidden');
            
            // Display submitted data
            submittedData.innerHTML = `
                <p><strong>Name:</strong> ${nameInput.value}</p>
                <p><strong>Email:</strong> ${emailInput.value}</p>
                ${phoneInput.value ? `<p><strong>Phone:</strong> ${phoneInput.value}</p>` : ''}
                <p><strong>Message:</strong> ${messageInput.value}</p>
            `;
            
            // Reset form
            contactForm.reset();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});