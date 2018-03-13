import { fork } from 'redux-saga/effects';

// import init from './init';
import authentication from './authentication';
import navigation from './navigation';
import what from './what';
import places from './places';

export default function* root() {
  yield fork(authentication);
  yield fork(navigation);
  yield fork(what);
  yield fork(places);
}
