const countingSort = arr => {
  if (arr.length === 0) return arr
  const bucketLen = Math.max(...arr) + 1
  const bucket = new Array(bucketLen)
  const len = arr.length
  let sortedIndex = 0
  for (let i = 0; i < len; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    } 
  }
  return arr
}

const arr = [1, 3, 5, 2, 3, 4]

console.log(countingSort(arr))

