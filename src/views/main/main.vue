<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="page-aside" :width="isCollapse ? '60px' : '210px'">
        <NavMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// 实现主页布局
// 组件进行拆分
// 实现侧边栏的logo
// 实现菜单动态渲染
// 实现菜单的展开与收起
// 创建菜单对应页面
// 配置对应菜单页面路由

import { ref } from 'vue'
// 控制侧边栏展开还是收起
const isCollapse = ref(false)
// 接收子组件传递的状态
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;

  .main-container,
  .page {
    height: 100%;
  }

  .page-header {
    height: 48px;
  }

  .page-main {
    background: #f0f2f5;
    height: calc(100% - 48px);
  }

  .page-aside {
    background-color: #001529;
    overflow-x: hidden;
    transition: width 0.3s linear;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
