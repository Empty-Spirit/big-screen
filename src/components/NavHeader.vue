<template>
  <div>
    <input
      type="text"
      v-model="value"
      placeholder="请输入任务名称"
      @keydown.enter="enter"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavHeader",
  setup() {
    let value = ref("");
    let enter = () => {
      console.log(value.value);
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style lang="less" scoped></style>
