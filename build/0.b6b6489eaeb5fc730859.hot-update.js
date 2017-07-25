exports.id = 0;
exports.modules = {

/***/ "./src/reducers/productReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(\"./src/actions/actionTypes.js\");\n\n\n\nvar initialState = {\n  data: null,\n  cat: null,\n  error: null\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"b\" /* FETCH_PRODUCT_SUCCESS */]:\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, {\n        isLoading: action.isLoading,\n        data: action.data,\n        currentCat: action.currentCat\n      });\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"a\" /* FETCH_CATEGORIES_SUCCESS */]:\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, {\n        cat: action.cat\n      });\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"d\" /* SEARCH */]:\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, {\n        data: action.data\n      });\n    default:\n      return state;\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIuanM/ZDA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX09iamVjdCRhc3NpZ24gZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nO1xuaW1wb3J0IHsgQUREX1BST0RVQ1QsIEZFVENIX1BST0RVQ1RfU1VDQ0VTUywgRkVUQ0hfUFJPRFVDVF9GQUlMRUQsIEZFVENIX0NBVEVHT1JJRVNfU1VDQ0VTUywgU0VBUkNIIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGE6IG51bGwsXG4gIGNhdDogbnVsbCxcbiAgZXJyb3I6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX1BST0RVQ1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBfT2JqZWN0JGFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24uaXNMb2FkaW5nLFxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgY3VycmVudENhdDogYWN0aW9uLmN1cnJlbnRDYXRcbiAgICAgIH0pO1xuICAgIGNhc2UgRkVUQ0hfQ0FURUdPUklFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIF9PYmplY3QkYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjYXQ6IGFjdGlvbi5jYXRcbiAgICAgIH0pO1xuICAgIGNhc2UgU0VBUkNIOlxuICAgICAgcmV0dXJuIF9PYmplY3QkYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVkdWNlcnMvcHJvZHVjdFJlZHVjZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3JlZHVjZXJzL3Byb2R1Y3RSZWR1Y2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

};