import React from 'react';
//2. I have to create three actions for setproducts, selected products, remove products.
//I am adding (products) as an argument.
//Action always return js object which has a key as a type: => which tells that which type
//of action you want to perform. and payload:;



//11. after dispatching response to setproducts, it will return the response which will bw taken by the reducer
// lets go to productReducer
import ActionTypes from '../Constants/ActionTypes';

const setproducts = (products) => {
  return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
  };
};

export default setproducts;

export const selectedproducts=(products)=>{
return{
  type: ActionTypes.SELECTED_PRODUCTS,
  payload: products,
}
}