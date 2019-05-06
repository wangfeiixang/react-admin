import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Myrouter from './router'
import Header from './layouts/Header/'
import MenuNav from './layouts/Menu/'
import './App.less'

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
            <Myrouter/>
          </div>
        </div>
        <div className="layout-footer">
         React数据管理后台 ©2019 Created by wangfeixiang
        </div>
      </div>
    )
  }
}

export default withRouter(App)
