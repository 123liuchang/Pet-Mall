/**
 * Created by dell on 2018/1/6.
 */
import axios from 'axios' /*应用程序开发的状态管理模式*/

export function getHome() {
  return axios.get('/api/homepage')
}
