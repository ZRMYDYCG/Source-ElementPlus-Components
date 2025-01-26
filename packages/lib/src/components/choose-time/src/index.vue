<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        style="width: 240px"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeInit"
        :step="startTimeStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        style="width: 240px"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeInit"
        :step="endTimeStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"

const props = withDefaults(
  defineProps<{
    /*开始时间占位符*/
    startPlaceholder: string
    /*开始时间初始化选择值*/
    startTimeInit: string
    /*开始时间步长*/
    startTimeStep: string
    /*开始时间结束的选择值*/
    startTimeEnd: string
    /*结束时间占位符*/
    endPlaceholder: string
    /*结束时间初始化选择值*/
    endTimeInit: string
    /*结束时间步长*/
    endTimeStep: string
    /*结束时间结束的选择值*/
    endTimeEnd: string
  }>(),
  {
    startPlaceholder: "请选择开始时间",
    startTimeInit: "08:00",
    startTimeStep: "00:30",
    startTimeEnd: "24:00",
    endPlaceholder: "请选择结束时间",
    endTimeInit: "08:00",
    endTimeStep: "00:30",
    endTimeEnd: "24:00",
  },
)

const emits = defineEmits(["startTimeChange", "endTimeChange"])

const startTime = ref("")
const endTime = ref("")
const endTimeDisabled = ref<boolean>(true)

watch(
  () => startTime.value,
  (newVal) => {
    if (!newVal) {
      endTime.value = ""
      endTimeDisabled.value = true
    } else {
      endTimeDisabled.value = false
      emits("startTimeChange", newVal)
    }
  },
)
watch(
  () => endTime.value,
  (newVal) => {
    if (newVal) {
      emits("endTimeChange", {
        startTime: startTime.value,
        endTime: newVal,
      })
    }
  },
)
</script>
