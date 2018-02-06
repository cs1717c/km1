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

const SpinnerActionTypes = {
  SHOW: 'SPINNER_SHOW',
  HIDE: 'SPINNER_HIDE',
};

const NavigationActionTypes = {
  GO_TO_WHAT: 'NAVIGATION_WHAT',
};

const WhatActionTypes = {
  FETCHED_TAGS: 'WHAT_FETCHED_TAGS',
  FETCH_TAGS: 'WHAT_FETCH_TAGS',
  ADD_TAG: 'WHAT_ADD_TAG',
};

export {
  AuthenticationActionTypes,
  EventActionTypes,
  ErrorActionTypes,
  SpinnerActionTypes,
  NavigationActionTypes,
  WhatActionTypes,
};
