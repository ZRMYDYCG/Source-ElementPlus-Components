<script setup lang="ts">
import type { TableOptions } from "./interface.ts"

const props = withDefaults(
  defineProps<{
    // 表格配置
    options: TableOptions[]
    // 表格数据
    data: any[]
  }>(),
  {},
)
</script>

<template>
  <el-table :data="data">
    <template v-for="(item, index) in options" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align || 'left'"
        :width="item.width || ''"
      ></el-table-column>
    </template>
  </el-table>
</template>

<style scoped></style>
