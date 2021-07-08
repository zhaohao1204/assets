<template>
  <div class="information">
      <h1>基本信息：</h1>
      <ul>
          <li v-for="item in informationList" :key="item.title">
              <span>{{item.title}}</span>
              <el-input v-model="item.value" placeholder="请输入内容"></el-input>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'information',
  props: {
    msg: String
  },
  data(){
    return{
        informationList:[
            { title:'姓名：',value:''},
            { title:'电话：',value:''},
            { title:'工号：',value:''},
            { title:'性别：',value:''},
            { title:'部门：',value:''},
            { title:'职位：',value:''},
        ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
    list-style-type: none;
    display: flex;
}
li span{
    display: block;
}
</style>
