<script setup lang="ts">
import Logo from "./components/logo.vue"

const props = defineProps<{
  collapse: boolean
}>()

const data = [
  {
    icon: "ElementPlus",
    name: "工作台",
    index: "/",
  },
  {
    icon: "ElementPlus",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "ElementPlus",
    name: "地区选择器",
    index: "/chooseArea",
  },
  {
    icon: "ElementPlus",
    name: "趋势变化",
    index: "/trend",
  },
  {
    icon: "ElementPlus",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "ElementPlus",
    name: "菜单",
    index: "/menu",
  },
  {
    icon: "ElementPlus",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "ElementPlus",
    name: "时间选择器",
    index: "/chooseTime"
  }
]
</script>

<template>
  <div class="border-r border-gray-300 h-full">
    <Logo :collapse="props.collapse" />
    <yq-infinite-menu
      class="el-menu-vertical"
      :data="data"
      :collapse="props.collapse"
      router
      default-active="/"
    ></yq-infinite-menu>
  </div>
</template>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
