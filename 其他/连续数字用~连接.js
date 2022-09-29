// 输入[0,2,3,4,6,8,9]
// 输出'0,2~4,6,8~9'

function solution (arr) {
  let list = []
  let i
  for (i = 0; i < arr.length; i++) {
    let start = arr[i]
    let j
    for (j = i; j < arr.length; j++) {
      if (arr[j] + 1 !== arr[j + 1]) {
        break //终止循环,得到不连续的位置j
      }
    }
    i = j
    if (start == arr[j]) { // 判断j是否移动了，如果每移动说明不连续，即start===arr[j]
      // 如果第一个数和第二个数不连续则直接添加第一个数
      list.push(start)
    } else {
      list.push(start + '~' + arr[j])
    }
  }
  return list.join(',')
}
let arr = [0, 2, 3, 4, 5, 6, 8, 9, 10, 11]
console.log(solution(arr))