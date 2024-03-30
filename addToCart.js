import { getCartProductFromLS } from "./getCartProduct.js";
import { updateCartValue } from "./updateCartValue.js";
import { showToast } from "./showToast.js";
getCartProductFromLS();
// console.log(getCartProductFromLS)


export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProductElement = document.querySelector(`#card${id}`);
  // console.log(currentProductElement)
  let quantity = currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;
  
  quantity=Number(quantity)
  // console.log(quantity)
  price=price.replace('₹','')
  console.log(price)

  let existingProduct=arrLocalStorageProduct.find((curProd)=> {
    // console.log("current Product id -",curProd.id)
    return curProd.id===id});

  if(existingProduct && quantity >1){
    quantity=Number(existingProduct.quantity+quantity);
    price=Number(price*quantity)

    let updateCart={id,quantity,price}
    updateCart= arrLocalStorageProduct.map((curProd)=>{
        return curProd.id ===id ? updateCart : curProd;
    })
    localStorage.setItem("cartProductLS",JSON.stringify(updateCart));
    showToast("add",id);
  }

  if(existingProduct){
    return false
  }


  price=Number(price*quantity)
  quantity=Number(quantity)
//   console.log(quantity,price)
let updateCart={id,quantity,price}
// arrLocalStorageProduct.push({id,quantity,price}) else
arrLocalStorageProduct.push(updateCart)
localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));


updateCartValue(arrLocalStorageProduct);
showToast("add",id);
};
