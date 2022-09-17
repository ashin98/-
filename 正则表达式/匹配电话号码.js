function phone (phoneNumber) {
  let reg = new RegExp(/^1[3-8]\d{9}$/) // 1开头 第二个数字为3-8 剩下任意9个数字结尾
  return reg.test(phoneNumber)
}

console.log(phone(13144429226))