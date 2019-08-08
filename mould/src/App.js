import React from 'react'
import { LocaleProvider, locales } from 'antd'
import { HashRouter, Route } from 'react-router-dom'

// 需要引入的页面
import Index from '@/pages/index/';

export default class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={locales.zh_CN}>
        <HashRouter>
          <Route path="/" exact component={Index}/>
          <Route path="/index" component={Index}/>
        </HashRouter>
      </LocaleProvider>
    )
  }
}
