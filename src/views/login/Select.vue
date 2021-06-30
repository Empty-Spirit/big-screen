/** 系统选择 */
<template>
  <div class="select">
    <div class="header">
      <router-link to="/">
        <div class="home_btn"></div>
      </router-link>
      <img class="select_logo" src="./../../assets/login/logo.png" alt="" />
      <span class="select_title">请选择您要登录的系统</span>
      <img class="select_sci" src="./../../assets/login/sci.gif" alt="" />
    </div>
    <div class="select_content">
      <span
        v-for="(item, index) in systemList"
        :key="index"
        :class="['select_list', getClass('select_list', index)]"
        @click="goSystem(item.value)"
      >
        <span :class="[getClass('list_img', index), 'list_img']"></span>
        <span class="list_name">{{ item.name }}</span>
      </span>
    </div>
    <div class="select_star">
      <!--流星-->
      <div class="liuxing liuxing1 liuxingFla"></div>
      <div class="liuxing liuxing2 liuxingFla2"></div>
      <div class="liuxing liuxing3 liuxingFla3"></div>
      <div class="liuxing liuxing4 liuxingFla4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Select",
  setup() {
    // 实例router方法
    let router = useRouter();
    // 系统list
    const systemList = [
      { value: "ChatHome", name: "聊天室" },
      { value: "AdministrationHome", name: "管理系统" },
      { value: "ScreenHome", name: "大屏展示" },
    ];

    // 鼠标滑上去时动态class类名
    const getClass = (value: string, index: number) => {
      return value + (index + 1);
    };

    const goSystem = (value: string) => {
      router.push({
        path: value,
      });
    };

    return {
      systemList,
      getClass,
      goSystem,
    };
  },
});
</script>

<style lang="less" scoped>
@import "../../styles/login/login";
.select {
  width: 100%;
  height: 100vh;
  background: url("./../../assets/login/bg_1.jpg");
  background-size: cover;
  .header {
    width: 100%;
    height: 100px;
    padding-left: 40px;
    line-height: 100px;
    background: rgba(0, 0, 0, 0.3);
    .home_btn {
      display: inline-block;
      width: 74px;
      height: 74px;
      background: url("./../../assets/login/icon.png") no-repeat center center;
      background-size: 45% 45%;
      border: 1px solid #102262;
      border-radius: 5px;
      vertical-align: middle;
    }
    .select_logo {
      width: 100px;
      margin: 10px 10px;
      vertical-align: top;
    }
    .select_title {
      display: inline-block;
      font-size: 30px;
      color: #fff;
      letter-spacing: 3px;
    }
    .select_sci {
      width: 100px;
      float: right;
      margin-right: 40px;
    }
  }
  .select_content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .select_list {
      display: inline-block;
      width: 250px;
      margin: 0 30px;
      text-align: center;
      .list_img {
        display: inline-block;
        width: 250px;
        height: 220px;
        cursor: pointer;
      }
      .list_name {
        display: inline-block;
        width: 250px;
        margin-top: 20px;
        color: #00baf1;
        letter-spacing: 3px;
      }
      .list_img1 {
        background: url("./../../assets/login/fn_1.png");
        background-size: cover;
      }
      .list_img1:hover {
        background: url("./../../assets/login/fn_1_h.png");
        background-size: cover;
      }
      .list_img2 {
        background: url("./../../assets/login/fn_2.png");
        background-size: cover;
      }
      .list_img2:hover {
        background: url("./../../assets/login/fn_2_h.png");
        background-size: cover;
      }
      .list_img3 {
        background: url("./../../assets/login/fn_3.png");
        background-size: cover;
      }
      .list_img3:hover {
        background: url("./../../assets/login/fn_3_h.png");
        background-size: cover;
      }
    }
    .select_list1 {
      animation: list_move 4.5s infinite linear; //name名 周期时间 循环运用 运动曲线解决关键帧卡顿问题
      // animation-iteration-count:'',//规定动画应该播放的次数。
      // animation-direction:'',//规定是否应该轮流反向播放动画
      // animation-name:'list_move',//规定需要绑定到选择器的 keyframe 名称
      // animation-duration:'2.5',//规定完成动画所花费的时间，以秒或毫秒计。
      // animation-delay: 0.5s; //规定在动画开始之前的延迟。
      // animation-timing-function:'linear',//规定动画的速度曲线。
    }
    .select_list2 {
      animation: list_move 4.5s infinite linear;
      animation-delay: 0.5s; //规定在动画开始之前的延迟。
    }
    .select_list3 {
      animation: list_move 4.5s infinite linear;
      animation-delay: 1s; //规定在动画开始之前的延迟。
    }
    @keyframes list_move {
      0% {
        margin-top: 0px;
      }
      25% {
        margin-top: 100px;
      }
      50% {
        margin-top: 0px;
      }
      75% {
        margin-top: -100px;
      }
      100% {
        margin-top: 0px;
      }
    }
  }
}
</style>
