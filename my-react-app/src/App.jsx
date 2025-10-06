// App.jsx
import React from "react";



import { NotificationProvider } from "./context/NotificationContext";
import NotificationList from "./NotificationList";
import NotificationControls from "./NotificationControls";

function App() {
  return (
    <NotificationProvider>
      <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "sans-serif" }}>
        <h1>Real-Time Notification Panel</h1>
        <NotificationControls/>
        <NotificationList />
      </div>
    </NotificationProvider>
  );
}

export default App;
