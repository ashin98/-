function inordertraversal (root) {
  let res = []
  const inorder = (node) => {
    if (!node) return res
    inorder(node.left)
    res.push(node.value)
    inorder(node.right)
  }
  inorder(root)
  return res
}