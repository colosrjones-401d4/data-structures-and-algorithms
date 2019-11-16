
var matrix = [
  [1, 2, 6, 8],
  [3, 4, 0, 4],
  [5, 6, 7, 2],
  [2, 6, 8, 9]
];
console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[1][0]); // 3
console.log(matrix[2][2]); // 7
//to find 0 on 2D array
console.log(matrix[1][2]); // 0
console.log(matrix);

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0;  j < matrix.length; j++)
    console.log('[' + i + ',' + j + '] = ' + matrix[i][j]);
}
