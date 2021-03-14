// 未考虑到负数的情况
const radixSort = arr => {
  if (!arr) return
  if (arr.length <=1) return arr
  let counter = []
  const maxDigit = Math.max(...arr).toString().length
  let mod = 10
  let dev = 1
  for (let i = 0; i < maxDigit; i++, mod *= 10, dev *= 10) {
    for (let j = 0; j < arr.length; j++) {
      const bucket = parseInt((arr[j] % mod) / dev)
      if (!counter[bucket]) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    let pos = 0
    for (let k = 0; k < counter.length; k++) {
      let value = null
      if (counter[k] != null) {
        while ((value = counter[k].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  return arr
}

const arr  = [4, 6, 29, 32, 90, 1, 73]

console.log(radixSort(arr))