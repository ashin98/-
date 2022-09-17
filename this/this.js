var x = 20
var a = {
  x: 15,
  fn: function () {
    var x = 30
    return function () {
      return this.x
    }
  }
}
console.log(a.fn())  // fun
console.log((a.fn())()) // 20
console.log(a.fn()()) // 20
console.log(a.fn()() == (a.fn())())//true
console.log(a.fn().call(this)) // 20
console.log(a.fn().call(a)) // 15