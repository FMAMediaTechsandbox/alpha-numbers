// Menangkap class menu-toggle
const menuToggle = document.querySelector('.menu-toggle');
// Menangkap element nav dan ul
const nav = document.querySelector('nav ul');
// Menambahkan event ketika di klik maka tambahkan kelas slide, jika user klik lagi maka hapus class slide
menuToggle.addEventListener('click', () => { nav.classList.toggle('slide'); });
