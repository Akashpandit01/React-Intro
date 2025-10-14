import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/couteraction";


 function Counter(){

    const count=useSelector((state)=>state.counter.count)
    const dispatch =useDispatch();
    return (
        <>


        <h2>count:{count}</h2>
        <button onClick={()=>dispatch(increment)}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement)}>DECREMENT</button>

        </>
    )
}
export default Counter;