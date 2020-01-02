<template>
    <div>
        <router-link to='/product' class="linkStyle">Product</router-link>
        <h4>{{pName}}</h4>
        <div style="background:gray; width:800px;height=400px;margin:0 auto">
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus soluta tempore vel cumque quos aliquid voluptatibus perspiciatis voluptatum rerum, sed laboriosam accusamus fuga ex, consectetur quae earum ullam illum repellendus?</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'pro_one',
        data () {
            return {
                pName:'app for vidio'
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