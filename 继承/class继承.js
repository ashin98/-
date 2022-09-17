class Person {
  constructor(name, sex) {
    this.kind = 'people'
    this.name = name
    this.sex = sex
  }
  say () {
    return this.name + '来了'
  }
}

class Son extends Person {
  constructor(name, sex, age) {
    super(name, sex)
    this.age = age
  }
}

const son = new Son('ashin', 'male', 22)
const sister = new Son('Marry', 'female', 26)
console.log(son.age)
console.log(son.say())
console.log(sister.kind)