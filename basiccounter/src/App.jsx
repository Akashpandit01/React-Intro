import React, { useReducer } from "react";


const initialState = {
  count: 0,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Counter: {state.count}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
