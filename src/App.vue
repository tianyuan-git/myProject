<template>
  <div id="app">
    <header class="content">
      <div class="top">
        <h1><img src="./assets/logo.png"></h1>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/myproject" class="linkStyle">首页</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/hi" class="linkStyle">hi vue</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/login" class="linkStyle">登录</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/Regsiter" class="linkStyle">注册</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/params" class="linkStyle">信息</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/product" class="linkStyle">产品</router-link></el-button>
          </li>
          <li>
            <el-button type="text" class="nav-btn"><router-link to="/user" class="linkStyle">会员</router-link></el-button>
          </li>
        </ul>
      </div>
    </header>
   <router-view>
   </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
      var btns = document.querySelectorAll("button");
      var myUrl = document.location.href;
      console.log(btns);
      console.log(myUrl);
    }  
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
}
.content .top {
  display:inline;

}
.content .bottom {
  /* text-align: center; */
  /* display: flex; */
  background: gray;
  width: 100%;
}
.linkStyle {
    text-decoration: none;
    color:black
} 
/* .router-link-active {
    color:red;
} */
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

