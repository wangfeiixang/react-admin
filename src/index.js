import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import 'antd/dist/antd.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'
// import { touchSwitch } from './redux/actions'

import * as serviceWorker from './serviceWorker'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

// console.log('store--before--', store, 'getState--', store.getState())

// store.dispatch(touchSwitch(false))

// console.log('store--after--', store, 'getState--', store.getState())

ReactDOM.render (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
