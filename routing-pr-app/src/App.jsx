import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import './App.css'
import LandiingPage from './component/LandiingPage'
import ProductList from './component/ProductList'
import ProductDteail from './component/ProductDteail'




function App() {
  return (
    <>
     {/* <Home/>
      <About/>
      
<Contact/> */}



<Navbar/>
<Routes>
   
   <Route path='/' element={<ProductList/>}></Route>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
 <Route path="/product/:id" element={<ProductDteail />} />
  </Routes>

    </>
  )
}

export default App
