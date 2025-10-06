
import React, { createContext, useState, useEffect } from "react";

// Create Context
export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  // Add new notification
  const addNotification = (message) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, read: false },
    ]);
    // Optional: Play sound
    // new Audio('/notification-sound.mp3').play();
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Stop notifications
  const stopNotifications = () => {
    if (intervalId) clearInterval(intervalId);
  };

  // Simulate incoming notifications every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      addNotification("You have a new message");
    }, 5000);

    setIntervalId(id);

    // Cleanup interval on unmount
    return () => clearInterval(id);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAllAsRead, stopNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
