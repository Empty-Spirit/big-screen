/** 登录页 */
<template>
  <div class='login'>
    <div class='login-content'>
      <div class='login-left'>
        <div class='login-title'>
          欢迎您的登录
        </div>
        <el-form
          :model="form"
          ref="form"
          :rules='rules'
          class="login_form"
        >
          <el-form-item
            label=""
            prop="user_name"
            class='user_name'
            :rules="[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ]"
          >
            <el-input
              type="text"
              v-model.number="form.user_name"
              :maxlength='5'
              clearable
              placeholder='用户名'
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="user_pwd"
            :rules="[
          {required:true,message:'请输入密码'}
        ]"
          >
            <el-input
              type="password"
              v-model.number="form.user_pwd"
              :maxlength='11'
              placeholder='密码'
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class='submit'
              @click="submitForm('form')"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class='login-right'>
        <!--流星-->
        <div class="liuxing liuxing1 liuxingFla"></div>
        <div class="liuxing liuxing2 liuxingFla2"></div>
        <div class="liuxing liuxing3 liuxingFla3"></div>
        <div class="liuxing liuxing4 liuxingFla4"></div>
        控制系统
      </div>
    </div>
    <img
      class='login_footer'
      src="./../../assets/login/footer_bg.png"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        user_name: '',
        user_pwd: ''
      },
      rules: {}
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/rem.scss';
@import './../../styles/login/login';
.login {
  width: 100%;
  height: 100vh;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-input {
    width: toRem(320);
    height: toRem(40);
  }
  .login-content {
    box-shadow: 0 0 toRem(10) #575b5e;
    z-index: 2;
  }
  .login-left {
    display: inline-block;
    width: toRem(400);
    height: toRem(550);
    background: #fff;
    padding: toRem(80) toRem(40);
    vertical-align: top;
    .login-title {
      color: #407cd5;
      margin-bottom: toRem(70);
      font-size: toRem(30);
    }
    .user_name {
      margin-bottom: toRem(45);
    }
    .el-button--primary {
      width: toRem(320);
      height: toRem(45);
      border-radius: 2px;
      background: #407cd5;
      margin-top: toRem(80);
    }
    .el-button--primary:hover {
      background: #1e9fff;
    }
  }
  .login-right {
    display: inline-block;
    color: #407cd5;
    width: toRem(550);
    height: toRem(550);
    height: 550px;
    background: url('./../../assets/login/login_bg_1.png');
    padding: toRem(40);
    vertical-align: middle;
    font-size: toRem(25);
  }
  .login_footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 300px;
  }
  @media (min-width: 1920px) {
    .login-left,
    .login-right {
      zoom: 1.2;
    }
  }
}
</style>
