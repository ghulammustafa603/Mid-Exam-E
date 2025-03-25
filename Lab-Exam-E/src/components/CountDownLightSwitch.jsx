import React, { useState, useEffect } from "react";
import "./CountDownLightSwitch.css";

const CountdownThemeToggle = () => {
  // State to track dark mode (true = dark, false = light)
  const [darkMode, setDarkMode] = useState(false);
  // State to track countdown time
  const [timeLeft, setTimeLeft] = useState(30);
  // State to check if timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Function to switch between light and dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // This effect runs every second when the timer is active
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setDarkMode(!darkMode); // Change theme when timer ends
    }
    return () => clearTimeout(timer); // Clean up timer when component updates
  }, [isRunning, timeLeft]);

  return (
    <div className={`container ${darkMode ? "dark-theme" : "light-theme"}`}>
      {/* Header Section */}
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          {/* Toggle Button for Light/Dark Mode */}
          <label className="toggle-switch">
            <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
            <span className="slider"></span>
          </label>
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>

      {/* Timer Section */}
      <div className="timer-section">
        {/* Progress Bar that fills based on time left */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
        </div>
        {/* Display Countdown Time */}
        <div className="timer">{timeLeft}s</div>
        {/* Start and Reset Button */}
        <div className="btn-group">
          {!isRunning ? (
            <button onClick={() => setIsRunning(true)}>Start Timer</button>
          ) : (
            <button onClick={() => {
              setTimeLeft(30); // Reset timer to 30 seconds
              setIsRunning(false); // Stop the timer
            }}>Reset Timer</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownThemeToggle;
