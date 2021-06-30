<template>
  <div class="login">
    <div class="login-content">
      <div class="left-container">
        <div class="login-left">
          <div class="login_show">
            <div class="login-title">欢迎您的登录</div>
            <el-form :model="form" ref="ruleForm" class="login_form">
              <el-form-item
                label=""
                prop="user_name"
                class="user_name"
                :rules="[
                  { required: true, message: '请输入用户名', trigger: 'blur' },
                ]"
              >
                <el-input
                  type="text"
                  v-model="form.user_name"
                  :maxlength="5"
                  clearable
                  placeholder="用户名"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="user_pwd"
                :rules="[{ required: true, message: '请输入密码' }]"
              >
                <el-input
                  type="password"
                  v-model="form.user_pwd"
                  :maxlength="11"
                  placeholder="密码"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="submit"
                  @click.prevent="submitForm('form')"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="login_success">
            <span class="i-green">认证成功</span>
            <p>正在进入系统...</p>
          </div>
        </div>
      </div>
      <div class="login-right">
        <!--流星-->
        <div class="liuxing liuxing1 liuxingFla"></div>
        <div class="liuxing liuxing2 liuxingFla2"></div>
        <div class="liuxing liuxing3 liuxingFla3"></div>
        <div class="liuxing liuxing4 liuxingFla4"></div>
        中控系统
      </div>
    </div>

    <!-- 认证中 -->
    <div class="authent">
      <img src="./../../assets/login/puff.svg" />
      <p>认证中...</p>
    </div>
    <img class="login_footer" src="./../../assets/login/footer_bg.png" alt="" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  ref,
  onBeforeMount,
  getCurrentInstance,
} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup(props, ctx) {
    let that: any;
    let router = useRouter();
    onBeforeMount(() => {
      that = getCurrentInstance(); //获取组件实例
    });
    // 声明表单类型
    interface initForm {
      user_name: string;
      user_pwd: string;
    }
    // 表单字段
    const form: initForm = reactive({
      user_name: "",
      user_pwd: "",
    });
    const rules = ref({});
    const login_success = false;

    let submitForm = () => {
      that.refs.ruleForm.validate((valid: boolean) => {
        console.log(valid);
        if (valid) {
          const _login = document.getElementsByClassName("login-left")[0];
          const _authent = document.getElementsByClassName("authent")[0];
          const _loginShow = document.getElementsByClassName(
            "login_show"
          )[0] as HTMLElement;
          const _loginSuccess = document.getElementsByClassName(
            "login_success"
          )[0] as HTMLElement;

          _login.classList.add("login_left_leave");
          _authent.classList.add("authent_leave");

          // 显示进入进入系统栏
          setTimeout(() => {
            _login.classList.remove("login_left_leave");
            _login.classList.add("login_left_remove");
            _loginShow.style.display = "none";
            _loginSuccess.style.display = "inline-block";
            _authent.classList.remove("authent_leave");
          }, 3000);

          // 页面跳转
          setTimeout(() => {
            router.push({
              path: "Select",
            });
          }, 4000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      form,
      submitForm,
      rules,
      login_success,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("./../../styles/login/login");
.login {
  width: 100%;
  height: 100vh;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-input {
    width: 320px;
    height: 40px;
  }
  .login-content {
    z-index: 2;
  }
  .left-container {
    display: inline-block;
    vertical-align: top;
  }
  // 认证中样式及动画
  .authent {
    background: #35394a;
    display: none;
    position: fixed;
    width: 200px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    padding: 20px 0;
    height: 105px;
    z-index: 2;
    margin-left: -800px;
  }
  // 认证中动画
  .authent_leave {
    display: inline-block;
    animation: authent_leaves 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes authent_leaves {
    0% {
      margin-left: -800px;
    }
    100% {
      margin-left: -400px;
    }
  }
  // 左侧登录样式及动画
  .login-left {
    display: inline-block;
    width: 400px;
    height: 550px;
    background: #fff;
    padding: 40px 40px;
    position: relative;
    .login-title {
      color: #407cd5;
      margin-bottom: 70px;
      font-size: 30px;
    }
    .user_name {
      margin-bottom: 45px;
    }
    .el-button--primary {
      width: 320px;
      height: 45px;
      border-radius: 2px;
      background: #407cd5;
      margin-top: 80px;
    }
    .el-button--primary:hover {
      background: #1e9fff;
    }
  }
  // 登录左侧动画
  .login_left_leave {
    animation: login_leave 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    opacity: 0.6 !important;
    filter: blur(1px);
    box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  }
  @keyframes login_leave {
    0% {
      left: 0px;
      top: 0px;
      transform: scale(1);
    }
    50% {
      left: -40px;
      transform: scale(0.8, 0.5);
    }
    100% {
      left: -150px;
      transform: scale(0.8, 0.5);
    }
  }
  // 登录成功左侧回滑动画
  .login_success {
    display: none;
    .i-green {
      display: inline-block;
      color: #00c851;
      font-size: 40px;
      letter-spacing: 3px;
      margin-bottom: 20px;
    }
    p {
      letter-spacing: 3px;
      font-size: 24px;
      color: #000;
    }
  }
  .login_left_remove {
    animation: login_remove 0.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes login_remove {
    0% {
      left: -150px;
      transform: scale(0.8, 0.5);
    }
    100% {
      left: 0px;
      top: 0px;
      transform: scale(1);
    }
  }
  // 登录右侧样式
  .login-right {
    display: inline-block;
    color: #407cd5;
    width: 550px;
    height: 550px;
    background: url("./../../assets/login/login_bg_1.png");
    background-size: cover;
    padding: 40px;
    vertical-align: middle;
    font-size: 25px;
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
