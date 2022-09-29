function isSymmetric (root) {
  if (root == null) return true

  return isSymmetricHelper(root.left, root.right)

};
function isSymmetricHelper (left, right) {
  if (left == null && right == null) return true // 如果左节点和右节点都为空，则说明对称

  // 如果左节点为空或右节点为空或者左节点的值不等于右节点的值，直接返回false
  if (left == null || right == null || left.val !== right.val) {
    return false
  }

  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left)

}