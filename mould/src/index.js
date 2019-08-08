import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import log from '@/static/js/log'
import { cacheKey, setStorage } from '@/static/js/storage'

import 'antd/dist/antd.less'
import '@/static/less/index.less'

const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  )
}

if (CONFIG.SYSTEM_CODE.toLocaleUpperCase() === 'SYS') {

  // 登录系统直接渲染页面组件
  render()

} else {

  // 子系统需要在获取缓存之后，再渲染页面组件
  window.addEventListener('message', (message) => {

    // 设置默认面包屑文本列表
    if (typeof message.data.breadcrumbs === 'string') {
      window.breadcrumbs = message.data.breadcrumbs
    }

    // 设置缓存
    if (typeof message.data.cache === 'string') {
      localStorage.setItem(cacheKey, message.data.cache)
      render()
    }
  })
}
