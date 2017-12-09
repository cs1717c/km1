import { AuthenticationActionTypes } from 'Kameo/actions/types';

const initialState = {
  loggedIn: false,
};

function register(state, payload) {  
  return {  
    ...state,
    loggedIn: true,
  };
}


function loginSuccess(state, payload) {
  console.log('login success');
  const { user } = payload.response;

  return {  
    ...state,
    user,
    loggedIn: true,
  };
}

export default function reducer(state = initialState, payload = {}) {
  switch (payload.type) {
    case AuthenticationActionTypes.REGISTER:
     return register(state, payload);
    case AuthenticationActionTypes.LOGIN_SUCCESS:
     return loginSuccess(state, payload);
    default:
      return {
        ...state,
      };
  }
}
