import React, { useEffect,useState } from 'react'
import { MainBtn } from '../components/StyledComponents/MainBtn'
import { FaStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/ProductsApi';


export  function ProductDetails() {
  const {id}=useParams()
  const [product,setProduct]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(null);
  useEffect(()=>{
  
    getProductById(id).then((resp)=>setProduct(resp.data))
 
},[id])

  return (
    <div className='container  m-5 border rounded p-5 bg-dark mx-auto col-7' >
        <h1 className='text-info text-center mb-5'>More Details</h1>
        <p className='fs-3 text-light'>Product Name: <span className='fw-bold text-danger'>{product?.name}</span></p> 
        <p className='fs-3 text-light'>Product Price: <span className='fw-bold text-danger'>{product?.price}</span></p> 
        <p className='fs-3 text-light'>Product Quantity: <span className='fw-bold text-danger'>{product?.quantity}</span></p> 
          <p>
             <FaStar className='text-warning m-1 mb-4' />
             <FaStar className='text-warning m-1 mb-4' />
             <FaStar className='text-warning m-1 mb-4' />
             <FaStar className='text-warning m-1 mb-4' />
             <FaStar className='text-warning m-1 mb-4' />
          </p>


        <MainBtn>
          <Link to={"/products"} className='nav-link'>  Back to Products</Link>
        
          </MainBtn>
    </div>
  )
}
