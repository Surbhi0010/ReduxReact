import React from 'react';
import { useSelector } from 'react-redux';
import './surbhi.css'
import { Link } from 'react-router-dom';
//9. i am fetching my products which i had stored in redux store to productcomponents by again using useselector
// inside products, all the data is provided, which i have to (DESTRUCTURE) by destructuring method
//const{id, title}=products
// i am fetching title from redux store by destructuring it.
// inside redux store, we have the state, inside it , we have allProducts inside which, we have products.
//so, to get data from prodcts, i am using (state.allProducts.products),
//This will give product array, so i have only one array with me [0], so i am writing as products[0]in destructuring.
// i can see surbhi which was my title from redux store.
//lets convert all products to API products, for that we have to create axios, make API call
//lets goto fakestoreapi
//go github there, Get all products
//fetch("https://fakestoreapi.com/products") copy this link
//.then((res) => res.json())
//.then((json) => console.log(json));



//14.products is an array of all products. In order to display all the products, we use map method.
//   return {renderList}
//it will render all the products on webpage.
//no, if we click on any product, we need to take it to the product detail page
//we are going to add a link tag for routing
//impoted Link, than added Link to section from where i want my details to showup in productdetail page.
// m able to go to productdetailpage. so, lets work there.
const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products)
    const renderList= products.map((product)=>{

        const {title, id, image, price, category}= product 
        return(<div className='maincard' key={id}>
        <Link to ={`/product/${id}`}>
            <div className='borderbox'>
                <div className='card'>
                    <div className='image'>
                    <img src={image} alt={title} />
                    </div>
                    <div>
                        <div className='box-contents'>{title} </div>
                        <div>${price}</div>
                        <div>{category}</div>
                        </div>
                   
                </div>
            </div></Link>
        </div>)
    })
    
   // const{id, title} =products[0]
  return <>{renderList}</>
};

export default ProductComponent;
