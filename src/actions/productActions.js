import { ADD_PRODUCT, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILED, FETCH_CATEGORIES_SUCCESS } from './actionTypes';
import axios from 'axios';
import { push } from 'react-router-redux';

const ROOT_URL = 'http://localhost:3333/api/v1';

export const addProduct = data => {
  const newData = new FormData();
  data.images.map((image, i) => newData.append('photo', data.images[i]));
  newData.append('name', data.name);
  newData.append('category', data.category);
  newData.append('price_type', data.price_type);
  newData.append('price', data.price || 0);
  newData.append('description', data.description);

  return dispatch => {
    axios.post(`${ROOT_URL}/product`, newData, { headers: { Authorization: 'Bearer '+localStorage.getItem('token') } })
      .then(response => {
        dispatch(push('/'));
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    };
};

export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/category`)
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, cat: response.data.data });
    })
  }
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PHOTO_SUCCESS, isLoading: true });    
    axios.get(`${ROOT_URL}/product`)
      .then(response => {
        dispatch({ type: FETCH_PHOTO_SUCCESS, isLoading: false, data: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_PHOTO_FAILED, isLoading: false, error: error.response.msg });
      })
  }
}