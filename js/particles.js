/* ── Particle canvas ────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    // Ler a contagem de partículas pelo data attribute do canvas, ou usar 90 como fallback.
    const COUNT = parseInt(canvas.getAttribute('data-particles')) || 90;

    // Verificamos se estamos no index.html (tem evento de mousemove customizado na raiz lá?)
    // Mas a lógica de conexões varia levemente. Usaremos a do index/contact/projects.
    const connectionDist = canvas.getAttribute('data-connection-dist') ? parseInt(canvas.getAttribute('data-connection-dist')) : 120;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() { this.reset(true); }
        reset(init) {
            this.x = Math.random() * W;
            this.y = init ? Math.random() * H : H + 10;
            this.r = Math.random() * 1.5 + 0.4;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = -(Math.random() * 0.5 + 0.2);
            this.alpha = Math.random() * 0.5 + 0.1;
            this.color = Math.random() > 0.5 ? '6,182,212' : '56,189,248';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.y < -10) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        resize();
        particles = Array.from({ length: COUNT }, () => new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < connectionDist) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    // Adjust multiplier based on distance for a smoother fade
                    let strokeAlpha = (1 - d / connectionDist) * 0.07;
                    ctx.strokeStyle = `rgba(6,182,212,${strokeAlpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        drawConnections();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);

    initParticles();
    animate();
});
