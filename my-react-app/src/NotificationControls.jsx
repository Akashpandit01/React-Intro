// NotificationControls.jsx
import React, { useContext } from "react";
import { NotificationContext } from "./context/NotificationContext";


function NotificationControls() {
  const { markAllAsRead, stopNotifications } = useContext(NotificationContext);

  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={markAllAsRead} style={{ marginRight: "10px" }}>
        Mark All as Read
      </button>
      <button onClick={stopNotifications}>Stop Notifications</button>
    </div>
  );
}

export default NotificationControls;
