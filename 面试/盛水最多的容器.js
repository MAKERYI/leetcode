function getMaxArea(array) {
  let i = 0
  let j = array.length - 1
  let maxArea = 0
  let currentArea
  while (i < j) {
    currentArea = Math.min(array[i], array[j]) * (j - i)
    if (currentArea > maxArea) {
      maxArea = currentArea
    }
    if (array[i] > array[j]) {
      j--
    } else {
      i++
    }
  }
  console.log(maxArea)
  return maxArea
}

getMaxArea([1,8,6,2,5,4,8,3,7])

