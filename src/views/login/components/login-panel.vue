<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" v-model="currentTab" class="demo-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import type { ComponentType } from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { ref } from 'vue'

// tab切换选中的值
const currentTab = ref<string>('account')

// 是否记住密码
const isKeepPassword = ref<boolean>(true)

// 定义loginAccountRef
const loginAccountRef = ref<null | ComponentType>(null)

// 立即登录方法
const handleLoginClick = () => {
  console.log('立即登录')
  if (currentTab.value === 'account') {
    // TODO 账号密码登录
    loginAccountRef.value?.loginAction(isKeepPassword.value)
  } else {
    // TODO 手机号登录
    alert('phone')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .login-button {
    width: 100%;
    margin-top: 10px;
    padding: 20px 0;
  }
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
