// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import backTop from './components/back-top/index.js'

Vue.config.productionTip = false
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(backTop)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
