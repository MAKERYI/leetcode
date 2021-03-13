// 递归
function postorderTraversal(root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }
  return arr
}

// 迭代
function postorderTraversal(root) {
  const result = []
  const stack = []
  let last = null // 标记上一个访问的节点
  let current = []
  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack[stack.length - 1]
    if (!current.right || current.right == last ) {
      current = stack.pop()
      result.push(current.val)
      last = current
      current = null // 继续弹栈
    } else {
      current = current.right
    }
  }
  return result
}