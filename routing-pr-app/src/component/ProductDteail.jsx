import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDteail() {

    const {id}=useParams()
    const [product,setProduct]=useState(null)

    async function fetchData(){

        let response = await fetch(`https://fakestoreapi.com/products/${id}`);

        let result=await response.json();
        console.log(result)
        setProduct(result)

    }
    useEffect(()=>{
     fetchData()
    },[])
    if(!product) return <h1>Loading....</h1>
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt=""  width="200px"/>
    <p>{product.description}</p>
    <h4>{product.price}</h4>
    </div>
  )
}

export default ProductDteail
