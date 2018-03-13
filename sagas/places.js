import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { PlacesActionTypes } from 'Kameo/actions/types';

import { fetchedPlaces, fetchPlaces } from 'Kameo/actions/places-actions';

import { Actions } from 'react-native-router-flux';

import { places, addPlace, removePlace } from 'Kameo/services/api';

function * watchFetchPlacesRequest() {
  const payload = yield takeEvery(PlacesActionTypes.FETCH_PLACES, fetchPlacesSaga);
}

function * watchAddPlaceRequest() {
  const payload = yield takeEvery(PlacesActionTypes.ADD_PLACE, addPlaceSaga);
}

function * watchRemovePlaceRequest() {
  const payload = yield takeEvery(PlacesActionTypes.REMOVE_PLACE, removePlaceSaga);
}

function* fetchPlacesSaga(payload) {
  try {
    try {
      const results = yield call(places, payload);
      
      console.log('fetch places');
      console.log(results);

      yield put(fetchedPlaces(results.places));
    } catch (e) {
      console.log('error fetch places');
    }
  } catch (e) {
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

function* addPlaceSaga(payload) {
  console.log('add place saga');
  try {
    const added = yield call(addPlace, payload.place.placeid);
    console.log('added');

    console.log('update places');
    yield put(fetchPlaces());
  } catch (e) {
    console.log('error add places');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

function* removePlaceSaga(payload) {
  console.log('remove place saga');
  console.log(payload);

  try {
    const removed = yield call(removePlace, payload.place._id);
    console.log('removed');

    console.log('update places');
    yield put(fetchPlaces());
  } catch (e) {
    console.log('error remove places');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

export default function* root() {
  yield fork(watchFetchPlacesRequest);
  yield fork(watchAddPlaceRequest);
  yield fork(watchRemovePlaceRequest);
}
