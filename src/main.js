/* 导入全局组件，一般是外部组件 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 代表自身目录
import App from './App'
import router from './router'

// npm i element-ui -S  -S 生产环境 -D开发环境
// 导入外部组件
import ElementUI from 'element-ui'
// element-ui提供样式修饰的总文件
import 'element-ui/lib/theme-chalk/index.css'
// 将这个样式加入Vue项目中
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
