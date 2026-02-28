/* Project View Logic */
function showCurrentProject() {
    const hash = window.location.hash; // e.g. "#projeto1"
    const allProjects = document.querySelectorAll('.project-block');

    // Hide all projects
    allProjects.forEach(proj => {
        proj.classList.remove('active');
    });

    if (hash) {
        // If there's a hash, show that specific project
        const targetProject = document.querySelector(hash);
        if (targetProject) {
            targetProject.classList.add('active');
            // Ensure we scroll to the top of the page smoothly so it feels like a fresh page load
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Fallback to project 1 if hash is invalid
            const p1 = document.getElementById('projeto1');
            if (p1) p1.classList.add('active');
        }
    } else {
        // If no hash, default to showing project 1
        const p1 = document.getElementById('projeto1');
        if (p1) p1.classList.add('active');
    }
}

// Run on load and whenever the hash changes
window.addEventListener('DOMContentLoaded', showCurrentProject);
window.addEventListener('hashchange', showCurrentProject);
