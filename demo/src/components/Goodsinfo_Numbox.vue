<template>
     <div class="mui-numbox" data-numbox-min='1' ><!-- :data-numbox-max='max'-->
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
      </div>
</template>

<script>
  import mui from "../lib/mui/js/mui.min"
    export default {
        name: "Goodsinfo_Numbox",
      mounted() {
          mui(".mui-numbox").numbox();//numbox初始化才能点击按钮
      },
      methods:{
          countChanged(){
            this.$emit("getcount",parseInt(this.$refs.numbox.value))
          }
      },
      props:["max"],
      watch:{
          max:function (newVal,oldVal) {
            mui(".mui-numbox").numbox().setOption("max",newVal)  //设置最大值。监听到值一改变就触发父组件方法，在控制台输出改变后的值
          }
      }

    }
</script>

<style scoped>

</style>
