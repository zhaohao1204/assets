<template>
    <div class="headerContent">
        <div class="logo" style="width:10%;text-align:left;">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
        <div class="title">
            <span>资产管理系统</span>
        </div>
        <div class="info">
          <el-button type="success" plain>资产管理员：XXX</el-button>
          <el-button type="primary" icon="el-icon-edit" plain>修改密码</el-button>
          <el-button type="warning" icon="el-icon-error" plain>退出</el-button>
        </div>
    </div>
</template>

<script>
import HelloWorld from '../HelloWorld.vue'
export default {
  name: 'headerContent',
  props: {
    msg: String
  },
  components: {
    HelloWorld
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerContent{
    display: flex;
    vertical-align: middle;
}
.title{
    color: white;
    font-size: 18px;
    font-weight: 800;
    width: 60%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}
.info{
  width: 30%;
  display: flex;
  justify-content: space-evenly;
}
.el-button{
  height: 60px;
}
</style>
