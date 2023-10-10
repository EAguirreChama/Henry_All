import Friends from './src/components/Friends.jsx';
import  { Provider } from 'react-redux';
import store from './src/store.js';
import { render } from 'react-dom';
import React from 'react';

render(
    <Provider store={store}>
      <div>
        <Friends/>
      </div>
    </Provider>,
  document.getElementById('app')
)
