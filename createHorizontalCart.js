


export const createHorizontalCart = (products, parentContainer)=>{

for(let product of products){

    //cart
   
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-horizontal",
"d-flex",
 "shadow");
 
//image container
const cardImageContainer = document.createElement("div");
cardImageContainer.classList.add("card-hori-image-container", "relative");
cardContainer.appendChild(cardImageContainer);

//image
const image = document.createElement("img");
image.classList.add("card-image")
image.setAttribute("src", product.img);
image.setAttribute("alt",product.name);

cardImageContainer.appendChild(image);

//card-details
const cardDetailsContainer =document.createElement("div");
cardDetailsContainer.classList.add("card-details","d-flex","direction-column");

cardContainer.appendChild(cardDetailsContainer);

const cardTitle = document.createElement("div");
cardTitle.classList.add("card-title");
cardTitle.innerText= product.brand;
cardDetailsContainer.appendChild(cardTitle);

const cardDescription = document.createElement("div");
cardDescription.classList.add("card-description");
cardDetailsContainer.appendChild(cardDescription);

const cardDes =document.createElement("div");
cardDes.classList.add("card-des");
cardDes.innerText =product.name;

cardDescription.appendChild(cardDes);

const productPrice = document.createElement("div");
productPrice.classList.add("card-price");
productPrice.innerText= `Rs .${product.newPrice}`;
cardDetailsContainer.appendChild(productPrice);

const priceStrikeOfOldPrice = document.createElement("span");
priceStrikeOfOldPrice.classList.add("price-strike-through", "padding-all-8");
priceStrikeOfOldPrice.innerText=`Rs. ${product.oldPrice}`;

productPrice.appendChild(priceStrikeOfOldPrice);

const productDiscount = document.createElement("span");
productDiscount.classList.add("discount","padding-all-8");
productDiscount.innerText=`(${product.discount}% OFF)`;

productPrice.appendChild(productDiscount);

const quantityContainer = document.createElement("div");
quantityContainer.classList.add("quantity-container","d-flex","gap");
cardDetailsContainer.appendChild(quantityContainer);


const qTitle = document.createElement("p");
qTitle.classList.add("q-title");
qTitle.innerText="Quantity: "

quantityContainer.appendChild(qTitle);

const countContainer = document.createElement("div");
countContainer.classList.add("count-container","d-flex","align-center","gap");

quantityContainer.appendChild(countContainer);

const plusButton = document.createElement("button");
plusButton.classList.add("count");
plusButton.innerText="-";

countContainer.appendChild(plusButton);


const countValue = document.createElement("span");
countValue.classList.add("count-value");
countValue.innerText="1";

countContainer.appendChild(countValue);

const minusButton = document.createElement("button");
minusButton.classList.add("count");
minusButton.innerText="+";

countContainer.appendChild(minusButton);

const ctaButtonContainer = document.createElement("div");
ctaButtonContainer.classList.add("cta-btn","d-flex","gap");

cardDetailsContainer.appendChild(ctaButtonContainer);

const ctaButton1= document.createElement("div");
ctaButton1.classList.add("cta-btn");

ctaButtonContainer.appendChild(ctaButton1);


const removeFromCart = document.createElement("button");
removeFromCart.classList.add("button",
"hori-btn",
"btn-primary","btn-icon",
"d-flex", "align-center",
"justify-center", "gap",
"cursor", "btn-margin");
removeFromCart.setAttribute("data-id", product._id);

const logo= document.createElement("span");
logo.classList.add("fa","fa-Remove")
removeFromCart.innerText="Remove"
removeFromCart.appendChild(logo);


ctaButton1.appendChild(removeFromCart);


const ctaButton2 = document.createElement("div");
ctaButton2.classList.add("cta-btn");
ctaButtonContainer.appendChild(ctaButton2);


const moveTocartButton = document.createElement("button");
moveTocartButton.classList.add("button", "hori-btn",
 "btn-outline-primary", "btn-icon", "d-flex" ,"align-center", "justify-center",
"gap", "cursor", "btn-margin");
moveTocartButton.innerText="Save To Wishlist ❤️";
moveTocartButton.setAttribute("data-id", product._id);

ctaButton2.appendChild(moveTocartButton);
parentContainer.appendChild(cardContainer);
}
}
