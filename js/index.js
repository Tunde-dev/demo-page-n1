window.onscroll = function () {
  stickyNav();
};

let navbar = document.querySelector(".main-nav");
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const hamburger = document.querySelector(".hamburger");
const offCanvas = document.querySelector(".offcanvas");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  offCanvas.classList.toggle("show");
}

const closeNav = document.querySelectorAll(".close-nav");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  offCanvas.classList.remove("show");
}

window.addEventListener("load", () => {
  const slider1 = new Slider(document.getElementById('slider-1'));
  const slider2 = new Slider(document.getElementById("slider-2"));
});

