// 新建一个str数组，循环字符串，如果数组里面没有当前字符，则直接push到数组，如果有则用splice(0,i+1)删除掉前面的一截，每次比较maxlength和数组的长度存到maxlength中，最后返回
var lengthOfLongestSubstring = function (s) {
  var str = [], maxlength = 0
  for (var i = 0; i < s.length; i++) {
    var index = str.indexOf(s[i])
    if (index != -1) { // 如果res中存在当前元素，则删除掉前面的一截
      str.splice(0, index + 1)
    }
    str.push(s[i])
    maxlength = Math.max(maxlength, str.length)
  }
  return maxlength
}
console.log(lengthOfLongestSubstring("abcabcbb"))
let c = 3, d = 4
c = c ^ d
d = c ^ d
c = c ^ d
console.log(c, d)