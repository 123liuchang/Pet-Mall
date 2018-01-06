<template>
  <div>
    <div class="img" >

    </div>
  </div>
</template>

<script>
  export default{  /*暴露当前组件*/
    props: {
      indexbox: Object /*定义组件对象*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .img
    width: 41px
    height: 46px
    background-image url("../../img/imgs/gocat.png")
    background-repeat no-repeat
    background-size 200% 100%
    position: fixed
    bottom: 54%
    right: -1px
    z-index: 5
    animation:this 2s steps(2) infinite;  /*infinite无限的*/
  @keyframes this
    0%
      background-position 0 center
    100%
      background-position 205% center

</style>
