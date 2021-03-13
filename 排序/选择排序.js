const selection = array => {
  if (!array) return
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

const arr = [1, 5, 4, 2, 6, 3]
console.log(selection(arr))