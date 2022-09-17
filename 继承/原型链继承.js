// 原型实例继承
function Person (age) {
  this.name = '马云'
  this.age = age
}

function Son (sex) {
  this.sex = sex
}
Son.prototype = new Person('23')
Son.prototype.constructor = Son  //修改prototype,必须要手动将prototype的constructor的指向指回原来的构造函数

const son = new Son('male')
const son2 = new Son('female')
son2.name = '马化腾'
console.log(son.age)