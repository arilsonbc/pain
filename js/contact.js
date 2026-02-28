/* ── Typing effect e Interações do Contact ──────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const word = 'conectar.';
    const el = document.getElementById('typed');
    if (!el) return;

    let i = 0;
    let deleting = false;
    let pause = 0;
    let revealed = false;

    function revealContent() {
        if (revealed) return;
        revealed = true;
        const desc = document.getElementById('contact-desc');
        const cards = document.getElementById('cards-row');
        if (desc) setTimeout(() => desc.classList.add('revealed'), 400);
        if (cards) setTimeout(() => cards.classList.add('revealed'), 1200);
    }

    function type() {
        if (pause > 0) {
            pause--;
            setTimeout(type, 80);
            return;
        }

        if (!deleting) {
            el.textContent = word.slice(0, i);
            if (i < word.length) {
                i++;
                setTimeout(type, i === 1 ? 500 : 55);
            } else {
                revealContent();
                deleting = true;
                pause = 30;
                setTimeout(type, 80);
            }
        } else {
            if (i > 0) {
                i--;
                el.textContent = word.slice(0, i);
                setTimeout(type, 48);
            } else {
                i = 0;
                deleting = false;
                pause = 8;
                setTimeout(type, 80);
            }
        }
    }

    setTimeout(type, 800);
});
