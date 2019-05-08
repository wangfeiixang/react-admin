import React from 'react'
import MyEcharts from '../index'
let colors = ['#67A1FF', '#51DBC1', '#8A5BF7', '#FF875B', '#51DBC1', '#FECB34', '#F86E6E', '#6e7074', '#546570', '#c4ccd3']
const basicOptions = {
  title: {
    text: '基础折线图-周统计',
    left: 'center'
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
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
    type: 'line',
    lineStyle: {
      color: 'rgba(41,199,164,0.5)'
    },
    itemStyle: {
      color: function (params) {
        return colors[params.dataIndex]
      }
    },
    areaStyle: {
      color: '#67A1FF'
    }
  }]
}

const stackOptions = {
  title: {
    text: '堆叠折线图-周统计',
    left: 'center'
  },
  color: colors,
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type : 'line',
      lineStyle: {
        color: 'rgba(42,138,228,0.3)'
      }
    }
  },
  legend: {
    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      // x轴刻度线
      axisTick: false,
      // x轴
      axisLine: {
        show: false
      },
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisTick: false,
      axisLine: {
        show: false
      }
    }
  ],
  series : [
    {
      name:'邮件营销',
      type:'line',
      stack: '总量',
      areaStyle: {},
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'联盟广告',
      type:'line',
      stack: '总量',
      areaStyle: {},
      data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
      name:'视频广告',
      type:'line',
      stack: '总量',
      areaStyle: {},
      data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
      name:'直接访问',
      type:'line',
      stack: '总量',
      areaStyle: {normal: {}},
      data:[320, 332, 301, 334, 390, 330, 320]
    },
    {
      name:'搜索引擎',
      type:'line',
      stack: '总量',
      // label: {
      //   normal: {
      //     show: true,
      //     position: 'top'
      //   }
      // },
      areaStyle: {normal: {}},
      data:[820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

class EchartsLine extends React.Component {

  render () {
    return (
      <div style={{width: '100%', height:'100%'}}>
        <MyEcharts id="basicBar" options={basicOptions} height="300px"></MyEcharts>
        <MyEcharts id="stackBar" options={stackOptions}  height="400px"></MyEcharts>
      </div>
    )
  }

}

export default EchartsLine