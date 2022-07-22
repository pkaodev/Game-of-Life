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

module.exports = { create2DArray };
