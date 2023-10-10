import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Home';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Home />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
)
