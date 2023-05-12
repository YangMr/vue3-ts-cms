import { service } from '@/service'

// 获取系统管理各页面列表数据
export function getPageListData(url: string, data: any) {
  return service.request({
    url,
    method: 'POST',
    data
  })
}
