/* ── CV Dropdown ────────────────────────── */
window.toggleCvMenu = function () {
    const btn = document.getElementById('cvBtn');
    const menu = document.getElementById('cvMenu');
    if (btn && menu) {
        btn.classList.toggle('open');
        menu.classList.toggle('show');
    }
}

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('cvDropdown');
    const btn = document.getElementById('cvBtn');
    const menu = document.getElementById('cvMenu');

    if (dropdown && btn && menu && !dropdown.contains(e.target)) {
        btn.classList.remove('open');
        menu.classList.remove('show');
    }
});

/* ── Scroll Zoom & Pen Stroke Effect on Projects Title ──────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.zoom-on-scroll-section');
    const projectsTitleText = document.querySelector('.projects-title-text');

    if (projectsSection) {
        window.addEventListener('scroll', () => {
            const rect = projectsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                let progress = 1 - (rect.top / windowHeight);
                progress = Math.max(0, Math.min(1, progress));

                let scale = 1;
                if (progress > 0.1 && progress < 0.9) {
                    // Peek zoom in the middle of the screen
                    const peakProgress = Math.sin((progress - 0.1) / 0.8 * Math.PI);
                    scale = 1 + (0.05 * peakProgress); // Max scale 1.05
                }

                projectsSection.style.transform = `scale(${scale})`;
            }
        });
    }

    if (projectsTitleText) {
        // Pen stroke animation trigger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the title is visible

        observer.observe(projectsTitleText);
    }
});
