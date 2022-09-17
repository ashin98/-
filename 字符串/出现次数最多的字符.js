// 求字符串’nininihaoa’中出现次数最多字符
// 解法：首先创建一个空对象，向对象中添加每个字符和出现的次数，然后循环对象，找出次数最多的字符
function more (str) {
  let chart = {}
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (chart[char]) {
      chart[char]++
    } else {
      chart[char] = 1
    }
  }
  var max = 0
  var s = []
  for (let key in chart) {
    if (chart[key] >= max) {
      max = chart[key]
      s.push(key)
    }
  }
  return `出现次数最多的符号${s.join(',')},次数为${max}`

}

//console.log(more('nininihaoa'))

// 方法二：使用reduce解决
//解法:先把字符串转为数组，然后使用reduce方法

function more2 (arr) {
  let r = arr.split('').reduce((res, cur) => {
    res[cur] ? res[cur]++ : res[cur] = 1
    return res
  }, {})
  let max = 0
  let s = []
  for (let key in r) {
    if (r[key] >= max) {
      max = r[key]
      s.push(key)
    }
  }
  return `出现次数最多的字符是${s.join(',')},次数为${max}`
}
console.log(more2('nininihaoa'))