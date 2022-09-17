function* test () {
  console.log('生成器')
  yield '111'  // 相当于return返回值
  console.log('生成器2')
  yield '222'

}
let res = test()  // 生成迭代器
console.log("res", res) // res Object [Generator] {}
res.next() //生成器    执行到第一个yield为止
console.log(res.next()) // { value: '222', done: false }  done为true时就是下面没有yield可迭代了

const obj = {
  name: 'ashin',
  age: 23
}
for (const key of Object.entries(obj)) {
  console.log(key)
}
