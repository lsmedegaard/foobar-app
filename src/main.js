"use strict";

import "./scss/style.scss";
import cart from "./cartObject.js";
import "./toggle.js";

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


let total = 0
handleBeers();
//Change
// setTimeout(() => {
//   document.querySelectorAll('.beers_container ul article').forEach(article => article.classList.add('visible'))
// }, 1)

//create array of beers with properies

function observeBeers() {
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }
  const observerOptions = {
    rootMargin: '0px 5000px',
    threshold: 0
  }
  const observer = new IntersectionObserver(observerCallback, observerOptions)
  const elements = document.querySelectorAll('.beers_container > ul > article')
  elements.forEach(element => observer.observe(element))
}

//display each beer - "displayBeer(beer)"
function handleBeers() {
  beers.forEach((beer) => {
    displayBeer(beer);
  });
  observeBeers()
}

function displayBeer(beer) {
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
  quantity.textContent = " " + "x" + cart[beer.name];
  quantity.appendChild(document.createElement('div'))



  clone.querySelector(".remove").addEventListener("click", () => {
    if (cart[beer.name] === 0) cart[beer.name] = 0;
    else {
      cart[beer.name] = cart[beer.name] - 1;
      total -= beer.price;
      totalSum.textContent = total + " " + "kr" + " " + "pay";
    }
    quantity.textContent = " " + "x" + cart[beer.name];
    quantity.appendChild(document.createElement('div'))
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  clone.querySelector(".add").addEventListener("click", () => {
    console.log('total', total)
    cart[beer.name] = cart[beer.name] + 1;
    total += beer.price;
    quantity.textContent = "x" + cart[beer.name];
    quantity.appendChild(document.createElement('div'))
    localStorage.setItem("cart", JSON.stringify(cart));
    totalSum.textContent = total + " " + "kr" + " " + "pay";
  });
  totalSum.textContent = total + " " + "kr" + " " + "pay";
  // append clone to list
  document.querySelector(".beers_container ul").appendChild(clone);
}




document.body.style.display = "block";
//https://stackoverflow.com/questions/4172281/force-browsers-to-load-css-before-showing-the-page
