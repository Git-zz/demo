<template>
    <div class="goodsinfo">
<!--      轮播图-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <Swiper :lunbotu="lunbotu" :isfull="false"></Swiper>
          </div>
        </div>
      </div>
<!--  中间-->
      <div class="mui-card">
        <div class="mui-card-header">{{goodsinfo.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
            </p>
            <p>购买数量：<Goodsinfo_Numbox></Goodsinfo_Numbox></p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
          </div>
        </div>
      </div>
<!--      底部-->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{goodsinfo.goods_no}}</p>
            <p>库存情况：{{goodsinfo.stock_quantity}}</p>
            <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
      </div>

    </div>
</template>

<script>
  import Swiper from './Swiper'
  import Goodsinfo_Numbox from './Goodsinfo_Numbox'
    export default {
        name: "GoodsInfo",
      data(){
        return{
          id:this.$route.params.id,
          lunbotu:[],
          goodsinfo:{}
        }
      },
      created(){
        this.getLunbotu()
        this.getGoodsInfo()
      },
      methods:{
          getLunbotu(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
              if (result.body.status==0){
                result.body.message.forEach(item=>{
                  item.img=item.src
                })
                this.lunbotu=result.body.message;
              }
            })
          },
        getGoodsInfo(){
            this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
              if (result.body.status==0){
                this.goodsinfo=result.body.message[0]
              }
          })
        },
        goDesc(id){
            this.$router.push({ name:"GoodsDesc",params:{ id } })
        },
        goComment(id){
          this.$router.push({ name:"GoodsComment",params:{ id } })
        }
      },
      components:{
          Swiper,
        Goodsinfo_Numbox
      }
    }
</script>

<style lang="scss" scoped>
.goodsinfo{
  background-color: #eee;
  overflow: hidden;
}
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 15px 0;
    }
  }
</style>
