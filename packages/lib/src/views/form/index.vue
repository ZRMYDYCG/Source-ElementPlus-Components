<script setup lang="ts">
const options = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
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
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      { required: true, message: "请输入密码", trigger: "blur" },
      {
        min: 3,
        max: 10,
        message: "密码长度在 3 到 10 个字符",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
      showPassword: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    label: "职位",
    props: "role",
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        label: "管理员",
        value: "admin",
        type: "option",
      },
      {
        label: "普通用户",
        value: "user",
        type: "option",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    children: [
      {
        type: "checkbox",
        label: "篮球",
        value: "basketball",
      },
      {
        type: "checkbox",
        label: "足球",
        value: "football",
      },
    ],
  },
  {
    type: "radio-group",
    value: [],
    prop: "gender",
    label: "性别",
    children: [
      {
        type: "radio",
        label: "man",
        value: "basketball",
      },
      {
        type: "radio",
        label: "woman",
        value: "football",
      },
    ],
  },
]
</script>

<template>
  <yq-form :options="options"></yq-form>
</template>

<style scoped></style>
