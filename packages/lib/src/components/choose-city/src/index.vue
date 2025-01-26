<script setup lang="ts">
import { onMounted, ref } from "vue"
import city from "../lib/city.ts"
import province from "../lib/province.ts"

const emits = defineEmits(["changeCity", "changeProvince"])

const result = ref<string>("请选择")
const visible = ref(false)

const radioValue = ref("按省份")
const selectValue = ref("")
const optionsCity = ref(city)
const optionsProvince = ref(province)
// 所有的城市的数据
const options = ref([])

const clickCity = (item) => {
  result.value = item.name
  visible.value = false
  emits("changeCity", item)
}

const clickProvince = (item) => {
  result.value = item
  visible.value = false
  emits("changeProvince", item)
}

const clickChar = (item: string) => {
  let el = document.getElementById(item)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

const CustomFilterMethod = (val: string) => {
  console.log(val)
  if (val === "") {
    options.value = Object.values(optionsCity.value.cities).flat(Infinity)
  } else {
    if (radioValue.value === "按城市") {
      // 中文和拼英一起进行过滤
      options.value = Object.values(optionsCity.value.cities)
        .flat(Infinity)
        .filter((item: any) => {
          return item.name.includes(val) || item.spell.includes(val)
        })

      console.log(options.value)
    } else {
      // 中文过滤
      options.value = Object.values(optionsCity.value.cities)
        .flat(Infinity)
        .filter((item: any) => {
          return item.name.includes(val)
        })
    }
  }
}

onMounted(() => {
  options.value = Object.values(optionsCity.value.cities).flat(Infinity)
})
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
            placeholder="请选择"
            size="small"
            style="width: 240px"
            filterable
            :filter-method="CustomFilterMethod"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="m-2 flex flex-wrap items-center gap-2">
          <div
            class="px-[6px] border border-gray-300 rounded-md cursor-pointer"
            v-for="(value, key) in optionsCity.cities"
            @click="clickChar(key)"
          >
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in optionsCity.cities" :key="key">
            <el-row :id="key">
              <el-col :span="1"> {{ key }}: </el-col>
              <el-col :span="23" class="item-name">
                <div
                  @click="clickCity(item)"
                  v-for="(item, index) in value"
                  :key="index"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="m-2 flex flex-wrap items-center gap-2">
          <div
            v-for="(item, index) in Object.keys(optionsProvince)"
            :key="index"
            class="px-[6px] border border-gray-300 rounded-md cursor-pointer"
            @click="clickChar(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(optionsProvince)"
            :key="index"
          >
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row :id="item1.id">
                <el-col :span="2"> {{ item1.name }}: </el-col>
                <el-col :span="22" class="item-name">
                  <div v-for="(item2, index2) in item1.data" :key="index2">
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
.item-name {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
