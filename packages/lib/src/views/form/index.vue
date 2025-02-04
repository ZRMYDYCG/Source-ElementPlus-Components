<script setup lang="ts">
const options = [
  {
    type: "input",
    value: "",
    label: "用户名",
    rules: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      {
        min: 3,
        max: 10,
        message: "用户名长度在 3 到 10 个字符",
        trigger: "blur",
      },
    ],
  },
  {
    type: "input",
    value: "",
    label: "密码",
    rules: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      {
        min: 3,
        max: 10,
        message: "用户名长度在 3 到 10 个字符",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
    },
  },
]
</script>

<template>
  <yq-form :options="options"></yq-form>
</template>

<style scoped></style>
