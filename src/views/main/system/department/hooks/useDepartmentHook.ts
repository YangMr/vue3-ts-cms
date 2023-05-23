import { modalFormConfig } from '../config/modal.config'
import { getDepartmentList } from '@/api/main/system/system'

export const useDepartmentHook = () => {
  const newCallBack = () => {
    // departmentList()
    const item = modalFormConfig.formItems.find(
      (item) => item.field === 'password'
    )
    if (item) item.isHidden = false
  }

  const editCallBack = () => {
    // departmentList()
    const item = modalFormConfig.formItems.find(
      (item) => item.field === 'password'
    )
    if (item) item.isHidden = true
  }

  const departmentList = async () => {
    try {
      const resultData = await getDepartmentList({ offset: 0, size: 10 })
      const { list } = resultData.data

      const department: any = modalFormConfig.formItems.find(
        (item) => item.field === 'parentId'
      )

      department.options = list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return {
    newCallBack,
    editCallBack,
    departmentList
  }
}
