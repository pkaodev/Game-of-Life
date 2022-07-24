import React, { useState, useContext, useEffect } from "react";
import { createNextGeneration, createNextGenerationWrapping } from "../../utils/utils";
import BoardContext from "../../contexts/boardContext";

export default function AutoButtons() {
  const { board, setBoard, wrapping, generation, setGeneration, isRunning, setIsRunning } = useContext(BoardContext);
  const [speed, setSpeed] = useState(2);

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
        if (!wrapping) {
        createNextGeneration(board, setBoard, generation, setGeneration);
        }
        else {
          createNextGenerationWrapping(board, setBoard, generation, setGeneration);
        }
      }, 500/speed);
      return () => clearInterval(interval);
    }
  }, [isRunning, board]);
  



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
