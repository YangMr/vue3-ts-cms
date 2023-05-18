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
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    />
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/form.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { modalFormConfig } from './config/modal.config'
import { ref } from 'vue'
import PageModal from '@/components/page-modal'
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()

const pageModalRef = ref<InstanceType<typeof PageModal>>()

const defaultInfo = ref({})
const handleEditData = (row: any) => {
  console.log('row==>', row)
  defaultInfo.value = { ...row }
  if (pageModalRef.value) {
    pageModalRef.value.dialogVisible = true
  }
}

const handleNewData = () => {
  defaultInfo.value = {}
  if (pageModalRef.value) {
    pageModalRef.value.dialogVisible = true
  }
}

// const dialogVisible = ref(true)
//
// const formOrigin = ref<any>({})
//
// const formItems = modalFormConfig?.formItems ?? []

// for (const item of formItems) {
//   formOrigin.value[item.field] = ''
// }
//
// const formData = ref(formOrigin)
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
