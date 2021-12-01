import "../../scss/style.scss";

const logo = document.querySelector(".logo, .button_wrapper");
const button = document.querySelector(".button_wrapper");

document.querySelector(".order_button").addEventListener("click", () => logo.classList.add("fadeUp"));
document.querySelector(".order_button").addEventListener("click", () => button.classList.add("fadeUp"));

logo.addEventListener("animationend", () => (window.location.href = "beer_form.html"));
