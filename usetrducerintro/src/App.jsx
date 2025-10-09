import React, { useReducer } from "react";
import "./App.css"; // optional CSS for styling

// Step 2: Define the initial state
const initialState = {
  theme: "light",
};

// Step 3: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

function App() {
  // Step 4: Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 5: Toggle theme handler
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Current Theme: {state.theme}</h1>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
