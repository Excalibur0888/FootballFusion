/**
 * Premier Fantasy Football - Main JavaScript
 * Author: Premier Fantasy Team
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && !event.target.closest('nav')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                faqItem.classList.toggle('active');
                
                // Update toggle icon
                const toggleIcon = question.querySelector('.faq-toggle');
                if (toggleIcon) {
                    toggleIcon.textContent = faqItem.classList.contains('active') ? '−' : '+';
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (menuToggle) {
                            menuToggle.classList.remove('active');
                        }
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    
    // Sticky navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY + 100; // Offset for header
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.rules-nav a, .legal-nav a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
    
    // Simple testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider && testimonialSlider.children.length > 1) {
        let currentIndex = 0;
        const testimonials = testimonialSlider.children;
        const totalTestimonials = testimonials.length;
        
        // Auto-scroll testimonials every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            testimonialSlider.scrollTo({
                left: testimonials[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }, 5000);
    }
}); 