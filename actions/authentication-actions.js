import { AuthenticationActionTypes } from './types';

export const register = (email, password, name) => ({
  type: AuthenticationActionTypes.REGISTER,
  email,
  password,
  name
});

export const login = (email, password) => ({
  type: AuthenticationActionTypes.LOGIN,
  email,
  password,
});


export const loginSuccess = (response) => ({
  type: AuthenticationActionTypes.LOGIN_SUCCESS,
  response,
});

export default { register, login };
