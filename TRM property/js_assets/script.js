console.log("Script loaded");
document.addEventListener('DOMContentLoaded', () => {
    // Select the form on the page
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            // 1. CRITICAL: Stop the form from performing a server POST request (prevents the 405 error)
            event.preventDefault();

            // Get input values and trim extra spaces
            const fullName = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Regex Patterns
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            const phonePattern = /^(?:\+27|0)[6-8][0-9]{8}$/; // Validates South African cell numbers (e.g., 0821234567 or +27821234567)

            // 2. Validation Checks & Error Popups
            if (fullName.length < 3) {
                alert("Please enter a valid full name (at least 3 characters).");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address (e.g., user@example.com).");
                return;
            }

            if (!phonePattern.test(phone)) {
                alert("Please enter a valid South African phone number (e.g., 0821234567 or +27821234567).");
                return;
            }

            if (message === "") {
                alert("Please enter your enquiry details.");
                return;
            }

            // 3. Success state (if everything passes)
            alert("Form validated successfully! Thank you for your enquiry.");
            form.reset(); // Clears the form fields after successful validation
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LIGHTBOX FUNCTIONALITY ---
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-btn');

    if (lightboxModal && galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxModal.style.display = 'flex'; // Open modal
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
            });
        });

        // Close when clicking the "X" button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightboxModal.style.display = 'none';
            });
        }

        // Close when clicking outside the image on the dark background
        lightboxModal.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightboxModal.style.display = 'none';
            }
        });
    }

    // --- 2. DYNAMIC SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filterValue = searchInput.value.toLowerCase();
            const serviceItems = document.querySelectorAll('.service-item');

            serviceItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(filterValue)) {
                    item.style.display = ''; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    }
});