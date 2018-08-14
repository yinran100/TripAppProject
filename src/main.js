// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
  1.meta标签中content属性中加入minium-scale=1.0,maximun-scale=1.0,user-scalable=no可以防止手指放大缩小页面 
  2.为了统一不同浏览器的默认css属性，引入基础样式修饰reset.css
  3.为了解决多倍屏里面1像素边框会被显示多像素的问题需要引入border.css 
  4.在移动端开发中某些设备或浏览器上当时有click事件时会有300ms的延迟。解决方案引入fastclick库 npm install fastclick --save (--save表示开发和线上打包环境都会包含)
  stylus版本0.52.4  stylus-loader版本2.5.0，否则vue 报错：Module build failed: Error: Cannot find module 'when'
  swiper轮播插件  需要npm安装 npm install vue-awesome-swiper@2.6.7 --save   （防止最新版本有些bug，采用旧版本2.6.7）
  axios用于数据Ajax请求  npm install axios --save
 在网络不通畅的移动端，加载图片时会有延迟，目标元素需要占用该位置的宽高,给个灰色背景颜色
 * 
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
