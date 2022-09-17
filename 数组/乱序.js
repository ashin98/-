// 快速让一个数组乱序
arr = [1, 2, 3, 4, 5, 6]
function random (arr) {
  arr.sort(function () {
    return Math.random() - 0.5
  })
  return arr
}
console.log(random(arr))
