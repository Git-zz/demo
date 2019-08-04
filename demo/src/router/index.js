import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcar from '@/components/Shopcar'
import Search from '@/components/Search'
import NewsList from '@/components/NewsList'
import NewsInfo from '@/components/NewsInfo'
import PhotoList from '@/components/PhotoList'
import PhotoInfo from '@/components/PhotoInfo'
import GoodsList from '@/components/GoodsList'
import GoodsInfo from '@/components/GoodsInfo'
import GoodsDesc from '@/components/GoodsDesc'
import GoodsComment from '@/components/GoodsComment'
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
    },
    {
      path:'/home/photolist',
      name:'PhotoList',
      component:PhotoList
    },
    {
      path:'/home/photoinfo/:id',
      name:'PhotoInfo',
      component:PhotoInfo
    },
    {
      path:'/home/goodslist',
      name:'GoodsList',
      component:GoodsList
    },
    {
      path:'/home/goodsinfo/:id',
      name:'GoodsInfo',
      component:GoodsInfo
    },
    {
      path:'/home/goodsdesc/:id',
      name:'GoodsDesc',
      component:GoodsDesc
    },
    {
      path:'/home/goodscomment/:id',
      name:'GoodsComment',
      component:GoodsComment
    }
  ],
  linkActiveClass:'mui-active'
})
