import React, { Component } from 'react'
import Header from './layouts/Header/'
import MenuNav from './layouts/Menu/'
import './App.less'

import { Button } from 'antd'

class App extends Component {
  render() {
    return (
     <div>
       <Header color="gold"/>
       <MenuNav/>
       <h3>2222</h3>
       <Button type="primary">Primary</Button>
     </div>
    )
  }
}

export default App;
