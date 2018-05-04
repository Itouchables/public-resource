// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-ydui/dist/ydui.base.css'
// import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.px/tabbar'
import {Icons} from 'vue-ydui/dist/lib.px/icons'

Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(Icons.name, Icons)

// 注意：按需引入单个组件，另需导入重置基础样式；即在 main.js 或根组件执行 import 'vue-ydui/dist/ydui.base.css';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
