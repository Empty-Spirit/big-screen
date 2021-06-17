// 金额显示形式转换 传递数值形式加单位 如： 1,000.12 元  , 1 000 元 ,  1.23 万元
export default (val, format) => {
  const a = format.split('.')[1] ? format.split('.')[1].split(' ')[0].length : 0 // 小数数位
  const b = format.match(/[\u4e00-\u9fa5]/g) ? format.match(/[\u4e00-\u9fa5]/g).join('') : '' // 单位
  const c = format.split('.')[0].match(/[',',' ']/g).join('') // 分隔符
  val = parseFloat(val)
  let label
  const decimal = val.toString().split('.')[1] || a ? '.' + val.toFixed(a).toString().split('.')[1] : '' // 小数数值保留几位小数
  if (!val) return '不是数字'
  if (b.indexOf('万') === -1 || !b) {
    let num = (val || 0).toString().split('.')[0]
    let result = ''
    while (num.length > 3) {
      result = c + num.slice(-3) + result
      num = num.slice(0, num.length - 3)
    }
    if (num) { result = num + result }
    label = {
      num: result + decimal,
      company: b
    }
  } else {
    const o = {
      0: '元',
      1: '万元',
      2: '亿'
    }
    const length = parseInt(val.toString().split('.')[0].length / 4)
    const num = (val / Math.pow(10000, length)).toFixed(a)
    label = {
      num: num,
      company: o[length]
    }
  }
  return b ? label : label.num
}
