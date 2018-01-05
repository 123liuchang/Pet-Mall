import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  /*声明*/


const classifys = () => import('../pages/classifys/classifys.vue')  // import函数运行时动态加载模块包
const mainpage = () => import('../pages/mainpage/mainpage.vue')
const mypet = () => import('../pages/mypet/mypet.vue')
const shopping = () => import('../pages/shopping/shopping.vue')
// 所有路由的数组   //都是外层的路由
const routes = [
  // 地址为空时跳转mainpage页面
  {
    path: '/',
    redirect: '/mainpage'
  },
  // 首页
  {
    path: '/mainpage',
    component: mainpage,
    /*children:[
      {
        path: 'indexbox',
        component: indexbox
      }
    ],*/
    meta: {keepAlive: true, isTop: true},
  },

  //分类
  {
    path: '/classifys',
    component: classifys,
    meta: {keepAlive: true, isTop: true},
  },
  //购物车
  {
    path: '/shopping',
    component: shopping,
    meta: {keepAlive: true, isTop: true},
  },
  // 我的宠物
  {
    path: '/mypet',
    component: mypet,
    meta: {keepAlive: true, isTop: true},
  },
]

export default new VueRouter({
  routes
})

