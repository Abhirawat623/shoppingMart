import { products } from "./products.js";
console.log(products);
//1st --> get elements by id of profucts from html.js
const productContainer = document.getElementById("products");

for(let product of products){
    //2nd--> copy from the html properties bye creating dom
 const cardContainer = document.createElement("div");
 cardContainer.classList.add(
    "card",
    "card-vertical",
    "d-flex",
    "direction-column",
    "relative" ,
    "shadow");
//Name the card to products
    cardContainer.innerText="Products";
    //3rd--> append the  card to product container
    productContainer.appendChild(cardContainer);
}


 /** Card Details Container */
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details");

    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = product.brand;
    cardDetailsContainer.appendChild(brandContainer);