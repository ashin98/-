// 生成斐波那契数组。  如fibonacci(5) 生成[1,1,2,3,5]
function fibonacci (n) {
  let arr = []
  let res1 = 1
  let res2 = 1
  let sum = res2
  if (n == 0) return []
  if (n >= 1) arr.push(res1)
  for (let i = 1; i < n; i++) {
    arr.push(sum)
    sum = res1 + res2
    res1 = res2
    res2 = sum

  }
  return arr
}
console.log(fibonacci(6))