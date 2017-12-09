const AuthenticationActionTypes = {
  REGISTER: 'AUTH_REGISTER',
  LOGIN: 'AUTH_LOGIN',
  LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
};

const EventActionTypes = {
  JOIN: 'EVENT_JOIN',
};

const ErrorActionTypes = {
  SHOW_MODAL: 'ERROR_SHOW_MODAL',
  HIDE_MODAL: 'ERROR_HIDE_MODAL',
};

export {
  AuthenticationActionTypes,
  EventActionTypes,
  ErrorActionTypes,
};
