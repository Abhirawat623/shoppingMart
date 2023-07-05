

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

//image
const image = document.createElement("img");
image.classList.add("card-image")
image.setAttribute("src", product.image);
image.setAttribute("alt",product.name);

cardImageContainer.appendChild(image);

//card details container
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-details",
    "d-flex",
    "direction-column");
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
    cardDetailsContainer.appendChild(descriptionContainer);
    descriptionContainer.appendChild(prodName);
    
    //7-->Newer price for product
    
    const prodPrice = document.createElement("p");
    prodPrice.classList.add("card-price");
    prodPrice.innerText = `Rs. ${product.newPrice} `;
    
    //8--> older price for product
    const prodOldPrice = document.createElement("span");
    prodOldPrice.classList.add("price-strike-through",
    "padding-all-8");
    prodOldPrice.innerText= `Rs. ${product.oldPrice} `;
    
    prodPrice.appendChild(prodOldPrice);
    descriptionContainer.appendChild(prodPrice);
    
    //9--> discount
    
    
    const prodDiscount = document.createElement("span");
    prodDiscount.classList.add("discount", "padding-all-8");
    prodDiscount.innerText= ` (${product.discount}% OFF)`;
    
    prodPrice.appendChild(prodDiscount);

    //quantity container

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantity-container","d-flex", "gap");
     const pTitle = document.createElement("p");
     pTitle.classList.add("q-title");
     pTitle.innerText="Quantity: "

     quantityContainer.appendChild(pTitle);
     

     const countContainer = document.createElement("div");
     countContainer.classList.add("count-container", "d-flex", "align-center","gap");
     const countButton = document.createElement("button");
     countButton.classList.add("count");
     countButton.innerText="-";

     const countValue = document.createElement("span");
     countValue.classList.add("count-value");
     countValue.innerText ="1";

    const countButton2 = document.createElement("button");
    countButton2.classList.add("count");
    countButton2.innerText="+"

     quantityContainer.appendChild(countContainer);
     countContainer.appendChild(countValue);
     countContainer.appendChild(countButton);
     countContainer.appendChild(countButton2);


     //cta buttons
     const ctaButtonContainer = document.createElement("div");
     ctaButtonContainer.classList.add("cta-btn", "d-flex", "gap");

     const ctaButton = document.createElement("div");
     ctaButton.classList.add("cta-btn");
     
     ctaButtonContainer.appendChild(ctaButton);

     const addToCartButton = document.createElement("button");
     addToCartButton.classList.add("button",
     "hori-btn",
      "btn-primary",
      "btn-icon",
       "d-flex",
        "align-center",
     "justify-center",
      "gap",
      "cursor",
       "btn-margin");
    
    const cartLogo = document.createElement("div");
     
   
    cartLogo.classList.add("fa", "fa-shopping-cart");
    addToCartButton.innerText="Add To Cart";

    addToCartButton.appendChild(cartLogo);
  ctaButton.appendChild(addToCartButton);
    
    const ctabuttonAnother = document.createElement("div");
    ctabuttonAnother.classList.add("cta-btn");

    const ctaButton2 = document.createElement("button");
    ctaButton2.classList.add("button",
     "hori-btn",
      "btn-outline-primary", 
    "btn-icon",
     "d-flex",
      "align-center",
      "justify-center",
     "gap",
      "cursor",
       "btn-margin");
    ctaButton2.innerText="Move to ❤️";
    ctabuttonAnother.appendChild(ctaButton2);
    ctaButtonContainer.appendChild(ctabuttonAnother);

    cardContainer.appendChild(ctaButtonContainer)
    cardContainer.appendChild(cardImageContainer);
    cardContainer.appendChild(cardDetailsContainer);
    cardContainer.appendChild(ctaButtonContainer);
  
    cardContainer.appendChild(quantityContainer);
   
   parentContainer.appendChild(cardContainer);
}
}
