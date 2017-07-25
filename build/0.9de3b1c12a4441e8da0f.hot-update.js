exports.id = 0;
exports.modules = {

/***/ "./src/actions/adminAdsActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProduct\", function() { return deleteProduct; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(\"./src/actions/actionTypes.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n\n\n\nvar ROOT_URL = 'http://localhost:3333/api/v1';\n\nvar fetchProducts = function fetchProducts() {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(ROOT_URL + '/product').then(function (response) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"a\" /* FETCH_ADMIN_ADS_SUCCESS */], data: response.data });\n    }).catch(function (error) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"b\" /* FETCH_ADMIN_ADS_FAILED */] });\n    });\n  };\n};\n\nvar deleteProduct = function deleteProduct(id) {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.delete(ROOT_URL + '/delete/' + id, { origin: '*' }).then(function (response) {\n      dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__[\"c\" /* DELETE_ADMIN_PRODUCT_SUCCESS */], id: id });\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy9hZG1pbkFkc0FjdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9hZG1pbkFkc0FjdGlvbnMuanM/YjdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGRVRDSF9BRE1JTl9BRFNfU1VDQ0VTUywgRkVUQ0hfQURNSU5fQURTX0ZBSUxFRCwgREVMRVRFX0FETUlOX1BST0RVQ1RfU1VDQ0VTUyB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudmFyIFJPT1RfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hcGkvdjEnO1xuXG5leHBvcnQgdmFyIGZldGNoUHJvZHVjdHMgPSBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KFJPT1RfVVJMICsgJy9wcm9kdWN0JykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQURNSU5fQURTX1NVQ0NFU1MsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0FETUlOX0FEU19GQUlMRUQgfSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgdmFyIGRlbGV0ZVByb2R1Y3QgPSBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5kZWxldGUoUk9PVF9VUkwgKyAnL2RlbGV0ZS8nICsgaWQsIHsgb3JpZ2luOiAnKicgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX0FETUlOX1BST0RVQ1RfU1VDQ0VTUywgaWQ6IGlkIH0pO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2FkbWluQWRzQWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYWN0aW9ucy9hZG1pbkFkc0FjdGlvbnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

};