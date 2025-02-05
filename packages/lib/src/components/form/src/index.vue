<script setup lang="ts">
import { ref, onMounted } from "vue"
import type { RuleItem } from "./rule.ts"
import cloneDeep from "lodash/cloneDeep"
import type { CSSProperties } from "vue"

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
    // css 样式
    style?: CSSProperties
  }
  // 表单项的子元素
  children?: FormOptions[]
}

const props = defineProps<{
  options: FormOptions[]
}>()

const model = ref(null)
const rules = ref({})

const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop] = item.value
      r[item.prop] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

onMounted(() => {
  initForm()
})
</script>

<template>
  <el-form
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
    v-if="model"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-if="!item.children || !item.children.length"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        ></component>
      </el-form-item>
      <el-form-item v-if="item.children && item.children.length">
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        >
          <component
            v-for="(child, index) in item.children"
            :key="index"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          >
          </component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<style scoped></style>
