import { createProductCart } from "../createProductCart.js";
import { createHorizontalCart } from "../createHorizontalCart.js";
import { findProuductInCart } from "../findProductInCart.js";
 
//just as first dom cart .html cart 

const cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);



cartContainer.addEventListener("click",(event)=>{

//for removing the products
cart = cart.filter(({_id})=> _id !== event.target.dataset.id);
cartContainer.innerHTML ="";
createHorizontalCart(cart, cartContainer, findProuductInCart, "cart");
localStorage.setItem("cart" , JSON.stringify(cart));



});


createHorizontalCart(cart,cartContainer,findProuductInCart, "cart");