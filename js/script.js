// STEM4Girls - Interactive JavaScript

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Mobile Menu Toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                body.style.overflow = 'auto';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            body.style.overflow = 'auto';
        }
    });
}

// Sticky Navbar Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ef4444';
                
                // Remove error styling after user starts typing
                field.addEventListener('input', () => {
                    field.style.borderColor = '';
                }, { once: true });
            }
        });
        
        // Email validation
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (field.value && !emailRegex.test(field.value)) {
                isValid = false;
                field.style.borderColor = '#ef4444';
                
                field.addEventListener('input', () => {
                    field.style.borderColor = '';
                }, { once: true });
            }
        });
        
        // Phone validation
        const phoneFields = form.querySelectorAll('input[type="tel"]');
        phoneFields.forEach(field => {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (field.value && !phoneRegex.test(field.value)) {
                isValid = false;
                field.style.borderColor = '#ef4444';
                
                field.addEventListener('input', () => {
                    field.style.borderColor = '';
                }, { once: true });
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            
            // Show error message
            let errorMsg = form.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.style.cssText = 'color: #ef4444; margin-top: 1rem; padding: 1rem; background: #fef2f2; border-radius: 0.5rem; border-left: 4px solid #ef4444;';
                errorMsg.textContent = 'Please fill in all required fields correctly.';
                form.querySelector('.form-actions').before(errorMsg);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorMsg.remove();
                }, 5000);
            }
        }
    });
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll(
    '.feature-card, .category-card, .project-card, .value-card, .timeline-item, .benefit-item, .faq-item, .faq-card, .tip-card, .requirement-card, .prize-item, .topic-card'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Observe stat numbers for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.dataset.animated) {
                const text = statNumber.textContent.trim();
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    statNumber.dataset.animated = 'true';
                    animateCounter(statNumber, number);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat, .info-item').forEach(stat => {
    statObserver.observe(stat);
});

// Dynamic Year Update
const currentYear = new Date().getFullYear();
document.querySelectorAll('.footer-bottom p').forEach(p => {
    p.textContent = p.textContent.replace(/202\d/, currentYear);
});

// Active Page Highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// Scroll to Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b9d 0%, #9c27b0 100%);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(255, 107, 157, 0.4);
    z-index: 999;
`;
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.visibility = 'hidden';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'translateY(-3px) scale(1.05)';
    scrollTopButton.style.boxShadow = '0 6px 20px rgba(255, 107, 157, 0.6)';
});

scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'translateY(0) scale(1)';
    scrollTopButton.style.boxShadow = '0 4px 12px rgba(255, 107, 157, 0.4)';
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Form Field Character Counter (for textarea)
document.querySelectorAll('textarea').forEach(textarea => {
    const maxLength = textarea.getAttribute('maxlength');
    if (maxLength) {
        const counter = document.createElement('div');
        counter.style.cssText = 'text-align: right; font-size: 0.875rem; color: #64748b; margin-top: 0.25rem;';
        counter.textContent = `0 / ${maxLength}`;
        textarea.parentElement.appendChild(counter);
        
        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength} / ${maxLength}`;
            
            if (currentLength > maxLength * 0.9) {
                counter.style.color = '#ef4444';
            } else {
                counter.style.color = '#64748b';
            }
        });
    }
});

// Lazy Loading for Images (if any images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Print Friendly
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.navbar, .footer, .cta-section').forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('.navbar, .footer, .cta-section').forEach(el => {
        el.style.display = '';
    });
});

// Video Player Control
const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.intro-video');
const playButton = document.querySelector('.play-button');

if (videoPlayer && video && playButton) {
    playButton.addEventListener('click', () => {
        video.play();
        videoPlayer.classList.add('playing');
    });
    
    video.addEventListener('play', () => {
        videoPlayer.classList.add('playing');
    });
    
    video.addEventListener('pause', () => {
        videoPlayer.classList.remove('playing');
    });
    
    video.addEventListener('ended', () => {
        videoPlayer.classList.remove('playing');
    });
    
    // Hide overlay when video is clicked
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Accessibility: Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        body.style.overflow = 'auto';
    }
});

// Focus trap for mobile menu
if (mobileMenuToggle && navLinks) {
    const focusableElements = navLinks.querySelectorAll('a, button, input, select, textarea');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navLinks.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Snap Carousel
const carousel = document.getElementById('snapCarousel');
if (carousel) {
    const images = carousel.querySelectorAll('img');
    const prevBtn = document.querySelector('.snap-prev');
    const nextBtn = document.querySelector('.snap-next');
    const dotsContainer = document.getElementById('snapDots');
    const total = images.length;
    let current = 0;

    // Build dots
    images.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'snap-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to image ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function getDots() {
        return dotsContainer.querySelectorAll('.snap-dot');
    }

    function goTo(index) {
        current = (index + total) % total;
        carousel.scrollTo({ left: carousel.offsetWidth * current, behavior: 'smooth' });
        getDots().forEach((d, i) => d.classList.toggle('active', i === current));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    // Sync dots on manual swipe
    carousel.addEventListener('scroll', () => {
        const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        if (index !== current) {
            current = index;
            getDots().forEach((d, i) => d.classList.toggle('active', i === current));
        }
    });

    // Auto-advance every 4 seconds
    setInterval(() => goTo(current + 1), 4000);
}

console.log('🌟 STEM4Girls website loaded successfully!');
