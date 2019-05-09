import React from 'react'

import MyHighcharts from '../index'

const colors = ['#67A1FF', '#51DBC1', '#8A5BF7', '#FF875B', '#51DBC1', '#FECB34', '#F86E6E', '#6e7074', '#546570', '#c4ccd3']

const basicOptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: '2015年1月-5月，各浏览器的市场份额'
  },
  xAxis: {
    type: 'category'
  },
  color: colors,
  yAxis: {
    title: {
      text: '总的市场份额'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  series: [{
    name: '浏览器品牌',
    colorByPoint: true,
    data: [{
      name: 'Microsoft Internet Explorer',
      y: 56.33
    }, {
      name: 'Chrome',
      y: 24.03
    }, {
      name: 'Firefox',
      y: 10.38
    }, {
      name: 'Safari',
      y: 4.77
    }, {
      name: 'Opera',
      y: 0.91
    }, {
      name: 'Proprietary or Undetectable',
      y: 0.2
    }]
  }]
}

const stackOptions = {
  chart: {
    type: 'bar'
  },
  credits: {
    enabled: false
  },
  title: {
    text: '堆叠柱状图'
  },
  colors: colors,
  xAxis: {
    gridLineColor: '#EDEDED',
    gridLineWidth: 0,
    tickPixelInterval: 100,
    lineWidth: 0,
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
  },
  yAxis: {
    min: 0,
    // 网格线颜色
    gridLineColor: '#EDEDED',
    lineWidth: 0,
    tickWidth: 0,
    title: {
      text: '水果消费总量'
    }
  },
  tooltip: {
    hideDelay: 0,
    useHTML: true,
    borderColor: 'rgba(0,0,0,0.7)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    style: {
      color: 'rgba(255,255,255,1)'
    }
  },
  legend: {
    /* 图例显示顺序反转
    * 这是因为堆叠的顺序默认是反转的，可以设置
    * yAxis.reversedStacks = false 来达到类似的效果
    */
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: '小张',
    data: [5, 3, 4, 7, 2]
  }, {
    name: '小彭',
    data: [2, 2, 3, 2, 1]
  }, {
    name: '小潘',
    data: [3, 4, 4, 2, 5]
  }]
}
class HighchartsBar extends React.Component {

  render () {
    return (
      <div style={{width: '100%', height:'100%'}}>
        <MyHighcharts id="HbasicBar" height="400px" options={basicOptions}></MyHighcharts>
        <MyHighcharts id="HstackBar" height="400px" options={stackOptions}></MyHighcharts>
      </div>
    )
  }

}

export default HighchartsBar