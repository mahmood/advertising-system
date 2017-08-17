import {
  AUTH_USER,
  LOGOUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
} from './actionTypes';
import axios from 'axios';
import Cookies from 'universal-cookie';

const ROOT_URL = 'http://localhost:3333/api/v1';

export const signIn = (values) => {
  return dispatch => {
    dispatch({ type: AUTH_USER, loggedIn: false, isLoading: true, data: null, error: null });
    axios.post(`${ROOT_URL}/login`, values)
      .then(response => {
        dispatch({ type: AUTH_USER, loggedIn: true, isLoading: false, data: response.data.user, error: null });
        const cookies = new Cookies();
        cookies.set('jwt', response.data.token, { path: '/' });
        cookies.set('data', response.data.user, { path: '/' });
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        dispatch({ type: AUTH_USER, loggedIn: false, isLoading: false, data: null, error: error.response.data.msg });
      });
  }
};


export const logOut = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    const cookies = new Cookies();
    cookies.remove('jwt');
    cookies.remove('data');
    localStorage.removeItem('token');
  }
};

export const register = (values) => {
  return dispatch => {
    values = Object.assign({}, values, { username: values.email });
    dispatch({ type: CREATE_USER_SUCCESS, isLoading: true });
    axios.post(`${ROOT_URL}/register`, values)
      .then(response => {
        dispatch({ type: CREATE_USER_SUCCESS, isLoading: false });
        axios.post(`${ROOT_URL}/login`, values)
          .then(response => {
            dispatch({ type: AUTH_USER, loggedIn: true, data: response.data.user, error: null });
            const cookies = new Cookies();
            cookies.set('jwt', response.data.token, { path: '/' });
            cookies.set('data', response.data.user, { path: '/' });
            localStorage.setItem('token', response.data.token);        
          })
          .catch(error => {
            dispatch({ type: AUTH_USER, loggedIn: false, data: null, error: error.response.data.msg });
          });
      })
      .catch(error => {
        dispatch({ type: CREATE_USER_FAILED, error: 'مشکل در ایجاد اکانت دوباره تلاش کنید.' })
      })
    }
  };