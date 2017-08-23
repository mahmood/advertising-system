import { 
  ADD_PRODUCT,
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  SEARCH,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILED
} from './actionTypes';
import axios from 'axios';
import { push } from 'react-router-redux';
import { apiEndPoint } from '../../config.js';


export const addProduct = data => {
  const newData = new FormData();
  data.images.map((image, i) => newData.append('photo', data.images[i]));
  newData.append('name', data.name);
  newData.append('category', data.category);
  newData.append('price_type', data.price_type);
  newData.append('price', data.price || 0);
  newData.append('description', data.description);

  return dispatch => {
    axios.post(`${apiEndPoint}/product`, newData, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch(push('/'));
      })
      .catch(error => {
        console.log(error.response);
      });
    };
};

export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${apiEndPoint}/category`)
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, cat: response.data.data });
    })
  }
}

export const fetchProducts = (catId = null) => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCT_SUCCESS, term: null, isLoading: true });
    if(catId !== null){
      axios.get(`${apiEndPoint}/category/${catId}`)
      .then(response => {
        dispatch({ type: FETCH_PRODUCT_SUCCESS, term:null, isLoading: false, data: response.data.products, currentCat: response.data.currentCat });
      })
      .catch(error => {
        dispatch({ type: FETCH_PRODUCT_FAILED, term:null, isLoading: false, error: error.response.msg });
      });
    }else {
      axios.get(`${apiEndPoint}/product`)
        .then(response => {
          dispatch({ type: FETCH_PRODUCT_SUCCESS,term: null, isLoading: false, data: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCH_PRODUCT_FAILED,term:null, isLoading: false, error: error.response.msg });
        });
    }
  }
}

export const searchProduct = term => {
  return dispatch => {
    axios.get(`${apiEndPoint}/product/search?term=${term}`)
      .then(response => {
        dispatch({ type: SEARCH, data: response.data, term });
      })
      .catch(error => {
        dispatch({ type: SEARCH, term: null });
      });
  }
}

// Fetch Single product with given id
export const FetchSingleProduct = id => {
  return dispatch => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, isLoading: true });
    axios.get(`${apiEndPoint}/product/${id}`)
      .then(response => {
        dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, isLoading: false, data: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_SINGLE_PRODUCT_FAILED, isLoading: false, error: true });
      })
  }
}