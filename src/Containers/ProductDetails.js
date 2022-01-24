import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectedproducts } from '../Redux/Actions/ProductAction';

const ProductDetails = () => {
    const product =useSelector((state)=> state.product)
    const {productId}= useParams()
    console.log(productId)
    const dispatch= useDispatch()
    const fetchproductId= async()=>{
        const responseId= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("ERR", err)
        })
        dispatch(selectedproducts(responseId.data))
    }
     useEffect(()=>{
         if(productId && productId!=="")
         fetchproductId()
     },[productId])
  return <div>
      <h1>ProductDetail</h1>
  </div>;
};

export default ProductDetails;
