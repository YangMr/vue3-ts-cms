import { IForm } from '@/baseUI/form'

export const departmentSearchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 },
  formItems: [
    {
      type: 'input',
      field: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      field: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导'
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
