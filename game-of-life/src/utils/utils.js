//function to create 2D array
function create2DArray(rows, cols) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    for (let j = 0; j < cols; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}

//function to to create next generation of board
function createNextGeneration(board, setBoard, generation, setGeneration) {
  //create a new board of same size
  let nextBoard = create2DArray(board.length, board[0].length);
  //for each cell in the board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      //count number of alive neighbor cells
      let neighbors = 0;
      //for each neighbor cell
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          //ignore out of bounds cells
          if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            continue;
          }
          //ignore the cell itself
          if (i === row && j === col) {
            continue;
          }
          //increment neighbor count if cell is alive
          board[i][j] && neighbors++;
        }
      }
      //if cell is alive and has 2 or 3 neighbors keep it alive
      if (board[row][col] && (neighbors === 2 || neighbors === 3)) {
        nextBoard[row][col] = 1;
      }
      //else if cell is dead and has 3 neighbors make it alive
      else if (!board[row][col] && neighbors === 3) {
        nextBoard[row][col] = 1;
      }
      //else if cell is alive and has less than 2 or more than 3 neighbors kill it
      else if (board[row][col] && (neighbors < 2 || neighbors > 3)) {
        nextBoard[row][col] = 0;
      }
      //else keep it dead
      else {
        nextBoard[row][col] = 0;
      }
    }
  }
  //set the new board
  setGeneration(generation + 1);
  setBoard(nextBoard);
}

//function to create next generation of board with wrapping
function createNextGenerationWrapping(board, setBoard, generation, setGeneration) {
  //create a new board of same size
  let nextBoard = create2DArray(board.length, board[0].length);
  //for each cell in the board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      //count number of alive neighbor cells
      let neighbors = 0;
      //for each neighbor cell
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          //ignore the cell itself
          if (i === row && j === col) {
            continue;
          }
          //THIS IS THE WRAPPING SECTION
          //DONT ignore out of bounds cells
          //IF something is out bounds
          //new variable i2 and j2 to wrap around the board
          let i2 = i;
          let j2 = j;
          //IF wrapped around i down
          if (i < 0) {
              //set i2 to the last row
              i2 = board.length - 1;
            // else if wrapped around i up
            } else if (i >= board.length) {
              //set i2 to the first row
              i2 = 0;
            }
            //IF wrapped around j down
            if (j < 0) {
              //set j2 to the last col
              j2 = board[0].length - 1;
            // else if wrapped around j up
            } else if (j >= board[0].length) {
              //set j2 to the first col
              j2 = 0;
            }
            //increment neighbor count if cell is alive
            board[i2][j2] && neighbors++;
          }
        }
        //if cell is alive and has 2 or 3 neighbors keep it alive
        if (board[row][col] && (neighbors === 2 || neighbors === 3)) {
          nextBoard[row][col] = 1;
          
        }
        //else if cell is dead and has 3 neighbors make it alive
        else if (!board[row][col] && neighbors === 3) {
          nextBoard[row][col] = 1;
        }
        //else if cell is alive and has less than 2 or more than 3 neighbors kill it
        else if (board[row][col] && (neighbors < 2 || neighbors > 3)) {
          nextBoard[row][col] = 0;
        }
        //else keep it dead
        else {
          nextBoard[row][col] = 0;
        }
      }
    }
    //set the new board
    setGeneration(generation + 1);
    setBoard(nextBoard);
  }



module.exports = { create2DArray, createNextGeneration, createNextGenerationWrapping };
