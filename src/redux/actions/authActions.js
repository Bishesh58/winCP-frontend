import axios from 'axios';

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  LOGOUT,
  USER_LOADED,
} from '../slices/authSlice';
import setAuthToken from '../../utils/setAuthToken';

export const loginUser = (loginFormData) => async (dispatch) => {
  dispatch(SET_LOADING_TRUE());
  try {
    const res = await axios.post(
      'http://localhost:5001/wincp-9d49a/us-central1/api/login',
      loginFormData
    );
    const token = res.data.token;
    if (token) localStorage.setItem('token', token);
    dispatch(LOGIN_SUCCESS(token));
    dispatch(loadUser());
  } catch (err) {
    dispatch(SET_LOADING_TRUE());
    dispatch(LOGIN_FAIL(err.response.data.errors));
  }
  dispatch(SET_LOADING_FALSE());
};

export const signupUser = (signupFormData) => async (dispatch) => {
  dispatch(SET_LOADING_TRUE());
  try {
    const res = await axios.post(
      'http://localhost:5001/wincp-9d49a/us-central1/api/signup',
      signupFormData
    );
    const token = res.data.token;
    dispatch(SIGNUP_SUCCESS(token));
    dispatch(loadUser());
  } catch (err) {
    console.log('in catch block ');
    dispatch(SIGNUP_FAIL(err.response.data.errors));
  }
  dispatch(SET_LOADING_FALSE());
};

export const logoutUser = () => async (dispatch) => {
  dispatch(LOGOUT());
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      'http://localhost:5001/wincp-9d49a/us-central1/api/user'
    );
    dispatch(USER_LOADED(res.data));
  } catch (err) {
    dispatch(LOGOUT());
  }
};
