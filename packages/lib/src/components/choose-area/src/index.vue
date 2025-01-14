<script setup lang="ts">
import { ref } from "vue"

const province = ref("")
const city = ref("")
const area = ref("")
</script>

<template>
  <div class="flex gap-2">
    <el-select placeholder="请选择省份" v-model="province">
      <el-option>Option 1</el-option>
    </el-select>
    <el-select placeholder="请选择城市" v-model="city">
      <el-option>Option 2</el-option>
    </el-select>
    <el-select placeholder="请选择区县" v-model="area">
      <el-option>Option 3</el-option>
    </el-select>
  </div>
</template>

<style scoped></style>
