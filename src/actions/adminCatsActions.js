import { 
  FETCH_ADMIN_CATS_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_ADMIN_CATS_SUCCESS
} from './actionTypes.js';
import axios from 'axios';
import { push } from 'react-router-redux';

const ROOT_URL = 'http://localhost:3333/api/v1';

export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/category`)
      .then(response => {
        dispatch({ type: FETCH_ADMIN_CATS_SUCCESS, data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addCategory = values => {
  return dispatch => {
    axios.post(`${ROOT_URL}/category`, values, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch(push('/admin/category'));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteCategory = id => {
  return dispatch => {
    axios.delete(`${ROOT_URL}/category/${id}`)
      .then(response => {
        dispatch({ type: DELETE_ADMIN_CATS_SUCCESS, id });
      })
      .catch(error => {
        console.log(error);
      });
  }
}