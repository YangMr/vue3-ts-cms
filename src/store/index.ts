import { createStore } from 'vuex'
import { IRootState } from '@/store/types'
import loginModule from '@/store/login/login'

export default createStore<IRootState>({
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
