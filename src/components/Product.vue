<template>
    <div>
        <router-link to='/' class="linkStyle">Home</router-link>
        <div>{{msg}}</div>
        <router-link to='/product/pro_one' class="linkStyle">产品1</router-link><br><br>
        <router-link to='/product/pro_two' class="linkStyle">产品2</router-link>
        <br>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'Product',
        data (){
            return {
                msg:"个人产品"
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