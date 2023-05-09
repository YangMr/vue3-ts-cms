import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ILoginState } from '@/store/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/api/login/login'
import { IAccount } from '@/api/login/type'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenuToRoutes } from '@/utils/map-menus'

console.log('router', router)

// ts 最核心的目的: 告诉程序在编译阶段就能发现代码的错误, 而不是在运行的时候发现错误

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
    // token: localCache.getCache('token') ?? '',
    // userInfo: localCache.getCache('userInfo') ?? {},
    // userMenus: localCache.getCache('userMenus') ?? []
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const routes = mapMenuToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    // 调用登录接口方法
    async accountLoginAction({ commit }, payload: IAccount) {
      try {
        // 调用登录接口
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        commit('changeToken', token)
        localCache.setCache('token', token)

        // 获取用户信息
        const userInfoResult = await requestUserInfoById(id)
        console.log('userInfoResult=>', userInfoResult)
        const userInfo = userInfoResult.data
        commit('changeUserInfo', userInfo)
        localCache.setCache('userInfo', userInfo)

        // 获取当前用户拥有的菜单数据
        const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
        const userMenus = userMenusResult.data
        commit('changeUserMenus', userMenus)
        localCache.setCache('userMenus', userMenus)

        // 跳转到主页
        await router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
