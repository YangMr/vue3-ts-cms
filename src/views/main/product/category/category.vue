<template>
  <div class="category">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :search-form-config="categorySearchFormConfig"
    ></PageSearch>
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageUrl="/category"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { categorySearchFormConfig } from './config/categoryForm.config'
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
