import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { NavigationActionTypes } from 'Kameo/actions/types';

import { fetchedTags } from 'Kameo/actions/what-actions';
import { fetchedPlaces } from 'Kameo/actions/places-actions';

import { Actions } from 'react-native-router-flux';
import { showSpinner, hideSpinner } from 'Kameo/actions/spinner-actions';

import { myTags, places } from 'Kameo/services/api';

function * watchGoToWhatRequest() {
  yield takeEvery(NavigationActionTypes.GO_TO_WHAT, goToWhatSaga);
}

function * watchGoToPlacesRequest() {
  yield takeEvery(NavigationActionTypes.GO_TO_PLACES, goToPlacesSaga);
}

function * watchFetchTagsRequest() {
  yield takeEvery(NavigationActionTypes.GO_TO_WHAT, goToWhatSaga);
}

function* goToWhatSaga (payload) {
  yield put(showSpinner());

  try {
    const tags = yield call(myTags, {});

    yield put(fetchedTags(tags)); 
    yield Actions.what();
  } catch (e) {
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }

  yield put(hideSpinner());  
}

function* goToPlacesSaga (payload) {
  yield put(showSpinner());

  try {
    //TODO FORK TO THE FETCH PLACES ACTION
    console.log('fetching places');
    const placesResult = yield call(places);

    console.log('putting fetched places');

    yield put(fetchedPlaces(placesResult.places)); 
    yield Actions.places();
  } catch (e) {
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }

  yield put(hideSpinner());  
}


export default function* root() {
  yield fork(watchGoToWhatRequest);
  yield fork(watchGoToPlacesRequest);
}
