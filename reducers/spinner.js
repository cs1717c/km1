import { SpinnerActionTypes } from 'Kameo/actions/types';

const initialState = {
  visible: false,
};

function showSpinner(state, payload) {  
  return {  
    ...state,
    visible: true,
  };
}

function hideSpinner(state, payload) {  
  return {  
    ...state,
    visible: false,
  };
}

export default function reducer(state = initialState, payload = {}) {
  switch (payload.type) {
    case SpinnerActionTypes.SHOW:
     return showSpinner(state, payload);
    case SpinnerActionTypes.HIDE:
     return hideSpinner(state, payload);
    default:
      return {
        ...state,
      };
  }
}
