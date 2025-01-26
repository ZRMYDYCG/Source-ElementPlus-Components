<script setup lang="ts">
import { ref } from "vue"
import city from "../lib/city.ts"

const result = ref<string>("请选择")
const visible = ref(false)

const radioValue = ref("按城市")
const selectValue = ref("")
const options = ref(city)
</script>

<template>
  <el-popover
    placement="bottom-start"
    :width="500"
    trigger="click"
    v-model:visible="visible"
  >
    <template #reference>
      <div class="flex items-center gap-1 cursor-pointer">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown
            :class="visible ? 'rotate-180' : ''"
            class="transition-transform duration-300"
          ></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div>
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :span="14" :offset="2">
          <el-select
            v-model="selectValue"
            placeholder="Select"
            size="small"
            style="width: 240px"
          >
            <el-option v-for="item in options" />
          </el-select>
        </el-col>
      </el-row>
      <div class="m-2 flex flex-wrap items-center gap-2">
        <div
          class="px-[6px] border border-gray-300 rounded-md"
          v-for="(value, key) in options.cities"
        >
          {{ key }}
        </div>
      </div>
      <el-scrollbar max-height="300px">
        <template v-for="(value, key) in options.cities">
          <el-row>
            <el-col :span="2"></el-col>
            <el-col :span="22"></el-col>
          </el-row>
        </template>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
