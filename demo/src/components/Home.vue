<template>
    <div class="home">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.id">
          <img :src="item.img">
        </mt-swipe-item>
      </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu2.png">
          <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu3.png">
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu4.png">
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu5.png">
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../assets/images/menu6.png">
          <div class="mui-media-body">联系我们</div></a></li>
      </ul>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
        name: "Home",
      data(){
          return{
            lunbotu:[]
          }
      },
      created(){
          this.getLunbotu();
      },
      methods:{
          getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
              if (result.body.status==0) {
                this.lunbotu=result.body.message
              }else{
                Toast("加载失败")
              }
            })
          }
      }
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: #31708f;
    }
    &:nth-child(2){
      background-color: #8a6de9;
    }
    &:nth-child(3){
      background-color: #d9534f;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:none;
  img{
    width: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
  .mui-media-body{
    font-size: 13px;
  }
}



</style>
