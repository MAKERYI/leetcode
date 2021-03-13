/* 
给定一个 n × n 的二维矩阵表示一个图像，将图像顺时针旋转 90 度。
你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

let rotate = function(matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
      }
  }

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }
};

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

rotate(matrix)

console.log(matrix)
