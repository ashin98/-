// 层序遍历也是广度优先搜索bfs
function sequencetravelsal (root) {  // 输出 [[root],[1,2],[3,4,6]]
  let res = []
  if (!root) return res
  // 使用队列，每层都按顺序添加到队列中，然后出队添加到res中，直到队列为空
  let queue = []
  queue.push(root)
  while (queue.length != 0) {
    res.push([])
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift()  //出队列
      res[res.length - 1].push(node.value)
      if (node.left) queue.push(node.left) // 入队列
      if (node.right) queue.push(node.right)
    }
  }
  return res
}

function sequencetravelsal2 (root) {
  if (!root) return
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length != 0) {
    res.push([])
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift()
      res[res.length - 1].push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}

