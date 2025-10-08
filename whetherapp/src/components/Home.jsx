import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1> Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "5px",
          background: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Home;
