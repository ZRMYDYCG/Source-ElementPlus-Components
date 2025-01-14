<script setup lang="ts">
import { ref } from "vue"
import LayoutHeader from "./components/Header/index.vue"
import LayoutAside from "./components/Aside/index.vue"
import LayoutMain from "./components/Main/index.vue"

const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <layout-aside :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <layout-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <layout-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
:deep(.el-header) {
  --el-header-padding: 0;
}
</style>
