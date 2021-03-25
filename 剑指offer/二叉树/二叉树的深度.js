/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS
function getDepth(root) {
  if (!root) return 0
  return Math.max(getDepth(root.left), getDepth(root,right)) + 1
}

// BFS

function getDepth(root) {
  if (!root) return 0
  let queue = [root]
  let res = 0
  while (queue.length) {
    let levelNum = queue.length
    res++
    while (levelNum--) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}