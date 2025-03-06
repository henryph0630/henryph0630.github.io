document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    navLinks.classList.add('nav-closed');
    navLinks.classList.remove('nav-open');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
        navLinks.classList.toggle('nav-closed');
    });
});