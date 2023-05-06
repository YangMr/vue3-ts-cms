<template>
  <div class="login-phone">
    <el-form ref="formRef" :model="phone" label-width="70px">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 表单数据
const phone = reactive({
  number: '',
  code: ''
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .el-button {
    margin-left: 8px;
  }
}
</style>
