const list = [
  { id: 1, pid: 0, name: '四川' },
  { id: 2, pid: 1, name: '成都' },
  { id: 3, pid: 1, name: '宜宾' },
  { id: 4, pid: 1, name: '绵阳' },
  { id: 5, pid: 1, name: '德阳' },
  { id: 6, pid: 2, name: '高新区' },
  { id: 7, pid: 2, name: '武侯区' },
  { id: 8, pid: 3, name: '翠屏区' },
  { id: 9, pid: 10, name: 'ashin区' }
]

// 使用reduce+递归
const func = (arr, pid) => {
  return arr.reduce((res, current) => {
    console.log(res, current)
    if (current['pid'] === pid) {
      current.children = func(arr, current['id'])
      return res.concat(current)
    }
    return res
  }, [])
}
console.log(func(list, 0))

// 第二种方法：非递归实现
function arrayToTree (items) {
  const result = []
  const itemMap = {}

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }
  console.log(itemMap)
  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    // console.log(treeItem)
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result
}

