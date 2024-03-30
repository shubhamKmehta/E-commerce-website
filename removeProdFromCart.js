import { getCartProductFromLS } from "./getCartProduct.js"
import { updateCartValue } from "./updateCartValue.js";
import { showToast } from "./showToast.js";
export const removeProdFromCart=(id)=>{
    let cartProducts=getCartProductFromLS();
    // console.log(cartProducts)
    cartProducts=cartProducts.filter((curProd)=>curProd.id !== id);
    
    
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts))
    // to remove the div on click
    let removeDiv=document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove();
        showToast("delete",id);
    }
    updateCartValue(cartProducts)   
}