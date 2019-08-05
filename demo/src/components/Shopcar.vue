<template>
    <div class="shopcar">

      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
            @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

<!--结算区-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品<span>{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总计<span>￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>元</p>
            </div>
            <mt-button type="danger">去结算</mt-button>
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
          },
        remove(id,index){
            this.goodslist.splice(index,1)
          this.$store.commit('removeFormCar',id)
        },
        selectedChanged(id,val){
            this.$store.commit("updateGoodsSelected",{id,selected:val})
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
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
</style>
