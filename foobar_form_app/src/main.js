import "./scss/style.scss";

// window.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("body").classList.remove("preload");
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

handleBeers();

//create array of beers with properies
//display each beer - "displayBeer(beer)"
function handleBeers() {
  const beers = [
    {
      name: "Row 26",
      price: 35,
      img: "/assets/images/row26.png",
      type: "Stout",
    },

    {
      name: "Ruined childhood",
      price: 40,
      img: "/assets/images/ruinedchildhood.png",
      type: "Porter",
    },

    {
      name: "Fairytale Ale",
      price: 35,
      img: "/assets/images/fairytaleale.png",
      type: "Ale",
    },
    {
      name: "Githop",
      price: 40,
      img: "/assets/images/githop.png",
      type: "Ale",
    },
    {
      name: "Hoppily Ever After",
      price: 50,
      img: "/assets/images/hoppilyeverafter.png",
      type: "Belgian IPA",
    },
    {
      name: "Mowintime",
      price: 35,
      img: "/assets/images/mowintime.png",
      type: "Pilsner",
    },
    {
      name: "El Hefe",
      price: 35,
      img: "/assets/images/elhefe.png",
      type: "Wheat beer",
    },
    {
      name: "Hollaback",
      price: 40,
      img: "/assets/images/hollaback.png",
      type: "Lager",
    },
    {
      name: "Sleighride",
      price: 40,
      img: "/assets/images/sleighride.png",
      type: "Porter",
    },
    {
      name: "Steampunk",
      price: 50,
      img: "./assets/images/steampunk.png",
      type: "IPA",
    },
  ];

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
  clone.querySelector("button").addEventListener("click", addToCart);

  // append clone to list
  document.querySelector(".beers_container ul").appendChild(clone);
}

const cart = [];

function addToCart() {
  console.log("adding to cart");
  cart.push(this);
  console.log(cart);
}

function removeFromCart() {}

function displayCart() {}
