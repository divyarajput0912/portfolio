document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
    const width = bar.getAttribute('data-value');
    bar.style.width = width;
});

