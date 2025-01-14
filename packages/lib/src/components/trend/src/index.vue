<script setup lang="ts">
import { useSlots, computed } from "vue"
import { toKebabCase } from "@/utils"

const props = withDefaults(
  defineProps<{
    /*趋势类型*/
    type: "up" | "down"
    /*文字*/
    text: string
    /*上升趋势的图标*/
    upIcon: string
    /*下降趋势的图标*/
    downIcon: string
    /*上升趋势的图标颜色*/
    upColor: string
    /*下降趋势的图标颜色*/
    downColor: string
    /*颜色反转 只在默认颜色下生效 如果使用了自定义颜色 该属性无效*/
    reverseColor: boolean
    /*上升趋势文字颜色*/
    upTextColor: string
    /*下降趋势文字颜色*/
    downTextColor: string
  }>(),
  {
    type: "up",
    text: "趋势",
    upIcon: "ArrowUp",
    downIcon: "ArrowDown",
    upColor: "#57c5f7",
    downColor: "#f04134",
    reverseColor: false,
    upTextColor: "#000000", // 默认改为黑色
    downTextColor: "#000000", // 默认改为黑色
  },
)

const slots = useSlots()

const defaultUpColor = "#57c5f7"
const defaultDownColor = "#f04134"

const finalUpColor = computed(() => {
  return props.upColor === defaultUpColor && props.reverseColor
    ? defaultDownColor
    : props.upColor
})

const finalDownColor = computed(() => {
  return props.downColor === defaultDownColor && props.reverseColor
    ? defaultUpColor
    : props.downColor
})

// 文字颜色不反转，默认为黑色，支持用户自定义颜色
const finalTextColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor
})
</script>

<template>
  <div class="items-center gap-1 inline-flex mr-2">
    <div :style="{ color: finalTextColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toKebabCase(upIcon)}`"
        v-if="type === 'up'"
        :style="{ color: finalUpColor }"
      ></component>
      <component
        :is="`el-icon-${toKebabCase(downIcon)}`"
        :style="{ color: finalDownColor }"
        v-else
      ></component>
    </div>
  </div>
</template>

<style scoped>
.icon svg {
  width: 0.8em;
  height: 0.8em;
}
</style>
