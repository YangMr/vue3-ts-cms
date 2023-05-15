export const contentConfig = {
  showIndexColumn: true,
  showSelectionColumn: true,
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      width: '100',
      align: 'center',
      showOverflowTooltip: true,
      slotName: 'pname'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      width: '100',
      align: 'center'
    },
    {
      prop: 'newPrice',
      label: '新价格',
      width: '100',
      align: 'center'
    },
    {
      prop: 'desc',
      label: '商品描述',
      width: '100',
      align: 'center',
      showOverflowTooltip: true,
      slotName: 'desc'
    },
    {
      prop: 'status',
      label: '状态',
      width: '100',
      align: 'center'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      width: '100',
      align: 'center',
      slotName: 'img'
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      width: '100',
      align: 'center'
    },
    {
      prop: 'saleCount',
      label: '销量',
      width: '100',
      align: 'center'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      width: '100',
      align: 'center'
    },
    {
      prop: 'address',
      label: '地址',
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
