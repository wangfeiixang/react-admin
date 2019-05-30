import React from 'react'
import { Icon } from 'antd'
import './home.less'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 1
    }
    this.timer = null
  }

  componentDidMount () {
    this.autoPlay(1000)
  }

  // 自动循环
  autoPlay (time) {
    let _this = this
    this.timer = setInterval(_this.move , time)
  }

  move = (type) => {
    let _this = this
    _this.setState((state)=> {
      state.index++
    })

    if (type === 1) {
      if (_this.state.index >= 4) {
        _this.setState({ index: 1 })
      }
    } else {
      if (_this.state.index > 4) {
        _this.setState({ index: 1 })
      }
    }
    // 强制render更新
    _this.forceUpdate()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  // 上一页
  previous = () => {
    if (this.state.index <= 1) {
      this.setState({ index: 4 })
    } else {
      this.setState( (state) => {
        state.index--
      })
    }
    this.forceUpdate()
  }

  // 下一页
  next = () => {
    this.move(1)
  }

  clickActive (num) {
    this.setState({ index: num })
  }

  mouseover = (e)=> {
    e.preventDefault()
    clearInterval(this.timer)
  }

  mouseout = (e)=> {
    e.preventDefault()
    this.autoPlay(1000)
  }

  render () {
    let imgUrl = process.env.PUBLIC_URL
    return (
      <div className="layout-home">
        <div className="banner">
          <div  className={this.state.index === 1 ? 'active' : ''}>
            <img src={ imgUrl + '/images/banner01.jpg' }  alt=""/>
          </div>
          <div  className={this.state.index === 2 ? 'active' : ''}>
            <img src={ imgUrl + '/images/banner02.jpg' } alt="" />
          </div>
          <div  className={this.state.index === 3 ? 'active' : ''}>
            <img src={ imgUrl + '/images/banner03.jpg' }  alt=""/>
          </div>
          <div  className={this.state.index === 4 ? 'active' : ''}>
            <img src={ imgUrl + '/images/banner04.jpg' }  alt=""/>
          </div>
        </div>
        <div className="banner-dot" >
          <span onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={()=> this.clickActive(1)} className={this.state.index === 1 ? 'active' : ''}>1</span>
          <span onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={()=> this.clickActive(2)} className={this.state.index === 2 ? 'active' : ''}>2</span>
          <span onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={()=> this.clickActive(3)} className={this.state.index === 3 ? 'active' : ''}>3</span>
          <span onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={()=> this.clickActive(4)} className={this.state.index === 4 ? 'active' : ''}>4</span>
        </div>
        <div className="banner-btn">
          <div className="btn-left">
            <Icon onMouseOut={this.mouseout} onMouseOver={this.mouseover}  onClick={this.previous} type="left"  style={{fontSize: 30}}/>
          </div>
          <div className="btn-right">
            <Icon onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={this.next} type="right" style={{fontSize: 30}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home