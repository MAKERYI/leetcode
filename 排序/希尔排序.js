const shellSort = arr => {
  if (arr.length === 0) return arr
  const len = arr.length
  let gap = 1
  let temp
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  return arr
}

const arr = [1, 4, 6, 2, 3, 9, 8, 0, 7]

console.log(shellSort(arr))