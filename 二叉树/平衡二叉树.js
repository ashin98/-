var isBalanced = function (root) {
  if (!root) return true
  // 左子树是是平衡二叉树，右子树也是平衡二叉树，左子树与右子树的差值小于等于1
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(deep(root.left) - deep(root.right)) <= 1

  function deep (node) {
    // 计算深度
    if (!node) return -1
    return 1 + Math.max(deep(node.left), deep(node.right))
  }
}