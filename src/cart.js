import './scss/cart.scss'
import './scss/style.scss'




const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");


let showMenu = false;
document.addEventListener('DOMContentLoaded', displaybeer)
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


function displaybeer(beer) {
  // create clone
  const clone = document.querySelector("template").content.cloneNode(true);
  // set clone data
  clone.querySelector(".beer_name").textContent = beer.name;
  clone.querySelector(".price").textContent = beer.price + "kr";
  const quantity = clone.querySelector('.quantity')
  quantity.textContent = cart[beer.name] + ' pc.'

  clone.querySelector('#remove').addEventListener("click", () => {
    cart[beer.name] === 0 ? cart[beer.name] = 0 : cart[beer.name] = cart[beer.name] - 1
    quantity.textContent = cart[beer.name] + ' x ' + beer.name
    localStorage.getItem('cart')
  })

  clone.querySelector('#add').addEventListener("click", () => {
    cart[beer.name] = cart[beer.name] + 1
    quantity.textContent = cart[beer.name] + ' x ' + beer.name
    localStorage.getItem('cart')
  })
  
  // append clone to list
  document.querySelector(".order_list").appendChild(clone);
}