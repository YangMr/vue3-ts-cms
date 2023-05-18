import { modalFormConfig } from '../config/modal.config'
import { getDepartmentList, getRoleList } from '@/api/main/system/system'

export const useUserHook = () => {
  const newCallBack = () => {
    roleList()
    departmentList()
    const item = modalFormConfig.formItems.find(
      (item) => item.field === 'password'
    )
    if (item) item.isHidden = false
  }

  const editCallBack = () => {
    roleList()
    departmentList()
    const item = modalFormConfig.formItems.find(
      (item) => item.field === 'password'
    )
    if (item) item.isHidden = true
  }

  const roleList = async () => {
    try {
      const resultData = await getRoleList({ offset: 0, size: 10 })
      console.log('role', resultData)
      const { list } = resultData.data

      const role: any = modalFormConfig.formItems.find(
        (item) => item.field === 'roleId'
      )

      role.options = list.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const departmentList = async () => {
    try {
      const resultData = await getDepartmentList({ offset: 0, size: 10 })
      const { list } = resultData.data

      const department: any = modalFormConfig.formItems.find(
        (item) => item.field === 'departmentId'
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
    roleList,
    departmentList
  }
}
