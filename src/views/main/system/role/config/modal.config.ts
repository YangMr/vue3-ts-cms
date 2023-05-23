import { IForm } from '@/baseUI/form'

export const modalFormConfig: IForm = {
  labelWidth: '80px',
  itemStyle: {},
  colLayout: { span: 24 },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色描述',
      placeholder: '请输入角色描述'
    }
  ]
}
