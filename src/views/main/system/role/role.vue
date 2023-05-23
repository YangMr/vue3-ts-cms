<template>
  <div class="role">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="roleSearchFormConfig"
    ></PageSearch>

    <div class="content">
      <PageContent
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
        ref="pageContentRef"
        pageUrl="/role"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>

    <PageModal
      @action="handleQueryClick"
      ref="pageModalRef"
      pageUrl="/role"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import { roleSearchFormConfig } from './config/roleForm.config'
import { contentConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
const { defaultInfo, handleEditData, handleNewData, pageModalRef } =
  usePageModal()
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
