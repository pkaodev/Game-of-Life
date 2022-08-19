import React, { useContext, useState } from "react";
import BoardContext from "../../contexts/boardContext";
import { create2DArray } from "../../utils/utils";

export default function CreateBoardButtons() {
  const { boardSize, setBoardSize, setIsRunning, setGeneration, setBoard } = useContext(BoardContext);
  //create state for new board size
  const [newBoardSize, setNewBoardSize] = useState(boardSize);

  //function to reset board
  //set boardsize to newboardsize
  //set generation to 0
  //set isrunning to false
  //clears board
  const handleReset = () => {
    setBoardSize(newBoardSize);
    setGeneration(0)
    setIsRunning(false);
    setBoard(create2DArray(newBoardSize, newBoardSize));
  };

  return (
    <div className='button-holder'>
      <p className='text--terminal'>Board Size:</p>
      <input
        className="input--board-size"
        type="text"
        value={newBoardSize}
        onChange={(e) => {
          setNewBoardSize(e.target.value);
        }}
        />
      <button className="button reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
