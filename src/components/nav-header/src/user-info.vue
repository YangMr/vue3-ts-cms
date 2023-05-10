<template>
  <div class="user-info">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
        />

        <span class="name">{{ userInfo.name || '' }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus" command="logout"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item
            :icon="CirclePlusFilled"
            command="changeInfo"
            divided
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item :icon="CirclePlus" command="changPass"
            >修改密码</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
import { CirclePlus, CirclePlusFilled, Plus } from '@element-plus/icons-vue'
const store = useStore()
const router = useRouter()

const userInfo = computed(() => store.state.loginModule.userInfo)

// 点击下拉菜单项触发的方法
const handleCommand = (command: string) => {
  console.log('command', command)
  switch (command) {
    case 'logout':
      handleLogout()
      break
    case 'changeInfo':
      // TODO 修改用户信息
      break
    case 'changPass':
      // TODO 修改密码
      break
  }
}

// 退出登录
const handleLogout = () => {
  localCache.deleteCache('token')
  router.push('/login')
}
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
    margin-left: 10px !important;
  }
}
:focus {
  outline: 0;
}
</style>
