<template>
    <div class="goodscomment">
      <Comment :id="this.$route.params.id"></Comment>
    </div>
</template>

<script>
  import Comment from './Comment'
    export default {
        name: "GoodsComment",
      components:{
          Comment
      }
    }
</script>

<style scoped>

</style>
