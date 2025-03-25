import React, { useState } from "react";
import "./CountDownLightSwitch.css";

const CountdownThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-theme" : "light-theme"}`}>
      {/* Header */}
      <div className="header">
        <h1>Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownThemeToggle;
