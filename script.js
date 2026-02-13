// ========================================
// Portfolio Website - JavaScript
// ========================================

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const resumeBtn = document.getElementById('resumeBtn');

// ========================================
// Navigation Scroll Effect
// ========================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;

    // Back to top button visibility
    handleBackToTop();

    // Scroll animations
    handleScrollAnimations();
});

// ========================================
// Mobile Menu Toggle
// ========================================
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('mobile-active');

    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mobileMenuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Back to Top Button
// ========================================
function handleBackToTop() {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Resume Download
// ========================================
resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Open resume in a new tab for preview (browser provides download option)
    window.open('assets/chaithra_resume.pdf', '_blank');

    // Show feedback
    const originalText = resumeBtn.innerHTML;
    resumeBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    resumeBtn.style.background = '#4caf50';

    setTimeout(() => {
        resumeBtn.innerHTML = originalText;
        resumeBtn.style.background = '';
    }, 2000);
});

// ========================================
// Contact Form Handling
// ========================================
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Get submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        // Using FormSubmit.co (no backend needed)
        const response = await fetch('https://formsubmit.co/ajax/chaithratchaithra55@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Form submission failed');

        // Success feedback
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = '#4caf50';

        // Reset form
        contactForm.reset();

        // Show success message
        showNotification('Thank you! Your message has been sent successfully.', 'success');

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);

    } catch (error) {
        // Error feedback
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
        submitBtn.style.background = '#f44336';

        showNotification('Oops! Something went wrong. Please try again.', 'error');

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    }
});

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196F3',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.95rem',
        fontWeight: '500',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px'
    });

    // Add to document
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Scroll Animations
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .cert-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if element is in viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .cert-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Trigger initial animation check
    handleScrollAnimations();
});

// ========================================
// Active Navigation Link
// ========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
highlightNavigation(); // Highlight active section on page load

// ========================================
// Typing Effect for Hero (Optional Enhancement)
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect on page load
/*
window.addEventListener('load', () => {
    const heroTagline = document.querySelector('.hero-tagline');
    const originalText = heroTagline.textContent;
    typeWriter(heroTagline, originalText, 50);
});
*/

// ========================================
// Project Image Lazy Loading
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console Easter Egg
// ========================================
console.log(
    '%c👋 Hello, fellow developer!',
    'font-size: 20px; font-weight: bold; color: #d4a574;'
);
console.log(
    '%cI see you\'re checking out the code. Feel free to reach out if you want to discuss this project or collaborate!',
    'font-size: 14px; color: #666;'
);
console.log(
    '%c💼 Email: chaithratchaithra55@gmail.com',
    'font-size: 14px; color: #d4a574;'
);

// ========================================
// Performance Monitoring
// ========================================
window.addEventListener('load', () => {
    // Check if Performance API is available
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        console.log(
            `%c⚡ Page loaded in ${pageLoadTime}ms`,
            'font-size: 12px; color: #4caf50;'
        );
    }
});

// ========================================
// Accessibility: Skip to Content
// ========================================
// Add keyboard shortcut (Alt + C) to skip to main content
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
});

