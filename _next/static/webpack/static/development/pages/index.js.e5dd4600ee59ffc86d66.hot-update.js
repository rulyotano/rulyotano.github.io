webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SectionItem.tsx":
/*!****************************************!*\
  !*** ./src/components/SectionItem.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionItem; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _ExpandButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandButton */ "./src/components/ExpandButton.tsx");

var _jsxFileName = "/Users/raulotanohurtado/mines/mui-profile/src/components/SectionItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function SectionItem(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$initiallyExpande = _ref.initiallyExpanded,
      initiallyExpanded = _ref$initiallyExpande === void 0 ? false : _ref$initiallyExpande,
      children = _ref.children;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initiallyExpanded),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var toggleExpanded = function toggleExpanded() {
    setExpanded(!expanded);
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "flex",
    justifyContent: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    variant: "h5",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, title), __jsx(_ExpandButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    expanded: expanded,
    onClick: toggleExpanded,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    m: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, children));
}
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    title: {
      marginLeft: theme.spacing(2)
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.e5dd4600ee59ffc86d66.hot-update.js.map