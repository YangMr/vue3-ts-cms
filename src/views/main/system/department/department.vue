<template>
  <div class="department">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="departmentSearchFormConfig"
    ></PageSearch>

    <div class="content">
      <PageContent
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
        ref="pageContentRef"
        pageUrl="/department"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>

    <PageModal
      @action="handleQueryClick"
      ref="pageModalRef"
      pageUrl="/department"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import { departmentSearchFormConfig } from './config/departmentForm.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalFormConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'
import { useDepartmentHook } from './hooks/useDepartmentHook'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
const { defaultInfo, handleEditData, handleNewData, pageModalRef } =
  usePageModal()
const { departmentList } = useDepartmentHook()
departmentList()
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
