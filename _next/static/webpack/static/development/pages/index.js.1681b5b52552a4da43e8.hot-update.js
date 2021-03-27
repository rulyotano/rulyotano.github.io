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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Description */ "./node_modules/@material-ui/icons/Description.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Language */ "./node_modules/@material-ui/icons/Language.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_icons_NpmIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/icons/NpmIcon */ "./src/components/icons/NpmIcon.tsx");
/* harmony import */ var components_icons_NugetIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/icons/NugetIcon */ "./src/components/icons/NugetIcon.tsx");
/* harmony import */ var settings_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! settings.json */ "./src/settings.json");
var settings_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! settings.json */ "./src/settings.json", 1);
/* harmony import */ var components_ExpandButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/ExpandButton */ "./src/components/ExpandButton.tsx");

var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\SidebarMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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
var menus = {
  projects: 'projects',
  articles: 'articles'
};
function ApplicationBar(_ref) {
  var _this = this;

  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var classes = useStyles();
  var projects = settings_json__WEBPACK_IMPORTED_MODULE_16__.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      opened = _useState[0],
      setOpened = _useState[1];

  var isMenuOpened = function isMenuOpened(menu) {
    return Boolean(opened[menu]);
  };

  var toggleMenu = function toggleMenu(menu) {
    return setOpened(_objectSpread({}, opened, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menu, !opened[menu])));
  };

  var projectsOpened = isMenuOpened(menus.projects);
  var articlesOpened = isMenuOpened(menus.articles);
  return __jsx("div", {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      component: "div",
      id: "nested-list-subheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "@", settings_json__WEBPACK_IMPORTED_MODULE_16__.companyName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    onClick: function onClick() {
      return toggleMenu(menus.projects);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "Interesting Projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(components_ExpandButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    expanded: projectsOpened,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "in": projectsOpened,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, projects.map(function (it) {
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
        lineNumber: 66,
        columnNumber: 31
      }
    });
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    button: true,
    onClick: function onClick() {
      return toggleMenu(menus.articles);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "Articles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(components_ExpandButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    expanded: articlesOpened,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "in": articlesOpened,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(ArticlesMenuItem, {
    level: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }))));
}

function ProjectMenuItem(props) {
  var title = props.title,
      github = props.github,
      web = props.web,
      npm = props.npm,
      nuget = props.nuget;
  var classes = useStyles(props);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.menuItem,
    button: true,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx(components_ExpandButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    expanded: isOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "in": isOpen,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.menuSubItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, github ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: github,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }))) : null, web ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: web,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 18
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }))) : null, npm ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: npm,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 18
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(components_icons_NpmIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }))) : null, nuget ? __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: nuget,
    color: "inherit",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 20
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx(components_icons_NugetIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }))) : null))));
}

function ArticlesMenuItem(props) {
  var classes = useStyles(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.menuItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: "Coming Soon...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.1681b5b52552a4da43e8.hot-update.js.map