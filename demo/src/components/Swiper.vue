<template>
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.id">
          <img :src="item.img" :class="{full:isfull}">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
      props:["lunbotu","isfull"]/*isfull放在要放轮播图的地方*/
    }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
  .mint-swipe-item{
    text-align: center;
  /*  &:nth-child(1){*/
  /*    background-color: #31708f;*/
  /*  }*/
  /*  &:nth-child(2){*/
  /*    background-color: #8a6de9;*/
  /*  }*/
  /*  &:nth-child(3){*/
  /*    background-color: #d9534f;*/
  /*  }*/
  img{
    height: 100%;
  }
  }
  }
  .full{
    width: 100%;/*判断宽度是否为100%*/
  }
</style>
