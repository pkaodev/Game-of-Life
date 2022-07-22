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
function createNextGeneration(board, setBoard) {
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
  setBoard(nextBoard);
}

module.exports = { create2DArray, createNextGeneration };
