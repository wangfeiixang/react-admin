import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/home'
import EchartsBar from '../components/echarts/bar'
import EchartsLine from '../components/echarts/line'
import MyHighcharts from '../components/highcharts'

const MyEcharts = ({ match }) =>{
  // console.log('match--', match)
  return (
    <div style={{width: '100%', height:'100%'}}>
      <Route  path="/echarts/barChart" component={ EchartsBar } />
      <Route  path="/echarts/lineChart" component={ EchartsLine }/>
    </div>
  )
}

const router = () => (

  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/echarts" component={MyEcharts} />
    <Route sensitive path="/highcharts" component={MyHighcharts} />
    {/* <Redirect to="/" /> */}
  </Switch>
)

export default router
