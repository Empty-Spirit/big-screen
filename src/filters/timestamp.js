export default (value, format) => {
  if (!value) return
  return date(new Date(value), format)
}

// 时间格式转换
function date (value, format) {
  if (!(value instanceof Date)) {
    value = new Date(value)
  }
  if (!format) {
    format = 'yyyy-MM-dd HH:mm:ss'
  }
  const year = value.getFullYear()
  const month = value.getMonth() + 1
  const day = value.getDate()
  const hour = value.getHours()
  const minute = value.getMinutes()
  const second = value.getSeconds()
  const o = {
    yyyy: year,
    MM: padding(month, 2),
    M: month,
    dd: padding(day, 2),
    d: day,
    HH: padding(hour, 2),
    H: hour,
    mm: padding(minute, 2),
    m: minute,
    ss: padding(second, 2),
    s: second
  }
  return format.replace(/yyyy|MM|M|dd|d|HH|H|mm|m|ss|s/gi, match => {
    return o[match]
  })
}

// 时间显示位数转换
function padding (value, padding, char) {
  if (!char) {
    char = '0'
  }
  if (typeof value !== 'string') {
    value = value.toString()
  }
  if (value.length >= padding) {
    return value
  } else {
    return (
      Math.pow(10, padding - value.length)
        .toString()
        .substr(1)
        .replace('0', char) + value
    )
  }
}
