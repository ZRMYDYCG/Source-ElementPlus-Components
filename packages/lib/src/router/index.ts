import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/home/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/chooseIcon",
        component: () => import("@/views/choose-icon/index.vue"),
      },
      {
        path: "/chooseArea",
        component: () => import("@/views/choose-area/index.vue"),
      },
      {
        path: "/trend",
        component: () => import("@/views/trend/index.vue"),
      },
      {
        path: "/notification",
        component: () => import("@/views/notification/index.vue"),
      },
      {
        path: "/menu",
        component: () => import("@/views/menu/index.vue"),
      },
      {
        path: "/progress",
        component: () => import("@/views/progress/index.vue"),
      },
      {
        path: "/chooseTime",
        component: () => import("@/views/choose-time/index.vue"),
      },
      {
        path: "/chooseDate",
        component: () => import("@/views/choose-date/index.vue"),
      },
      {
        path: "/chooseCity",
        component: () => import("@/views/choose-city/index.vue"),
      },
      {
        path: "/table",
        component: () => import("@/views/table/index.vue"),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
