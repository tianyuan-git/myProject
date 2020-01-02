<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
        <router-link to="/myproject" class="linkStyle">首页</router-link>
      </li>
      <li>
        <router-link to="/hi" class="linkStyle">hi vue</router-link>
      </li>
      <li>
        <router-link to="/login" class="linkStyle">登录</router-link>
      </li>
      <li>
        <router-link to="/form" class="linkStyle">注册</router-link>
      </li>
      <li>
        <router-link to="/params" class="linkStyle">信息</router-link>
      </li>
      <li>
        <router-link to="/product" class="linkStyle">产品</router-link>
      </li>
      <li>
        <router-link to="/user" class="linkStyle">会员</router-link>
      </li>
    </ul>
   <router-view>
   </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.linkStyle {
    text-decoration: none;
    color:black
} 
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

