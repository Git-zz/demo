import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcar from '@/components/Shopcar'
import Search from '@/components/Search'
import NewsList from '@/components/NewsList'
import NewsInfo from '@/components/NewsInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   // name: 'HelloWorld',
    //   // component: HelloWorld
    //   name:'app'
    // },
    {
      path:'/',redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/member',
      name:'Member',
      component:Member
    },
    {
      path:'/shopcar',
      name:'Shopcar',
      component:Shopcar
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/home/newslist',
      name:'NewsList',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:id',
      name:'NewsInfo',
      component:NewsInfo
    }
  ],
  linkActiveClass:'mui-active'
})
