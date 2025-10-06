// GrandChild.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function GrandChild() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "#e0e0e0" : "#555";
  const color = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ backgroundColor: bgColor, color, padding: "20px", marginTop: "10px" }}>
      <h3>GrandChild Component</h3>
    </div>
  );
}

export default GrandChild;
