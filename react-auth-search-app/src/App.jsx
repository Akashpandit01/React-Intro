import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CountryList from "./pages/CountryList.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <AuthProvider>
      <div style={{ backgroundColor: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff", minHeight: "100vh", transition: "all 0.3s" }}>
        <Router>
          <div style={{ padding: "10px" }}>
            <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>Toggle Theme</button>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/countries" element={<PrivateRoute><CountryList /></PrivateRoute>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
