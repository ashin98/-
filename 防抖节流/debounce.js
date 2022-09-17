function debounce (fn, time) {
  let t = null
  return function () {
    let first = !t
    if (t) {
      clearTimeout(t)
    }
    if (first) {
      fn.apply(this, arguments)
    }
    t = setTimeout(() => {
      t = null
    }, time)
  }

}

function debounce (fn, time) {
  let t = null
  return function () {
    let first = !t
    if (t) {
      clearTimeout(t)
    }
    if (first) {
      fn.apply(this.arguments)
    }
    t = setTimeout(() => {
      t = null
    }, time)
  }
}