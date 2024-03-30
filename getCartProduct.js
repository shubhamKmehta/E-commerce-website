import { updateCartValue } from "./updateCartValue.js";


export const getCartProductFromLS = (cartProductLS) => {
  // local storage me "cartProductLS ka array define kr rhe hain...data add hogaa."
  let cartProducts = localStorage.getItem("cartProductLS");
  
  if (!cartProducts) {
    return [];
  }
  
  cartProducts = JSON.parse(cartProducts);
  updateCartValue(cartProducts);
  return cartProducts;
};

