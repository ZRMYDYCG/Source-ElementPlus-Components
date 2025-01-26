<script setup lang="ts">
import { ref } from "vue"

const handleStartDateChange = (date: Date) => {
  console.log("start date change", date)
}

const handleEndDateChange = (date: Date) => {
  console.log("end date change", date)
}

const startOptions = {
  size: "large",
  clearable: false,
}
</script>

<template>
  <yq-choose-date
    @startDateChange="handleStartDateChange"
    @endDateChange="handleEndDateChange"
    :startOptions="startOptions"
  ></yq-choose-date>
</template>

<style scoped></style>
