function spotlightMap(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const spotlightGrid = [];

  // Calculate the spotlight sum for each number in the grid
  for (let i = 0; i < numRows; i++) {
    spotlightGrid[i] = [];
    for (let j = 0; j < numCols; j++) {
      const currentNum = grid[i][j];
      let sum = currentNum;

      // Check adjacent numbers and add them to the sum
      if (i - 1 >= 0) {
        sum += grid[i - 1][j]; // Above
      }
      if (i + 1 < numRows) {
        sum += grid[i + 1][j]; // Below
      }
      if (j - 1 >= 0) {
        sum += grid[i][j - 1]; // Left
      }
      if (j + 1 < numCols) {
        sum += grid[i][j + 1]; // Right
      }

      spotlightGrid[i][j] = sum; // Store the spotlight sum in the new grid
    }
  }

  return spotlightGrid;
}

// Example usage:
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transformedGrid = spotlightMap(grid);
console.log(transformedGrid);
