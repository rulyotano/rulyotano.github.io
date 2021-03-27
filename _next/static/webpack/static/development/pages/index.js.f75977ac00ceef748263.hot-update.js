webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Appbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Appbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.tsx");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\Appbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    menuButton: {
      marginRight: theme.spacing(2)
    }
  };
});
function ApplicationBar() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSidebarOpen = _useState[0],
      setIsSidebarOpen = _useState[1];

  var onSidebarClose = function onSidebarClose() {
    return setIsSidebarOpen(false);
  };

  var onSidebarOpen = function onSidebarOpen() {
    return setIsSidebarOpen(true);
  };

  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    color: "transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    onClick: onSidebarOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))), __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isSidebarOpen,
    onClose: onSidebarClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _SidebarMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarMenu */ "./src/components/SidebarMenu.tsx");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\Sidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {};
});
function ApplicationBar(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var classes = useStyles();
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    anchor: "left",
    open: isOpen,
    onClose: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_SidebarMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/SidebarMenu.tsx":
/*!****************************************!*\
  !*** ./src/components/SidebarMenu.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\SidebarMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {};
});
function ApplicationBar() {
  var _this = this;

  var classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      button: true,
      key: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      primary: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.f75977ac00ceef748263.hot-update.js.map