import React, { useContext } from "react";
import BoardContext from "../contexts/boardContext";
import { createNextGeneration, createNextGenerationWrapping} from "../utils/utils";

export default function AdvanceButton() {
  const { board, setBoard , wrapping, generation, setGeneration} = useContext(BoardContext);
  return (
    <div
      className="advance-button"
      onClick={() => {
        if (!wrapping) {
        createNextGeneration(board, setBoard, generation, setGeneration);
        }
        else {
          createNextGenerationWrapping(board, setBoard, generation, setGeneration);
        }

      }}
    >
        Advance 1
    </div>
  );
}
