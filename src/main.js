import "./scss/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  // get();
});

import beers from "./beers.js";

const tableURL = "https://foobar-cc0c.restdb.io/rest/foobar";
const tableAPI = "7d223e20e3acb3ae5dda5fa92caf738b8c540";

/* function get() {
  fetch(tableURL, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": tableAPI,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
} */
/* 
function randomTable() {
  let randTable = Math.floor(Math.random() * 10) + 1;
  console.log(`Table nr: ${randTable}`);
  document.querySelector("#helpcircle").addEventListener("click", () => {
    // Post current table number to restdb
    const postData = JSON.stringify(randTable);
    fetch(tableURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": tableAPI,
        "cache-control": "no-cache",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => {
        get();
      });
  });
  } */
function randomTable() {
  const data = { tableid: Math.floor(Math.random() * 10) + 1 };
  const postData = JSON.stringify(data);
  fetch("https://foobar-cc0c.restdb.io/rest/foobar", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "61b71e3fa3fedd557f8e0abd",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

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

let cart = JSON.parse(localStorage.getItem("cart"));

handleBeers();

//create array of beers with properies
//display each beer - "displayBeer(beer)"
function handleBeers() {
  beers.forEach((beer) => {
    displayBeer(beer);
  });
}

function displayBeer(beer) {
  // create clone
  const clone = document.querySelector("template").content.cloneNode(true);
  // set clone data
  clone.querySelector("img").src = beer.img;
  clone.querySelector(".beer_name").textContent = beer.name;
  clone.querySelector(".beer_type").textContent = beer.type;
  clone.querySelector(".price").textContent = beer.price + "kr";
  // clone.querySelector('.quantity').textContent = JSON.parse(localStorage.getItem('cart'));
  const quantity = clone.querySelector(".quantity");

  clone.querySelector("#remove").addEventListener("click", () => {
    cart[beer.name] === 0 ? (cart[beer.name] = 0) : (cart[beer.name] = cart[beer.name] - 1);
    quantity.textContent = cart[beer.name] + " " + "x";
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  clone.querySelector("#add").addEventListener("click", () => {
    cart[beer.name] = cart[beer.name] + 1;
    quantity.textContent = cart[beer.name] + " " + "x";
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // append clone to list
  document.querySelector(".beers_container ul").appendChild(clone);
}

if (!cart) {
  cart = {};
  beers.forEach((beer) => (cart[beer.name] = 0));
}

// function removeFromCart(event) {
//   let item = event.target.getAttribute('data-name')
//   console.log(cart)
// }

document.body.style.display = "block";
//https://stackoverflow.com/questions/4172281/force-browsers-to-load-css-before-showing-the-page

const toggle = document.querySelector(".toggle input");
var element = document.body;

toggle.addEventListener("click", () => {
  const onOff = toggle.parentNode.querySelector(".onoff");

  onOff.textContent = toggle.checked ? "Lightmode" : "Darkmode";
  onOff.textcontent.style = toggle.checked = element.classList.toggle("light-mode");
  onOff.textcontent.style = toggle.unchecked = element.classList.toggle("dark-mode");
});

/* function myToggle() {
  var element = document.body;
  element.classList.add("light-mode");
  element.classList.add("dark-mode");
}
 */
