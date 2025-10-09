import React, { useEffect, useRef, useState } from 'react'

function RenderCounter() {
    const [count,setCount]=useState(0);
    const renderCOunt=useRef(1);

    const prevCount=useRef(0);

    useEffect(()=>{

        renderCOunt.current+=1;
        prevCount.current=count;
    });
  return (
    <div>
      <h2>Counter:{count}</h2>
      <h3>Previous Count :{prevCount.current}</h3>
      <button onClick={()=> setCount((prev)=> prev+1)}>Increase Count</button>

      <p>Component Re-rendered:{renderCOunt.current} times</p>
    </div>
  )
}

export default RenderCounter
