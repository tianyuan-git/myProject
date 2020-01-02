<template>
    <div>
        <router-link to='/' class="linkStyle">Home</router-link>
        <form action="demo.php">
            <h3>注册信息</h3>
        用户名:<input type="text" value="请输入用户名">
        <br>
        <br>
        密码: <input type="password">
        <br>
        <br>
        性别: <input name="geder" type="radio" value="men">men<input name="geder" type="radio" value="women">women
        <br>
        <br>
        籍贯：
        <select name="" >
            <option value="选择地址">选择地址</option>
            <option value="上海">上海</option>
            <option selected="selected" value="北京">北京</option>
            <option value="杭州">杭州</option>
            <option value="重庆">重庆</option>
            <option value="武汉">武汉</option>
        </select>
        <br>
        <br>
        爱好： <input type="checkbox"  checked="checked" value="bike">bike <input type="checkbox" value="basketball">basketball <input type="checkbox" value="sing">sing 
        <br>
        <br>
        上传图片： <input type="file">
        <br>
        个人介绍
        <textarea name=""  cols="30" rows="10"></textarea>
        <br>
        <BUtton>Yes</BUtton><button>No</button>
    </form>
    </div>
</template>
<script>
    export default {
        name :'Form',
        data () {
            return {
                msg :"my form"
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