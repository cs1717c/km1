import { ErrorActionTypes } from 'Kameo/actions/types/index';

const initialState = {
  showErrorModal: false,
  errorText: '',
};

function showErrorModal(state, payload) {  
  console.log('showing error modal');
  
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
  console.log(payload);
  console.log('error reducer');

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
