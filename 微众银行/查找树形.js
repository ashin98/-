// 实现函数
// 输入getNameById(address,2) 输出'天津市'
// 输入getNameById(address,111) 输出'中关村'
// 输入getNameById(address,3) 输出''（未查找到，输出空字符串）
const address = [
  {
    id: 1,
    name: '北京市',
    children: [
      {
        id: 11,
        name: '海淀区',
        children: [
          {
            id: 111,
            name: '中关村'
          }
        ]
      },
      {
        id: 22,
        name: '朝阳区'
      }
    ]
  },
  {
    id: 2,
    name: '天津市'
  }
]

function treeToList (tree) {
  return tree.reduce((res, item) => {
    if (!item.children) {
      res.push(item)

    } else {
      const subList = treeToList(item.children)
      res.push(item, ...subList)
    }
    return res
  }, [])
}

function getNameById (address, id) {
  // 1.树形结构转为数组列表
  const list = treeToList(address)

  // 2.对比数组
  const result = list.find(item => item.id === id)
  return result ? result.name : ''
}
console.log(getNameById(address, 3))