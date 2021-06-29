<template>
  <div class="Home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { money } from "@/filters/index";

export default defineComponent({
  name: "Home",
  setup(props, ctx) {
    console.log(money("1", "3"));
  },
});
</script>

<style lang="less" scoped>
.home {
}
</style>
