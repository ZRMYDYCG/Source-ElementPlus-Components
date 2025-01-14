<script setup lang="ts">
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
  }>(),
  {
    type: "up",
    text: "趋势",
    upColor: "#57c5f7",
    downColor: "#f04134",
  },
)
</script>

<template>
  <div class="items-center gap-1 inline-flex mr-2">
    <div>{{ text }}</div>
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
