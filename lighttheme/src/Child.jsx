// Child.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import GrandChild from "./GrandChild";

function Child() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "#f0f0f0" : "#333";
  const color = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ backgroundColor: bgColor, color, padding: "20px" }}>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

export default Child;
