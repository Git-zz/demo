<template>
  <div class="newsinfo">
    <h1>{{newsinfo.title}}</h1>
    <p>
      <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr/>
    <div v-html="newsinfo.content"></div>
    <Comment :id="this.id"></Comment>
  </div>
</template>

<script>
  import Comment from './Comment'
  import {Toast} from 'mint-ui'
    export default {
        name: "NewsInfo",
      data(){
          return{
            id:this.$route.params.id,
            newsinfo:{}
          }
      },
      created(){
          this.getNewsInfo()
      },
      methods:{
          getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
              if (result.body.status==0) {
                this.newsinfo=result.body.message[0]
               }else {
                Toast("获取失败")
              }
              })
            }
          },
      components:{
          Comment
      }
      }

</script>

<style scoped>
.newsinfo{
  padding: 0 4px;
}
  h1{
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 15px 0;
  }
  p{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
</style>
