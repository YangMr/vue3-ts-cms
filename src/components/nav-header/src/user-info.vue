<template>
  <div class="user-info">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="name">{{ userInfo.name || '' }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">退出登录</el-dropdown-item>
          <el-dropdown-item command="e" divided>个人信息</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const userInfo = computed(() => store.state.loginModule.userInfo)
</script>

<style scoped lang="less">
.user-info {
  height: 100%;
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  .name {
    margin-right: 10px !important;
  }
}
</style>
