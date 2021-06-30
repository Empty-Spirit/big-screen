// 大屏首页
<template>
  <div class="screen_home">
    <div class="home_header">
      <span class="header_title">数据大屏</span>
      <span class="header_time"
        >当前时间：{{ timeStamp(nowTime, "yyyy年MM月dd日-HH时mm分ss秒") }}
      </span>
    </div>
    <div class="home_content">
      <div class="content_left">
        <div class="left_overview">
          <span
            class="overview_list"
            v-for="(item, index) in overviewList"
            :key="index"
          >
            <span class="list_num">{{ item.num }}</span>
            <span class="list_name">
              <i class="list_icon" :style="{ borderColor: item.color }"></i>
              {{ item.name }}
            </span>
          </span>
        </div>
        <div class="left_monitor">
          <el-row>
            <el-col
              :span="24 / monitorList.length"
              v-for="(item, index) in monitorList"
              :key="index"
              class="header_name"
            >
              {{ item.name }}
            </el-col>
          </el-row>
        </div>
        <div></div>
      </div>
      <div class="content_center"></div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from "vue";
import { timestamp } from "@/filters/index";

export default defineComponent({
  name: "Home",
  setup() {
    let nowTime;
    let timeStamp = ref(timestamp);
    onBeforeMount(() => {
      setInterval(() => {
        nowTime = ref(new Date());
      }, 1000);
    });
    console.log(nowTime);
    let overviewList = ref([
      { value: 1, name: "设备总数", num: "1900", color: "#006cff" },
      { value: 2, name: "季度新增", num: "73", color: "#6acca3" },
      { value: 3, name: "运营设备", num: "120", color: "#6acca3" },
      { value: 4, name: "设备异常", num: "19000", color: "#ed3f35" },
    ]);
    let monitorList = ref([
      { value: 1, name: "故障设备监控" },
      { value: 2, name: "异常设备监控" },
    ]);
    return {
      nowTime,
      overviewList,
      monitorList,
      timeStamp,
    };
  },
});
</script>

<style lang="less" scoped>
.screen_home {
  width: 100%;
  height: 100vh;
  background: #06164a;
  .home_header {
    width: 100%;
    height: 100px;
    background: url("./../../../assets/screen/head_bg.png") no-repeat top center;
    background-size: cover;
    line-height: 100px;
    text-align: center;
    .header_title {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: 5px;
      color: #fff;
    }
    .header_time {
      position: absolute;
      right: 20px;
      top: -10px;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .home_content {
    .content_left {
      width: 490px;
      margin: 20px 20px;
      .left_overview {
        display: inline-block;
        width: 490px;
        height: 120px;
        padding: 25px 10px;
        background: url("./../../../assets/screen/border.png") no-repeat;
        background-size: 100% 100%;
        .overview_list {
          display: inline-block;
          width: 115px;
          padding-left: 15px;
          height: 100px;
          .list_num {
            display: inline-block;
            color: #fff;
            font-size: 30px;
            width: 100px;
            margin-bottom: 5px;
            letter-spacing: 1px;
          }
          .list_name {
            color: #4c9bfd;
            font-size: 16px;
            vertical-align: middle;
          }
          .list_icon {
            height: 10px;
            margin-right: 10px;
            border-right: 4px;
            border-style: solid;
          }
        }
      }
      .left_monitor {
        display: inline-block;
        width: 490px;
        padding: 25px 10px;
        background: url("./../../../assets/screen/border.png") no-repeat;
        background-size: 100% 100%;
        margin-top: 40px;
        .header_name {
          text-align: center;
          height: 30px;
          line-height: 30px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
