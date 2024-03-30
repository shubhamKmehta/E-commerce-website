import './style.css'

import products from "./api/products.json"
// console.log(products)
import { showProductContainer } from './homeProductCards.js'


showProductContainer(products)