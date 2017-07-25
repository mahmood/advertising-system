exports.id = 0;
exports.modules = {

/***/ "./src/actions/productActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProduct\", function() { return addProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCategories\", function() { return fetchCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchProduct\", function() { return searchProduct; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(\"./src/actions/actionTypes.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);\n\n\n\n\nvar ROOT_URL = 'http://localhost:3333/api/v1';\n\nvar addProduct = function addProduct(data) {\n  var newData = new FormData();\n  data.images.map(function (image, i) {\n    return newData.append('photo', data.images[i]);\n  });\n  newData.append('name', data.name);\n  newData.append('category', data.category);\n  newData.append('price_type', data.price_type);\n  newData.append('price', data.price || 0);\n  newData.append('description', data.description);\n\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(ROOT_URL + '/product', newData, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(function (response) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__[\"push\"])('/'));\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error.response);\n    });\n  };\n};\n\nvar fetchCategories = function fetchCategories() {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/category').then(function (response) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"a\" /* FETCH_CATEGORIES_SUCCESS */], cat: response.data.data });\n    });\n  };\n};\n\nvar fetchProducts = function fetchProducts() {\n  var catId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  return function (dispatch) {\n    dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"b\" /* FETCH_PRODUCT_SUCCESS */], term: null, isLoading: true });\n    if (catId !== null) {\n      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/category/' + catId).then(function (response) {\n        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"b\" /* FETCH_PRODUCT_SUCCESS */], term: null, isLoading: false, data: response.data.products, currentCat: response.data.currentCat });\n      }).catch(function (error) {\n        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"c\" /* FETCH_PRODUCT_FAILED */], term: null, isLoading: false, error: error.response.msg });\n      });\n    } else {\n      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/product').then(function (response) {\n        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"b\" /* FETCH_PRODUCT_SUCCESS */], isLoading: false, data: response.data });\n      }).catch(function (error) {\n        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"c\" /* FETCH_PRODUCT_FAILED */], isLoading: false, error: error.response.msg });\n      });\n    }\n  };\n};\n\nvar searchProduct = function searchProduct(term) {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/product/search?term=' + term).then(function (response) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"d\" /* SEARCH */], data: response.data, term: term });\n    }).catch(function (error) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"d\" /* SEARCH */], term: null });\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zLmpzPzM4ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX1BST0RVQ1QsIEZFVENIX1BST0RVQ1RfRkFJTEVELCBGRVRDSF9QUk9EVUNUX1NVQ0NFU1MsIEZFVENIX0NBVEVHT1JJRVNfU1VDQ0VTUywgU0VBUkNIIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5cbnZhciBST09UX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMzMzMvYXBpL3YxJztcblxuZXhwb3J0IHZhciBhZGRQcm9kdWN0ID0gZnVuY3Rpb24gYWRkUHJvZHVjdChkYXRhKSB7XG4gIHZhciBuZXdEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGRhdGEuaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UsIGkpIHtcbiAgICByZXR1cm4gbmV3RGF0YS5hcHBlbmQoJ3Bob3RvJywgZGF0YS5pbWFnZXNbaV0pO1xuICB9KTtcbiAgbmV3RGF0YS5hcHBlbmQoJ25hbWUnLCBkYXRhLm5hbWUpO1xuICBuZXdEYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCBkYXRhLmNhdGVnb3J5KTtcbiAgbmV3RGF0YS5hcHBlbmQoJ3ByaWNlX3R5cGUnLCBkYXRhLnByaWNlX3R5cGUpO1xuICBuZXdEYXRhLmFwcGVuZCgncHJpY2UnLCBkYXRhLnByaWNlIHx8IDApO1xuICBuZXdEYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkYXRhLmRlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MucG9zdChST09UX1VSTCArICcvcHJvZHVjdCcsIG5ld0RhdGEsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB9IH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaChwdXNoKCcvJykpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBmZXRjaENhdGVnb3JpZXMgPSBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoUk9PVF9VUkwgKyAnL2NhdGVnb3J5JykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FURUdPUklFU19TVUNDRVNTLCBjYXQ6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgZmV0Y2hQcm9kdWN0cyA9IGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gIHZhciBjYXRJZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVUNUX1NVQ0NFU1MsIHRlcm06IG51bGwsIGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICBpZiAoY2F0SWQgIT09IG51bGwpIHtcbiAgICAgIGF4aW9zLmdldChST09UX1VSTCArICcvY2F0ZWdvcnkvJyArIGNhdElkKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVQ1RfU1VDQ0VTUywgdGVybTogbnVsbCwgaXNMb2FkaW5nOiBmYWxzZSwgZGF0YTogcmVzcG9uc2UuZGF0YS5wcm9kdWN0cywgY3VycmVudENhdDogcmVzcG9uc2UuZGF0YS5jdXJyZW50Q2F0IH0pO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVDVF9GQUlMRUQsIHRlcm06IG51bGwsIGlzTG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvci5yZXNwb25zZS5tc2cgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MuZ2V0KFJPT1RfVVJMICsgJy9wcm9kdWN0JykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVUNUX1NVQ0NFU1MsIGlzTG9hZGluZzogZmFsc2UsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVUNUX0ZBSUxFRCwgaXNMb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yLnJlc3BvbnNlLm1zZyB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgc2VhcmNoUHJvZHVjdCA9IGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3QodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KFJPT1RfVVJMICsgJy9wcm9kdWN0L3NlYXJjaD90ZXJtPScgKyB0ZXJtKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRUFSQ0gsIGRhdGE6IHJlc3BvbnNlLmRhdGEsIHRlcm06IHRlcm0gfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFQVJDSCwgdGVybTogbnVsbCB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

};