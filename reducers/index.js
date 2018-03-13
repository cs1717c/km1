import { combineReducers } from 'redux';

import routes from './routes';
import authentication from './authentication';
import error from './error';
import spinner from './spinner';
import what from './what';
import places from './places';
import nav from './nav';

export const reducers = {
  routes,
  authentication,
  error,
  spinner,
  what,
  places,
  nav,
};

export default combineReducers(reducers);
