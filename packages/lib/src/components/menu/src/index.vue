<script setup lang="ts">
import type { MenuItem } from "./type.ts"
import { toKebabCase } from "@/utils"

const props = withDefaults(
  defineProps<{
    data: MenuItem[]
    defaultActive: string
    /*是否开启路由模式*/
    router: boolean
  }>(),
  {
    defaultActive: "",
  },
)
</script>

<template>
  <el-menu
    style="width: 200px"
    v-bind="$attrs"
    :default-active="defaultActive"
    :router="router"
  >
    <template v-for="(item, index) in data" :key="index">
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.index"
      >
        <component v-if="item.icon" :is="`el-icon-${item.icon}`"></component>
        <span class="ml-2">{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${item.icon}`"></component>
          <span class="ml-2">{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(child, childIndex) in item.children"
          :index="child.index"
        >
          <component
            v-if="child.icon"
            :is="`el-icon-${child.icon}`"
          ></component>
          <span class="ml-2">{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped></style>
