// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './lib/mui/css/mui.min.css'
import'./lib/mui/css/icons-extra.css'
// import "./lib/mui/js/mui.min"
import './css/hello.css'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON=true
Vue.use(MintUI)
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment().format(pattern)//moment()里什么都不放，获取的是当前时间
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
