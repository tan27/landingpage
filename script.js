
var sticky = document.getElementById("sticky");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links");
const bars = document.querySelector(".fa-bars")

window.onscroll = function() {scrollFunction()};
sticky.addEventListener('click', topFunction)

hamburger.addEventListener("click", mobileMenu);
bars.addEventListener('click', hamFunction);
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    sticky.style.display = "block";
  } else {
    sticky.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function mobileMenu() {
    navMenu.classList.toggle("active");
    bars.classList.toggle("fa-times");

}

function hamFunction() {
  bars.classList.toggle("fa-bars");
}

function closeMenu() {
    navMenu.classList.remove("active");
    bars.classList.add("fa-bars")
}