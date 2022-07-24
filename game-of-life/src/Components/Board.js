import React, { useState, useContext, useEffect } from "react";
import { create2DArray } from "../utils/utils";
import BoardContext from "../contexts/boardContext";

export default function Board() {
  const {board, setBoard} = useContext(BoardContext);

  //changes clicked cell to alive or dead
  const handleBoardClick = (rowIndex, cellIndex) => {
    const newBoard = board.map( row => {
      return row.slice();
    })
    if (newBoard[rowIndex][cellIndex] === 0) {
    newBoard[rowIndex][cellIndex] = 1;
    } else {
    newBoard[rowIndex][cellIndex] = 0;
    }
    setBoard(newBoard);
  }


  

  return (
    <div className="board">
      {board.map((row, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div
                  className={`cell 
                  ${cell ? "cell--alive" : "cell--dead"}`}
                  onClick = {() => {handleBoardClick(rowIndex, cellIndex)}}
                  key={cellIndex}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
