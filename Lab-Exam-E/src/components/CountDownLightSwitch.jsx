import React from 'react'

const CountDownLightSwitch = () => {
  return (
    <div class="container">
    {/* <!-- Header with Title and Theme Toggle --> */}
    <div class="header">
      <h1>Countdown & Light Switch</h1>
      <div class="toggle-container">
        <label class="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span class="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    {/* <!-- Timer and Progress Section --> */}
    <div class="timer-section">
      <div class="progress-bar">
        <div class="progress" id="progress"></div>
      </div>
      <div class="timer" id="timerDisplay">30s</div>
      <div class="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton" style="display: none;">Reset Timer</button>
      </div>
      <div class="message" id="messageArea"></div>
    </div>
  </div>

     )
}

export default CountDownLightSwitch
