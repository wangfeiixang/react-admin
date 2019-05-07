import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/home'
import MyEcharts from '../components/echarts'
import MyHighcharts from '../components/highcharts'

const router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/echarts" component={MyEcharts} />
    <Route sensitive path="/highcharts" component={MyHighcharts} />
    {/* <Redirect to="/" /> */}
  </Switch>
)

export default router
