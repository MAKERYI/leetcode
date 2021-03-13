// 基础版本
const quickSort = array => {
  if (!array) return
  if (array.length < 2) return array
  let target = array[0]
  const left = []
  const right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat([target], quickSort(right))
}

// 优化版
const quickSort2 = (array, start, end) => {
  if (end - start < 1) return
  let target = array[start]
  let l = start
  let r = end
  while (l < r) {
    while (l < r && array[r] >= target) {
      r--
    }
    array[l] = array[r]
    while (l < r && array[l] < target) {
      l++
    }
    array[r] = array[l]
  }
  array[l] = target
  quickSort2(array, start, l - 1)
  quickSort2(array, l + 1, end)
  return array
}

const arr = [1, 4, 6, 3, 5, 2]

console.log(quickSort2(arr, 0, 5))