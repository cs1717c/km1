const AuthenticationActionTypes = {
  REGISTER: 'AUTH_REGISTER',
  LOGIN: 'AUTH_LOGIN',
  FB_LOGIN: 'AUTH_FB_LOGIN',
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
  GO_TO_PLACES: 'NAVIGATION_PLACES',
};

const WhatActionTypes = {
  FETCHED_TAGS: 'WHAT_FETCHED_TAGS',
  FETCH_TAGS: 'WHAT_FETCH_TAGS',
  ADD_TAG: 'WHAT_ADD_TAG',
  REMOVE_TAG: 'WHAT_REMOVE_TAG',
  TOGGLE_TAG: 'WHAT_TOGGLE_TAG',
};

const PlacesActionTypes = {
  FETCHED_PLACES: 'PLACES_FETCHED_PLACES',
  FETCH_PLACES: 'PLACES_FETCH_PLACES',
  ADD_PLACE: 'PLACES_ADD_PLACE',
  REMOVE_PLACE: 'PLACES_REMOVE_PLACE',
};

export {
  AuthenticationActionTypes,
  EventActionTypes,
  ErrorActionTypes,
  SpinnerActionTypes,
  NavigationActionTypes,
  WhatActionTypes,
  PlacesActionTypes,
};
