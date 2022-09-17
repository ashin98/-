// 节流函数
function throttle (fn, wait) {
  let begin = 0
  return function () {
    let now = Date.now()
    if (now - begin > wait) {
      fn.apply(this, arguments)
      begin = now
    }
  }
}
console.log(throttle(1, 1))

function throttle (fn, time) {
  let begin = 0
  return function () {
    let now = Date.now()
    if (now - begin > time) {
      fn.call(this, arguments)
      begin = now
    }
  }
}