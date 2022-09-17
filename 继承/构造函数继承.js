function Person (name, age) {
  this.name = name
  this.age = age
  this.say = () => {
    console.log(this.name)
  }
}
Person.prototype.call = '2222'  //原型对象上的属性无法继承

function Son (sex, name, age) {
  Person.call(this, name, age)
  this.sex = sex
}

const son = new Son('male', 'ashin', 18)
console.log(son.call())  //原型对象上的属性无法继承