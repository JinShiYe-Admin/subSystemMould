import { message } from 'antd'
import { publicResponseHandler } from '@/static/js/axios/handler'
import instanceAxios from '@/static/js/axios'
import qs from 'qs'
import signHmacSHA1 from '@/static/js/axios/signHmacSHA1'
import { getStorage } from '@/static/js/storage'
import log from '@/static/js/log'

/**
 * POST
 * @param {string} url 请求 URL
 * @param {object} data 请求内容
 * @param {object} config 配置 https://github.com/axios/axios#request-config
 */
export default function post(url, data, config = {}) {

  const accessToken = config.disableAccessToken ? undefined : getStorage('access_token')

  const finalData = {
    ...data,
    access_token: accessToken,
    sign: signHmacSHA1({
      ...data,
      access_token: accessToken
    }),
  }

  return new Promise((resolve, reject) => {
    const poster = instanceAxios.post(url, qs.stringify(finalData), config)

    poster.then((response) => {

      // 跳转至处理请求方法以弹出提示
      publicResponseHandler(response, config)
        .then((handlerResponse) => {
          resolve(handlerResponse)
        })
        .catch((handlerResponse) => {
          reject(handlerResponse)
        })
    }).catch((err) => {
      message.error(err.message)
      reject(err)
    })
  })
}
