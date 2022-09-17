function run (color, time) {

  return new Promise((resolve, reject) => {
    color()
    setTimeout(() => {
      resolve()
    }, time)

  })
}

function red () {
  console.log('red')
}
function green () {
  console.log('green')
}
function yellow () {
  console.log('yellow')
}

async function round () {
  while (true) {
    await run(green, 3000)
    await run(yellow, 3000)
    await run(red, 10000)
  }
}
round()

