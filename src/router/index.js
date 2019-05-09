import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/home'
import EchartsBar from '../components/echarts/bar'
import EchartsLine from '../components/echarts/line'
import HighchartsBar from '../components/highcharts/bar'
import HighchartsLine from '../components/highcharts/line'

const MyEcharts = ({ match }) =>{
  // console.log('match--', match)
  return (
    <div style={{width: '100%', height:'100%'}}>
      <Route  path="/echarts/barChart" component={ EchartsBar } />
      <Route  path="/echarts/lineChart" component={ EchartsLine }/>
    </div>
  )
}

const MyHighcharts = ({ match }) => {
  return (
    <div style={{width: '100%', height:'100%'}}>
      <Route  path="/highcharts/barChart" component={ HighchartsBar } />
      <Route  path="/highcharts/lineChart" component={ HighchartsLine }/>
      {(match.params.username !== 'barChart' && match.params.username !=='lineChart') ? <Redirect to="/" /> : ''}
    </div>
  )
}

const router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/echarts/:username" component={MyEcharts} />
    <Route exact path="/highcharts/:username" component={MyHighcharts} />
    <Redirect to="/" />
  </Switch>
)

export default router
