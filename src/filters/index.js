// 数据过滤
import Vue from 'vue'
import timestamp from './timestamp'
import checkStatus from './checkStatus'

Vue.filter('timestamp', timestamp)
Vue.prototype.$timestamp = timestamp
Vue.filter('checkStatus', checkStatus)
Vue.prototype.$checkStatus = checkStatus
