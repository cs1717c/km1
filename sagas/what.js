import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { NavigationActionTypes } from 'Kameo/actions/types';
import { WhatActionTypes } from 'Kameo/actions/types';

import { fetchedTags } from 'Kameo/actions/what-actions';

import { Actions } from 'react-native-router-flux';

import { myTags, addTag } from 'Kameo/services/api';

function * watchFetchTagsRequest() {
  const payload = yield takeEvery(WhatActionTypes.FETCH_TAGS, fetchTagsSaga);
}

function * watchAddTagRequest() {
  const payload = yield takeEvery(WhatActionTypes.ADD_TAG, addTagSaga);
}

function* fetchTagsSaga (payload) {
  try {
    try {
      const tags = yield call(myTags, payload);
      
      yield put(fetchedTags(tags));
    } catch (e) {
      console.log('error fetch tags');
    }
  } catch (e) {
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

function* addTagSaga (payload) {
  try {
    const added = yield call(addTag, payload);

    const query = {
      query : payload.tag
    };

    const tags = yield call(myTags, query);      
    yield put(fetchedTags(tags));
  } catch (e) {
    console.log('error fetch tags');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

export default function* root() {
  yield fork(watchFetchTagsRequest);
  yield fork(watchAddTagRequest);
}
