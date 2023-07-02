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

//4-->image container**

const imageContainer = document.createElement("div");
imageContainer.classList.add("card-image-container");

//image for the product
const image = document.createElement("img");
image.classList.add("card-image");
image.setAttribute("src" , product.img);
image.setAttribute("alt" , product.name);


imageContainer.appendChild(image);

//5-->card details container and brand inside card details container

const cardDetailsContainer = document.createElement("div");
cardDetailsContainer.classList.add("card-details");
//** */
const brandContainer = document.createElement("div");
brandContainer.classList.add("card-title");
brandContainer.innerText= product.brand;

cardDetailsContainer.appendChild(brandContainer);

//6--> card-description

const descriptionContainer = document.createElement("div");
descriptionContainer.classList("card-description");
//**name of product */

const prodName = document.createElement("p");
prodName.classList.add("card-des");
prodName.innerText=product.name;

descriptionContainer.appendChild(prodName);

//7-->Newer price for product

const prodPrice = document.createElement("p");
prodPrice.classList.add("card-price");
prodPrice.innerText = `Rs. ${product.newPrice}`;

//8--> older price for product
const prodOldPrice = document.createElement("span");
prodOldPrice.classList.add("price-strike-through");
prodOldPrice.innerText= `Rs. ${product.oldPrice}`;

prodPrice.appendChild(prodOldPrice);

//9--> discount


const prodDiscount = document.createElement("span");
prodDiscount.classList.add("discount");
prodDiscount.innerText= `(${product.discount}% OFF)`;

prodOldPrice.appendChild(prodDiscount);



//10--> Rating container

const prodRating =- document.createElement()










//Name the card to products
    cardContainer.innerText="Products";
    //3rd--> append the  card to product container
    
    productContainer.appendChild(cardContainer);
    
}

