<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
</script>

<template>
  <el-menu class="el-menu-vertical" :collapse="collapse">
    <el-menu-item>
      <span>导航1</span>
    </el-menu-item>
    <el-menu-item>
      <span>导航2</span>
    </el-menu-item>
    <el-menu-item>
      <span>导航3</span>
    </el-menu-item>
    <el-menu-item>
      <span>导航4</span>
    </el-menu-item>
    <el-menu-item>
      <span>导航5</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped></style>
