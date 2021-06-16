<template>
  <div class="home">
    {{time | timestamp('yyyy-MM-dd')}}
    <div>
      {{value | checkStatus(status)}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      time: '',
      value: '1',
      name: '3',
      status: [
        { value: 0, name: '未开始' },
        { value: 1, name: '已开始' },
        { value: 2, name: '已结束' },
        { value: 3, name: '已关闭' }
      ]
    }
  },
  created () {
    this.time = new Date()
    this.value = 2
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/rem.scss';
.home {
  .btn {
    position: relative;
    // display: block;
    // margin: 200px auto;
    // width: 200px;
    // padding: 10px 20px;
    // font-size: 20px;
    // background: #fff;
    // color: #6bdf4e;
    // border: 1px solid #6bdf4e;
    // cursor: pointer;
  }
  .btn::after {
    content: attr(data-tip);
    display: none;
    position: absolute;
    padding: 5px 10px;
    left: 50%;
    // bottom: 100%;
    margin-top: 12px;
    transform: translateX(-50%);
    font-size: 16px;
    background: #fff;
    color: #ddd;
    cursor: default;
  }
  .btn::before {
    content: ' ';
    position: absolute;
    display: none;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 140%);
    margin-top: 12px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 9px solid #000;
  }
  .btn:hover::after,
  .btn:hover::before {
    display: block;
  }
}
</style>
