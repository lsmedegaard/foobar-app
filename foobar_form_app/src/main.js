import "./scss/style.scss";

// const logo = document.querySelector(".logo, .button_wrapper");
// const button = document.querySelector(".button_wrapper");

// document.querySelector(".order_button").addEventListener("click", () => {
//   logo.classList.add("fadeUp");
//   button.classList.add("fadeUp");
// });

// logo.addEventListener("animationend", () => {
//   window.location.href = "beer_form.html";
// });

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
