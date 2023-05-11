import { IForm } from '@/baseUI/form'

export const roleSearchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 },
  formItems: [
    {
      type: 'input',
      field: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      field: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      type: 'datepicker',
      field: 'createAt',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '请选择开始时间',
        endPlaceholder: '请选择结束时间',
        type: 'daterange'
      }
    }
  ]
}
