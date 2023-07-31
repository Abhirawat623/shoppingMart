import { products } from "./products.js";
import{findProuductInCart} from "./findProductInCart.js"
import { createProductCart } from "./createProductCart.js";


// let cart = []; //cart to be empty array
//1st --> get elements by id of profucts from html.js
let cart = JSON>parseFloat(localStorage.getItem("cart")) || []; //if the cart is not here make it empty

let isProdInCart;

//cart checker duplicacy pordiId will be dataset.id



// const findProuductInCart= (cart,prodId)=>{
// const isProdInCart = cart && cart.length>0 && cart.some(({_id})=> _id === prodId);
// return isProdInCart;
// } //cart should be greater thamn 0 and prod id would be chceked as array id too.


const productContainer = document.getElementById("products");

const filterContainer =document.querySelector(".side-bar")

productContainer.addEventListener("click",(event)=>{
//main logic for duplicacy cart

const isProdInCart = findProuductInCart(cart, event.target.dataset.id);//nothing in the cart

if(!isProdInCart){
    const productsAddToCart = products.filter(({_id})=> _id === event.target.dataset.id);
    cart = [...cart,...productsAddToCart];
//    console.log(cart);
//putting the cart in the local storage;

localStorage.setItem("cart",JSON.stringify(cart));



    const cartButton = event.target;
    cartButton.innerHTML = "Go To Cart<span class='material-icons-outlined'>shopping_cart</span>"
   
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

//for filter
filterContainer.addEventListener("click",(event)=>{
const updatedProducts = products.filter(({rating}) =>  rating>=Number(event.target.dataset.rating));//here the filter checking clicked radio for dataset rating

productContainer.innerHTML="";//after filtered out we have to make the other products empty

createProductCart(updatedProducts,productContainer, findProuductInCart,"products");//putting these function creates products here just by adding updatedproducts, we put filtered here 


});

createProductCart(products,productContainer, findProuductInCart,"products");//for index .js



const searchedProduct= document.querySelector(".searcher");
searchedProduct.addEventListener("input",(event)=>{

const searchedNewProduct = products.filter(({name})=> name.toLowerCase().startsWith(event.target.value.toLowerCase()));


productContainer.innerHTML="";


createProductCart(searchedNewProduct,productContainer, findProuductInCart,"products");//putting these searching function creates products here just by adding updatedproducts, we put filtered here 
});