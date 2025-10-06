// Footer.jsx
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ padding: "10px", backgroundColor: "#e0e0e0" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
}

export default Footer;
