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
  // 求每一层的和
  let sum = []
  res.forEach((item, index) => {
    sum[index] = 0
    for (let i = 0; i < item.length; i++) {
      sum[index] += item[i]
    }
  })
  return { 遍历: res, 每层的和: sum }
}