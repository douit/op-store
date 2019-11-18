import router from './router/index.js'
import store from './store/index.js'
import api from './http/api.js'

router.beforeEach(async(to, form, next) => {
  let user = sessionStorage.getItem('vue2-template-user')
  if(user && (Object.keys(store.state.user.user).length === 0)){
    store.dispatch('user/setUser',JSON.parse(user))
  }
  next()
})

router.afterEach(() => {

})

async function addDynamicMenuAndRoutes(to) {
  // 1. 获取菜单
  return new Promise((resolve, reject) => {
    api.menu.getList().then((res) => {
      // 2. 创建路由
      let routes = generateRoutes(res.data)
      router.addRoutes(getAddRoutes(routes))
      store.dispatch('menu/setMenuList', res.data) // 保存菜单信息
      store.dispatch('permission/setDynamicRoutes', routes) // 保存路由信息
      if(to.path === '/'){
        resolve({ path: routes[0].path })
      }else{
        resolve({ path: to.path })
      }
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 根据菜单生成动态路由
 * 1 无子路由的父级处理
 * 2 存在子路由父路由处理
 * 3 子路由处理
 * @param menuList
 */
function generateRoutes(menuList, routes = []) {
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length > 0) {
      generateRoutes(menuList[i].children, routes)
    } else if (menuList[i].permissionUrl) {
      let url = menuList[i].permissionUrl
      if (url.startsWith('/')) // 去掉路径开头的 /
        url = url.slice(1)
      let route = {
        path: '/'+url,
        component: resolve => require([`@/views/${url}`], resolve),
        name: menuList[i].permissionName,
        meta: {
          icon: menuList[i].permissionIcon,
          index: menuList[i].id
        }
      }
      routes.push(route)
    }
  }
  return routes
}

function getAddRoutes(routes) {
  let errorRoute = {path: '*', redirect: '/404', hidden: true}
  router.options.routes[0].children = routes
  router.options.routes.push(errorRoute)
  return [router.options.routes[0], errorRoute]
}
