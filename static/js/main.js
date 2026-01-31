document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.nav-toggle');
    const primaryMenu = document.getElementById('primary-menu');

    // scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const open = header.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // zavřít menu po kliknutí na odkaz (mobil)
    if (primaryMenu) {
        primaryMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                header.classList.remove('nav-open');
                const toggle = document.querySelector('.nav-toggle');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});