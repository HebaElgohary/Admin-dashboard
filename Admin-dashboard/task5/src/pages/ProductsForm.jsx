import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MainBtn } from '../components/StyledComponents/MainBtn';
import{addProduct,getProductById} from'../api/ProductsApi'
import { useNavigate } from 'react-router-dom';


export  function ProductsForm() {

  const navigator=useNavigate()

  const{id}=useParams();
  console.log(id)
  
  const [formData,setFormData]=useState({
    name:"",
    price:"",
  })

  const changeHandler=(e)=>{
    setFormData({...formData,
          [e.target.name]:e.target.value
    })
  }

    const submitHandler=async(product)=>{

     await addProduct({...formData,
    price: parseFloat(formData.price)
     });
    setFormData({ name: '', price: "" });
     navigator('/products')
    }

useEffect(()=>{
if(id)
getProductById(id).then((resp)=>{setFormData(resp.data)})
else
setFormData({
  name:"",
  price: ""
})
},[id])
  

  return (
    <div className="container bg-dark mt-5 text-light p-5 rounded-3 col-6">
        <h1 className='text-center mb-5 text-warning'>Product Form</h1>
    <Form  onSubmit={(e)=>{
      e.preventDefault();
      submitHandler(formData)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-2 '>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" name='name' value={formData.name} onChange={changeHandler}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fs-2 '>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Prosuct Price" name='price' value={formData.price}  onChange={changeHandler} />
      </Form.Group>
  
    <MainBtn type='submit'>Add product</MainBtn>
        
    
    </Form>
    </div>
  );
}

