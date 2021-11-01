const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

const heroHeight = hero.clientHeight;
const navbarHeight = navbar.clientHeight;
const height = heroHeight - navbarHeight * 1.3;

window.addEventListener('scroll', (e) => {
  if (window.scrollY > height) {
    navbar.classList.replace('bg-transparent', 'bg-dark');
  }

  if (window.scrollY < height) {
    navbar.classList.replace('bg-dark', 'bg-transparent');
  }
});
