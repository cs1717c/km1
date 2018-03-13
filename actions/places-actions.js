import { PlacesActionTypes } from './types';

export const fetchPlaces = (query) => ({
  type: PlacesActionTypes.FETCH_PLACES,
  query,
});

export const addPlace = (place) => ({
  type: PlacesActionTypes.ADD_PLACE,
  place,
});

export const removePlace = (place) => ({
  type: PlacesActionTypes.REMOVE_PLACE,
  place,
});

export const fetchedPlaces = (places) => ({
  type: PlacesActionTypes.FETCHED_PLACES,
  places,
});

export default { fetchedPlaces, fetchPlaces, addPlace, removePlace };
