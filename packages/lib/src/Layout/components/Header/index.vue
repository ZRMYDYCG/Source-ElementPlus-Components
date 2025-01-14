<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits(["update:collapse"])

const toggle = () => {
  // v-model 语法糖，修改 props.collapse 状态
  emits("update:collapse", !props.collapse)
}
</script>

<template>
  <div
    @click="toggle"
    class="h-full px-3 flex items-center border-b border-gray-200"
  >
    <el-icon-expand class="cursor-pointer" v-if="collapse"></el-icon-expand>
    <el-icon-fold class="cursor-pointer" v-else></el-icon-fold>
  </div>
</template>

<style scoped></style>
