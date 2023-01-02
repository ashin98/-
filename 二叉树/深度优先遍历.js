function deepFirstSearch (node) {
  var nodes = []
  if (node != null) {
    var stack = []
    stack.push(node)
    while (stack.length != 0) {
      var item = stack.pop()
      nodes.push(item)
      var children = item.children
      for (var i = children.length - 1; i >= 0; i--)
        stack.push(children[i])
    }
  }
  return nodes
}

function deepfirst (node) {
  let res = []
  if (node) {
    let stack = []
    stack.push(node)
    while (stack.length) {
      let item = stack.pop()
      let children = item.children
      res.push(item)
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return res
}
