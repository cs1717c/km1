import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  

import { reducers } from 'Kameo/reducers';

import sagas from 'Kameo/sagas';

import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


export const persistConfig = {
  key: 'km',
  storage,
  stateReconciler: autoMergeLevel2,
  debug: true,
}

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const rootReducer =  require('../reducers/index').default;

  console.log('reducers');
  console.log(reducers);

  const persistedReducer = persistCombineReducers(persistConfig, reducers);

  const store = createStore(
    persistedReducer,
    // rootReducer,
    applyMiddleware(sagaMiddleware),
  );  

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextRootReducer = persistedReducer;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  sagaMiddleware.run(sagas);  

  const persistor = persistStore(store);

  return { persistor, store };
  // return { store };
};

export default configureStore;
