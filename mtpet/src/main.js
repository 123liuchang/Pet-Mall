import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScroller from 'vue-scroller'


import { Swipe, SwipeItem  } from 'mint-ui' /*自动轮播插件*/
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueScroller)

new Vue({
  el:'#app',
  render:h => h(App),
  router
})
