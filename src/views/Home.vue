<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class='test'></div>
    <div class='test2'></div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/rem.scss';
.test {
  width: toRem(100);
  height: toRem(100);
  background: #000;
}
.test2 {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>
