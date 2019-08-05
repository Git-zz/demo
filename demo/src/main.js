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
import Vuex from 'vuex'
Vue.use(Vuex)
var car=JSON.parse(localStorage.getItem('car')||'[]')  //从localstorage中调用数据，防止页面刷新没有数据
var store=new Vuex.Store({
  state:{   //相当于data
    // count:0
    car:car
  },
  mutations:{
    addToCar(state,goodsinfo){
      var flag=false
      state.car.some(item=>{
        if (item.id==goodsinfo.id){
          item.count+=parseInt(goodsinfo.count)
          flag=true
          return true
        }
      })
      if (!flag){
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))  //把car数组存储到本地的localstorage中
    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
        if (item.id==goodsinfo.id){
          item.count=parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormCar(state,id){
      state.car.some((item,i)=>{
        if (item.id==id){
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsSelected(state,info){
      state.car.some(item=>{
        if (item.id==info.id) {
          item.selected=info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c=0
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getGoodsCount(state){
      var o={ }
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o={ }
      state.car.forEach(item=>{
        o[item.id]=item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      var o={count:0,amount:0}
      state.car.forEach(item=>{
        if (item.selected){
          o.count+=item.count
          o.amount+=item.count*item.price
        }
      })
      return o
    }
  }
})
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment().format(pattern)//moment()里什么都不放，获取的是当前时间
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
