import React, { useState, useEffect } from "react";
import Board from "./Board";
import { create2DArray } from "../utils/utils";
import BoardContext from "../contexts/boardContext";
import ButtonHolder from "./Buttons/ButtonHolder";

export default function Game() {
  //create state for boardSize
  const [boardSize, setBoardSize] = useState(24);
  //create state for baord
  const [board, setBoard] = useState(create2DArray(boardSize, boardSize));
  //create state for generation
  const [generation, setGeneration] = useState(0);
  //create state for wrapping
  const [wrapping, setWrapping] = useState(false);
  //create state for simulation running auto
  const [isRunning, setIsRunning] = useState(false);


  //create new board when component mounts
  useEffect(() => {
    setBoard(create2DArray(boardSize, boardSize));
  }
  , []);


  return (
    <BoardContext.Provider value={{ isRunning, setIsRunning, board, setBoard, boardSize, setBoardSize, generation, setGeneration, wrapping, setWrapping }}>
    <div className='game'>
      <Board />
      <ButtonHolder />
    </div>
    </BoardContext.Provider>
  );
}
