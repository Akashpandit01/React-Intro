import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandiingPage() {

    
        const navigate=useNavigate()
   
    const handleLogin=()=>{
  alert('Log In Success')
  navigate('/home')
    }
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleLogin}>log In</button>
    </div>
  )
}

export default LandiingPage
