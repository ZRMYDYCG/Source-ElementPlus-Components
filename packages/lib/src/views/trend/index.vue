<script setup lang="ts"></script>

<template>
  <trend up-color="green" reverseColor="true" text="营业额" />
  <trend
    text="销售额"
    :reverseColor="false"
    downTextColor="red"
    type="down"
    down-color="red"
  />
</template>

<style scoped></style>
