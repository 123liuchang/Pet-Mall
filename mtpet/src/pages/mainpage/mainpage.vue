<template>
  <div>
    <div class="header">
      <a><img src="../../img/imgs/c63b6e6cf483cbb61196f658920a9d6e.jpg" alt=""></a>
      <div class="clearfix">
        <div class="epet-search">
          <a class="db">
            <span class="catordog c89">猫猫</span>
            <span class="c89">|</span>
            <span class="myposition c89 ft13">北京</span>
            <i></i>
          </a>
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <img src="../../img/imgs/mydope.png" alt="">
        </div>
      </div>
      <div class="ulNav" ref="ulNav" style="width: 100%">
        <ul class="headerNav" style="width: 140%">
          <li><a href="">首页</a></li>
          <li><a href="">服饰城</a></li>
          <li><a href="">狗狗主粮</a></li>
          <li><a href="">医疗保健</a></li>
          <li><a href="">零食玩具</a></li>
          <li><a href="">日用外出</a></li>
          <li><a href="">美容香波</a></li>
        </ul>
      </div>
    </div>
    <scroller>  <!--应用于上下滑动更新-->
    <div class="imgWrap">
      <mt-swipe :auto="1110">
        <mt-swipe-item>
          <img src="../../img/imgs/5e8757de6f5b78bf3bf3758d292fc5eb.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../img/imgs/28f41bd18763058369b9f2005f4bb326.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../img/imgs/688cf171f0f735cd88ec62c0684079d8.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../img/imgs/1437da9866bfab00d8f8e5d5265c7d33.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../img/imgs/476488fa886d0dce88c17e1a1def4543.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="columnnavdiv">
      <div>
        <ul class="hottype">
          <li>
            <a href="">
              <img src="../../img/imgs/c0372b31b110dcbda589da4cb26f19c5.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/b88234ac2e2cf0f2c6c36f5576e1acd3.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/c1ebce34a16eadda5a934c142f9eab98.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/2ed81f515a9287d05d555a0efeb4fdc6.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/ac5e9b46a46304ca486b50b229b0a65b.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/7bc4685f6809012964043ff2599e093f.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/2ac1504b1cd475560903ec8bbb48ff10.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/d9a2f4d0f5a458245761e7bbb0fdf2e9.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/bdef0401534ff876873138c92916f849.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../img/imgs/b49c1cfa039724a157843d09a88b854e.jpg" alt="">
            </a>
          </li>

        </ul>
      </div>
    </div>
    <div class="xline"><!--分割线-->
      <div class="page-line"></div>
    </div>

    <div class="swiper-slide">
      <a href="">
        <img src="../../img/imgs/5a3f9a270c73b55bd2525b0578e47782.gif" alt="">
      </a>
    </div>

    <div class="surprise_day">
      <div class="surprise-tit">
        <div class="titimg">
          <img src="../../img/imgs/suprice.png" alt="">
        </div>
        <div class="ft13">
          距本场结束
        </div>
        <div class="time">
          <span class="time1-1">00</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">00</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">00</span>
        </div>
        <div class="more">
          <a href="">
            <img src="../../img/123.jpg" alt="">
          </a>
        </div>
      </div>

      <div class="surprise" ref="surprise" style="width: 100%">
        <ul class="surprisew" style="width: 200%">
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/1af8a1d121219361dbc60fa0b78be7de.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/8c6b4e0cc2c0fc940e9476c27b197d14.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/927e5a8c3f7eb4360e1b186f84e5a8d4.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/5281dcf6fe7a68b2d9ed14b125cdd215.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/f004ccf209d012070a2697ac546e2f8f.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
          <li>
            <a href="" class="imga">
              <img src="../../img/imgs/8c6b4e0cc2c0fc940e9476c27b197d14.jpg" alt="">
              <span>¥3.5</span>
              <p class="c999">￥31.50</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="xline">
      <div>
        <div class="page-line"></div>
      </div>
    </div>
    <indexbox/>
    <div style="height: 200px"></div><!--空div-->
    </scroller>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import indexbox from "../../components/indexbox/indexbox.vue"

  /*滑动库*/
  export default{
    mounted(){ /*马上*/
      /*首页头滑动*/
      new BScroll(this.$refs.ulNav, {click: true, scrollX: true});
      new BScroll(this.$refs.surprise, {click: true, scrollX: true})
    },
    components:{  /*接收组件*/
      indexbox
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width: 100%
    height: 142px
    position fixed
    top: 0
    z-index 1
    img
      display block
      width: 100%
      height: 55px
    .clearfix
      position relative
      width: 100%
      height: 51px
      margin 5px 10px
      .epet-search
        width: 355px
        height: 41px
        position relative
        .db
          position relative
          width: 80px
          height: 22px
          line-height 41px
          i
            position: absolute;
            top: 10px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 22px;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
        input
          width: 220px;
          border: 0;
          height: 25px;
          background: #e9e9e9;
          border-radius: 4px;
          color: #bcbcbc;
          text-indent: 10px;
          font-size: 13px;
          outline: 0
          margin-left 20px;
          background-image url("../../img/imgs/search.png")
          background-repeat no-repeat
          background-size 11px 11px
          background-position 205px 50%
        img
          position: absolute;
          top: 13px;
          right: 4px;
          display inline
          width: 20px
          height: 20px
    .ulNav
      height: 36px;
      position: relative;
      .headerNav
        height: 36px;
        li
          float: left;
          width: 74px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          a
            font-size: 14px;
            color: #666

  .imgWrap
    margin-top 150px
    width 100%
    height: 160px
    img
      width: 100%
      height: 160px

  .columnnavdiv
    width: 100%
    height: 190px
    li
      width: 75px
      height: 95px
      float left
      img
        width: 75px
        height: 95px
  .xline
    width: 100%
    height: 10px
    .page-line
      background: #f3f4f5;
      height: 10px;
  .swiper-slide
    width: 100%
    height: 120px
    text-align center
    img
      height: 120px
      width: 100%;
      display: block;
      border: 0;
      vertical-align: middle
  .surprise_day
    width: 100%
    height: 190.6px
    .surprise-tit
      width: 100%
      height: 40px
      position: relative
      padding: 10px
      overflow: hidden!important
      .titimg
        line-height 60px
        width: 90px
        height: 24px
        img
          width: 90px
          height: 24px
      .ft13
        font-size: 13px
        margin-left: 100px
        margin-top -9px
        float: left
      .time
        position relative
        margin-top -8px
        margin-left 175px
        width: 82px
        height: 20px
        font-size: 12px
      .more
        position: relative;
        margin-top: -35px;
        margin-left: 300px;
        width: 67px
        height: 40px
        img
          width: 67px
          height: 40px



    .surprise
      width: 100%
      height: 130px
      .surprisew
        width 200%
        overflow:hidden
        li
          width: 98px
          height: 130px
          margin-right 5px
          text-align center
          position relative
          display inline-block
          float left

          .imga
            width: 85px
            height: 85px
            img
              width: 85px
              height: 85px
          span
            position relative
            width: 35px
            height: 35px
          .c999
            position relative
            width: 84px
            height: 19px

  .xline
    width: 100%
    .page-line
      background: #f3f4f5;
      height: 10px
</style>
