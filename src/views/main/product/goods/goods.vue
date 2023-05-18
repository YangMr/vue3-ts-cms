<template>
  <div class="goods">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :search-form-config="goodsSearchFormConfig"
    ></PageSearch>
    <div class="content">
      <PageContent
        ref="pageContentRef"
        pageUrl="/goods"
        :contentConfig="contentConfig"
      >
        <template #img="scope">
          <img :src="scope.row.imgUrl" width="50" height="50" alt="img" />
        </template>
      </PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { goodsSearchFormConfig } from './config/goodsForm.config'
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
