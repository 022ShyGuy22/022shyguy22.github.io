const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navList.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}