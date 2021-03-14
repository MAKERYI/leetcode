const insertSort = array => {
  if (!array.length) return array
  for (let i = 1; i < array.length; i++) { 
    for (let j = i - 1; j >= 0 && array[j] > array[j+1]; j--) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
    }
  }
  return array
}

const arr = [2, 4, 5, 3, 1, 2]
console.log(insertSort(arr))