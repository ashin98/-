// 输入[0,2,3,4,6,8,9]
// 输出'0,2~4,6,8~9'

function numSort (num) {
  num = num.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] + 1 === num[i + 1] || num[i] - 1 === num[i - 1]) { // 如果当前数等于前一个数或者等于后一个数

      if (res[res.length - 1] instanceof Set) { // 如果res里面最后一个是Set类型
        res[res.length - 1].add(num[i])
      } else {
        res.push(new Set())
        res[res.length - 1].add(num[i])
      }
    } else {
      res.push(num[i])
    }
  }
  let newRes = res.map(item => {
    if (item instanceof Set) {
      item = Array.from(item)
      item = item.slice(0, 1) + '~' + item.slice(-1)
    }
    return item
  })

  return newRes.join(',')
}
console.log(numSort([0, 2, 3, 4, 5, 6, 8, 9, 10, 11]))

let arr = ['h', 'e', 'l', 'l', 'o']
arr.forEach(e => {
  if (e == 'l') return
  console.log(e)
})
arr.pop()
arr.unshift('a')
arr.push('c')
console.log(arr)
arr.splice(2, 3)
console.log(arr)


