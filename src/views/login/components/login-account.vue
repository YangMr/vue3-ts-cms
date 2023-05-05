<template>
  <div class="login-account">
    <el-form ref="formRef" :model="account" :rules="rules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
// 导入缓存文件
import localCache from '@/utils/cache'

// 导入表单校验规则
import { rules } from '../config/account-config'

// 定义formRef
const formRef = ref<InstanceType<typeof ElForm>>()

// 表单数据
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

export interface ComponentType {
  loginAction: () => void
}

// 账号密码登录方法
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('isKeepPassword', isKeepPassword)
      // 1. 如果勾选了记住密码,则将账号和密码保存到本地
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // 2. 实现登录
    }
  })
}

// 将子组件的方法暴露给父组件
defineExpose({
  loginAction
})
</script>

<style scoped></style>
