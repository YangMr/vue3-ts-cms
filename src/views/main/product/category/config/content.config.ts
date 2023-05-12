export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propList: [
    {
      prop: 'name',
      label: '分类名称',
      width: '100',
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '250',
      align: 'center',
      slotName: 'updateAt'
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
