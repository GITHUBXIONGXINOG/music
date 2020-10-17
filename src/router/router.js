//路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入main页面
import Main from '@/views/Main'
import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import Rank from '@/views/Rank'
import Search from '@/views/Search'

Vue.use(VueRouter)
// routes 路由表
// routes：指创建vue-router路由实例的配置项。用来配置多个route路由对象
// path 路径
// component 映射组件
// children 嵌套路由
// {path: '',component: Recommend} 刚开始打开页面默认匹配
const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path: '',component: Recommend},
      {path:'Recommend',component:Recommend},
      {path:'Singer',component:Singer},
      {path:'Rank',component:Rank},
      {path:'Search',component:Search}
    ]
  }
]
//router：路由器对象，包含一些操作路由的功能函数，来实现编程式导航。一般指的是在任何组件内访问路由。
const router = new VueRouter({
  routes
})
//路由重复消除
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

//export default 只能导出一个默认模块
export default router
