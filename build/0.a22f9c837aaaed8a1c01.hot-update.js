exports.id = 0;
exports.modules = {

/***/ "./src/reducers/adminAdsReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__ = __webpack_require__(\"./src/actions/actionTypes.js\");\n\n\n\nvar initialState = { data: null };\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"a\" /* FETCH_ADMIN_ADS_SUCCESS */]:\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, { data: action.data });\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"c\" /* DELETE_ADMIN_PRODUCT_SUCCESS */]:\n      return state.data.filter(function (product) {\n        return product.id !== action.id;\n      });\n    case __WEBPACK_IMPORTED_MODULE_1__actions_actionTypes__[\"d\" /* VERIFY_ADMIN_PRODUCT_SUCCESS */]:\n      var newState = state.data.map(function (data) {\n        if (data.id !== action.id) {\n          return data;\n        }\n        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data, {\n          verified: 1\n        });\n      });\n      console.log(newState);\n    default:\n      return state;\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvYWRtaW5BZHNSZWR1Y2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FkbWluQWRzUmVkdWNlci5qcz84OGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfT2JqZWN0JGFzc2lnbiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbic7XG5pbXBvcnQgeyBGRVRDSF9BRE1JTl9BRFNfU1VDQ0VTUywgRkVUQ0hfQURNSU5fQURTX0ZBSUxFRCwgREVMRVRFX0FETUlOX1BST0RVQ1RfU1VDQ0VTUywgVkVSSUZZX0FETUlOX1BST0RVQ1RfU1VDQ0VTUyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG52YXIgaW5pdGlhbFN0YXRlID0geyBkYXRhOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0FETUlOX0FEU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIF9PYmplY3QkYXNzaWduKHt9LCBzdGF0ZSwgeyBkYXRhOiBhY3Rpb24uZGF0YSB9KTtcbiAgICBjYXNlIERFTEVURV9BRE1JTl9QUk9EVUNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gc3RhdGUuZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgIT09IGFjdGlvbi5pZDtcbiAgICAgIH0pO1xuICAgIGNhc2UgVkVSSUZZX0FETUlOX1BST0RVQ1RfU1VDQ0VTUzpcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX09iamVjdCRhc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgICAgICB2ZXJpZmllZDogMVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cobmV3U3RhdGUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlZHVjZXJzL2FkbWluQWRzUmVkdWNlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvcmVkdWNlcnMvYWRtaW5BZHNSZWR1Y2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

};