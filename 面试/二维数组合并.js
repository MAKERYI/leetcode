/*
示例：
  输入：[[1, 5], [9, 11] [4, 7], [11, 13]]
  输出：[[1, 7], [9, 13]]
*/

function unite(array) {
  if (array.length < 2) return array
  array.sort((a, b) => a[0] - b[0])
  console.log(array)
  let res = []
  for (let i = 0; i < array.length; i++) {
    if (res.length === 0) {
      if (array[i][1] >= array[i + 1][0]) {
        res.push([array[i][0], Math.max(array[i][1], array[i + 1][1])])
      } else {
        res.push(array[i])
      }
    } else {
      const temp = res[res.length -1]
      if (temp[1] >= array[i][0]) {
        res.pop()
        res.push([temp[0], Math.max(temp[1], array[i][1])])
      } else {
        res.push(array[i])
      }
    }
  }
  console.log(res)
  return res
}

let arr = [[1, 5], [9, 11], [2, 7], [11, 13]]

unite(arr)