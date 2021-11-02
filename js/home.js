// const navbar = document.querySelector('.navbar');
// const hero = document.querySelector('.hero');

// const heroHeight = hero.clientHeight;
// const navbarHeight = navbar.clientHeight;
// const height = heroHeight - navbarHeight * 1.3;

// window.addEventListener('scroll', (e) => {
//   if (window.scrollY > height) {
//     navbar.classList.replace('bg-transparent', 'bg-dark');
//   }

//   if (window.scrollY < height) {
//     navbar.classList.replace('bg-dark', 'bg-transparent');
//   }
// });

// Payment
const packageList = document.querySelector('.bottom .list-group');
const choosedPacakge = document.querySelector('.choosed-package');

packageList.addEventListener('click', function (e) {
  if (e.target.innerText == 'Pck 1' || e.target.innerText == 'Pck 2' || e.target.innerText == 'Pck 3') {
    // console.log(e.target.innerText);
    choosedPacakge.innerHTML = `
      ${e.target.innerText} <i onclick="closePayment()" class="fas fa-times-circle"></i>
    `;
  }
});

function closePayment() {
  choosedPacakge.innerHTML = '';
}

// Ketika tombol payment di klik akan muncul alert, pembayaran belum tersedia
const paymentBtn = document.querySelector('.payment-btn');

paymentBtn.addEventListener('click', function () {
  alert('Sorry, payment not yet available !');
});
