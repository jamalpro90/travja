const readMore = document.querySelector(".read-more");
const rightProfile = document.querySelector(
  ".blog-detail-container .right-profile"
);
const rightProfileDesc = document.querySelector(
  ".blog-detail-container .right-profile .desc"
);
let readMoreClicked = false;

// Fungsi lihat text lebih banyak
readMore.addEventListener("click", () => {
  if (readMoreClicked === false) {
    readMoreClicked = true;
    readMore.textContent = "Minimize";
  } else {
    readMoreClicked === false;
    readMore.textContent = "Read More";
  }

  rightProfile.style.transition = "all 1s";
  rightProfile.classList.toggle("h-auto");
  rightProfileDesc.classList.toggle("overflow-visible");
});
