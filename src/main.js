import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters/index'
import validate from './util/validate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.scss'

Vue.prototype.$validate = validate
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
