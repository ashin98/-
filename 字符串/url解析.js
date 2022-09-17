// 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象

url = 'http://www.baidu.com?pid=1&name=ashin'
function parseQueryString (url) {
  let obj = {}
  let str
  if (url.indexOf('?') !== -1) { //如果存在 '？'
    str = url.substring(url.indexOf('?') + 1, url.length)  // 获取到疑问号后面的字符串
    if (str.indexOf('&') !== -1) { // 如果有多个'&',需要遍历
      str = str.split('&')
      str.forEach(element => {
        element = element.split('=')
        obj[element[0]] = element[1]
      })

    } else {
      // 如果没有'&'，则只有一个key:value
      str = str.split('=')
      obj[str[0]] = str[1]
    }
  }
  return obj
}

console.log(parseQueryString('http://www.baidu.com?pid=1'))

