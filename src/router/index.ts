import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/login/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Select",
    name: "Select",
    component: () =>
      // 按需引入，如果没有访问，则不会加载
      import(/* webpackChunkName: "about" */ "../views/login/Select.vue"),
  },
  {
    path: "/ScreenHome",
    name: "ScreenHome",
    component: () =>
      // 按需引入，如果没有访问，则不会加载
      import(/* webpackChunkName: "about" */ "../views/screen/home/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
