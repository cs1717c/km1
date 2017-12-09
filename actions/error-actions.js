import { ErrorActionTypes } from './types';

export const showErrorModal = (text) => ({
  type: ErrorActionTypes.SHOW_MODAL,
  text,
});

export const hideErrorModal = () => ({
  type: ErrorActionTypes.HIDE_MODAL,
});

export default { showErrorModal, hideErrorModal };
