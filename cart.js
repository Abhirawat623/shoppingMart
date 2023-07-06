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

//logic for placing orders


const cartLength = document.querySelector(".item-count");
cartLength.innerText=JSON.parse(localStorage.getItem("cart")).length;

const itemsPrice = document.getElementById("product-price");
//price after discount
const priceAfterDiscount =JSON.parse(localStorage.getItem("cart")).reduce((acc,curr)=> acc+curr.newPrice,0);
itemsPrice.innerText= priceAfterDiscount;
//price before discount
const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc,curr)=>acc+curr.oldPrice,0);


const cartDiscount = document.getElementById("product-discount");
// we have to take difference btn older prices and newer prices
const discountedAmount = priceBeforeDiscount - priceAfterDiscount
cartDiscount.innerText = discountedAmount ;

const totalAmountofCart = document.getElementById("total-price");
totalAmountofCart.innerText= priceAfterDiscount-discountedAmount+89 //delivery;

const totalSavedAmount = document.getElementById("total-saved");
totalSavedAmount.innerText= discountedAmount;


createHorizontalCart(cart,cartContainer,findProuductInCart, "cart");