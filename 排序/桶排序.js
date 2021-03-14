const insertSort = array => {
  if (!array.length) return array
  for (let i = 1; i < array.length; i++) { 
    for (let j = i - 1; j >= 0 && array[j] > array[j+1]; j--) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
    }
  }
  return array
}

const bucketSort = (arr, bucketSize) => {
  if (arr.length === 0) return arr
  const maxValue = Math.max(...arr)
  const minValue = Math.min(...arr)
  const BUCKET_DEFAULT_SIZE = 5
  bucketSize = bucketSize || BUCKET_DEFAULT_SIZE
  const bucketCount = Math.floor((maxValue + minValue) / bucketSize) + 1
  const buckets = new Array(bucketCount) // 🆘 不能直接 new Array(bucketCount).fill([]) 因为数组是引用类型！！
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }
  arr.length = 0
  for (let i = 0; i < buckets.length; i++) {
    insertSort(buckets[i])
    arr.push(...buckets[i])
  }
  return arr
}
const arr = [3, 5, 7, 2, 1, 9]

// bucketSort(arr, 3)
console.log(bucketSort(arr, 3))

