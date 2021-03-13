const insertSort = array => {
  for (let i = 1; i < array.length; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[target]) {
        [array[j], array[target]] = [array[target], array[j]]
        target = j
      } else {
        break
      }
    }
  }
  return array
}

const arr = [2, 4, 5, 3, 1, 2]
console.log(insertSort(arr))