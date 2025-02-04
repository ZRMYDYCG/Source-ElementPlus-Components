<script setup lang="ts">
import { computed } from "vue"
import type { TableOptions } from "./interface.ts"

const props = withDefaults(
  defineProps<{
    // 表格配置
    options: TableOptions[]
    // 表格数据
    data: any[]
    // loading 状态时的加载文案
    elementLoadingText?: string
    // 加载的图标名
    elementLoadingSpinner?: string
    // 加载的背景色
    elementLoadingBackground?: string
    // 加载 svg
    elementLoadingSvgViewBox?: string
  }>(),
  {},
)

// 过滤操作选项之后的配置、以及操作项的配置
const tableOptions = computed(() =>
  props.options.filter((item) => !item.action),
)
const actionOptions = computed(() => props.options.find((item) => item.action))

// 表格数据是否在加载中
const isLoading = computed(() => !props.data || !props.data.length)
</script>

<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <!-- 普通渲染 -->
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align || 'left'"
        :width="item.width || ''"
      ></el-table-column>
      <!-- 自定义渲染 -->
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align || 'left'"
        :width="item.width || ''"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions.label"
      :align="actionOptions.align || 'left'"
      :width="actionOptions.width || ''"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped></style>
