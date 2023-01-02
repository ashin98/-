function inval (str) {
  const res = []
  const map = new Map([[')', '('], [']', '['], ['}', '{']])
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) { // 如果是右括号，就去res里面去匹配
      if (map.get(str[i]) !== res.pop()) return false
    } else { // 如果是左括号就添加到res数组中
      res.push(str[i])
    }
  }
  return !res.length
}

console.log(inval('{{}}'))
