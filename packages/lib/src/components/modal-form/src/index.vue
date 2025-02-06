<script setup lang="ts">
import { type PropType, ref, watch } from "vue"
import type { FormOptions } from "../../form/src/interface.ts"

const form = ref<any>(null)

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
})

const emits = defineEmits(["update:visible"])

const dialogVisible = ref(props.visible)

watch(
  () => props.visible,
  (value) => {
    dialogVisible.value = value
  },
)

watch(dialogVisible, (value) => {
  emits("update:visible", value)
})
</script>

<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>
      <yq-form ref="form" :options="options"></yq-form>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<style scoped></style>
