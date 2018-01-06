/**
 * Created by dell on 2018/1/6.
 */
import Mock from 'mockjs'  /*管理数据用*/
import home from './home.json'

// 指定监听的url和对应的json数据模板
Mock.mock('/api/homepage', {
  code:0,
  data: home
})

// export default xxx  不需要
