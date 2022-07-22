import React, { useState } from "react";
import Board from "./Board";
import { create2DArray } from "../utils/utils";
import BoardContext from "../contexts/boardContext";
import AdvanceButton from "./AdvanceButton";
import AutoButtons from "./AutoButtons";
import CreateBoardButtons from "./CreateBoardButtons";
import WrappingButton from "./WrappingButton";
import TextGeneration from "./TextGeneration";

export default function Game() {
  //create state for boardSize
  const [boardSize, setBoardSize] = useState(30);
  //create state for baord
  const [board, setBoard] = useState(create2DArray(boardSize, boardSize));
  //create state for generation
  const [generation, setGeneration] = useState(0);
  //create state for wrapping
  const [wrapping, setWrapping] = useState(false);

  return (
    <BoardContext.Provider value={{ board, setBoard, boardSize, setBoardSize, generation, setGeneration, wrapping, setWrapping }}>
    <div>
      <TextGeneration />
      <WrappingButton />
      <CreateBoardButtons />
      <AutoButtons />
      <AdvanceButton />
      <Board />
    </div>
    </BoardContext.Provider>
  );
}
