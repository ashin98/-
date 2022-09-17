//当给的是空字符串的话只输出一次，如果给的次数不是正数的话也返回空字符串
function repeatStringNumTimes (str, num) {
  res = ''
  if (str == '' || num <= 0) {
    return ''
  } else {
    for (let i = 0; i < num; i++) {
      res += str
    }
  }
  return res
}
console.log(repeatStringNumTimes('', 3))



