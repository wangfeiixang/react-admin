import React from 'react'
import './Header.less' 
import { Menu, Dropdown, Icon } from 'antd'

class Header extends React.Component {

  state = {
    dropDownShow: false,
    menuFoldSwitch: true
  }
  /* 
  *  组件内部设置默认 props 属性
  */
  static defaultProps = { 
    user: 'admin'
  }

  handleVisibleChange = (flag) => {
    this.setState({ dropDownShow: flag })
  }

  dropdownClick = () => {
    // console.log('dropdownClick--')
    this.setState({ dropDownShow: false })
  }

  menuFold = ()=>{
    this.setState({ 
      menuFoldSwitch : !this.state.menuFoldSwitch
     })
  }

  render () {
    const menu = (
      <Menu onClick={this.dropdownClick} >
        <Menu.Item>
          个人中心
        </Menu.Item>
        <Menu.Item>
          退出
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="layout-header">
        <div className="layuut-header-left" >
          {/* <span className="layout-header-menu">menu:</span> */}
          <Icon onClick={this.menuFold} style={{color: this.state.menuFoldSwitch ? '#fff': 'gold', marginRight: '10px', fontSize: '16px'}} type={this.state.menuFoldSwitch ? 'menu-fold' : 'menu-unfold'} />
        </div>
        <div className="layuut-header-right">
          <Dropdown 
            overlay={menu}
            onVisibleChange={this.handleVisibleChange}
            overlayClassName="layout-header-dropdown"
            visible={this.state.dropDownShow}
          >
            <div>
              {this.props.user}<Icon style={{ fontSize: '14px',marginLeft: '2px' }} type={this.state.dropDownShow ? 'up' : 'down'} />
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Header
