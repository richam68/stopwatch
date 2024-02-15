import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let id;
    if (isActive) {
      id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(id);
    }
    //clean-up function
    return () => {
      clearInterval(id);
    };
  }, [isActive, time]);

  const stopButton = () => {
    setIsActive(!isActive);
  };

  const resetButton = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;

    let formattedMinutes = String(minutes).padStart(1, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h3>Time: {formatTime(time)}</h3>
      <button onClick={stopButton}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={resetButton} style={{ backgroundColor: "#7fa99b" }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
