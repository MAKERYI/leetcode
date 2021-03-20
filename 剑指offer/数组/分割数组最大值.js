function splitArray(array, n) {
  let left = 0
  let right = 0
  
  for (let i = 0; i < array.length; i++) {
    if (left < array[i]) left = array[i]
    right += array[i]
  }
  
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (check(array, mid, n)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function check(arr, x, n) {
  let sum = 0
  let cnt = 1

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > x) {
      sum = arr[i]
      cnt++
    } else {
      sum += arr[i]
    }
  }

  return cnt <= n
}

const arr = [3, 4, 8, 5, 10, 9]

console.log(splitArray(arr, 3))