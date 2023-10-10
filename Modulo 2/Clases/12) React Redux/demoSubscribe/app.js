import Counter from './src/components/Counter.jsx'
import  { Provider } from 'react-redux'
import store from './src/store.js'
import { render } from 'react-dom'
import React from 'react'

render(
    <Provider store={store}>
      <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </Provider>,
  document.getElementById('app')
)
