import axios from 'axios'
import { config } from 'vue/types/umd'

export function request(config) {
    // 1.创建 axios 实例
    const instance = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',

})
}

//发送真正的网络请求
return instance(config) 