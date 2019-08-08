import { message } from 'antd'
import log from '@/static/js/log'

/**
 * 处理请求数据的公共方法
 * @param {object} response
 * @param {object} config
 */
export function publicResponseHandler(response, {
  disableMessage,
  disableSuccessMessage,
  disableFailMessage
}) {

  // 判断是否为有状态的请求
  // 当接口为列表数据时，往往没有状态(state)，因而需要单独处理
  if (response && response.state) {

    if (response.state === 'ok') {

      // 弹出成功信息提示框
      if (!disableMessage && !disableSuccessMessage && Boolean(response.msg)) {
        message.success(response.msg)
      }

      // 开发模式下打印信息
      if (DEVELOPMENT && Boolean(response.msg)) {
        log.success('success', response.msg)
      }

      return Promise.resolve(response)
    }

    if (response.state === 'fail') {

      // 弹出错误信息提示框
      if (!disableMessage && !disableFailMessage && Boolean(response.msg)) {
        message.warn(response.msg)
      }

      // 开发模式下打印信息
      if (DEVELOPMENT && Boolean(response.msg)) {
        log.warn('warning', response.msg)
      }

      return Promise.reject(response)
    }
  }
}
