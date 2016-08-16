import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'Todo/containers/App'
import AppReducers from 'Todo/reducers/AppReducers'

let store = createStore(AppReducers, window.devToolsExtension && window.devToolsExtension());

export class TodoIndex extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
