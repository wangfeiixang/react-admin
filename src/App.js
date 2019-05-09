import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { touchSwitch } from './redux/actions'
import Myrouter from './router'

import Header from './layouts/Header/'
import MenuNav from './layouts/Menu/'

import { BackTop } from 'antd'

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
    this.props.dispatch(touchSwitch(b))
  }

  render () {
    // console.log('render--componentDidMount--', this.props.isSwitch)
    return (
      <div className="layout-app">
        <Header color="gold" changeCollapse={(b) => { this.changeMenuCollapsed(b) }}/>
        <div className="layout-content" >
          <MenuNav isCollapsed= {this.state.menuCollapsed}/>
          <div className="layout-contentR">
            <Myrouter/>
          </div>
          <BackTop />
        </div>
        <div className="layout-footer">
         React数据管理后台 ©2019 Created by wangfeixiang
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps--', state)
  return {
    isSwitch: state.changeSwitch.isSwitch
  }
}

export default withRouter(connect(mapStateToProps)(App))
