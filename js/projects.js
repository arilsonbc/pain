
function showCurrentProject() {
    const hash = window.location.hash;
    const allProjects = document.querySelectorAll('.project-block');


    allProjects.forEach(proj => {
        proj.classList.remove('active');
    });

    if (hash) {

        const targetProject = document.querySelector(hash);
        if (targetProject) {
            targetProject.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {

            const p1 = document.getElementById('projeto1');
            if (p1) p1.classList.add('active');
        }
    } else {

        const p1 = document.getElementById('projeto1');
        if (p1) p1.classList.add('active');
    }
}


window.addEventListener('DOMContentLoaded', showCurrentProject);
window.addEventListener('hashchange', showCurrentProject);
