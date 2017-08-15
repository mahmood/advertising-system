import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux'

const configStore = (preloadedState, history) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(history))
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configStore;