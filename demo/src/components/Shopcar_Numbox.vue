<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px;"><!-- :data-numbox-max='max'-->
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="countChanged" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from "../lib/mui/js/mui.min"
  export default {
    name: "Shopcar_Numbox",
    mounted() {
      mui(".mui-numbox").numbox();//numbox初始化才能点击按钮
    },
    methods:{
      countChanged(){
        // this.$emit("getcount",parseInt(this.$refs.numbox.value))
        this.$store.commit("updateGoodsInfo",{
          id:this.goodsid,
          count:this.$refs.numbox.value
        })

      }
    },
    props:["initcount","goodsid"]
    // watch:{
    //   max:function (newVal,oldVal) {
    //     mui(".mui-numbox").numbox().setOption("max",newVal)  //设置最大值。监听到值一改变就触发父组件方法，在控制台输出改变后的值
    //   }
    // }

  }
</script>

<style scoped>

</style>
