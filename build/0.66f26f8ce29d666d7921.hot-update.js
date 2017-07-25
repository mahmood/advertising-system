exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(\"./src/App.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qs__ = __webpack_require__(23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_qs__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serialize_javascript__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_serialize_javascript__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_configStore__ = __webpack_require__(\"./src/store/configStore.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_universal_cookie__ = __webpack_require__(20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_universal_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_universal_cookie__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_helmet__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_helmet__);\nvar _jsxFileName = '/Users/imahmoodz/Projects/personal/divar/src/server.js';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar assets = __webpack_require__(\"./build/assets.json\");\nvar server = __WEBPACK_IMPORTED_MODULE_3_express___default()();\nserver.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static(\"/Users/imahmoodz/Projects/personal/divar/public\")).get('/*', function (req, res) {\n  var context = {};\n  // Read the counter from the request, if provided\n  var params = __WEBPACK_IMPORTED_MODULE_6_qs___default.a.parse(req.query);\n  var cookies = new __WEBPACK_IMPORTED_MODULE_10_universal_cookie___default.a(req.headers.cookie || {});\n  var loggedIn = cookies.get('jwt') ? true : false;\n  var auth = { loggedIn: loggedIn, error: null, data: cookies.get('data') };\n  // Compile an initial state\n  var preloadedState = { auth: auth };\n  // Create a new Redux store instance\n  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__store_configStore__[\"a\" /* default */])(preloadedState);\n\n  var markup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_dom_server__[\"renderToString\"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n    __WEBPACK_IMPORTED_MODULE_0_react_router_dom__[\"StaticRouter\"],\n    { context: context, location: req.url, __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33\n      }\n    },\n    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_7_react_redux__[\"Provider\"],\n      { store: store, __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34\n        }\n      },\n      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App__[\"a\" /* default */], {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35\n        }\n      })\n    )\n  ));\n  var helmet = __WEBPACK_IMPORTED_MODULE_11_react_helmet__[\"Helmet\"].renderStatic();\n\n  // Grab the initial state from our Redux store\n  var finalState = store.getState();\n\n  if (context.url) {\n    res.redirect(context.url);\n  } else {\n    res.status(200).send('<!doctype html>\\n          <html lang=\"\">\\n          <head>\\n              <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\\n              <meta charSet=\\'utf-8\\' />\\n              ' + helmet.title.toString() + '\\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n              ' + (assets.client.css ? '<link rel=\"stylesheet\" href=\"' + assets.client.css + '\">' : '') + '\\n              <script src=\"' + assets.client.js + '\" defer></script>\\n          </head>\\n          <body>\\n              <div id=\"root\">' + markup + '</div>\\n          </body>\\n          <script>\\n            window.__PRELOADED_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_8_serialize_javascript___default()(finalState) + '\\n          </script>\\n      </html>');\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5qcz8zMGE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL2ltYWhtb29kei9Qcm9qZWN0cy9wZXJzb25hbC9kaXZhci9zcmMvc2VydmVyLmpzJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWdTdG9yZSc7XG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbnZhciBhc3NldHMgPSByZXF1aXJlKHByb2Nlc3MuZW52LlJBWlpMRV9BU1NFVFNfTUFOSUZFU1QpO1xudmFyIHNlcnZlciA9IGV4cHJlc3MoKTtcbnNlcnZlci5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKS51c2UoZXhwcmVzcy5zdGF0aWMocHJvY2Vzcy5lbnYuUkFaWkxFX1BVQkxJQ19ESVIpKS5nZXQoJy8qJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHZhciBjb250ZXh0ID0ge307XG4gIC8vIFJlYWQgdGhlIGNvdW50ZXIgZnJvbSB0aGUgcmVxdWVzdCwgaWYgcHJvdmlkZWRcbiAgdmFyIHBhcmFtcyA9IHFzLnBhcnNlKHJlcS5xdWVyeSk7XG4gIHZhciBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLmhlYWRlcnMuY29va2llIHx8IHt9KTtcbiAgdmFyIGxvZ2dlZEluID0gY29va2llcy5nZXQoJ2p3dCcpID8gdHJ1ZSA6IGZhbHNlO1xuICB2YXIgYXV0aCA9IHsgbG9nZ2VkSW46IGxvZ2dlZEluLCBlcnJvcjogbnVsbCwgZGF0YTogY29va2llcy5nZXQoJ2RhdGEnKSB9O1xuICAvLyBDb21waWxlIGFuIGluaXRpYWwgc3RhdGVcbiAgdmFyIHByZWxvYWRlZFN0YXRlID0geyBhdXRoOiBhdXRoIH07XG4gIC8vIENyZWF0ZSBhIG5ldyBSZWR1eCBzdG9yZSBpbnN0YW5jZVxuICB2YXIgc3RvcmUgPSBjb25maWdTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG5cbiAgdmFyIG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgU3RhdGljUm91dGVyLFxuICAgIHsgY29udGV4dDogY29udGV4dCwgbG9jYXRpb246IHJlcS51cmwsIF9fc291cmNlOiB7XG4gICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXI6IDMzXG4gICAgICB9XG4gICAgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUHJvdmlkZXIsXG4gICAgICB7IHN0b3JlOiBzdG9yZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDM0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge1xuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMzVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gICkpO1xuICB2YXIgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuXG4gIC8vIEdyYWIgdGhlIGluaXRpYWwgc3RhdGUgZnJvbSBvdXIgUmVkdXggc3RvcmVcbiAgdmFyIGZpbmFsU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gIGlmIChjb250ZXh0LnVybCkge1xuICAgIHJlcy5yZWRpcmVjdChjb250ZXh0LnVybCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJzwhZG9jdHlwZSBodG1sPlxcbiAgICAgICAgICA8aHRtbCBsYW5nPVwiXCI+XFxuICAgICAgICAgIDxoZWFkPlxcbiAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxcbiAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cXCd1dGYtOFxcJyAvPlxcbiAgICAgICAgICAgICAgJyArIGhlbG1ldC50aXRsZS50b1N0cmluZygpICsgJ1xcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XFxuICAgICAgICAgICAgICAnICsgKGFzc2V0cy5jbGllbnQuY3NzID8gJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJyArIGFzc2V0cy5jbGllbnQuY3NzICsgJ1wiPicgOiAnJykgKyAnXFxuICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIicgKyBhc3NldHMuY2xpZW50LmpzICsgJ1wiIGRlZmVyPjwvc2NyaXB0PlxcbiAgICAgICAgICA8L2hlYWQ+XFxuICAgICAgICAgIDxib2R5PlxcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4nICsgbWFya3VwICsgJzwvZGl2PlxcbiAgICAgICAgICA8L2JvZHk+XFxuICAgICAgICAgIDxzY3JpcHQ+XFxuICAgICAgICAgICAgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAnICsgc2VyaWFsaXplKGZpbmFsU3RhdGUpICsgJ1xcbiAgICAgICAgICA8L3NjcmlwdD5cXG4gICAgICA8L2h0bWw+Jyk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zZXJ2ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

};