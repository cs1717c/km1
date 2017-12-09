import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { AuthenticationActionTypes } from 'Kameo/actions/types';

import { loginSuccess } from 'Kameo/actions/authentication-actions';
import { showErrorModal } from 'Kameo/actions/error-actions';

import { register, login } from 'Kameo/services/api';

import { Actions } from 'react-native-router-flux';


function * watchRegisterRequest() {
  yield takeEvery(AuthenticationActionTypes.REGISTER, registerSaga);
}

function* registerSaga (payload) {
  yield call(register, payload);
}

function * watchLoginRequest() {
  yield takeEvery(AuthenticationActionTypes.LOGIN, loginSaga);
}

function* loginSaga (payload) {
  const loggedInResponse = yield call(login, payload);  

  if (!loggedInResponse.success) {
    yield put(showErrorModal(loggedInResponse.error._bodyText));    
  }
  else {
    yield put(loginSuccess(loggedInResponse));
    yield Actions.home();
  }
}

export default function* root() {
  yield fork(watchRegisterRequest);
  yield fork(watchLoginRequest);
}
