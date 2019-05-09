import React from 'react'
import Highcharts from 'highcharts'
import VariablePie from 'highcharts/modules/variable-pie'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

VariablePie(Highcharts)
class MyHighcharts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.chart = null
  }

  static defaultProps = {
    id: 'container',
    height: '400px'
  }

  componentDidMount () {
    this.chart = Highcharts.chart(this.props.id, this.props.options)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isSwitch) {
      // 图表自适应
      setTimeout(()=>{
        this.chart.reflow()
      },20)
    }
  }

  render () {
    return (
      <div id={this.props.id} style={{ width:'100%', height:this.props.height }}></div>
    )
  }

}


const mapStateToProps = state => {
  return {
    isSwitch: state.changeSwitch.isSwitch
  }
}

export default withRouter(connect(mapStateToProps)(MyHighcharts))