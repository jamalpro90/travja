// Payment
const packageList = document.querySelector(".bottom .list-group");
const choosedPacakge = document.querySelector(".choosed-package");

packageList.addEventListener("click", function (e) {
  if (
    e.target.innerText == "Pck 1" ||
    e.target.innerText == "Pck 2" ||
    e.target.innerText == "Pck 3"
  ) {
    // console.log(e.target.innerText);
    choosedPacakge.innerHTML = `
      ${e.target.innerText} <i onclick="closePayment()" class="fas fa-times-circle"></i>
    `;
  }
});

function closePayment() {
  choosedPacakge.innerHTML = "";
}

// Ketika tombol payment di klik akan muncul alert, pembayaran belum tersedia
const paymentBtn = document.querySelector(".payment-btn");

paymentBtn.addEventListener("click", function () {
  alert("Sorry, payment not yet available !");
});
