<script setup lang="ts">
import type { RuleItem } from "./rule.ts"
interface FormOptions {
  // 表单项显示的元素
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
  // 表单项的值
  value: any
  // 表单的Label
  label?: string
  // 表单的标识
  prop?: string
  // 表单的验证规则
  rules?: RuleItem
  // 表单项的提示信息
  placeholder?: string
  // 表单元素特有的属性
  attrs?: {
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
  }
}

const props = defineProps<{
  options: FormOptions[]
}>()
</script>

<template>
  <el-form v-bind="$attrs">
    <el-form-item
      v-for="(item, index) in options"
      :key="index"
      :label="item.label"
    >
      <component v-bind="item.attrs" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
