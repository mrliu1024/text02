// 这是html 入口引入js 文件
import Vue from 'vue'    //引入vue 文件

import VueRouter from 'vue-router'  // 导入路由
Vue.use(VueRouter)  //手动开启路由

import VueResource from 'vue-resource' // 2.1 导入 vue-resource
Vue.use(VueResource) // 2.2 安装 vue-resource

import './lib/mui/css/mui.min.css'  //引入mui样式
import './lib/mui/fonts/mui.ttf'  //引入字体图标
import './lib/mui/css/icons-extra.css' //引入mui 字体图标
import 'mint-ui/lib/style.css' 


import { Header, Swipe, SwipeItem } from 'mint-ui'    // 按需导入 Mint-UI 中的组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)      //挂载轮播图
Vue.component(SwipeItem.name, SwipeItem)

import router from './router.js'  //导入自己的路由
import app from './App.vue'   //导入app 根组件

var vm =new Vue({
  el:"#app",
  render: c=>c(app),  //把跟组件, 渲染到页面 ;  (其他地方 用 路由 加载上 )
  router
})