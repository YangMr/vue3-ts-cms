export const contentConfig = {
  // showIndexColumn: true,
  // showSelectionColumn: true,
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      width: '200',
      align: 'center'
    },
    {
      prop: 'type',
      label: '级别',
      width: '100',
      align: 'center'
    },
    {
      prop: 'url',
      label: '菜单url',
      width: '250',
      align: 'center'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      width: '250',
      align: 'center'
    },
    {
      prop: 'sort',
      label: '排序',
      align: 'center'
    },
    {
      prop: 'permission',
      label: '权限',
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
