<template>
  <div>
    <div class="img">

    </div>
  </div>
</template>

<script>
  export default{  /*暴露当前组件*/
    props: {
      indexbox: Object /*定义组件对象*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .img
    width: 41px
    height: 46px
    background-image url("../../img/imgs/gocat.png")
    background-repeat no-repeat
    background-size 80px auto
    position: fixed;
    bottom: 54%
    right: -1px
    z-index: 2
    -webkit-animation: nnh 2.5s steps(2) infinite
    animation: nnh 2.5s steps(2) infinite
</style>
