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
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
