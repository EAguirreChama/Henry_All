import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
