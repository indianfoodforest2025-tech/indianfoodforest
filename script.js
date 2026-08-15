// =========================================
// INDIAN FOOD FOREST - JAVASCRIPT LOGIC
// =========================================

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Preloader Logic ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 800);
        });
    }

    // --- 2. Sticky Navbar ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // --- 4. Back to Top Button ---
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
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});

// --- 6. Dish Modal (Pop-up) Logic for Text-Only Cards ---
function openDishModal(imgSrc, title, price, dietType, description) {
    const modal = document.getElementById('dishModal');
    if(!modal) return;
    
    // Set Title and Price
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    
    // Set Diet Icon (Veg/Non-Veg)
    const dietIcon = document.getElementById('modalDietIcon');
    if(dietIcon) {
        dietIcon.className = 'diet-indicator'; 
        if(dietType.toLowerCase().includes('veg') && !dietType.toLowerCase().includes('non')) {
            dietIcon.classList.add('veg');
        } else {
            dietIcon.classList.add('non-veg');
        }
    }
    
    // Set Description
    document.getElementById('modalDesc').innerText = description;
    
    // Show Modal
    modal.classList.add('active');
    
    // Prevent body from scrolling while modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('dishModal');
    if(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
