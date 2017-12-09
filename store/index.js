import { combineReducers, createStore, applyMiddleware } from 'redux';

import reducers from 'Kameo/reducers';

import sagas from 'Kameo/sagas';

import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),    
  );  

  sagaMiddleware.run(sagas);  

  return store;  
};

export default configureStore;
