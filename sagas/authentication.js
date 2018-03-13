import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { AuthenticationActionTypes } from 'Kameo/actions/types';

import { loginSuccess } from 'Kameo/actions/authentication-actions';
import { showErrorModal } from 'Kameo/actions/error-actions';
import { showSpinner, hideSpinner } from 'Kameo/actions/spinner-actions';

import { register, login } from 'Kameo/services/api';

import { Actions } from 'react-native-router-flux';


function * watchRegisterRequest() {
  yield takeEvery(AuthenticationActionTypes.REGISTER, registerSaga);
}

function* registerSaga (payload) {
  yield put(showSpinner());
  
    try {
      const registerResponse = yield call(register, payload);
      yield put(loginSuccess(registerResponse));
      yield put(showErrorModal('Thanks for signing up with Kameo.\n\nPlease sign in with the details you just entered.'));
      Actions.login();
    } catch (e) {
      const response = JSON.parse(e._bodyText);
      yield put(showErrorModal(response.message));
    }
  
    yield put(hideSpinner());  
}

function * watchLoginRequest() {
  yield takeEvery(AuthenticationActionTypes.LOGIN, loginSaga);
}

function* loginSaga(payload) {
  yield put(showSpinner());

  try {
    const loggedInResponse = yield call(login, payload);

    console.log('login saga');
    console.log(loggedInResponse);

    yield put(loginSuccess(loggedInResponse));
    yield Actions.home();
  } catch (e) {
    const response = JSON.parse(e._bodyText);
    yield put(showErrorModal(response.message));
  }

  yield put(hideSpinner());  
}

function * watchFbLoginRequest() {
  yield takeEvery(AuthenticationActionTypes.FB_LOGIN, fbLoginSaga);
}

function* fbLoginSaga(payload) {
  yield put(showSpinner());

  try {
    const loggedInResponse = { ...payload };

    yield put(loginSuccess(loggedInResponse));
    yield Actions.home();
  } catch (e) {
    const response = JSON.parse(e._bodyText);
    yield put(showErrorModal(response.message));
  }

  yield put(hideSpinner());  
}

export default function* root() {
  yield fork(watchRegisterRequest);
  yield fork(watchLoginRequest);
  yield fork(watchFbLoginRequest);
}
