import { service } from '@/service'

// 获取系统管理各页面列表数据
export function getPageListData(url: string, data: any) {
  return service.request({
    url,
    method: 'POST',
    data
  })
}

export function actionPageData(url: string, method: string, data: any) {
  return service.request({
    url,
    method,
    data
  })
}

export function getRoleList(data: any) {
  return service.request({
    url: '/role/list',
    method: 'POST',
    data
  })
}

export function getDepartmentList(data: any) {
  return service.request({
    url: '/department/list',
    method: 'POST',
    data
  })
}

export function deletePageData(url: string) {
  return service.request({
    url,
    method: 'DELETE'
  })
}
