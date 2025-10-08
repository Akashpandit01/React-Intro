import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav>
  <Link to='/'>Product</Link>
  <Link to='/About'>About</Link>
  <Link to='/contact'>Contact</Link>

   </nav>
  )
}
export default Navbar