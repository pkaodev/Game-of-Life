import React, { useContext } from "react";

import BoardContext from "../contexts/boardContext";

export default function Board() {
  const { board, setBoard, wrapping } = useContext(BoardContext);

  //changes clicked cell to alive or dead
  const handleBoardClick = (rowIndex, cellIndex) => {
    const newBoard = board.map((row) => {
      return row.slice();
    });
    if (newBoard[rowIndex][cellIndex] === 0) {
      newBoard[rowIndex][cellIndex] = 1;
    } else {
      newBoard[rowIndex][cellIndex] = 0;
    }
    setBoard(newBoard);
  };

  return (
    <div
      className="board"
      style={
        wrapping ? null : { border: "solid red 10px", borderRadius: "10px" }
      }
    >
      {board.map((row, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <div
                  className={`cell 
                  ${cell ? "cell--alive" : "cell--dead"}`}
                  onClick={() => {
                    handleBoardClick(rowIndex, cellIndex);
                  }}
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
