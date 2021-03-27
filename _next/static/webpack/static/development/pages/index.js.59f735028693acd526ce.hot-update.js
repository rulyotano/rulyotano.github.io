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
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Language */ "./node_modules/@material-ui/icons/Language.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_icons_NpmIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/icons/NpmIcon */ "./src/components/icons/NpmIcon.tsx");
/* harmony import */ var settings_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! settings.json */ "./src/settings.json");
var settings_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! settings.json */ "./src/settings.json", 1);
/* harmony import */ var _icons_NugetIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/NugetIcon */ "./src/components/icons/NugetIcon.tsx");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\SidebarMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















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
  var _this = this;

  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var classes = useStyles();
  var projects = settings_json__WEBPACK_IMPORTED_MODULE_15__.projects;
  return __jsx("div", {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "div",
      id: "nested-list-subheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, "@", settings_json__WEBPACK_IMPORTED_MODULE_15__.companyName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Interesting Projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), projects.map(function (it) {
    return __jsx(ProjectMenuItem, {
      key: it.title,
      level: 1,
      title: it.title,
      github: it.github,
      web: it.web,
      npm: it.npm,
      nuget: it.nuget,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    });
  })));
}

function ProjectMenuItem(props) {
  var title = props.title,
      github = props.github,
      web = props.web,
      npm = props.npm,
      nuget = props.nuget;
  var classes = useStyles(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.menuItem,
    button: true,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), isOpen ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 38
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "in": isOpen,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    button: true,
    className: classes.menuSubItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, github ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: github,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }))) : null, web ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: web,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 18
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }))) : null, npm ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: npm,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 18
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(components_icons_NpmIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }))) : null, nuget ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: nuget,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 20
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_icons_NugetIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }))) : null))));
}

/***/ })

})
//# sourceMappingURL=index.js.59f735028693acd526ce.hot-update.js.map