import "./scss/cart.scss";
import "./scss/style.scss";

import beers from "./beers.js";

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;
document.addEventListener("DOMContentLoaded", displaybeer);
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

function displaybeer() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;

  beers.forEach((beer) => {
    // clone.querySelector("").textContent = "";
    const clone = document.querySelector("template").content.cloneNode(true);

    const beerName = clone.querySelector(".beer_name");
    const thePrice = clone.querySelector(".price");

    // clone.querySelector(".beer_name").textContent = cart[beer.name] + " " + "glasses" + " " + "of" + " " + beer.name;

    const price = beer.price * cart[beer.name];
    total += price;

    clone.querySelector(".price").textContent = price + "kr";
    // clone.querySelector("total").textContent = price;
    const totalSum = document.querySelector("#total");

    beerName.textContent = cart[beer.name] + " " + "x" + " " + beer.name;

    clone.querySelector("#remove").addEventListener("click", () => {
      if (cart[beer.name] === 0) cart[beer.name] = 0;
      else {
        cart[beer.name] = cart[beer.name] - 1;
        total -= beer.price;
      }
      thePrice.textContent = beer.price * cart[beer.name] + "kr";
      localStorage.setItem("cart", JSON.stringify(cart));
      beerName.textContent = cart[beer.name] + " " + "x" + " " + beer.name;
      totalSum.textContent = total + " " + "kr" + " " + "pay";
    });

    clone.querySelector("#add").addEventListener("click", () => {
      cart[beer.name] = cart[beer.name] + 1;
      total += beer.price;
      thePrice.textContent = beer.price * cart[beer.name] + "kr";
      localStorage.setItem("cart", JSON.stringify(cart));
      beerName.textContent = cart[beer.name] + " " + "x" + " " + beer.name;
      totalSum.textContent = total + " " + "kr" + " " + "pay";
    });

    totalSum.textContent = total + " " + "pay";

    document.querySelector(".order_list").appendChild(clone);
  });
}
document.body.style.display = "block";
