import { WhatActionTypes } from './types';

export const fetchTags = (query) => ({
  type: WhatActionTypes.FETCH_TAGS,
  query,
});

export const addTag = (tag) => ({
  type: WhatActionTypes.ADD_TAG,
  tag,
});

export const fetchedTags = (tags) => ({
  type: WhatActionTypes.FETCHED_TAGS,
  tags,
});

export default { fetchedTags, fetchTags, addTag };
