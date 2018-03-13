import React from 'react';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import { NavigationActionTypes } from 'Kameo/actions/types';
import { WhatActionTypes } from 'Kameo/actions/types';

import { fetchedTags, fetchTags } from 'Kameo/actions/what-actions';

import { Actions } from 'react-native-router-flux';

import { myTags, addTag, selectTag, deselectTag, removeTag } from 'Kameo/services/api';

function * watchFetchTagsRequest() {
  const payload = yield takeEvery(WhatActionTypes.FETCH_TAGS, fetchTagsSaga);
}

function * watchAddTagRequest() {
  const payload = yield takeEvery(WhatActionTypes.ADD_TAG, addTagSaga);
}

function * watchRemoveTagRequest() {
  const payload = yield takeEvery(WhatActionTypes.REMOVE_TAG, removeTagSaga);
}

function * watchToggleTagRequest() {
  const payload = yield takeEvery(WhatActionTypes.TOGGLE_TAG, toggleTagSaga);
}

function* fetchTagsSaga (payload) {
  try {
    try {
      console.log(payload);
      const tags = yield call(myTags, payload);
      
      console.log('fetched tags');
      console.log(tags);

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
  console.log('add tags');
  try {
    const added = yield call(addTag, payload);

    const query = {
      query : payload.tag
    };

    yield put(fetchTags());
  } catch (e) {
    console.log('error fetch tags');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

function* removeTagSaga (payload) {
  console.log('remove tag');
  console.log(payload);
  
  try {
    const removed = yield call(removeTag, payload.tag._id);

    yield put(fetchTags());
  } catch (e) {
    console.log('error remove tag');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

function* toggleTagSaga (payload) {
  console.log('toggle tag');
  console.log(payload);

  const tag = payload.tag;
  
  try {
    if (tag.selected) {
      console.log('tag is selected, un select');
      const deselected = yield call(deselectTag, tag);
    } else {
      console.log('tag is not selected, select');
      const selected = yield call(selectTag, tag);
    }

    const tags = yield call(myTags, '');      
    yield put(fetchedTags(tags));
  } catch (e) {
    console.log('error toggle tag');
    console.log(e);
    // const response = JSON.parse(e._bodyText);
    // yield put(showErrorModal(response.message));
  }
}

export default function* root() {
  yield fork(watchFetchTagsRequest);
  yield fork(watchToggleTagRequest);
  yield fork(watchAddTagRequest);
  yield fork(watchRemoveTagRequest);
}
