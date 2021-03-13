/**
*
*
* 说明:计算多个区间的交集。
* 区间用长度为2的数字数组表示，如[2, 5]表示区间2到5(包括2和5); * 区间不限定方向，如[5, 2]等同于[2, 5];
* 实现getIntersection，可接收多个区间，并返回所有区间的交集(用区间表示)，如空集用null 表示
* 示例:
* getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5] * getIntersection([1, 7], [8, 9]); // null
*/

// const getIntersection = (...arguments) => {
//   if (arguments.length <= 1) return null
//   arguments.forEach(item => {
//     item.sort((a, b) => a - b)
//   })
//   arguments.sort((a, b) => a[0] - b[0] || a[1] - b[1])
//   let catcher = true
//   const res = arguments.reduce((pre, cur, index) => {
//     if (index === 1 && pre[1] < cur[0]) {
//       catcher = false
//     }
//     if (pre[0] < cur[0] && pre[1] >= cur[0]) {
//       pre[0] = cur[0]
//     }
//     if (pre[1] > cur[1] && pre[0] <= cur[1]) {
//       pre[1] = cur[1]
//     }
//     return pre
//   })
//   if (res[0] === arguments[0][0] && res[1] === arguments[0][1] && !catcher ) return null
//   return res
// }

const getIntersection = (...args) => {
  let left = []
  let right = []
  args.forEach(item => {
    left.push(Math.max(...item))
    right.push(Math.min(...item))
  })
  console.log(left)
  console.log(right)
  const leftIdx = Math.max(...left)
  const rightIdx = Math.min(...right)
  console.log(leftIdx)
  console.log(rightIdx)
  return leftIdx > rightIdx ? null : [leftIdx, rightIdx]
}

console.log(getIntersection([5, 2], [4, 9], [3, 6]))