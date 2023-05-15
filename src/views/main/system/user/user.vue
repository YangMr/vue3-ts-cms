<template>
  <div class="user">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageUrl="/users"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/form.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
