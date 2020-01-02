<template>
  <div>
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="demo-loginForm"
      label-position="left"
    >
      <el-form-item label="用户名" prop="username">
        <el-input clearable="" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username:"",
        password:""
      },
      rules: {
        username: [
          { required: true, message: "必须输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "必须输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在  到 12 个字符", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert("登录成功!");
          console.log(this.loginForm);
          
        } else {
          confirm("用户名或密码错误，请重新输入")
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style>
  
</style>
