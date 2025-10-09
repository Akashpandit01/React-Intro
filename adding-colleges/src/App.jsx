import React, { useReducer, useState } from "react";

// Initial state
const initialState = {
  name: "",
  year: "",
  address: {
    building: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  },
  courses: [""],
};

// Reducer function
const collegeReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "year":
      return { ...state, year: action.payload };
    case "address":
      return { ...state, address: { ...state.address, ...action.payload } };
    case "course":
      const newCourses = [...state.courses];
      newCourses[action.index] = action.payload;
      return { ...state, courses: newCourses };
    case "addCourse":
      return { ...state, courses: [...state.courses, ""] };
    case "removeCourse":
      return {
        ...state,
        courses: state.courses.filter((_, idx) => idx !== action.index),
      };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(collegeReducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!state.name || !state.year) {
        throw new Error("Name and Year are required");
      }
      setSubmittedData(state);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setSubmittedData(null);
    setError(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Add College</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Establishment Year:</label>
          <input
            type="number"
            value={state.year}
            onChange={(e) => dispatch({ type: "year", payload: e.target.value })}
            required
          />
        </div>

        <h4>Address</h4>
        {["building", "street", "city", "state", "pincode", "landmark"].map(
          (field) => (
            <div key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type="text"
                value={state.address[field]}
                onChange={(e) =>
                  dispatch({
                    type: "address",
                    payload: { [field]: e.target.value },
                  })
                }
              />
            </div>
          )
        )}

        <h4>Courses Offered</h4>
        {state.courses.map((course, idx) => (
          <div key={idx} style={{ display: "flex", marginBottom: "5px" }}>
            <input
              type="text"
              value={course}
              onChange={(e) =>
                dispatch({ type: "course", index: idx, payload: e.target.value })
              }
              placeholder={`Course ${idx + 1}`}
            />
            <button
              type="button"
              onClick={() => dispatch({ type: "removeCourse", index: idx })}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => dispatch({ type: "addCourse" })}>
          Add Course
        </button>

        <div style={{ marginTop: "15px" }}>
          <button type="submit" style={{ marginRight: "10px" }}>
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted College Details</h3>
          <div>Name: {submittedData.name}</div>
          <div>Establishment Year: {submittedData.year}</div>
          <h4>Address:</h4>
          {Object.entries(submittedData.address).map(([key, val]) => (
            <div key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {val}
            </div>
          ))}
          <h4>Courses:</h4>
          <ul>
            {submittedData.courses.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
