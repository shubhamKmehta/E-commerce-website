import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProduct";
import { fetchQuantityfromCartLS } from "./fetchQuantityfromCartLS.js";
import { removeProdFromCart } from "./removeProdFromCart.js";   
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

const cartElement=document.querySelector('#productCartContainer')
const templateContainer=document.querySelector('#productCartTemplate')

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{
   return cartProducts.some((curElem)=>{
        return curElem.id===curProd.id
    })
})
// console.log(filterProducts)

const showCartProduct=()=>{
filterProducts.forEach((curProd)=>{
    // console.log(curProd)
    const {category,id,image,name,price, stock}=curProd;
    let productClone=document.importNode(templateContainer.content,true)
    
    const lSActualData=fetchQuantityfromCartLS(id,price);


    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent = lSActualData.price;
    productClone.querySelector(".remove-to-cart-button").addEventListener("click",()=> removeProdFromCart(id));

    productClone.querySelector('.stockElement').addEventListener("click",(event)=>{
        return incrementDecrement(event,id,stock,price)
    })

    cartElement.appendChild(productClone)
})
}

showCartProduct();  


updateCartProductTotal();