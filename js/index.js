window.onscroll = function() {stickyNav()};

let navbar = document.querySelector(".main-nav");
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const hamburger = document.querySelector(".hamburger");
const offCanvas = document.querySelector(".offcanvas");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    //hamburger.classList.toggle("show");
    offCanvas.classList.toggle("show");
    //navItem.classList.toggle("active");
}

const closeNav = document.querySelectorAll(".close-nav");

closeNav.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    //hamburger.classList.remove("active");
    offCanvas.classList.remove("show");
    //navItem.classList.remove("active");
}