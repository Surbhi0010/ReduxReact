//4. combine all the reducers together by importing {combinereducers}
//import productreducer
//we are going to create constant of all the reducers to combine all reducers
//together, this const will be equal to combinereducers 
//here combinereducer takes the object, 
//inside it, we can define any key===i have given key name (allproducts)
//keys= keys used in react which lets react know that which item in list is changed, updated or deleted.
// allProducts consist of products in redux store//

import { combineReducers } from "redux";
import ProductReducers from "./ProductReducers";
import selectedProductReducers from './ProductReducers'
const reducers= combineReducers({
    allProducts: ProductReducers,
    product: selectedProductReducers,
    
})
export default reducers