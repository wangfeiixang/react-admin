import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd'
import  './Menu.less'

const SubMenu = Menu.SubMenu

const muneList = [
  {
    icon: 'home',
    key: '/',
    title: '主页'
  },
  {
    icon: 'pie-chart',
    key: '/echarts',
    title: 'echarts',
    children: [
      {
        icon: 'bar-chart',
        key: '/barChart',
        title: '柱状图'
      },
      {
        icon: 'line-chart',
        key: '/lineChart',
        title: '折线图'
      }
    ]
  },
  {
    icon: 'fund',
    key: '/highcharts',
    title: 'highcharts'
  }
]

class MenuNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openKeys: [],
      theme: 'dark'
    }
  }
  // 一级目录
  renderMenuItem = ({key, icon, title}) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  // 多级目录
  renderSubMenu = ({key, icon, title, children}) =>{
    return (
      <SubMenu key={key} title={<span><Icon type={icon} /><span>{title}</span></span>}>
        {
          children.map((item)=>{
            return (
              <Menu.Item key={item.key}>
                <Link to={item.key}>
                  {icon && <Icon type={item.icon}/>}
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            )
          })
        }
      </SubMenu>
    )
  }

  rootSubmenuKeys = ['sub1', 'sub2']

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  render () {
    return (
      <div className="layout-menu" style={{ width: this.props.isCollapsed ? 'auto' : 256 }}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme={this.state.theme}
          inlineCollapsed={this.props.isCollapsed}
        >
          {
            muneList.map((item)=>{
              return (item.children && item.children.length) ? this.renderSubMenu(item) : this.renderMenuItem(item)
            })
          }
        </Menu>
      </div>
    )
  }
}

export default MenuNav
