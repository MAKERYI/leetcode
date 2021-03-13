const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]]
}

const heap = array => {
  if (!array) return
  if (arr.length < 2) return array
  // 建立大顶堆
  for (let i = 0; i < array.length; i++) {
    heapInsert(array, i)
  }
  let size = array.length
  swap(array, 0, --size)
  // 不断交换
  while (size > 0) {
    heapSort(array, 0, size)
    swap(array, 0, --size)
  }
  return array
}

const heapInsert = (array, index) => {
  while (array[index] > array[parseInt((index - 1) / 2)]) {
    swap(array, index, parseInt((index - 1) / 2))
    index = parseInt((index - 1) / 2)
  }
}

const heapSort = (array, index, size) => {
  let left = index * 2 + 1
  while (left < size) {
    // 比较得出较大子节点
    let largest = left + 1 < size && array[left] < array[left + 1] ? left + 1 : left
    // 较大子节点与父节点比较
    largest = array[largest] < array[index] ? index : largest
    if (largest === index) break
    swap(array, index, largest)
    index = largest
    left = index * 2 + 1
  }
}

const arr = [1, 3, 5, 2, 7, 4]

console.log(heap(arr))