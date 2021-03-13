// 假设 arr 为升序 
function binarySearch(target, arr, start, end) {
  if (start > end) return -1
  let mid = Math.floor((start + end) / 2)
  if (arr[mid] > target) return binarySearch(target, arr, start, mid - 1)
  if (arr[mid] < target) return binarySearch(target, arr, mid + 1, end)
  return mid
}

const arr = [1, 4, 6, 7, 9]

console.log(binarySearch(8, arr, 0, 4))