function preordertraversal (root) {
  let res = []
  const preorder = (node) => {
    if (!node) return res
    res.push(node.value)
    preorder(node.left)
    preorder(node.right)
  }

  preorder(root)
  return res
}

