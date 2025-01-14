<script setup lang="ts">
const handleAreaChange = (area: any) => {
  console.log(area)
}
</script>

<template>
  <choose-area @change="handleAreaChange" />
</template>

<style scoped></style>
