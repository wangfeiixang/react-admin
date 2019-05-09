import React from 'react'

import MyHighcharts from '../index'

const colors = ['#67A1FF', '#51DBC1', '#8A5BF7', '#FF875B', '#51DBC1', '#FECB34', '#F86E6E', '#6e7074', '#546570', '#c4ccd3']

const basicOptions = {
  credits: {
    enabled: false
  },
  title: {
    text: '基础折线图'
  },
  yAxis: {
    gridLineColor: '#EDEDED',
    lineWidth: 0,
    tickWidth: 0,
    title: {
      text: '就业人数'
    }
  },
  color:colors,
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [{
    name: '安装，实施人员',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: '工人',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: '销售',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: '项目开发',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: '其他',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
}

const stackOptions = {
  chart: {
    type: 'variablepie'
  },
  credits: {
    enabled: false
  },
  title: {
    text: '不同国家人口密度及面积对比'
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
		'面积 (平方千米): <b>{point.y}</b><br/>' +
		'人口密度 (每平方千米人数): <b>{point.z}</b><br/>'
  },
  series: [{
    minPointSize: 10,
    innerSize: '20%',
    zMin: 0,
    name: 'countries',
    data: [{
      name: '西班牙',
      y: 505370,
      z: 92.9
    }, {
      name: '法国',
      y: 551500,
      z: 118.7
    }, {
      name: '波兰',
      y: 312685,
      z: 124.6
    }, {
      name: '捷克共和国',
      y: 78867,
      z: 137.5
    }, {
      name: '意大利',
      y: 301340,
      z: 201.8
    }, {
      name: '瑞士',
      y: 41277,
      z: 214.5
    }, {
      name: '德国',
      y: 357022,
      z: 235.6
    }]
  }]
}

class HighchartsLine extends React.Component {

  render () {
    return (
      <div style={{width: '100%', height:'100%'}}>
        <MyHighcharts id="HbasicLine" height="400px" options={basicOptions}></MyHighcharts>
        <MyHighcharts id="HstackLine" height="400px" options={stackOptions}></MyHighcharts>
      </div>
    )
  }

}

export default HighchartsLine