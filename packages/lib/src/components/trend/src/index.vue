<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from "vue"

const props = withDefaults(
  defineProps<{
    /*趋势类型*/
    type: "up" | "down"
    /*文字*/
    text: string
    /*上升趋势的图标颜色*/
    upColor: string
    /*下降趋势的图标颜色*/
    downColor: string
    /*颜色反转 只在默认颜色下生效 如果使用了自定义颜色 该属性无效*/
    reverseColor: boolean
  }>(),
  {
    type: "up",
    text: "趋势",
    // 默认情况下，根据 reverseColor 决定颜色
    upColor: () => (props.reverseColor ? "#f04134" : "#57c5f7"),
    downColor: () => (props.reverseColor ? "#57c5f7" : "#f04134"),
    reverseColor: true,
  },
)

const slots = useSlots()
</script>

<template>
  <div class="items-center gap-1 inline-flex mr-2">
    <div>
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon-arrowup
        :style="{ color: upColor }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: downColor }"
        v-else
      ></el-icon-arrowdown>
    </div>
  </div>
</template>

<style scoped>
.icon svg {
  width: 0.8em;
  height: 0.8em;
}
</style>
