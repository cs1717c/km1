import { take, put, call, fork, select } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { LOAD } from 'redux-storage';

function * watchReduxLoadFromDisk() {
  while (true) {
    yield take(LOAD);       //Subscribe to when app finishes loading
    
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
