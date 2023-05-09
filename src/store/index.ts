import { createStore } from 'vuex'
import { IRootState } from '@/store/types'
import loginModule from '@/store/login/login'

const store = createStore<IRootState>({
  state: {
    name: ''
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export default store
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
