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
    <div className="create-board-buttons">
      Board Size:
      {/*text box to set speed*/}
      <input
        className="size-input"
        type="text"
        value={newBoardSize}
        onChange={(e) => {
          setNewBoardSize(e.target.value);
        }}
      />
      {/*Button to start or stop*/}
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
