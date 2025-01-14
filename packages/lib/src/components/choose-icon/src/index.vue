<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  /*弹出框标题*/
  title: string
  /*控制弹出框显示与隐藏*/
  visible: boolean
}>()

const emits = defineEmits(["update:visible"])

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => {
    emits("update:visible", value)
  },
})

const handleClick = () => {
  dialogVisible.value = !dialogVisible.value
}
</script>

<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible" />
</template>

<style scoped></style>
