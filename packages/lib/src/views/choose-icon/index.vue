<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
</script>

<template>
  <div>
    <choose-icon title="选择图标" v-model:visible="visible">
      <span>选择图标</span>
    </choose-icon>
  </div>
</template>

<style scoped></style>
