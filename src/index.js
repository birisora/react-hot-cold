import React from 'react';
import ReactDOM from 'react-dom';
// import in the Provider
import { Provider } from 'react-redux';

// import the store
import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  // Wrap our main component with the provider and pass in store as props
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
