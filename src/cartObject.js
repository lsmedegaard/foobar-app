import beers from './beers'

// cart er et objekt, der ser sådan ud her: 
// {
//   navnPåØl: 0,
//   ...
// }

//tager objektet ud af localstorage
let cart = JSON.parse(localStorage.getItem("cart"));

//hvis cart er null/false, så er der ikke noget i localstorage og så skal den lave et nyt objekt hvor alle øllene er. 
if (!cart) {
  cart = {};
  beers.forEach((beer) => (cart[beer.name] = 0));
}

export default cart