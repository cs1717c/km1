import { fork } from 'redux-saga/effects';

// import init from './init';
import authentication from './authentication';

export default function* root() {
  // yield fork(init);  
  yield fork(authentication);
}
