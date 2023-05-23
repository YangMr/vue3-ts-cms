<template>
  <div class="user">
    <PageSearch
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>

    <div class="content">
      <PageContent
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
        ref="pageContentRef"
        pageUrl="/users"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>

    <PageModal
      @action="handleQueryClick"
      ref="pageModalRef"
      pageUrl="/users"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/form.config'
import { contentConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useUserHook } from './hooks/useUserHook'

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
const { newCallBack, editCallBack, roleList, departmentList } = useUserHook()
const { defaultInfo, handleEditData, handleNewData, pageModalRef } =
  usePageModal(newCallBack, editCallBack)
roleList()
departmentList()
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
