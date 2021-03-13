// 递归
function preorderTraversal(root, arr = []) {
  if (root) {
    arr.push(root.val)
    preorderTravesal(root.left, arr)
    preorderTravesal(root.right, arr)
  }
  return arr
}

// 迭代
function preorderTraversal(root) {
  const result = []
  const stack = []
  let current = root
  while (current || stack.length) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return result
}