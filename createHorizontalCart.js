

const createHorizontalCart = (products, parentContainer)=>{

for(let product of products){
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-horizontal",
"d-flex",
 "shadow");


const cardImageContainer = document.createElement("div");
cardImageContainer.classList.add("card-hori-image-container", "relative");

const image = document.createElement("img");
image.classList.add("card-image")
image.setAttribute("src", product.image);
image.setAttribute("alt",product.name);

cardImageContainer.appendChild(image);

const smallBadge = document.createElement("small");
smallBadge.classList.add("c-badge","bg-primary","absolute","left-0");
smallBadge.innerText="Trending";

cardImageContainer.appendChild(smallBadge);














//appending all
cardContainer.appendChild(cardImageContainer);










}
}