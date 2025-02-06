<script setup lang="ts">
import { ref, watch } from "vue"

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
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
    <template #default>表单内容</template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<style scoped></style>
