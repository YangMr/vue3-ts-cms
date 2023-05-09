<template>
  <div class="nav-header">
    <el-icon class="menu-icon" size="25" @click="handleMenuIconClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>面包屑导航</div>
      <UserInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

// 展开收起菜单的状态 false 展开
const isFold = ref<boolean>(false)

const emits = defineEmits(['foldChange'])

// 点击展开收起菜单图标触发的方法
const handleMenuIconClick = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;

  .menu-icon {
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
