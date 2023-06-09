import { IForm } from '@/baseUI/form'

export const goodsSearchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '可用',
          value: 1
        },
        {
          label: '下架',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        type: 'daterange'
      }
    }
  ]
}
