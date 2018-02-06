import { combineReducers, createStore, applyMiddleware } from 'redux';

import reducers from 'Kameo/reducers';

import sagas from 'Kameo/sagas';

import createSagaMiddleware from 'redux-saga';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),    
  );  

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(sagas);  

  return store;  
};

export default configureStore;
