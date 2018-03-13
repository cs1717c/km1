import { WhatActionTypes } from 'Kameo/actions/types';

const initialState = {
  tags: [],
};

function fetchedTags(state, payload) {
  const { tags } = payload;

  return {  
    ...state,
    tags,
  };
}

export default function reducer(state = initialState, payload = {}) {
  switch (payload.type) {
    case WhatActionTypes.FETCHED_TAGS:
     return fetchedTags(state, payload);
    default:
      return state;
  }
}
