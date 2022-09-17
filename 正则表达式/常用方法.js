/**
 * match方法：需要匹配的字符串.test(正则表达式)
 * 将所有匹配到的项，组成一个数组返回，各项均为字符串的形式
 * 如果不加全局g就是返回第一个匹配的项，且包括索引值等等
*/

var pattern = /\d/g
var string = "1o2j4r0"
console.log(string.match(pattern))     //["1", "2", "4", "0"]


var pattern = /\d/
var string = "1o2j4r0"
console.log(string.match(pattern))     //["1", index: 0, input: "1o2j4r0", groups: undefined]

/**
 * replace：  需要匹配的字符串.replace(正则表达式，替换成的字符串)
 * 将所有匹配到的项，替换成新的字符串，返回新的字符串
 * 将替换的字符串（第二个参数）改为 ‘’ 空字符串，就相当于删除匹配到的项
*/

var pattern = /\d/g
var string = "1o2j4r0"
console.log(string.replace(pattern, 'a'))     //"aoajara"
console.log(string.replace(pattern, ''))     //"ojr"

/**
 * exec: 正则表达式.exec(需要匹配的字符串)
 * 返回匹配的项，及该项的索引值等等
 * 可以通过循环，将所有匹配的项输出
 * */

var pattern = /\d/g
var string = "1o2j4r0"
console.log(pattern.exec(string))   //["1", index: 0, input: "1o2j4r0", groups: undefined]

while (result = pattern.exec(string)) {
  console.log(result)
  //["1", index: 0, input: "1o2j4r0", groups: undefined]
  //["2", index: 2, input: "1o2j4r0", groups: undefined]
  //... 
}                          
