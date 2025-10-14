import React, { useState } from 'react'
 const useClickMiddleware=(callback,delay=200)=>{
    const [lastClick,setLastClick]=useState(0);

    return ()=>{
        const now=Date.now();
        if(now-lastClick<delay){
            console.log("Click blocked by middleware");
            return;
        }
        setLastClick(now);
        callback()
        }

 }
function ClickButton() {

    const handleClick=useClickMiddleware(()=>{

        console.log("Button Clicked");
    });
  return (
    <>
    <button onClick={handleClick}>CKICK ME</button>
    </>
  )
}

export default ClickButton
