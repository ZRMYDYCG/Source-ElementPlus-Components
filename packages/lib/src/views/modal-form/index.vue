<script setup lang="ts">
import { ref } from "vue"
import { ElMessage } from "element-plus"

const visible = ref(false)

const handleOpen = () => {
  visible.value = !visible.value
}

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
    prop: "role",
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
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
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
    rules: [{ required: true, message: "请选择爱好", trigger: "blur" }],
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
    rules: [{ required: true, message: "请选择性别", trigger: "blur" }],
  },
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述...............",
    rules: [
      {
        required: true,
        message: "请输入描述",
        trigger: "blur",
      },
    ],
  },
]

const cancel = (form) => {
  visible.value = false
  form.resetFields()
}

const submit = (form) => {
  let validate = form.validate()
  console.log("submit", form)
  let model = form.getFormData()
  validate((valid: any) => {
    if (valid) {
      ElMessage.success(`提交成功${JSON.stringify(model)}`)
      visible.value = false
      form.resetFields()
    } else {
      ElMessage.error("表单验证失败")
    }
  })
}
</script>

<template>
  <el-button type="primary" @click="handleOpen">open modal form </el-button>
  <yq-modal-form
    v-model:visible="visible"
    title="modal form"
    width="50%"
    :options="options"
  >
    <template #footer="{ form }">
      <el-button type="primary" @click="cancel(form)">取消</el-button>
      <el-button @click="submit(form)">提交</el-button>
    </template>
  </yq-modal-form>
</template>

<style scoped></style>
