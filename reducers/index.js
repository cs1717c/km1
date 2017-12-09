import { combineReducers } from 'redux';
import routes from './routes';
import authentication from './authentication';
import error from './error';

export default combineReducers({
  routes,
  authentication,
  error,
});
