import React, { useContext, useState } from "react";
import BoardContext from "../../contexts/boardContext";

export default function CreateBoardButtons() {
  const { boardSize, setBoardSize, setIsRunning } = useContext(BoardContext);
  //create state for new board size
  const [newBoardSize, setNewBoardSize] = useState(boardSize);

  //function to reset board
  //set boardsize to newboardsize
  //set isrunning to false
  const handleReset = () => {
    setBoardSize(newBoardSize);
    setIsRunning(false);
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
