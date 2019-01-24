<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import Home from '@/pages/home'
export default {
  name: 'App',
  data(){
    return{
      isRouterAlive:true
    }
  },
  provide(){
      return{
        reload:this.reload
      }
    },
  components: {
      Home
    },
    created(){
      this.bodyScale()
    },
    methods:{
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true
        });
      },
      bodyScale(){
        var curWidth = window.screen.width;
        var scale = curWidth / 1280;
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = 'initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+'';
        document.head.appendChild(meta);

      }
    },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
.el-header,.el-main,.el-footer{
  padding: 0;
}
.el-header,.el-main,.el-footer{
    width: 100%;
}

</style>
