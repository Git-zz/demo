<template>
    <div class="photoinfo">
      <h3>{{photoinfo.title}}</h3>
      <p>
        <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
        <span>点击：{{photoinfo.click}}次</span>
      </p>
      <hr/>
      <div class="thumbs">
      <vue-preview :slides="list" @close="handleClose" :key="list.src"></vue-preview>
      </div>
      <div class="content" v-html="photoinfo.content"></div>
      <Comment :id="this.id"></Comment>
    </div>
</template>

<script>
  import Comment from './Comment'
  import {Toast} from 'mint-ui'
    export default {
        name: "PhotoInfo",
      data(){
          return{
            id:this.$route.params.id,
            photoinfo:{},
            list:[]
          }
      },
      created(){
        this.getPhotoInfo()
        this.getThumbs()
      },
      methods:{
        getPhotoInfo(){
          this.$http.get('api/getimageInfo/'+this.id).then(result=>{
            if (result.body.status==0) {
              this.photoinfo=result.body.message[0]
            }else {
              Toast("获取失败")
            }
          })
        },
        getThumbs(){
          this.$http.get("api/getthumimages/"+this.id).then(result=>{
            if (result.body.status==0){
              result.body.message.forEach(item=>{
                item.msrc=item.src;
                item.w=600;
                item.h=400;
              });
              this.list=result.body.message
            }
          })
        },
        handleClose(){
          console.log("close event");
        }
      },
      components:{
        Comment
      }
    }
</script>

<style lang="scss" scoped>
  .photoinfo{
    padding:3px;
  }
  h3{
    color: #26a2ff;
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
  }
  p{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs{
    /deep/ .my-gallery{
      display: flex;
      flex-wrap: wrap;
      figure{
        width: 30%;
        margin: 5px;
      }
      img{
        width: 100%;
        box-shadow: 0 0 8px #999;
      }
    }
  }
</style>
