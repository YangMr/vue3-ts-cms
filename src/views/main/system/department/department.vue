<template>
  <div class="department">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="departmentSearchFormConfig"
    ></PageSearch>
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageUrl="/department"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { departmentSearchFormConfig } from './config/departmentForm.config'
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
