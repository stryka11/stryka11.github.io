import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from "./Redux/Store"

import StartApp from './Modules/Start/StartModule.js'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <StartApp />
  </Provider>,
  rootElement
)