//实现按：'surname'+'name'+'address'按升序排序
let data = [
  { name: '一山', surname: '张', address: '西藏', area: '北京' },
  { name: '尚山', surname: '李', address: '厦门', area: '上海' },
  { name: '二山', surname: '王', address: '宁夏', area: '福州' },
  { name: '五山', surname: '张', address: '福建', area: '厦门' },
  { name: '六山', surname: '张', address: '北京', area: '北京' },
]

// let arr = []
// data.forEach(item=>{
//   let obj = {}
// })

const res = data.sort((a, b) => {
  return a.surname - b.surname
})
console.log(res)