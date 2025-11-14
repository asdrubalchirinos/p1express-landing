// Main JavaScript for P1.express Landing Page
// Pure vanilla JavaScript, no dependencies

(function() {
    'use strict';

    // Theme Management
    const THEME_KEY = 'p1express-landing-theme';
    const THEMES = ['theme-grey', 'theme-dark', 'theme-light'];
    
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY) || 'theme-grey';
        document.documentElement.className = savedTheme;
    }
    
    function cycleTheme() {
        const currentTheme = document.documentElement.className || 'theme-grey';
        const currentIndex = THEMES.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % THEMES.length;
        const nextTheme = THEMES[nextIndex];
        
        document.documentElement.className = nextTheme;
        localStorage.setItem(THEME_KEY, nextTheme);
    }
    
    // Smooth Scroll
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Don't prevent default for links that just point to "#"
                if (href === '#') return;
                
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Mobile Menu
    function initMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                }
            });
        }
    }
    
    // FAQ Accordion
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other FAQs
                faqQuestions.forEach(q => {
                    q.setAttribute('aria-expanded', 'false');
                });
                
                // Toggle this FAQ
                this.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
            });
        });
    }
    
    // Form Validation and Handling
    function initContactForm() {
        const form = document.querySelector('.contact-form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                const email = form.querySelector('#email');
                const message = form.querySelector('#message');
                
                // Basic validation
                if (!email.value || !email.value.includes('@')) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    email.focus();
                    return false;
                }
                
                if (!message.value || message.value.trim().length < 10) {
                    e.preventDefault();
                    alert('Please enter a message (at least 10 characters).');
                    message.focus();
                    return false;
                }
                
                // If form action is placeholder, prevent submit
                if (form.action.includes('YOUR_FORMSPREE_ENDPOINT')) {
                    e.preventDefault();
                    alert('Contact form is not yet activated. Please reach out via social media for now.');
                    return false;
                }
            });
        }
    }
    
    // Scroll to Top on Page Load (if hash present)
    function handleInitialScroll() {
        if (window.location.hash) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
    
    // Header Scroll Effect (optional - adds shadow on scroll)
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        
        if (header) {
            let lastScroll = 0;
            
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 50) {
                    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = 'none';
                }
                
                lastScroll = currentScroll;
            });
        }
    }
    
    // Analytics Helper (for future GoatCounter integration)
    function initAnalytics() {
        // Placeholder for analytics initialization
        // Will be populated when GoatCounter is set up
        console.log('Analytics ready (not yet configured)');
    }
    
    // Download Button Click Tracking
    function initDownloadTracking() {
        const downloadButtons = document.querySelectorAll('a[download="p1-express-v1.0.4.html"]');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Download initiated');
                // Future: Track download event with analytics
            });
        });
    }
    
    // Initialize Everything
    function init() {
        initTheme();
        initSmoothScroll();
        initMobileMenu();
        initFAQ();
        initContactForm();
        initHeaderScroll();
        initDownloadTracking();
        handleInitialScroll();
        initAnalytics();
        
        // Attach theme toggle to button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', cycleTheme);
        }
        
        console.log('P1.express landing page initialized');
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
