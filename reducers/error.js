import { ErrorActionTypes } from 'Kameo/actions/types';

const initialState = {
  showErrorModal: false,
  errorText: '',
};

function showErrorModal(state, payload) {  
  return {  
    ...state,
    errorModalVisible: true,
    errorText: payload.text,
  };
}

function hideErrorModal(state, payload) {  
  return {  
    ...state,
    errorModalVisible: false,
  };
}

export default function reducer(state = initialState, payload = {}) {
  switch (payload.type) {
    case ErrorActionTypes.SHOW_MODAL:
     return showErrorModal(state, payload);
    case ErrorActionTypes.HIDE_MODAL:
     return hideErrorModal(state, payload);
    default:
      return {
        ...state,
      };
  }
}
