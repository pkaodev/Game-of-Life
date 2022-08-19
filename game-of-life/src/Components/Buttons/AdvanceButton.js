import React, { useContext } from "react";
import BoardContext from "../../contexts/boardContext";
import { createNextGeneration, createNextGenerationWrapping} from "../../utils/utils";

export default function AdvanceButton() {
  const { board, setBoard , wrapping, generation, setGeneration} = useContext(BoardContext);
  return (
    <div className='button-holder'>
      <p className='text--terminal'>Advance 1 generation</p>
    <button
      className="basic-border button"
      onClick={() => {
        if (!wrapping) {
        createNextGeneration(board, setBoard, generation, setGeneration);
        }
        else {
          createNextGenerationWrapping(board, setBoard, generation, setGeneration);
        }

      }}
    >
        Step
    </button>
    </div>
  );
}
