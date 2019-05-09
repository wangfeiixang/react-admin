import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class MyEcharts extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  static defaultProps = {
    id: 'main',
    height: '400px'
  }
  componentDidMount () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(this.props.id))
    // 绘制图表
    myChart.setOption(this.props.options)
    myChart.resize()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isSwitch) {
      let myChart = echarts.init(document.getElementById(this.props.id))
      setTimeout(()=>{
        myChart.resize()
      },20)
    }
  }

  render () {
    // console.log('echarts--render--', this.props)
    return (
      <div id={this.props.id} style={{width: '100%', height: this.props.height}}></div>
    )
  }

}


const mapStateToProps = state => {
  // console.log('mapStateToProps--', state)
  return {
    isSwitch: state.changeSwitch.isSwitch
  }
}

// export default MyEcharts
export default withRouter(connect(mapStateToProps)(MyEcharts))