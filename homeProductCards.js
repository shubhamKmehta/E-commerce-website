const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
import { homeQuantityToggle } from "./homeQuantityToggle.js";
import { addToCart } from "./addToCart.js";

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curnProd) => {
    const { brand, category, description, id, image, name, price, stock } = curnProd; //here we destructure curnProd(current Product) 
    const productClone = document.importNode(productTemplate.content, true);
    // console.log(productClone);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};
