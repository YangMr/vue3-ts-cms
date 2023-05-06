import router from '@/router'
import localCache from '@/utils/cache'
router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
