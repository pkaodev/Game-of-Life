import React, { useState, useContext, useEffect } from "react";
import { createNextGeneration } from "../utils/utils";
import BoardContext from "../contexts/boardContext";

export default function AutoButtons() {
  const { board, setBoard } = useContext(BoardContext);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(100);

  //if !isRunning, set to true and vice versa
  //for clicking button to start/stop
  const handleIsRunning = () => {
    setIsRunning(!isRunning);
    console.log(isRunning);
  }

  //if isRunning, invoke createNextGeneration every ???/speed ms
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        createNextGeneration(board, setBoard);
      }, 500/speed);
      return () => clearInterval(interval);
    }
  }, [isRunning, board, setBoard, speed]);
  

  //start simulation whenever isRunning state changes
  // useEffect(() => {
  //   console.log("useEffect", isRunning);
  //   if (isRunning) {
  //     console.log("STARTING SIMULATION");
  //     runSimulation(isRunning);
  //   }
  // }, [isRunning]);

  return (
    <div className="auto-buttons">
      Speed:
      {/*text box to set speed*/}
      <input
        className="speed-input"
        type="text"
        value={speed}
        onChange={(e) => {
          setSpeed(e.target.value);
        }}
      />
      {/*Button to start or stop*/}
      <button
        className="start-stop-button"
        onClick={handleIsRunning}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
