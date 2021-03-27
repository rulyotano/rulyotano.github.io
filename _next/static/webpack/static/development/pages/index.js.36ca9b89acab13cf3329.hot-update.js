webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\SidebarMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











// import WebIcon from '@material-ui/icons/Language';
// import WebIcon from '@material-ui/icons/Language';
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    list: {
      minWidth: 250
    },
    menuItem: {
      paddingLeft: function paddingLeft(props) {
        return theme.spacing(4 * props.level);
      }
    },
    menuSubItem: {
      paddingLeft: function paddingLeft(props) {
        return theme.spacing(8 * props.level);
      }
    }
  };
});
function ApplicationBar(_ref) {
  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "div",
      id: "nested-list-subheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, "@rulyotano"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Interesting Projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

function ProjectMenuItem(props) {
  var title = props.title;
  var classes = useStyles(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.menuItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), isOpen ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 38
    }
  }), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "in": isOpen,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    button: true,
    className: classes.menuSubItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Starred",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.36ca9b89acab13cf3329.hot-update.js.map