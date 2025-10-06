// Navbar.jsx
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
}

export default Navbar;
