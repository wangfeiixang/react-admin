import React, { Component } from 'react'
import Header from './layouts/Header/'
import MenuNav from './layouts/Menu/'
import './App.less'

import { Button } from 'antd'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuCollapsed: false
    }
  }

  changeMenuCollapsed (b) {
    this.setState({ menuCollapsed: b })
  }

  render () {
    return (
      <div className="layout-app">
        <Header color="gold" changeCollapse={(b) => { this.changeMenuCollapsed(b) }}/>
        <div className="layout-content">
          <MenuNav isCollapsed= {this.state.menuCollapsed}/>
          <div className="layout-contentR">
            <h3>2222--{this.state.menuCollapsed}</h3>
            <Button type="primary">Primary</Button>
          </div>
        </div>
        <div className="layout-footer">
         React数据管理后台 ©2019 Created by wangfeixiang
        </div>
      </div>
    )
  }
}

export default App
