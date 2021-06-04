
var mybutton = document.querySelector('#sticky');

window.onscroll = function() {scrollFunction()};
mybutton.addEventListener('click', topFunction)

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


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    // hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}