// =========================================
// INDIAN FOOD FOREST - JAVASCRIPT LOGIC
// =========================================

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Preloader Logic ---
    // Hides the loading screen once the website is fully loaded
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 800); // Small delay to show the premium loading animation
        });
    }

    // --- 2. Sticky Navbar ---
    // Adds a background blur and shadow when user scrolls down
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Mobile Hamburger Menu ---
    // Toggles the navigation links on mobile devices
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle'); // Custom animation logic if needed
        });
    }

    // --- 4. Back to Top Button ---
    // Shows up when scrolled down, clicks to scroll to top
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 5. Close Modal on clicking Outside ---
    const modalOverlay = document.getElementById('dishModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            // Check if user clicked on the dark overlay (not the box itself)
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

// --- 6. Dish Modal (Pop-up) Logic ---
// This function is triggered by the onclick attribute on the HTML dish cards
function openDishModal(imgSrc, title, price, dietType, description) {
    const modal = document.getElementById('dishModal');
    
    // Set Image
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalImg').alt = title;
    
    // Set Title and Price
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    
    // Set Diet Icon (Veg/Non-Veg)
    const dietIcon = document.getElementById('modalDietIcon');
    // Clear previous classes
    dietIcon.className = 'diet-indicator'; 
    if(dietType.toLowerCase() === 'veg' || dietType.toLowerCase() === 'veg/non-veg') {
        dietIcon.classList.add('veg');
    } else {
        dietIcon.classList.add('non-veg');
    }
    
    // Set Description
    document.getElementById('modalDesc').innerText = description;
    
    // Show Modal
    modal.classList.add('active');
    
    // Prevent body from scrolling while modal is open (Mobile friendly)
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('dishModal');
    if(modal) {
        modal.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}
