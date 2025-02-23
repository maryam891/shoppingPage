import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import beauty from "./views/beauty.vue";

const routes = [
  {
    component: Home,
    path: "/",
    name: Home,
  },
  {
    component: beauty,
    path: "/Beauty",
  },
];
export default createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
