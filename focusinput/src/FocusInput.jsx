import React, { useRef, useState } from 'react'

function FocusInput() {

    const inputRef=useRef(null)
    const [message,setMessage]=useState('');

    function focusInput(){

        console.log(inputRef.current);
        inputRef.current.style.color="white";
        inputRef.current.style.backgroundColor="Red";
        inputRef.current.focus(); 
        setMessage('focused')
    }
  return (
    <div>
      <input  ref={inputRef} type='text' placeholder='type here...'/>
      <button onClick={focusInput}>Click</button>
      <p>{message}</p>
    </div>
  )
}

export default FocusInput
