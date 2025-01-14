<script setup lang="ts">
import { ref } from "vue"

const isCollapse = ref(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
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
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleCollapse">
          <el-icon-expand v-if="isCollapse"></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
