import axios, { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import setproducts from '../Redux/Actions/ProductAction';
//8. we are going to fetch the products which were in the redux store
//in order to get the access of redux store, we use USESELECTOR. This is going to give me the products
// const name= useSelector((state)=> state)
//now, in console, i am able to see my products which i had stored in redux.
//now we had got the access t0 the products
//we are going to display the products inside the product components





//10. import axios to make API call. 
//we will need useEffect hook to manage sideeffects in functional component, in calling API, we have to use it 
//to remove side-effects. Fetchproduct function has got all API stored in it, so, we will call it inside our 
//USEEFFECT to remove side effects.
// will  create a function using async and await  to get product details through API
//will add axios with catch to handle error
//const ApiName= async()=>{
//    const response= await axios.get("http").catch((err)=>{})}
//in response, i will get all my api data.
// once we have our all the data from server, i want my data to be stored inside redux store.
//to add API data to store, we need to dispatch and action.
// lets go to action where productaction file is there, action is setproduct.
//in setproducts, my product is stored. now we have to dispatch the api by dispatch hook.
// const dispatch= useDispatch()==== this will auto dispatch the api.
//           dispatch(setproducts(response.data))
//response will be dispatched in setproducts
// import setproducts


//13. now console.log(products), all the api data will be fetch to product listings via redux store.
// now going to redux in inspect, we will see that our data is inside state which we have fetch from server,
//when we get data from thwe server, we dispatch an action, that action is the SETPRODUCTS.
// when we set the products, we actually change the state and our new state is with the records which we have
// recieved from the server.
//now, we are going to display the complete data which we had fetch from server to webpage.
//lets goto productcomponent.

const ProductListings = () => {
    
    const products= useSelector((state)=> state) 
    const dispatch= useDispatch()
    const fetchproducts= async()=>{
                 const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
                     console.log("ERR", err)
                 })
                 dispatch(setproducts(response.data))
    }
    useEffect(()=>{
        fetchproducts()
    },[])

    console.log(products)
  return <div>
      <ProductComponent/>
  </div>;
};

export default ProductListings;
