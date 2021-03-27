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

/***/ }),

/***/ "./src/components/icons/NpmIcon.tsx":
/*!******************************************!*\
  !*** ./src/components/icons/NpmIcon.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NpmIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\icons\\NpmIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function NpmIcon(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$useOriginalColor = _ref.useOriginalColor,
      useOriginalColor = _ref$useOriginalColor === void 0 ? false : _ref$useOriginalColor;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var color1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return useOriginalColor ? "#CB3837" : theme.palette.text.primary;
  }, [useOriginalColor]);
  var color2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return useOriginalColor ? "#FFFFFF" : theme.palette.getContrastText(theme.palette.text.primary);
  }, [useOriginalColor]);
  var heightValue = height || theme.spacing(3);
  var widthValue = width || theme.spacing(3);
  return __jsx("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: widthValue,
    height: heightValue,
    viewBox: "0 0 18 7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: color1,
    d: "M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("polygon", {
    fill: color2,
    points: "1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: color2,
    d: "M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("polygon", {
    fill: color2,
    points: "11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/icons/NugetIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/icons/NugetIcon.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NugetIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\icons\\NugetIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function NugetIcon(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$useOriginalColor = _ref.useOriginalColor,
      useOriginalColor = _ref$useOriginalColor === void 0 ? false : _ref$useOriginalColor;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var color = useOriginalColor ? "#004880" : theme.palette.text.primary;
  var heightValue = height || theme.spacing(3);
  var widthValue = width || theme.spacing(3);
  return __jsx("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: "0 0 512 512",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("polygon", {
    id: "path-1",
    points: "0 46.021103 0 3.7002935 84.6521577 3.7002935 84.6521577 88.3419125 0 88.3419125",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("g", {
    id: "Symbols",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("g", {
    id: "nuget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("g", {
    id: "Global/Logo",
    transform: "translate(0.000000, 6.000000)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M374.424959,454.856991 C327.675805,454.856991 289.772801,416.950177 289.772801,370.196324 C289.772801,323.463635 327.675805,285.535656 374.424959,285.535656 C421.174113,285.535656 459.077116,323.463635 459.077116,370.196324 C459.077116,416.950177 421.174113,454.856991 374.424959,454.856991 M205.565067,260.814741 C176.33891,260.814741 152.657469,237.109754 152.657469,207.901824 C152.657469,178.672728 176.33891,154.988907 205.565067,154.988907 C234.791225,154.988907 258.472666,178.672728 258.472666,207.901824 C258.472666,237.109754 234.791225,260.814741 205.565067,260.814741 M378.170817,95.6417786 L236.886365,95.6417786 C164.889705,95.6417786 106.479717,154.057639 106.479717,226.082702 L106.479717,367.360191 C106.479717,439.40642 164.889705,497.77995 236.886365,497.77995 L378.170817,497.77995 C450.209803,497.77995 508.577466,439.40642 508.577466,367.360191 L508.577466,226.082702 C508.577466,154.057639 450.209803,95.6417786 378.170817,95.6417786",
    id: "Fill-12",
    fill: color,
    "fill-rule": "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("mask", {
    id: "mask-2",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("use", {
    xlinkHref: "#path-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  })), __jsx("g", {
    id: "Clip-15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M84.6521577,46.0115787 C84.6521577,69.3990881 65.6900744,88.3419125 42.3260788,88.3419125 C18.9409203,88.3419125 0,69.3990881 0,46.0115787 C0,22.6452344 18.9409203,3.68124485 42.3260788,3.68124485 C65.6900744,3.68124485 84.6521577,22.6452344 84.6521577,46.0115787",
    id: "Fill-14",
    fill: color,
    "fill-rule": "evenodd",
    mask: "url(#mask-2)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.61701741ba66d4638cb6.hot-update.js.map