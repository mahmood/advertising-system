exports.id = 0;
exports.modules = {

/***/ "./src/components/Authentication.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);\n\n\n\n\n\nvar _jsxFileName = '/Users/imahmoodz/Projects/personal/divar/src/components/Authentication.js';\n\n\n\n// Authenticaton HOC\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (composedComponent) {\n  var Authentication = function (_Component) {\n    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Authentication, _Component);\n\n    function Authentication() {\n      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Authentication);\n\n      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Authentication.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Authentication)).apply(this, arguments));\n    }\n\n    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Authentication, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        if (!this.props.isLogged) {\n          //Redirect to homepage\n          console.log('login nashodid!');\n        }\n      }\n    }, {\n      key: 'componentWillUpdate',\n      value: function componentWillUpdate(nextProps) {\n        if (!nextProps.isLogged) {\n          //Redirect to homapage\n          console.log('login nashodid!');\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        console.log('wraped', composedComponent);\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('composedComponent', {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22\n          }\n        });\n      }\n    }]);\n\n    return Authentication;\n  }(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n  var mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n      isLogged: state.auth.loggedIn\n    };\n  };\n\n  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux__[\"connect\"])(mapStateToProps)(Authentication);\n});;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uLmpzPzI4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9Vc2Vycy9pbWFobW9vZHovUHJvamVjdHMvcGVyc29uYWwvZGl2YXIvc3JjL2NvbXBvbmVudHMvQXV0aGVudGljYXRpb24uanMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIEF1dGhlbnRpY2F0b24gSE9DXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9zZWRDb21wb25lbnQpIHtcbiAgdmFyIEF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXV0aGVudGljYXRpb24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQXV0aGVudGljYXRpb24oKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0aGVudGljYXRpb24pO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dGhlbnRpY2F0aW9uLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKEF1dGhlbnRpY2F0aW9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF1dGhlbnRpY2F0aW9uLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc0xvZ2dlZCkge1xuICAgICAgICAgIC8vUmVkaXJlY3QgdG8gaG9tZXBhZ2VcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gbmFzaG9kaWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5pc0xvZ2dlZCkge1xuICAgICAgICAgIC8vUmVkaXJlY3QgdG8gaG9tYXBhZ2VcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gbmFzaG9kaWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dyYXBlZCcsIGNvbXBvc2VkQ29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2NvbXBvc2VkQ29tcG9uZW50Jywge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMjJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBdXRoZW50aWNhdGlvbjtcbiAgfShDb21wb25lbnQpO1xuXG4gIHZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9nZ2VkOiBzdGF0ZS5hdXRoLmxvZ2dlZEluXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEF1dGhlbnRpY2F0aW9uKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

};