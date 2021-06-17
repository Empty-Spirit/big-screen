let baseUrl = ''

const config = {
  testUrl: 'api/',
  baseUrl: ''
}

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  baseUrl = config.testUrl
} else {
  baseUrl = config.baseUrl
}

export default baseUrl
