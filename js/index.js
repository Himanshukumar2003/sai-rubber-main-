window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY; // Get the scroll position
    const speed = 0.5; // Adjust this value for slower effect (smaller = slower)

    // Apply background position with a slower scroll speed
    heroSection.style.backgroundPosition = `center ${scrollPosition * speed}px`;
});






window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const counterAnimation = () => {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 200; // Controls animation speed
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                stat.textContent = Math.round(current) + (stat.getAttribute('data-target') === '95' ? '%' : '+');
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
};

// Intersection Observer for triggering counter animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterAnimation();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats container
observer.observe(document.querySelector('.stats-container'));