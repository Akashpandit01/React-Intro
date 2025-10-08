import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import About from './Component/About'
import BlogList from './BlogList'

function App() {
 

  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<BlogList/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>


  </>
  )
}

export default App
