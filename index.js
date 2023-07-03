import { products } from "./products.js";
// import { createProductCart } from "./createProductCart.js";


let cart = []; //cart to be empty array
//1st --> get elements by id of profucts from html.js


//cart checker duplicacy pordiId will be dataset.id



const findProuductInCart= (cart,prodId)=>{
const isProdInCart = cart && cart.length>0 && cart.some(({_id})=> _id === prodId);
return isProdInCart;
} //cart should be greater thamn 0 and prod id would be chceked as array id too.


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
descriptionContainer.classList.add("card-description");
//**name of product */

const prodName = document.createElement("p");
prodName.classList.add("card-des");
prodName.innerText=product.name;

descriptionContainer.appendChild(prodName);

//7-->Newer price for product

const prodPrice = document.createElement("p");
prodPrice.classList.add("card-price");
prodPrice.innerText = `Rs. ${product.newPrice} `;

//8--> older price for product
const prodOldPrice = document.createElement("span");
prodOldPrice.classList.add("price-strike-through");
prodOldPrice.innerText= `Rs. ${product.oldPrice} `;

prodPrice.appendChild(prodOldPrice);
descriptionContainer.appendChild(prodPrice);

//9--> discount


const prodDiscount = document.createElement("span");
prodDiscount.classList.add("discount");
prodDiscount.innerText= ` (${product.discount}% OFF)`;

prodPrice.appendChild(prodDiscount);



//10--> Rating container

const ratings = document.createElement("p");
ratings.classList.add("d-flex","align-center");

const rating = document.createElement("span");
rating.innerText = product.rating;

ratings.appendChild(rating);

const star = document.createElement("span");
star.classList.add("fa", "fa-star", "fa-x")
ratings.appendChild(star);

descriptionContainer.appendChild(ratings);
//for CTA buttn
const ctaButton = document.createElement("div");
ctaButton.classList.add("cta-btn");

const cartButton = document.createElement("button");
cartButton.classList.add(
    "button",
    "btn-primary",
     "btn-icon",
      "cart-btn",
       "d-flex",
        "align-center",
         "justify-center",
          "gap",
          "cursor",
     "btn-margin"
);
cartButton.setAttribute("data-id", product._id)

//cart logo

const cartLogo = document.createElement("span");
cartLogo.classList.add("fa", "fa-shopping-cart");

cartLogo.innerText= "  Add To Card";
cartButton.appendChild(cartLogo);
//appending all
cardContainer.appendChild(imageContainer);
cardDetailsContainer.appendChild(descriptionContainer);
cardContainer.appendChild(cardDetailsContainer);
ctaButton.appendChild(cartButton);
cardDetailsContainer.appendChild(ctaButton);



//Name the card to products
   
    //3rd--> append the  card to product container
    
    productContainer.appendChild(cardContainer);
    
}



//event for adding product to cart also..bubbling takes place



productContainer.addEventListener("click",(event)=>{
//main logic for duplicacy cart
const isProdInCart = findProuductInCart(cart, event.target.dataset.id);

if(!isProdInCart){
    const productsAddToCart = products.filter(({_id})=> _id === event.target.dataset.id);
    cart = [...cart,...productsAddToCart];
//    console.log(cart);
//putting the cart in the local storage;

localStorage.setItem("cart",JSON.stringify(cart));




    const cartButton = event.target;
    cartButton.innerHTML = "GO TO CART <span class='material-icons-outlined'>shopping_cart</span>"
    //to change add to cart into go to card
}
else{
    location.href="cart.html"; // for cart page
}




    // console.log(event.target)
    // const productsAddToCart = products.filter(({_id})=> _id ===event.target.dataset.id);
    // cart = [...cart,...productsAddToCart];
    // console.log(cart) << this should be in abobe if statement
});

createProductCart(products,productContainer);//for index .js