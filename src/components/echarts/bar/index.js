import React from 'react'
import MyEcharts from '../index'
let colors = ['#67A1FF', '#51DBC1', '#8A5BF7', '#FF875B', '#51DBC1', '#FECB34', '#F86E6E', '#6e7074', '#546570', '#c4ccd3']
const basicOptions = {
  title: {
    text: '基础柱状图-周统计',
    left: 'center'
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    // 网格线
    splitLine: {
      lineStyle: {
        width: 1
      }
    },
    // x轴刻度线
    axisTick: false,
    // x轴
    axisLine: {
      'show': false
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    // y轴
    axisLine: {
      'show': false
    },
    // 网格线
    splitLine: {
      lineStyle: {
        width: 1
      }
    },
    // y轴刻度线
    axisTick: false,
    type: 'value'
  },
  series: [{
    name:'访问人数',
    data: [50, 100, 120, 80, 70, 110, 130],
    type: 'bar',
    itemStyle: {
      color: function (params) {
        return colors[params.dataIndex]
      },
      borderWidth: 1,
      borderColor: '#001529'
    }
  }]
}

const stackOptions = {
  title: {
    text: '堆叠柱状图-周统计',
    left: 'center'
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {
      // 默认为直线，可选为：'line' | 'shadow'
      type : 'shadow',
      shadowStyle: {
        color: 'rgba(42,138,228,0.3)'
      }
    }
  },
  color: colors,
  legend: {
    data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis:  {
    type: 'value',
    axisLine: {
      'show': false
    },
    splitLine: {
      lineStyle: {
        width: 1
      }
    },
    axisTick: false
  },
  yAxis: {
    type: 'category',
    axisLine: {
      'show': false
    },
    splitLine: {
      lineStyle: {
        width: 1
      }
    },
    axisTick: false,
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  series: [
    {
      name: '直接访问',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: '搜索引擎',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [820, 832, 901, 934, 290, 330, 320]
    }
  ]
}
class EchartsBar extends React.Component {

  render () {
    return (
      <div style={{width: '100%', height:'100%'}}>
        <MyEcharts id="basicBar" options={basicOptions} height="300px"></MyEcharts>
        <MyEcharts id="stackBar" options={stackOptions}  height="400px"></MyEcharts>
      </div>
    )
  }

}

export default EchartsBar