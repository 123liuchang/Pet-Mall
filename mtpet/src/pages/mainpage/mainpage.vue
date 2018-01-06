<template>
  <div>
    <div class="header">
      <a><img src="../../img/imgs/c63b6e6cf483cbb61196f658920a9d6e.jpg" alt=""></a>
      <div class="clearfix">
        <div class="epet-search">
          <a class="db">
            <span class="catordog c89">猫猫</span>
            <span class="c89">|</span>
            <span class="myposition" >北京</span>
            <i></i>
          </a>
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <img src="../../img/imgs/mydope.png" alt="">
        </div>
      </div>
      <div class="ulNav" ref="ulNav" style="width: 100%">
        <ul class="headerNav" style="width: 140%" v-if="home">
          <li v-for="(menu, index) in home.menus" :key="index">
            <a :href="menu.menu_target">
              {{menu.menu_name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <scroller>  <!--应用于上下滑动更新-->
    <div class="imgWrap" v-if="home.datas">

      <mt-swipe :auto="1110">
        <mt-swipe-item v-for="(val,index) in home.datas[0].value" :key="index">
          <a :href="val.target.param">
            <img :src="val.image" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="columnnavdiv" v-if="home.datas">
      <div>
        <ul class="hottype">
          <li v-for="(men,index) in home.datas[1].menus" :key="index">
            <a :href="men.target.param">
              <img :src="men.image" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="xline"><!--分割线-->
      <div class="page-line"></div>
    </div>

    <div class="swiper-slide" v-if="home.datas">
      <a :href="home.datas[4].target.param">
        <img :src="home.datas[4].image" alt="">
      </a>
    </div>

    <div class="surprise_day">
      <div class="surprise-tit" v-if="home.data">
        <div class="titimg">
          <img :src="home.data.right_image.image" alt="">
        </div>
        <div class="ft13">{{home.data.title}}</div>
        <div class="fl surprise-time hide" style="display: none">{{home.data.time}}</div>

        <!--获取当前时间-->
        <div class="time ftc fl ml5">
          <div class="time1 dib clearfix ft12 dtime">
            <span class="time1-1">{{hour}}</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">{{min}}</span>
            <span class="time-zi ft12">:</span>
            <span class="time1-1">{{sec}}</span>
          </div>
        </div>
        <div class="more">
          <a href="###">
            <img src="../../img/123.jpg" alt="">
          </a>
        </div>
      </div>

      <div class="surprise" ref="surprise" style="width: 100%">
        <ul class="surprisew" style="width:200%" v-if="home.data">
          <li style="margin-right: 20px" v-for="(good,index) in home.data.goods" :key="index">
            <a href="" class="imga">
              <img :src="good.image.image" alt="">
              <span>{{good.sale_price}}</span>
              <p class="c999">{{good.little_price}}</p>
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
  import indexbox from "../../components/indexbox/indexbox.vue"  /*接收贴边小宠*/
  import {mapState} from "vuex"

  /*滑动库*/
  export default{
    data(){
      return{
        hour: '00',
        min: '00',
        sec: '00',
        timer: 0,
      }
    },


    mounted(){ /*马上*/       //请求
      this.$store.dispatch("getHome",()=>{
        this.$nextTick(()=>{              /*首页头滑动*/
          new BScroll(this.$refs.ulNav, {click: true, scrollX: true})
          new BScroll(this.$refs.surprise, {click: true, scrollX: true})
        })
      })

    },
    computed:{  /*计算*/
      ...mapState(["home"])
    },
    components:{  /*接收组件,使用组件 在上面写入组件标签*/
      indexbox
    },

    watch: {
      home(){
//        if (this.scroll) {
//          this.scroll.refresh()
//        } else {
//          this.$nextTick(() => {
//            console.log('this.$refs.sps', this.$refs.sps);
//            this.scroll = new BScroll(this.$refs.sps, {click: true, scrollX: true})
//          })
//        }
        let endTime = this.home.data.time
        let date = parseInt((new Date()).getTime().toString().slice(0, 10))
        this.timer = setInterval(() => {
          date--
          let timeDiff = date - endTime
          let hour = Math.floor(timeDiff / 3600)
          let min = Math.floor((timeDiff - hour * 3600) / 60)
          let sec = -(endTime - date) % 60
          this.hour = ('' + hour).length == 1 ? '0' + hour : hour
          this.min = ('' + min).length == 1 ? '0' + min : min
          this.sec = ('' + sec).length == 1 ? '0' + sec : sec

        }, 1000)
      }
    },

    beforeDestroy(){
      clearInterval(this.timer)
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width: 100%
    height: 150px
    position fixed
    top: 0
    z-index 5
    background-color antiquewhite
    img
      display block
      width: 100%
      height: 55px
    .clearfix
      position relative
      width: 100%
      height: 40px
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
      height: 26px;
      position: relative;
      .headerNav
        height: 36px;
        line-height 36px
        li
          float: left;
          width: 74px;
          height: 26px;
          text-align: center;
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
