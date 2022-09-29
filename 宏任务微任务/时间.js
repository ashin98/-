var date = new Date()
console.log(1, new Date() - date)
setTimeout(() => {
  console.log(2, new Date() - date)
}, 500)
Promise.resolve().then(() => {
  console.log(3, new Date() - date)
})
while ((new Date() - date) < 1000) { }
console.log(4, new Date() - date)

/** 执行为：
1 0
4 1000
3 1003
2 1007
*/