import { createProductCart } from "./createProductCart.js";
 
//just as first dom cart .html cart 

const cartContainer = document.getElementById("cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
createProductCart(cart, cartContainer);