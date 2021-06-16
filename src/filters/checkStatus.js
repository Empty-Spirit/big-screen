// 对数组中的数据进行匹配查询并返回对应的value或者name
export default (val, data) => {
  const returnStatus = data.find(e => {
    return e.value.toString() === val.toString() || e.name.indexOf(val) > -1
  })
  return returnStatus.value.toString() === val.toString() ? returnStatus.name : returnStatus.value
}
