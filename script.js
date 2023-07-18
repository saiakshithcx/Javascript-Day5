function spotlightMap(grid) {
  const num_Rows = grid.length;
  const num_Cols = grid[0].length;
  const result = [];

  for (let k = 0; k< num_Rows; k++) {
    const row = [];

    for (let h = 0; h < num_Cols; h++) {
      let sum = 0;
      for (let x = k - 1; x <= k + 1; x++) {
        for (let y = h - 1; y <= h+ 1; y++) {
          if (x >= 0 && x < num_Rows && y >= 0 && y < num_Cols) {
            sum += grid[x][y];
          }
        }
      }

      row.push(sum);
    }

    result.push(row);
  }

  return result;
}
const grid1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spotlightMap(grid1));
const grid2 = [
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
];
console.log(spotlightMap(grid2));

const grid3 = [[3]];
console.log(spotlightMap(grid3));
