const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => { nav.classList.toggle('slide'); });
