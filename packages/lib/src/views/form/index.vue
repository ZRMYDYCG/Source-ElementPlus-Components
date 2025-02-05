<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus"

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
  },
  {
    type: "upload",
    label: "上传文件",
    prop: "pic",
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    },
    rules: [{ required: true, message: "请上传文件", trigger: "blur" }],
  },
]

const handlePreview = (file: any) => {
  console.log("handlePreview", file)
}

const handleRemove = (file: any, fileList: any) => {
  console.log("handleRemove", file, fileList)
  return ElMessageBox.confirm("确定要删除吗？")
}

const beforeRemove = (val: any) => {
  console.log("beforeRemove", val)
}

const handleSuccess = (res: any) => {
  console.log("handleSuccess", res)
}

const handleExceed = (val: any) => {
  console.log("handleExceed", val)
  ElMessageBox.alert("文件数量超出限制！")
}

const beforeUpload = (file: any) => {
  console.log("beforeUpload", file)
  const isJPG = file.type === "image/jpeg" || file.type === "image/png"
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isJPG) {
    ElMessageBox.alert("只能上传jpg/png格式的图片!")
    return false
  }
  if (!isLt2M) {
    ElMessageBox.alert("图片大小不能超过2M!")
    return false
  }
  return true
}

const handleChange = (val: any) => {
  console.log("handleChange", val)
}

const submitForm = (scope: any) => {
  scope.form.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("表单验证成功")
      console.log("submitForm", scope.model)
    } else {
      ElMessage.error("表单验证失败")
    }
  })
}

const resetForm = (scope: any) => {
  console.log("resetForm")
}
</script>

<template>
  <yq-form
    :options="options"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @before-remove="beforeRemove"
    @on-success="handleSuccess"
    @on-exceed="handleExceed"
    @beforeUpload="beforeUpload"
    @on-change="handleChange"
  >
    <template #uploadTrigger>
      <el-button type="primary" size="small">上传文件</el-button>
    </template>
    <template #uploadTip>
      <div class="text-gray-500">支持上传jpg/png文件，大小不超过2M</div>
    </template>
    <template #actions="scope">
      <el-button type="primary" size="small" @click.native="submitForm(scope)"
        >提交</el-button
      >
      <el-button type="warning" size="small" @click="resetForm(scope)"
        >重置</el-button
      >
    </template>
  </yq-form>
</template>

<style scoped></style>
