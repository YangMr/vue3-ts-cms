<template>
  <div class="role">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="roleSearchFormConfig"
    ></PageSearch>
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageUrl="/role"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { roleSearchFormConfig } from './config/roleForm.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
