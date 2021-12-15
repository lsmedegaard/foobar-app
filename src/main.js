import "./scss/style.scss";
import cart from "./cartObject.js";
import "./toggle.js";

window.addEventListener("DOMContentLoaded", () => {
  // get();
});

import beers from "./beers.js";

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

handleBeers();

//create array of beers with properies
//display each beer - "displayBeer(beer)"
function handleBeers() {
  beers.forEach((beer) => {
    displayBeer(beer);
  });
}

function displayBeer(beer) {
  let total = 0;
  const template = document.querySelector("template");
  if (!template) return null;

  const clone = template.content.cloneNode(true);

  const beerName = clone.querySelector(".beer_name");
  const thePrice = clone.querySelector(".price");
  const price = beer.price * cart[beer.name];
  total += price;
  clone.querySelector(".price").textContent = price + "kr";
  const totalSum = document.querySelector("#total_sum");

  clone.querySelector("img").src = beer.img;
  beerName.textContent = beer.name;
  clone.querySelector(".beer_type").textContent = beer.type;
  thePrice.textContent = beer.price + "kr";

  const quantity = clone.querySelector(".quantity");

  clone.querySelector("#remove").addEventListener("click", () => {
    if (cart[beer.name] === 0) cart[beer.name] = 0;
    else {
      cart[beer.name] = cart[beer.name] - 1;
      total -= beer.price;
      totalSum.textContent = total + " " + "kr" + " " + "pay";
    }
    // cart[beer.name] === 0 ? (cart[beer.name] = 0) : (cart[beer.name] = cart[beer.name] - 1);
    quantity.textContent = " " + "x" + cart[beer.name];
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  clone.querySelector("#add").addEventListener("click", () => {
    cart[beer.name] = cart[beer.name] + 1;
    total += beer.price;
    quantity.textContent = "x" + cart[beer.name];
    localStorage.setItem("cart", JSON.stringify(cart));
    totalSum.textContent = total + " " + "kr" + " " + "pay";
  });

  // append clone to list
  document.querySelector(".beers_container ul").appendChild(clone);
}

// function removeFromCart(event) {
//   let item = event.target.getAttribute('data-name')
//   console.log(cart)
// }

/* function myToggle() {
  var element = document.body;
  element.classList.add("light-mode");
  element.classList.add("dark-mode");
}
 */
document.body.style.display = "block";
//https://stackoverflow.com/questions/4172281/force-browsers-to-load-css-before-showing-the-page
