<template>
  <div class="hello">
    <h2>my project</h2>
    <h4>{{pro}}</h4>
    <p>{{descript}}</p>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      pro: 'vue test',
      descript:'vue-cli && vue-router'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}

.linkStyle {
    text-decoration: none;
    color:black
}    

</style>
