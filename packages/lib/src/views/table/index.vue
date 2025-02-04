<script setup lang="ts" xmlns="">
import type { TableOptions } from "@/components/table/src/interface.ts"

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]
// 表格配置
const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
  {
    label: "操作",
    action: true,
    align: "center",
  },
]
function handleEdit(row: any) {
  console.log(row)
}
</script>

<template>
  <yq-table :data="tableData" :options="options">
    <template #action="{ scope }">
      <el-button size="small" type="text" @click="handleEdit(scope)"
        >编辑</el-button
      >
    </template>
    <template #date="{ scope }">
      <span class="text-red-700">{{ scope.row.date }}</span>
    </template>
    <template #name="{ scope }">
      <el-tag>
        <span>{{ scope.row.name }}</span>
      </el-tag>
    </template>
  </yq-table>
</template>

<style scoped></style>
