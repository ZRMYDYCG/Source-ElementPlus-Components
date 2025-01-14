import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
