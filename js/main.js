// Main JavaScript for Indian Elucid Biology

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeAnimations();
    initializeLottieAnimations();
    initializeFormValidation();
    initializeScrollEffects();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Animation Management
function initializeAnimations() {
    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Lottie Animations
function initializeLottieAnimations() {
    // Hero animation
    const heroAnimation = document.getElementById('heroAnimation');
    if (heroAnimation && typeof lottie !== 'undefined') {
        // Simple DNA animation placeholder
        // In production, replace with actual Lottie JSON file
        const animation = lottie.loadAnimation({
            container: heroAnimation,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'images/dna-lottie.json' // Placeholder path
        });
        
        // Fallback if animation fails to load
        animation.addEventListener('data_failed', function() {
            heroAnimation.innerHTML = `
                <div class="text-center">
                    <i class="fas fa-dna fa-6x mb-3"></i>
                    <h3>Decoding Genomes</h3>
                </div>
            `;
        });
    }
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility Functions
function showLoading(element) {
    if (element) {
        element.innerHTML = '<span class="loading"></span> Loading...';
        element.disabled = true;
    }
}

function hideLoading(element, originalText) {
    if (element) {
        element.innerHTML = originalText;
        element.disabled = false;
    }
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the page
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Contact Form Handler (EmailJS integration)
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            showLoading(submitBtn);
            
            // EmailJS configuration (replace with your actual config)
            if (typeof emailjs !== 'undefined') {
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                    .then(function() {
                        showAlert('Message sent successfully!', 'success');
                        contactForm.reset();
                    }, function(error) {
                        showAlert('Failed to send message. Please try again.', 'danger');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        hideLoading(submitBtn, originalText);
                    });
            } else {
                // Fallback for when EmailJS is not loaded
                setTimeout(() => {
                    showAlert('Message sent successfully! (Demo mode)', 'success');
                    contactForm.reset();
                    hideLoading(submitBtn, originalText);
                }, 1000);
            }
        });
    }
}

// Manuscript Assistant Functions
function initializeManuscriptAssistant() {
    const generateBtn = document.getElementById('generateManuscript');
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('manuscriptModal'));
            modal.show();
            
            // Simulate manuscript generation
            setTimeout(() => {
                const output = document.getElementById('manuscriptOutput');
                if (output) {
                    output.innerHTML = `
                        <h4>Sample Manuscript Draft</h4>
                        <pre><code># Title: Genome Analysis Results

## Abstract
This study presents comprehensive genomic analysis...

## Methods
We employed IEB's variant detection pipeline...

## Results
Key findings include...

## Discussion
These results suggest...

## Acknowledgments
We thank Indian Elucid Biology for bioinformatics support.</code></pre>
                    `;
                }
            }, 1000);
        });
    }
}

// Protocol Page Functions
function initializeProtocols() {
    // Add copy functionality to code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.onclick = function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        };
        
        const wrapper = document.createElement('div');
        wrapper.className = 'position-relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyBtn);
    });
}

// Initialize page-specific functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form if on contact page
    if (document.getElementById('contactForm')) {
        initializeContactForm();
    }
    
    // Initialize manuscript assistant if on manuscript page
    if (document.getElementById('generateManuscript')) {
        initializeManuscriptAssistant();
    }
    
    // Initialize protocols if on protocols page
    if (document.querySelector('.protocol-accordion')) {
        initializeProtocols();
    }
});

// Export functions for global access
window.IEB = {
    showAlert,
    showLoading,
    hideLoading,
    setTheme
}; 