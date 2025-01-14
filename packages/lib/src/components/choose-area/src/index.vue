<script setup lang="ts">
import { ref, computed, watch } from "vue"
import allAreas from "../lib/pca-code.json"

// 所有的省市区数据
const all = ref(allAreas)
// 下拉框选中省份的值
const province = ref("")
// 下拉框选中城市的值
const city = ref("")
// 下拉框选中区县的值
const area = ref("")

// 筛选省份后的城市数据
const selectCity = ref([])
// 筛选城市后的区县数据
const selectArea = ref([])

watch(
  () => province.value,
  (val) => {
    if (val) {
      selectCity.value = all.value.find(
        (item) => item.code === province.value,
      )?.children
    }
    city.value = ""
    area.value = ""
  },
)

watch(
  () => city.value,
  (val) => {
    if (val) {
      selectArea.value = selectCity.value.find(
        (item) => item.code === city.value,
      )?.children
    }
    area.value = ""
  },
)
</script>

<template>
  <div class="flex gap-2">
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in all"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      :disabled="!province || !city"
      placeholder="请选择区县"
      v-model="area"
      clearable
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<style scoped></style>
