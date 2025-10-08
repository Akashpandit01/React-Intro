import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductList() {

    const [Product,setProduct]=useState([]);
   async function fetchData(){
    let response=await fetch('https://fakestoreapi.com/products')
    let  result=await response.json();
    setProduct(result.posts);
   }

    useEffect(()=>{
     fetchData()
    },[]);
  return (
    <>
      <h1>Products</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
      
       {
        Product.map(product=>(
            <div key={product.id}>
                <img src={product.image} width="150px"/>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
               <Link to={`/product/${product.id}`}>View Product</Link>
                </div>
            
        ))
       }
    </div>
    </>
  )
}

export default ProductList
