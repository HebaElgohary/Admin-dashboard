import React from 'react'
import { Header } from '../components/sharedComponents/Header.jsx'
import { Footer } from '../components/sharedComponents/Footer.jsx'
import { Outlet } from 'react-router-dom'

export  function SharedLayOut() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header></Header>
       <Outlet/>
      <Footer></Footer>
    </div>
  )
}
