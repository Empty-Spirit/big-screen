<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="del">删除</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavMain",
  props: {
    list: {
      type: Array,
      // default: [],
    },
  },
  setup(props, ctx) {
    console.log(props.list, "---props.list");
    // 通过ctx.emit分发事件，来子组件向父组件传值
    ctx.emit("send", "子组件");
    return {};
  },
});
</script>

<style lang="less" scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  cursor: pointer;
  width: 200px;
  button {
    position: absolute;
    right: 20px;
    display: none;
  }
  &:hover {
    background: #ddd;
    button {
      display: inline-block;
    }
  }
}
</style>
