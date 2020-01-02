<template>
    <div>
        <router-link to='/user' class="linkStyle">user</router-link><br>
        <router-link to='/user/1001'>vip1</router-link>
        <router-link to='/user/1002'>vip2</router-link>
        <div style="background:gray; width:800px;height=400px;margin:0 auto">
            <p><span>id:{{$route.params.id}} name:{{name}}</span></p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Vip',
        data (){
            return {
                list:{
                    1001:'小明',
                    1002:'小红'
                },
                name:''
            }
        }, 
        created(){
            const id = this.$route.params.id;
            this.name = this.list[id];
        },
        watch:{
            $route(to,from){
                const id = to.params.id;
                this.name = this.list[id];
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