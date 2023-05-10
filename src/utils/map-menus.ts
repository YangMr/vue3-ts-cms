import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/baseUI/breadcrumb/types'

// 页面权限   --- >   没有token 不能访问登录以后的页面
// 菜单权限   --- >   不同的用户登录展示不同的菜单
// 路由权限   --- >   不同的用户登录拥有不同的路由

/**
 * 路由权限实现思路:
 * 1. 创建对应的页面以及对应页面的路由
 * 2. 创建一个方法, 用来加载所有的路由
 * 3. 再创建一个方法, 根据后台返回的菜单数据匹配出当前用户所拥有的路由
 * 4. 页面加载的时候调用匹配路由方法,拿到当前用户所拥有的路由数据, 并且通过router.addRoute动态的添加在路由表中
 *
 */

// 按钮权限   --- >   不同的用户登录页面展示不同的按钮

// let firstMenu: any = null

export function mapMenuToRoutes(userMenus: RouteRecordRaw[]): RouteRecordRaw[] {
  // 保存匹配出的路由
  const routes: RouteRecordRaw[] = []

  // 1. 先获取所有的路由表
  // 保存所有的路由
  const allRoutes: RouteRecordRaw[] = []

  // 自动加载自定义的路由表
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.replace('.', ''))
    allRoutes.push(route.default)
  })

  // console.log(allRoutes)

  // 2. 根据菜单去匹配对应的路由
  function _recurseGetRoute(userMenus: any[]) {
    for (const menu of userMenus) {
      if (menu.type === 1) {
        _recurseGetRoute(menu.children)
      } else {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
          // if (!firstMenu) {
          //   firstMenu = route
          // }
        }
      }
    }
  }
  _recurseGetRoute(userMenus)

  // 3. 返回当前匹配出的路由
  return routes
}

export function pathMapBreadcrumbs(
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 匹配出当前路由对应的菜单
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  // userMenus 所有的菜单数据
  // currentPath 当前选中的菜单路径
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)

      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// export { firstMenu }
