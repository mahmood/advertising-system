exports.id = 0;
exports.modules = {

/***/ "./src/actions/productActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProduct\", function() { return addProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCategories\", function() { return fetchCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(\"./src/actions/actionTypes.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);\nvar _this = this;\n\n\n\n\n\nvar ROOT_URL = 'http://localhost:3333/api/v1';\n\nvar addProduct = function addProduct(data) {\n  var newData = new FormData();\n  data.images.map(function (image, i) {\n    return newData.append('photo', data.images[i]);\n  });\n  newData.append('name', data.name);\n  newData.append('category', data.category);\n  newData.append('price_type', data.price_type);\n  newData.append('price', data.price || 0);\n  newData.append('description', data.description);\n\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(ROOT_URL + '/product', newData, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(function (response) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__[\"push\"])('/'));\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error.response);\n    });\n  };\n};\n\nvar fetchCategories = function fetchCategories() {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/category').then(function (response) {\n      console.log(response);\n      _this.setState({ cat: response.data.data });\n    });\n  };\n};\n\nvar fetchProducts = function fetchProducts() {\n  return function (dispatch) {\n    dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"e\" /* FETCH_PHOTO_SUCCESS */], isLoading: true });\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/product').then(function (response) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"e\" /* FETCH_PHOTO_SUCCESS */], isLoading: false, data: response.data });\n    }).catch(function (error) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"f\" /* FETCH_PHOTO_FAILED */], isLoading: false, error: error.response.msg });\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zLmpzPzM4ZjEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF90aGlzID0gdGhpcztcblxuaW1wb3J0IHsgQUREX1BST0RVQ1QsIEZFVENIX1BIT1RPX1NVQ0NFU1MsIEZFVENIX1BIT1RPX0ZBSUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHB1c2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG52YXIgUk9PVF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMzMzL2FwaS92MSc7XG5cbmV4cG9ydCB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uIGFkZFByb2R1Y3QoZGF0YSkge1xuICB2YXIgbmV3RGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBkYXRhLmltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlLCBpKSB7XG4gICAgcmV0dXJuIG5ld0RhdGEuYXBwZW5kKCdwaG90bycsIGRhdGEuaW1hZ2VzW2ldKTtcbiAgfSk7XG4gIG5ld0RhdGEuYXBwZW5kKCduYW1lJywgZGF0YS5uYW1lKTtcbiAgbmV3RGF0YS5hcHBlbmQoJ2NhdGVnb3J5JywgZGF0YS5jYXRlZ29yeSk7XG4gIG5ld0RhdGEuYXBwZW5kKCdwcmljZV90eXBlJywgZGF0YS5wcmljZV90eXBlKTtcbiAgbmV3RGF0YS5hcHBlbmQoJ3ByaWNlJywgZGF0YS5wcmljZSB8fCAwKTtcbiAgbmV3RGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZGF0YS5kZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGF4aW9zLnBvc3QoUk9PVF9VUkwgKyAnL3Byb2R1Y3QnLCBuZXdEYXRhLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfSB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2gocHVzaCgnLycpKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgZmV0Y2hDYXRlZ29yaWVzID0gZnVuY3Rpb24gZmV0Y2hDYXRlZ29yaWVzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KFJPT1RfVVJMICsgJy9jYXRlZ29yeScpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGNhdDogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBmZXRjaFByb2R1Y3RzID0gZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUEhPVE9fU1VDQ0VTUywgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgIGF4aW9zLmdldChST09UX1VSTCArICcvcHJvZHVjdCcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BIT1RPX1NVQ0NFU1MsIGlzTG9hZGluZzogZmFsc2UsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BIT1RPX0ZBSUxFRCwgaXNMb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yLnJlc3BvbnNlLm1zZyB9KTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

};