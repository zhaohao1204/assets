<template>
  <div id="app">
    <el-container>
      <el-header>
          <HeaderContent />
      </el-header>
      <el-container class="content" width="auto" style="height:100%;">
        <el-aside width="auto">
          <div >
            <el-radio-group v-model="isCollapse" background-color="rgb(84, 92, 100)" >
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </div>
          <el-menu
            default-active="/"
            :unique-opened="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#409EFF"
            text-color="white"
            active-text-color="#ffd04b"
            router>
            <el-submenu v-for="item in menuList" :index="item.url" :key="item.title" >
              <template slot="title">
                <i :class="item.iconClass"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item v-for="element in item.children" :index="element.url" :key="element.title">
                <span slot="title">{{element.title}}</span>
              </el-menu-item>
            </el-submenu>
            <!-- <el-menu-item v-for="item in menuList" :index="item.url" :key="item.url">
              <i style="color:white;" :class="item.iconClass"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main width="auto">
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key='item.name' :to="{ path: item.path }">
                {{item.meta.title}}--{{index}}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderContent from './components/header/headerContent.vue'
export default {
  name: 'App',
  components: {
    HeaderContent
  },
  data(){
    return{
      menuList:[
        { 
          url:"/setting/information", 
          iconClass:'el-icon-location', 
          title:'个人信息' ,
          children:[ 
            { url:'/setting/information', title:'基本信息'},
            { url:'/setting/password', title:'修改密码'}
          ]
        },
        { 
          url:"/assetsTypes", 
          iconClass:'el-icon-menu', 
          title:'资产类别',
          children:[ 
            { url:'/assetsTypes/assetsTypes', title:'资产明细'},
          ]
        },
        { 
          url:"/brand", 
          iconClass:'el-icon-setting', 
          title:'品牌种类',
          children:[ 
            { url:'/brand/brand', title:'品牌信息'},
          ]
        }
      ],
      breadcrumbList:[],
      isCollapse: false
    }
  },
  watch:{
    $route:function(){
      this.getBreadcrumb();
    }
  },
  created:function(){
    this.getBreadcrumb()
  },
  methods:{
    getBreadcrumb(){
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.breadcrumbList = matched.filter(
        (item) => item.meta && item.meta.title
      );
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.3/lib/theme-chalk/index.css");
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header {
    background-color: #2e8be7;
    color: white;
    /* text-align: center; */
    line-height: 60px;
    height: 60px;
    
  }
  
  .el-aside {
    background-color: #409EFF;
    color: #333;
    text-align: left;
    line-height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
    margin: 0;
    padding: 0;
  }
  .breadcrumb{
    height: 60px;
    line-height: 60px;
  }

</style>
