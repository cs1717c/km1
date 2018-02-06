import { SpinnerActionTypes } from './types';

export const showSpinner = () => ({
  type: SpinnerActionTypes.SHOW,
});

export const hideSpinner = () => ({
  type: SpinnerActionTypes.HIDE,
});

export default { showSpinner, hideSpinner };
