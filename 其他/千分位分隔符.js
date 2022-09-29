let num = -122234567890
function numFormat (num) {
  let newNum = num.toString()
  let intNum, flotNum, count, res, sign

  if (newNum.indexOf('.') !== -1) {
    // 如果有小数点

    if (newNum.indexOf('-') === 0) {
      // 如果是负数
      sign = newNum.slice(0, 1)
      newNum = newNum.slice(1)
      intNum = newNum.split('.')[0]
      flotNum = newNum.split('.')[1]
      count = 0
      const len = intNum.length
      for (let i = len - 1; i >= 0; i--) {
        count++
        if (count % 3 === 0) {
          intNum = intNum.slice(0, len - count) + ',' + intNum.slice(len - count) //1235,746
          if (intNum[0] == ',') intNum = intNum.slice(1)   // 如果第0位是',' 则删除','
          count++
          i--
        }
      }
      res = sign + intNum + '.' + flotNum
      return res
    }
    intNum = newNum.split('.')[0]
    flotNum = newNum.split('.')[1]
    count = 0
    const len = intNum.length
    for (let i = len - 1; i >= 0; i--) {
      count++
      if (count % 3 === 0) {
        intNum = intNum.slice(0, len - count) + ',' + intNum.slice(len - count) //1235,746
        count++
        i--
      }
    }
    res = intNum + '.' + flotNum
    return res
  } else {
    // 没有小数点
    if (newNum.indexOf('-') === 0) {
      // 如果是负数
      sign = newNum.slice(0, 1)
      newNum = newNum.slice(1)
      count = 0
      const len = newNum.length
      for (let i = len - 1; i >= 0; i--) {
        count++
        if (count % 3 === 0) {
          newNum = newNum.slice(0, len - count) + ',' + newNum.slice(len - count) //1235,746
          if (newNum[0] == ',') newNum = newNum.slice(1)   // 如果第0位是',' 则删除','
          count++
          i--
        }
      }
      return sign + newNum
    } else {
      // 正数
      count = 0
      const len = newNum.length
      for (let i = len - 1; i >= 0; i--) {
        count++
        if (count % 3 === 0) {
          newNum = newNum.slice(0, len - count) + ',' + newNum.slice(len - count) //1235,746
          count++
          i--
        }
      }
      return newNum
    }

  }
}
console.log(numFormat(num))

// 给数组中添加3个元素再添加一个逗号；最后再删除最后的逗号，然后reverse反转后转为字符串
function numFormat2 (num) {
  let s = num + ''
  var floatNum //小数
  var sign // 负数符号
  if (s.indexOf('.') !== -1) {
    let arr = s.split('.')
    s = arr[0]
    floatNum = arr[1]
  }
  if (s.indexOf('-') === 0) {
    sign = s.slice(0, 1)
    s = s.slice(1)
  }
  const res = []
  for (let i = s.length - 1; i >= 0; i = i - 3) {
    res.push(s[i])
    res.push(s[i - 1])
    res.push(s[i - 2])
    res.push(',')
  }
  res.pop()
  if (floatNum !== undefined) {
    if (sign !== undefined) {
      return sign + res.reverse().join('') + '.' + floatNum
    }
    return res.reverse().join('') + '.' + floatNum
  }
  if (sign !== undefined && floatNum === undefined) {
    return sign + res.reverse().join('')
  }
  return res.reverse().join('')
}
console.log(numFormat2(num))

