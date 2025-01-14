<script setup lang="ts">
import { toKebabCase } from "@/utils/index.js"

const props = withDefaults(
  defineProps<{
    /*显示的图标*/
    icon: string
    /*通知数量*/
    value: string | number
    /*通知数量最大值*/
    max: number
    /*是否是小圆点显示*/
    isDot: boolean
  }>(),
  {
    icon: "Bell",
    isDot: false,
  },
)
</script>

<template>
  <el-badge :value="value" :max="max">
    <component :is="`el-icon-${toKebabCase(icon)}`"></component>
  </el-badge>
</template>

<style scoped></style>
