/**
 * 拦截器设置
 */
import { message } from 'antd'
import errors from '@/static/js/axios/errors'
import { getStorage } from '../storage';

/**
 * @class 请求拦截
 */
export class RequestInterceptor {
  before(config) {
    return config
  }

  exception(error) {
    return Promise.reject(error)
  }
}

/**
 * @class 响应拦截
 */
export class ResponseInterceptor {
  before(response) {
    // 未认证/已超时
    if (response.data.code === '0006') {
      location.hash = '/error/0006';
      location.href = getStorage('error_page_url');
    }

    // 因为 axios 的响应结构相比 jQuery.ajax，data 外会多包裹一层数据
    // 所以真正想要获取的数据在 response.data 中
    // 为了跟以前系统的响应结构保持一致(采用jQuery)，这里就直接返回最终数据了
    return Promise.resolve(response.data)
  }

  exception(error) {
    return Promise.reject(error)
  }
}
