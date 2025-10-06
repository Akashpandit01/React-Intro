// App.jsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import Footer from "./footer";
import Mains from "./Mains";


function App() {
  return (
    <AuthProvider>
      <div style={{ fontFamily: "sans-serif" }}>
        <Navbar />
        <Mains />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
