
window.toggleCvMenu = function () {
    const btn = document.getElementById('cvBtn');
    const menu = document.getElementById('cvMenu');
    if (btn && menu) {
        btn.classList.toggle('open');
        menu.classList.toggle('show');
    }
}


document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('cvDropdown');
    const btn = document.getElementById('cvBtn');
    const menu = document.getElementById('cvMenu');

    if (dropdown && btn && menu && !dropdown.contains(e.target)) {
        btn.classList.remove('open');
        menu.classList.remove('show');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.zoom-on-scroll-section');
    const projectsTitleText = document.querySelector('.projects-title-text');

    if (projectsSection) {
        window.addEventListener('scroll', () => {
            const rect = projectsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                let progress = 1 - (rect.top / windowHeight);
                progress = Math.max(0, Math.min(1, progress));

                let scale = 1;
                if (progress > 0.1 && progress < 0.9) {
                    
                    const peakProgress = Math.sin((progress - 0.1) / 0.8 * Math.PI);
                    scale = 1 + (0.05 * peakProgress); 
                }

                projectsSection.style.transform = `scale(${scale})`;
            }
        });
    }

    if (projectsTitleText) {
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.5 }); 

        observer.observe(projectsTitleText);
    }
});
