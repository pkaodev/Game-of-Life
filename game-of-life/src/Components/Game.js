import React, { useState } from "react";
import Board from "./Board";
import { create2DArray } from "../utils/utils";
import BoardContext from "../contexts/boardContext";
import AdvanceButton from "./AdvanceButton";
import AutoButtons from "./AutoButtons";
import CreateBoardButtons from "./CreateBoardButtons";

export default function Game() {
  //create state for boardSize
  const [boardSize, setBoardSize] = useState(40);
  //original setup variables
  //create original board
  const [board, setBoard] = useState(create2DArray(boardSize, boardSize));

  return (
    <BoardContext.Provider value={{ board, setBoard, boardSize, setBoardSize }}>
    <div>
      <CreateBoardButtons />
      <AutoButtons />
      <AdvanceButton />
      <Board />
    </div>
    </BoardContext.Provider>
  );
}
