import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [currentState, setCurrentState] = useState('')
  const [time, setTime] = useState(0);
  const [hide, setHide] = useState(false);
  const ref = useRef();

  let sec = Math.floor(time / 1000);
  let min = Math.floor(sec / 60);
  //let hour = Math.floor(min / 60);

  let seconds = (sec % 60).toString().padStart(2, "0");
  let minutes = (min % 60).toString().padStart(2, "0");
  //   let hours = (hour % 24).toString().padStart(2, "0");

  useEffect(() => {
    //clean-up function
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const startButtom = () => {
    setHide(true);
    if(currentState === "START"){
        setCurrentState("START")
    }
    ref.current = setInterval(() => {
      setTime((prev) => prev + 1000);
    }, 1000);
  };

  const stopButton = () => {
    setHide(false);
    if(currentState === "STOP"){
        setCurrentState("STOP")
    }
    clearInterval(ref.current);
  };

  const resetButton = () => {
    if(currentState === "RESET") return
    setTime(0);
  };
  
  return (
    <div>
      <h2>Stop Watch</h2>

      <h3>
        Time:<span>{minutes}</span>:<span>{seconds}</span>
      </h3>
      {hide ? (
        <button onClick={stopButton} style={{ backgroundColor: "#fdc57b" }}>
          Stop
        </button>
      ) : (
        <button onClick={startButtom} style={{ backgroundColor: "#ffd3b6" }}>
          Start
        </button>
      )}
      <button onClick={resetButton} style={{ backgroundColor: "#7fa99b" }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
