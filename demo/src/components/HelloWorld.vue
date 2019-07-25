<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
<!--    <h2>Essential Links</h2>-->
<!--    <ul>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Core Docs-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://forum.vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Forum-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://chat.vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Community Chat-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://twitter.com/vuejs"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Twitter-->
<!--        </a>-->
<!--      </li>-->
<!--      <br>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vuejs-templates.github.io/webpack/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Docs for This Template-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <h2>Ecosystem</h2>-->
<!--    <ul>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://router.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vue-router-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vuex.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vuex-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vue-loader.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vue-loader-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://github.com/vuejs/awesome-vue"-->
<!--          target="_blank"-->
<!--        >-->
<!--          awesome-vue-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <mt-button type="danger" icon="back" @click="show">{{msg}}</mt-button>-->
<!--    <mt-header fixed title="黑马程序员·Vue项目"></mt-header>-->
<!--    <nav class="mui-bar mui-bar-tab">-->
<!--      <router-link class="mui-tab-item" to="/home">-->
<!--        <span class="mui-icon mui-icon-home"></span>-->
<!--        <span class="mui-tab-label">首页</span>-->
<!--      </router-link>-->
<!--      <router-link class="mui-tab-item" to="/member">-->
<!--        <span class="mui-icon mui-icon-contact"></span>-->
<!--        <span class="mui-tab-label">会员</span>-->
<!--      </router-link>-->
<!--      <router-link class="mui-tab-item" to="/shopcar">-->
<!--        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>-->
<!--        <span class="mui-tab-label">购物车</span>-->
<!--      </router-link>-->
<!--      <router-link class="mui-tab-item" to="/search">-->
<!--        <span class="mui-icon mui-icon-search"></span>-->
<!--        <span class="mui-tab-label">搜素</span>-->
<!--      </router-link>-->
<!--    </nav>-->
  </div>
</template>
<script>
 // import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      // toastInstance:null
    }
  },
  // created(){
  //   this.getList()//实例创建完成后调用getList方法，使toast在组建加载后自动消失
  // },
  methods:{
    // getList(){
    //   this.show()
    //   setTimeout(()=>{
    //     this.toastInstance.close()
    //   },3000)
    // },
    // show(){
    //   this.toastInstance=Toast({
    //      message:'ok',
    //     position:'top',
    //     duration:-1,//设置为-1，弹窗不会消失
    //     iconClass:'glyphicon glyphicon-ok',
    //     className:'mytoast'
    //   })
    // }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  h1, h2 {*/
/*  font-weight: normal;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
