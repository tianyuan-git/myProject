<template>
    <div>
        <el-form :model="regsiter" status-icon :rules="rules" ref="regsiter" label-width="100px" class="demo-regsiter" label-position="left">
            <el-form-item label="用户名" prop="username">
                <el-input clearable="" type="text" v-model="regsiter.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input show-password type="password" v-model="regsiter.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input show-password type="password" v-model="regsiter.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input clearable="" v-model.number="regsiter.age"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
                <el-input clearable="" v-model.number="regsiter.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input clearable="" type="email" v-model="regsiter.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('regsiter')">提交</el-button>
                <el-button @click="resetForm('regsiter')">重置</el-button>
            </el-form-item>
        </el-form>       
    </div>
</template>
<script>
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|5|6|7|8][0-9]{9}$/;
        if (!value) {
            return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
            if (!Number.isInteger(+value)) {
                callback(new Error('请输入数字值'))
            } else {
                if (phoneReg.test(value)) {
                    callback()
                } else {
                    callback(new Error('手机号格式不正确'))
                }
            }
        },1000)
      };
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!value) {
          return callback(new Error('邮箱不能为空'))
        }
        setTimeout(() => {
            if (mailReg.test(value)) {
                callback()
            } else {
                callback(new Error('请输入正确的邮箱地址'))
            }
        },1000)
      };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regsiter.checkPass !== '') {
            this.$refs.regsiter.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regsiter.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regsiter: {
          username: '',
          pass: '',
          checkPass: '',
          phone: '',
          email: '',
          age: ''
        },
        rules: {
          username: [
            { required: true, message: "必须输入用户名", trigger: "blur" },
            { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
            { validator: validatePass, trigger: 'blur' }
          ],  
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { required: true,validator: checkPhone, trigger: 'blur' }
          ],
          email: [
            { required: true,validator: checkEmail, trigger: 'blur' }
          ],
          age: [
            { required: true,validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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