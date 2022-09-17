//编写一个函数fn(Number n),将数字转为大写输出，如输入123，输出一百二十三

function fn (n) {
  var unit = ' 十百千万十百千亿十百千万'
  if (!Number.isInteger(n)) return '非整数'
  if (typeof n !== 'number') return '不是数字'
  else {
    let obj = {
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
      7: '七',
      8: '八',
      9: '九'
    }
    let str = n.toString()
    let res = ''
    for (let i = 0; i < str.length; i++) { // 123
      res += obj[str[i]] + unit.charAt(str.length - 1 - i)
    }
    return res
  }

}

console.log(fn(123))