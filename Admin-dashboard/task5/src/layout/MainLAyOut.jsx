import React from 'react'
import { ProductsForm } from '../pages/ProductsForm'
import { ProductDetails } from '../pages/ProductDetails'
import { Products } from '../pages/Products'
import {Home} from '../pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { SharedLayOut } from './SharedLayOut'
import { NotFound } from '../pages/NotFound'
export  function MainLAyOut() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayOut/>}>
      <Route index element={<Home/>} ></Route>
      <Route path='/products/:id' element={<ProductDetails/>} ></Route>
      <Route path='/products/:id/edit' element={<ProductsForm/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
      </Route>
    </Routes> 
 
    </BrowserRouter>
  )
}
