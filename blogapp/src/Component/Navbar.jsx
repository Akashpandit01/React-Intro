import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to='/home'>Home</Link>
    <Link to='/about'>About</Link>
    </>
  )
}

export default Navbar
