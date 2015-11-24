import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import '../styles/index.css'

const store = configureStore();
const app = document.createElement('div');
document.body.appendChild(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
