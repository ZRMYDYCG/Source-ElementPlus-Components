<script setup lang="ts">
import { computed } from "vue"
import * as ElIcon from "@element-plus/icons-vue"
import { toKebabCase } from "@/utils/index.ts"

const props = defineProps<{
  /*弹出框标题*/
  title: string
  /*控制弹出框显示与隐藏*/
  visible: boolean
}>()

const emits = defineEmits(["update:visible"])

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => {
    emits("update:visible", value)
  },
})

const handleClick = () => {
  dialogVisible.value = !dialogVisible.value
}
</script>

<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible">
    <el-scrollbar height="400">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      >
        <div
          v-for="(item, index) in Object.keys(ElIcon)"
          :key="index"
          class="flex flex-col items-center justify-center p-4 bg-gray-100 border border-gray-300 rounded"
        >
          <component
            :is="`el-icon-${toKebabCase(item)}`"
            class="text-2xl mb-1"
          ></component>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<style scoped></style>
