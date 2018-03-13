import { NavigationActionTypes } from './types';

export const goToWhat = () => ({
  type: NavigationActionTypes.GO_TO_WHAT,
});

export const goToPlaces = () => ({
  type: NavigationActionTypes.GO_TO_PLACES,
});

export default { goToWhat, goToPlaces };
