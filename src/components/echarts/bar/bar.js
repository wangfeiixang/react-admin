import React from 'react'
import MyEcharts from '../index'
const barOptions = {
  title: {
    text: '基础柱状图',
    left: 'center'
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
  }]
}
class EchartsBar extends React.Component {

  render () {
    return (
      <div style={{width: '100%', height:'100%'}}>
        <MyEcharts id="echartsBar" options={barOptions} height="400px"></MyEcharts>
        <MyEcharts id="echartsBarTwo" options={barOptions}  height="400px"></MyEcharts>
      </div>
    )
  }

}

export default EchartsBar