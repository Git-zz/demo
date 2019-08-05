<template>
    <div class="shopcar">

      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

<!--结算区-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import numbox from './Shopcar_Numbox'
    export default {
        name: "Shopcar",
      data(){
          return{
            goodslist:[]
          }
      },
      created(){
        this.getGoodsList()
      },
      methods:{
          getGoodsList(){
            var idArr=[]
            this.$store.state.car.forEach(item=>idArr.push(item.id))
            if (idArr.length<=0){
              return
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
              if (result.body.status==0){
                this.goodslist=result.body.message
              }
            })
          }
      },
      components:{
          numbox
      }
    }
</script>

<style scoped>
.shopcar{
  background-color: #eee;
  overflow: hidden;
}
  .mui-card-content-inner{
    display: flex;
    align-items: center;
  }
  img{
    width: 60px;
    height: 60px;
  }
  h1{
    font-size: 13px;
  }
  .price{
    color: red;
    font-weight: bold;
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
