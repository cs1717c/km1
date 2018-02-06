import { combineReducers } from 'redux';
import routes from './routes';
import authentication from './authentication';
import error from './error';
import spinner from './spinner';
import what from './what';

export default combineReducers({
  routes,
  authentication,
  error,
  spinner,
  what,
});
