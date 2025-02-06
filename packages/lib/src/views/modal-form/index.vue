<script setup lang="ts">
import { ref } from "vue"

const visible = ref(false)

const handleOpen = () => {
  visible.value = !visible.value
}
</script>

<template>
  <el-button type="primary" @click="handleOpen">open modal form </el-button>
  <yq-modal-form v-model:visible="visible" title="modal form" width="30%">
    <template #footer>
      <el-button type="primary" @click="visible = false">confirm</el-button>
      <el-button @click="visible = false">cancel</el-button>
    </template>
  </yq-modal-form>
</template>

<style scoped></style>
