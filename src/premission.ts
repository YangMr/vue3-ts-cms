import router from '@/router'
import localCache from '@/utils/cache'

// import { firstMenu } from '@/utils/map-menus'

router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path === '/main') {
    const userMenus = localCache.getCache('userMenus')
    console.log('userMenus', userMenus[0])
    return userMenus[0]?.children[0]?.url
  }
})
