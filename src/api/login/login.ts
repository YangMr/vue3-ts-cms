import { service } from '@/service'
import { IAccount, IDataType, ILoginResult } from '@/api/login/type'

// 登录接口
export const accountLoginRequest = (account: IAccount) => {
  return service.request<IDataType<ILoginResult>>({
    url: '/login',
    method: 'POST',
    data: account
  })
}

// 获取用户信息接口
export const requestUserInfoById = (id: string | number) => {
  return service.request<IDataType>({
    url: `/users/${id}`,
    method: 'GET',
    showLoading: false
  })
}

// 获取当前角色所拥有的菜单数据接口
export const requestUserMenusByRoleId = (id: string | number) => {
  return service.request<IDataType>({
    url: `/role/${id}/menu`,
    method: 'GET',
    showLoading: false
  })
}
