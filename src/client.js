import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const store = configStore(window.__PRELOADED_STATE__);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
