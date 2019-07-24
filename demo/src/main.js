// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './lib/mui/css/mui.min.css'
import './css/hello.css'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
