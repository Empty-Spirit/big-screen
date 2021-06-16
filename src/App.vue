<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './styles/rem.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: toRem(18);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
