// App.jsx
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Child from "./Child";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "#fff" : "#222";
  const color = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ backgroundColor: bgColor, color, minHeight: "100vh", padding: "20px" }}>
      <h1>React Context API - Theme Example</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <Child />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

