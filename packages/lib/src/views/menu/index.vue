<script setup lang="ts">
const data = [
  {
    name: "导航一",
    index: "1",
    icon: "document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航三-1",
        index: "3-1",
        icon: "document",
      },
    ],
  },
]
</script>

<template>
  <yq-menu :data="data" default-active="2"></yq-menu>
</template>

<style scoped></style>
