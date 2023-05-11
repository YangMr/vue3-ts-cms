import { IForm } from '@/baseUI/form'

export const categorySearchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: { padding: '10px 20px' },
  colLayout: { span: 8 },
  formItems: [
    {
      type: 'input',
      field: 'name',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      type: 'datepicker',
      field: 'createAt',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
