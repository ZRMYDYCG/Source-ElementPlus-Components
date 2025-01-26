<script setup lang="ts">
const handleStartChange = (value: Date) => {
  console.log(value)
}

const handleEndChange = (value: Date) => {
  console.log(value)
}
</script>

<template>
  <div>
    <yq-choose-time
      @startTimeChange="handleStartChange"
      @endTimeChange="handleEndChange"
    ></yq-choose-time>
  </div>
</template>

<style scoped></style>
