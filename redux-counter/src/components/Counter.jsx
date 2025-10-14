import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
