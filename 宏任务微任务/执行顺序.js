console.log(0)  // 0 4 5 10 6 1 2 7 8 3 9
setTimeOut(() => {
  console.log(1)
  new Promise(resolve => {
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3)
  })
})


new Promise(resolve => {
  console.log(4)
  for (let i = 0; i < 9; i++) {
    i == 7 && resolve()
  }
  console.log(5)
}).then(() => {
  console.log(6)
})

setTimeOut(() => {
  console.log(7)
  new Promise(resolve => {
    console.log(8)
    resolve()
  }).then(() => {
    console.log(9)
  })
})
console.log(10)

let mySet = new Set() // set 有什么特点
mySet.add({})// size ??
mySet.add({})//size ??
let arr = [...mySet]
let [bar, foo] = [1]
console.log(bar)
console.log(foo)
