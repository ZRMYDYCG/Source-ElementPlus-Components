<script setup lang="ts">
import { onMounted, ref } from "vue"
const props = withDefaults(
  defineProps<{
    /*进度条进度*/
    percentage: number
    /*进度条是否有动画效果*/
    isAnimation: boolean
    /*动画时长（毫秒为单位）*/
    time: number
  }>(),
  {
    percentage: 0,
    isAnimation: false,
    time: 3000,
  },
)

const p = ref(0)

onMounted(() => {
  if (props.isAnimation) {
    let t = Math.ceil(props.time / props.percentage)
    const timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})
</script>

<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

<style scoped></style>
