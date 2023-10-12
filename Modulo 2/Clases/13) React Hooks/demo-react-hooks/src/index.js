import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import React from 'react'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
