// Start UpBTn
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End UpBTn

// Start Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1324: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// End Swiper

function plus() {
  let numberOfCount = document.getElementById("c-number");
  numberOfCount.innerText++;
}
plus();
function minus() {
  let numberOfCount = document.getElementById("c-number");
  if (numberOfCount.innerHTML > 1) {
    numberOfCount.innerText--;
  }
}
minus();
