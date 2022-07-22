import React, { useState } from "react";
import Board from "./Board";
import { create2DArray } from "../utils/utils";
import BoardContext from "../contexts/boardContext";

export default function Game() {
  //original setup variables
  const boardSize = 20;

  //create original board
  const [board, setBoard] = useState(
    create2DArray(boardSize, boardSize)
  );

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
    <div>
      <Board />
    </div>
    </BoardContext.Provider>
  );
}
