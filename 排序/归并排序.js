// 基础版
const mergeSort = array => {
  if (!array) return
  if (array.length < 2) return array
  const mid = Math.floor(array.length / 2)
  const front = array.slice(0, mid)
  const end = array.slice(mid)
  return sort(mergeSort(front), mergeSort(end))
}

const sort = (front, end) => {
  const temp = []
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift())
    } else {
      temp.push(end.shift())
    }
  }
  while (front.length) {
    temp.push(front.shift())
  }
  while (end.length) {
    temp.push(end.shift())
  }
  return temp
}

const arr = [2, 4, 5, 3, 1, 2]
console.log(mergeSort(arr))