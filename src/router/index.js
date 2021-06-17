import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Index.vue'
import ChatHome from '../views/chat/home/Index.vue'
import AdministrationHome from '../views/administration/home/Index.vue'
import SCreenHome from '../views/screen/home/Index.vue'
import Select from '../views/login/Select.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/Select',
    name: 'Select',
    component: Select
    // component: () => import(/* webpackChunkName: "about" */ '../views/login/Select.vue')
  }, {
    path: '/ChatHome',
    name: 'ChatHome',
    component: ChatHome
  }, {
    path: '/AdministrationHome',
    name: 'AdministrationHome',
    component: AdministrationHome
  }, {
    path: '/SCreenHome',
    name: 'SCreenHome',
    component: SCreenHome
  }, {
    path: '/Home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
