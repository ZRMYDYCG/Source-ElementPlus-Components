<script setup lang="ts">
import { ref } from "vue"
import LayoutHeader from "@/Layout/components/header/index.vue"
import LayoutAside from "@/Layout/components/aside/index.vue"
import LayoutMain from "@/Layout/components/main/index.vue"

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
