<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "axios"
import "../../../mock/index.ts"
import type { TableOptions } from "@/components/table/src/interface.ts"

// 假数据
const tableData = ref([])

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
    editable: true,
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    action: true,
    align: "center",
  },
]

const current = ref(1)
const pageSize = ref(10)
const total = ref(0)

function handleEdit(row: any) {
  console.log(row)
}

function getTableData() {
  axios
    .post("/api/list", {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res) => {
      tableData.value = res.data.data.rows
      total.value = res.data.data.total
      console.log(res.data)
    })
}

onMounted(() => {
  getTableData()
})

const handleCurrentChange = (currentPage: number) => {
  current.value = currentPage
  getTableData()
}

const handlePageSizeChange = (size: number) => {
  pageSize.value = size
  getTableData()
}
</script>

<template>
  <yq-table
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    pagination
    :total="total"
    @current-change="handleCurrentChange"
    @size-change="handlePageSizeChange"
  >
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
