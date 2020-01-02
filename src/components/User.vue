<template>
    <div>
    <router-link to='/'>Home</router-link>
    <h3>{{msg}}</h3>
    <router-link to='/user/1001'>vip1</router-link>
    <router-link to='/user/1002'>vip2</router-link>
    <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'user',
        data(){
            return {
                msg:"用户页"
            }
        },
        beforeRouteEnter(to,from,next){
            console.log("准备进入user模板");
            console.log(to);
            console.log(from);
            console.log(next);
            next();
        },
        beforeRouteUpdate(to,from,next){
            console.log("当前路由改变了，组件服用了");
            
        },
        beforeRouteLeave(to,from,next){
            console.log("准备离开user模板");
            console.log(to);
            console.log(from);
            console.log(next);
            next();
        }
        // created (){
        //     console.log('获取路由参数',this.$route.params.name);
            
        // }
    }
</script>