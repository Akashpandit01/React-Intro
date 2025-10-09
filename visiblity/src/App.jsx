import React, { useReducer } from "react";

const initialState = { isVisible: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { isVisible: !state.isVisible };
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
      <button
        onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Toggle Message
      </button>
      {state.isVisible && <h2>Hello, World!</h2>}
    </div>
  );
}

export default App;
