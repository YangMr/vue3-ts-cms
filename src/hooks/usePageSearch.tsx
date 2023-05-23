import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // 点击表单重置触发的方法
  const handleResetClick = () => {
    pageContentRef.value?.getList()
  }

  // 点击表单搜索触发的方法
  const handleQueryClick = (form?: any) => {
    pageContentRef.value?.getList(form)
  }

  return {
    pageContentRef,
    handleResetClick,
    handleQueryClick
  }
  // return [pageContentRef, handleResetClick, handleQueryClick]
}
