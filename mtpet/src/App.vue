<template>
    <div>
      <ul class="routers"><!--找路由组件-->
        <li><router-link to='/mainpage'>首页</router-link></li>
        <li><router-link to='/classifys'>分类</router-link></li>
        <li><router-link to='/shopping'>购物车</router-link></li>
        <li><router-link to='/mypet'>Q宠</router-link></li>
      </ul>

      <router-view></router-view> <!--包含各个组件-->
    </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .routers
    width: 100%
    height: 55px
    position fixed
    bottom: 0
    z-index 5
    background-color seashell
    li
      float left
      width 93.75px
      height 55px
      text-align center
      line-height 55px
      position relative
      bottom: 0


</style>
