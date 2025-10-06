// Main.jsx
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Mains() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "20px" }}>
      {isLoggedIn ? (
        <h1>Welcome back, User!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
    </main>
  );
}

export default Mains;
