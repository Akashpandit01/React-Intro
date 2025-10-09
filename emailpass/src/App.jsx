import React, { useReducer } from "react";

// Initial state
const initialState = {
  email: "",
  password: "",
  submitted: false,
};

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return { ...initialState };
    default:
      throw new Error("invalid action type");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: "submit" }); // We can just use `submitted` flag
      state.submitted = true;
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="submit" style={{ marginRight: "10px" }}>
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <div style={{ marginTop: "20px" }}>
        {!state.email && !state.password ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
