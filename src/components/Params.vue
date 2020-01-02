<template>
    <div>
        <router-link to='/' class="linkStyle">Home</router-link>
        <h2>{{msg}}</h2>
        <h3> id:{{$route.params.newsId}}</h3>
        <h3> text:{{$route.params.newsPro}}</h3>
    </div>
</template>
<script>
    export default {
        name:'params',
        data (){
            return {
                msg:"NEWS page"
            }
        }
    }
</script>
<style scoped>
.linkStyle {
    text-decoration: none;
    color:black
}    
</style>