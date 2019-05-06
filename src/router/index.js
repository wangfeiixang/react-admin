import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, Redirect } from 'react-router-dom'

import MyEcharts from '../components/echarts'
import MyHighcharts from '../components/highcharts'

const router = () => (
  <Switch>
    <Route exact path="/" component={MyEcharts} />
    <Route sensitive path="/highcharts" component={MyHighcharts} />
    {/* <Redirect to="/" /> */}
  </Switch>
)

export default router
