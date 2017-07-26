exports.id = 0;
exports.modules = {

/***/ "./src/components/Authentication.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);\n\n\n\n\n\n\nvar _jsxFileName = '/Users/imahmoodz/Projects/personal/divar/src/components/Authentication.js';\n\n\n\n\n// Authenticaton HOC\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (ComposedComponent, allowed) {\n  var Authentication = function (_Component) {\n    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Authentication, _Component);\n\n    function Authentication() {\n      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Authentication);\n\n      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Authentication.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Authentication)).apply(this, arguments));\n    }\n\n    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Authentication, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        if (!this.props.isLogged && !allowed == this.props.role) {\n          //Redirect to homepage\n          this.props.history.push('/');\n        }\n      }\n    }, {\n      key: 'componentWillUpdate',\n      value: function componentWillUpdate(nextProps) {\n        if (!nextProps.isLogged && !allowed == this.props.role) {\n          //Redirect to homapage\n          this.props.history.push('/');\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ComposedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21\n          }\n        }));\n      }\n    }]);\n\n    return Authentication;\n  }(__WEBPACK_IMPORTED_MODULE_6_react__[\"Component\"]);\n\n  var mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n      isLogged: state.auth.loggedIn,\n      role: state.auth.data.role\n    };\n  };\n  var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__[\"withRouter\"])(Authentication);\n  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__[\"connect\"])(mapStateToProps)(router);\n});;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uLmpzPzI4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvVXNlcnMvaW1haG1vb2R6L1Byb2plY3RzL3BlcnNvbmFsL2RpdmFyL3NyYy9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8vIEF1dGhlbnRpY2F0b24gSE9DXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoQ29tcG9zZWRDb21wb25lbnQsIGFsbG93ZWQpIHtcbiAgdmFyIEF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXV0aGVudGljYXRpb24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQXV0aGVudGljYXRpb24oKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0aGVudGljYXRpb24pO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dGhlbnRpY2F0aW9uLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKEF1dGhlbnRpY2F0aW9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF1dGhlbnRpY2F0aW9uLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc0xvZ2dlZCAmJiAhYWxsb3dlZCA9PSB0aGlzLnByb3BzLnJvbGUpIHtcbiAgICAgICAgICAvL1JlZGlyZWN0IHRvIGhvbWVwYWdlXG4gICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLmlzTG9nZ2VkICYmICFhbGxvd2VkID09IHRoaXMucHJvcHMucm9sZSkge1xuICAgICAgICAgIC8vUmVkaXJlY3QgdG8gaG9tYXBhZ2VcbiAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMjFcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXV0aGVudGljYXRpb247XG4gIH0oQ29tcG9uZW50KTtcblxuICB2YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvZ2dlZDogc3RhdGUuYXV0aC5sb2dnZWRJbixcbiAgICAgIHJvbGU6IHN0YXRlLmF1dGguZGF0YS5yb2xlXG4gICAgfTtcbiAgfTtcbiAgdmFyIHJvdXRlciA9IHdpdGhSb3V0ZXIoQXV0aGVudGljYXRpb24pO1xuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHJvdXRlcik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aGVudGljYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvQXV0aGVudGljYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

};