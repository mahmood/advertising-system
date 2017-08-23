import { 
  FETCH_ADMIN_CATS_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_ADMIN_CATS_SUCCESS
} from './actionTypes.js';
import axios from 'axios';
import { push } from 'react-router-redux';
import { apiEndPoint } from '../../config.js';


export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${apiEndPoint}/category`)
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
    axios.post(`${apiEndPoint}/category`, values, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
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
    axios.delete(`${apiEndPoint}/category/${id}`)
      .then(response => {
        dispatch({ type: DELETE_ADMIN_CATS_SUCCESS, id });
      })
      .catch(error => {
        console.log(error);
      });
  };
};