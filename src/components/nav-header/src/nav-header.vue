<template>
  <div class="nav-header">
    <el-icon class="menu-icon" size="25" @click="handleMenuIconClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <BreadCrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import BreadCrumb from '@/baseUI/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

// 展开收起菜单的状态 false 展开
const isFold = ref<boolean>(false)

const emits = defineEmits(['foldChange'])

const breadcrumbs = computed(() => {
  return pathMapBreadcrumbs(store.state.loginModule.userMenus, route.path)
})

console.log('breadcrumbs', breadcrumbs)

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
    padding: 0 20px;
  }
}
</style>
