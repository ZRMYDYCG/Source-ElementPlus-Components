<script setup lang="ts">
import ChooseArea from "@/components/choose-area/src/index.vue"

const handleAreaChange = (area: any) => {
  console.log(area)
}
</script>

<template>
  <ChooseArea @change="handleAreaChange" />
</template>

<style scoped></style>
