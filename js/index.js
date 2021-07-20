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

let slideIndex = 1;
let myTimer;
let slideshowContainer;

const pause = () => {
  clearInterval(myTimer);
}
const resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000)
}

window.addEventListener("load", () => {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, 3000);
  slideshowContainer = document.getElementsByClassName("slideshow-container")[0];

  slideshowContainer.addEventListener("mouseenter", pause);
  slideshowContainer.addEventListener("mouseleave", resume)
})

const plusSlides = (n) => {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1)
  } else {
    showSlides(slideIndex += 1)
  }
  if (n === -1) {
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000)
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000)
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3000)
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("testimonial-wrapper");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
