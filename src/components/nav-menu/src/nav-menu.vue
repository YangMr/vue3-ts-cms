<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span v-show="!isCollapse" class="title">Vue3 + Ts</span>
    </div>

    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      class="el-menu-vertical"
      :default-active="defaultActive"
      :collapse="isCollapse"
      unique-opened
      text-color="rgb(183, 189, 195)"
    >
      <template v-for="(item, index) in userMenus" :key="index">
        <el-menu-item
          v-if="item.children && item.children.length <= 0"
          :index="item.id.toString()"
          @click="handleMenuItemClick(item)"
          >{{ item.name }}</el-menu-item
        >
        <el-sub-menu v-else :index="item.id.toString()">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(subMenu, index) in item.children" :key="index">
            <el-menu-item
              :index="subMenu.id.toString()"
              @click="handleMenuItemClick(subMenu)"
              >{{ subMenu.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
const store = useStore()
const router = useRouter()
const route = useRoute()

// 1. 拿到vuex中菜单数据
const userMenus = computed(() => store.state.loginModule.userMenus)

// 2. 接收父组件传递过来的状态
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const menus = computed(() => {
  const currentPath = route.path
  const menus = pathMapToMenu(userMenus.value, currentPath)
  return menus.id
})

const defaultActive = ref<string>(menus.value.toString())

// 点击菜单进行跳转
const handleMenuItemClick = (subMenu: any) => {
  router.push(subMenu.url ?? '')
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    height: 28px;
    padding: 12px 10px 8px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;

    .el-menu-item {
      background: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      //color: #fff !important;
      background-color: #0a60bd !important;
    }
  }
}
</style>
