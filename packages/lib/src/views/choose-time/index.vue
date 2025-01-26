<script setup lang="ts">
const handleStartChange = (value: Date) => {
  console.log(value)
}

const handleEndChange = (value: Date) => {
  console.log(value)
}

const startOptions = {
  size: "mini",
  clearable: false,
}
</script>

<template>
  <div>
    <yq-choose-time
      @startTimeChange="handleStartChange"
      @endTimeChange="handleEndChange"
      :startOptions="startOptions"
    ></yq-choose-time>
  </div>
</template>

<style scoped></style>
