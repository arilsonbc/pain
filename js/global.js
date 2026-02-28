window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.background = window.scrollY > 40 ? 'rgba(15,23,42,0.92)' : 'rgba(15,23,42,0.7)';
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
