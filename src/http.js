import axios from 'axios'

const http  = axios.create({
  baseURL:'/api'
})
//导出组件
export default http;


