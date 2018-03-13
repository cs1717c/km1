import { PlacesActionTypes } from 'Kameo/actions/types';

const initialState = {
  places: [],
};

function fetchedPlaces(state, payload) {
  console.log('fetched places reducer');
  console.log(payload);

  const { places } = payload;

  return {  
    ...state,
  places,
  };
}

export default function reducer(state = initialState, payload = {}) {
  switch (payload.type) {
    case PlacesActionTypes.FETCHED_PLACES:
     return fetchedPlaces(state, payload);
    default:
      return state;
  }
}
