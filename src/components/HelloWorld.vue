<template>
  <div class="hello">
    <h1 style="color: red">{{ param }}</h1>
    <h1 style="color: blue; cursor: pointer;" @click="handlerClick">我的信息</h1>
    <p class="logo">
      <span>template 中引入小图标</span>
      <img src="../assets/logo.png">
    </p>
    <p class="logo">
      <span>template 中引入大图片</span>
      <img src="../assets/bg.jpg">
    </p>
    <p class="bgBox">
      <span>style 设置背景图片</span>
      <span class="bg"></span>
    </p>
    <el-table :data="tableData" style="width: 900px; margin: 0 auto;" border>
      <el-table-column prop="id" label="序号" width="80" header-align="center" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80" header-align="center" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80" header-align="center" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" header-align="center" align="center"></el-table-column>
      <el-table-column prop="ip" label="ip" header-align="center" align="center"></el-table-column>
      <el-table-column prop="province" label="省份" header-align="center" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      param: process.env.VUE_APP_VARIABLE,
      tableData: []
    }
  },
  created() {
    console.log(process.env);
    this.getList().then(res => {
      this.tableData = res.data.records
      sessionStorage.setItem('vue2-template-user',JSON.stringify(this.tableData[0]))
      this.$store.dispatch('user/setUser',this.tableData[0])
    }).catch(res => {
      console.log(res);
    })
  },
  methods: {

    // 获取表格数据
    getList() {
      return new Promise((resolve, reject) => {
        this.$api.user.getList().then(res => {
          if(res.code === 200){
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    },

    // 跳转到我的信息
    handlerClick() {
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .logo {
    background-color: skyblue;
    width: 200px;
    margin: 0 auto;

    span {
      vertical-align: middle;
    }

    img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
  }

  .bgBox {
    width: 200px;
    margin: 0 auto;
    background-color: pink;
  }

  .bg {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
