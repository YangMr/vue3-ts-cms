import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void
export function usePageModal(newCB: CallbackFn, editCB: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleEditData = (row: any) => {
    console.log('row==>', row)
    defaultInfo.value = { ...row }
    editCB()
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  const handleNewData = () => {
    defaultInfo.value = {}
    newCB()
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return {
    handleEditData,
    handleNewData,
    defaultInfo,
    pageModalRef
  }
}
