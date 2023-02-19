import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      {
        path: "",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/data",
        component: () => import("../views/Data.vue"),
      },
      {
        path: "/analysis",
        component: () => import("../views/Analysis.vue"),
      },
      {
        path: "/plan",
        component: () => import("../views/Plan.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
