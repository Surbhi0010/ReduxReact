//3. Reducer always takes the initial state and the action as an argument
// const reducername=(type, action)=>{switch(type)case}export default reducername.
 



//12. our reducer will get the type and the payload,type will be the setProducts.
//  ...State will be existing state, and once we have state, we are going to add the products to payload as
//products:payload
import React from 'react';
import ActionTypes from '../Constants/ActionTypes';

const initialstate={
    products:[],
}

 const ProductReducers = (state=initialstate, {type, payload}) => {
  switch (type) {
      case ActionTypes.SET_PRODUCTS:
          return {...state, products: payload}
          
          
      default:
          return state
  }
};
export default ProductReducers


export const selectedProductReducers = (state, {type, payload}) => {
  switch (type) {
      case ActionTypes.SELECTED_PRODUCTS:
          return {...state,...payload}
  
      default:
          return state
  }
};



  