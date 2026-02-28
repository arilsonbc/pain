/* ── Navbar scroll tint ─────────────────── */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.background = window.scrollY > 40 ? 'rgba(15,23,42,0.92)' : 'rgba(15,23,42,0.7)';
    }
});
