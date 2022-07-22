import React, { useContext } from "react";
import BoardContext from "../contexts/boardContext";
import { createNextGeneration } from "../utils/utils";

export default function AdvanceButton() {
  const { board, setBoard } = useContext(BoardContext);
  return (
    <div
      className="advance-button"
      onClick={() => {
        createNextGeneration(board, setBoard);
      }}
    >
        Advance 1
    </div>
  );
}
