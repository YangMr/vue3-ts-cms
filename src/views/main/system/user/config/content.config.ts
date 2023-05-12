export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propList: [
    {
      prop: 'name',
      label: '用户名',
      width: '100',
      align: 'center'
    },
    {
      prop: 'realname',
      label: '真实名',
      width: '100',
      align: 'center'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      width: '120',
      align: 'center'
    },
    {
      prop: 'enable',
      label: '状态',
      width: '100',
      align: 'center',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '250',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '250',
      align: 'center',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      align: 'center',
      slotName: 'handles',
      'min-width': '150'
    }
  ]
}
