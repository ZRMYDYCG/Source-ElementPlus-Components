<script setup lang="ts">
import { actions, List } from "@/components/list/src/type.ts"
</script>

<template>
  <yq-notification :value="50">
    <yq-list :list="List" :actions="actions"></yq-list>
  </yq-notification>
</template>

<style scoped></style>
