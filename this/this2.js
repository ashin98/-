// 在浏览器中输出，在node中输出，全局变量num的输出不一样
var num = 10
let obj = { num: 20 }
obj.fn = (function (num) {
  console.log(this)
  this.num = num * 3
  num++
  return function (n) {
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)
let fn = obj.fn
fn(5) // 22
obj.fn(10) // 23
console.log(num, obj.num) // 65 30