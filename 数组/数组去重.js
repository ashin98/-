let arr = ['a', 'a', 'a', 'b', 'b', 'c', 'a']
Array.prototype.unique = function () {
  let newArr = new Set(this)
  return [...newArr]
}
console.log(arr.unique())
function unique (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1)
        i--
      }
    }
  }
  return arr
}

// console.log(unique(arr))
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
console.log(map.values())

// 复杂数据类型去重
const arr3 = ['12', { a: 1 }, { a: 1 }, [1, 2, 3], [1, 2, 3]]
let res3 = []
let flag
arr3.forEach(item => {
  flag = false
  for (let s of res3) {
    if (JSON.stringify(s) === JSON.stringify(item)) {
      flag = true
      break
    }
  }
  if (!flag) {
    res3.push(item)
  }

})
console.log(res3)


