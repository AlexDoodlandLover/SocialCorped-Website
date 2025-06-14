document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (if you add navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll reveal effect for sections and feature items
    const fadeInElements = document.querySelectorAll('.fade-in');
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const allAnimatedElements = [...fadeInElements, ...revealElements];

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Percentage of element visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once it's active
            }
        });
    }, observerOptions);

    allAnimatedElements.forEach(el => {
        observer.observe(el);
    });

    // Simple hover effect for download button (already mostly handled by CSS)
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('mouseenter', () => {
            downloadBtn.style.transform = 'translateY(-5px) scale(1.05)';
        });
        downloadBtn.addEventListener('mouseleave', () => {
            downloadBtn.style.transform = 'translateY(0) scale(1)';
        });
    }
});