function changeName (str) {
  let arr = []
  let t = str.indexOf('_')
  while (t != -1) {
    arr.push(t)
    t = str.indexOf('_', t + 1)
  }
  str = str.split('')
  for (let i = 0; i < arr.length; i++) {
    str[arr[i] + 1] = str[arr[i] + 1].toUpperCase()
  }
  str = str.join('')
  return str.replace(/_/g, '')
}

console.log(changeName('user_name_ash'))