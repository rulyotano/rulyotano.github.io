webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@material-ui/icons/ExpandLess.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandLess.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

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
  }, __jsx(StarBorder, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Starred",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))))));
}

/***/ }),

/***/ "./src/settings.json":
/*!***************************!*\
  !*** ./src/settings.json ***!
  \***************************/
/*! exports provided: fullName, imageUrl, imageIconUrl, role, webSite, companyName, techStaff, experience, education, projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"fullName\":\"Raúl Otaño Hurtado\",\"imageUrl\":\"https://lh3.googleusercontent.com/pw/ACtC-3dSRq5XYgA45W4sFsiJ1UFBQl4t4fMUaN1u9PVADihUX2k-n-suB_M9lF9oF6BAHVa1BZYYQ2j2hGyJKwyYMhl1o5vPA7PoEG66l9Cai7eLZWd3tlcx48kjIW8pdeQaXaX8BceTB3uBgNavYQJqkjH8hw\",\"imageIconUrl\":\"/avatar-favicon-01.ico\",\"role\":\"Software Engineer\",\"webSite\":\"https://rulyotano.com\",\"companyName\":\"rulyotano\",\"techStaff\":[\"c#\",\"javascript\",\"typescript\",\"react\",\".net\",\"asp.net mvc\",\"redux\",\"flux\",\"SOLID\",\"clean code\",\"unit tests\"],\"experience\":[{\"title\":\"Back End Developer (.NET) at DocPlanner\",\"place\":\"DocPlanner\",\"placeUrl\":\"https://www.docplanner.com/about-us\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3eAdZYp96so-BMbxGty_qum7xEBApzC39b0q3MhLujo6_7-2acXmN-Uk9at4yzwacVdVFG99mM3D9BgZjqz0k0xP3Ytg_UR0lGkebzs-ATQaRJgEh9-EqC-v69EdVg8XzDAxqh5-StHFRKUioLIMRSGLw\",\"timePeriod\":\"2021/03 - actually\",\"contentParagraphs\":[]},{\"title\":\"Senior Software Developer\",\"place\":\"Mimacom\",\"placeUrl\":\"https://mimacom.com\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3eff4oY4kxz2EnFykM7JL1eeed-Cjak9NdJg2qLBMGX3k7DB2OiWxlw1abPi2zDfcu3Kn-RGS3z8mYMn0lwEq0rX62L5-cSjYHmulDJaS227hAJOSEM0scENJyUzz7UnYRnLETsw21dtC40RKiQ9LTpmw\",\"timePeriod\":\"2020/07 - 2021/03\",\"contentParagraphs\":[\"Worked as frontend ReactJs developer for a company's client, an international bank name Openbank. Worked there in one specific project created from scratch, created with good practices and patterns.\"]},{\"title\":\"Full Stack Developer\",\"place\":\"Consol Freight LLC\",\"placeUrl\":\"https://consolfreight.com\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3fTn39b_g3K6nCYsI4OkuEP_jBgkr4zLcOR_KATKLuwbZPk2YI0Irr1OBoDbRTbFCU6xt9PUMPnCNfpksJLMnD-Il5eFJ9Jd_0wAQy3Q37FEp1mUsdpgyZuGg2jR72V7ecUGSt9rq7l38AmqiZMHNnYGg\",\"timePeriod\":\"2018/04 - 2020/06\",\"contentParagraphs\":[\"Lead software developer for developing and maintaining the platform system. It was like a social network for moving maritime charges. The API system was made on ASP.NET MVC CORE with C# and with .NET tech in general. The front-end part was done using React.js tech.\"]},{\"title\":\"Web Developer\",\"place\":\"Solinftec\",\"placeUrl\":\"https://solinftec.com\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3fYfddxp5HeZPvTQErQTWmvnHr7UKkF89bvyxN-_Rr5uXsWxfuTjL0a7R6XL8bxGb5_juCAOL9FINT_FvVm4VZadd-9xXKofHgLJGa2iEerbR2rr2GjhINqtRK0NC7alkjErrL3HuFbLj0sqxrb3_YsiQ\",\"timePeriod\":\"2016/08 - 2018/08\",\"contentParagraphs\":[\"Lead frontend Software Develop for creating the online system for monitoring the agriculture pieces of equipment. Need to show maps with area and movements, tracking of measured parameters, data analysis, data charts, tables, etc. Done using AngularJs, and ReactJs. The part of the maps was done with GoogleMaps and Mapbox.\"]},{\"title\":\"Software Developer\",\"place\":\"Xmovo\",\"placeUrl\":\"https://www.linkedin.com/company/xmovo-group-inc/about\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3fsZOG5XlOxyiCcNlN3K5aqHjogvoTjxczWh3nXbWkR_KsUzN_bFALww8Y7kQZbqlnnQ3Gq1bLmIbbjdn_CjflLkiTPcCo8oA_aCgCSJyLjusKQh4zJ7HealXfmi9qkVe1R1zExBR4V5N5OM2Pj9TEmBQ\",\"timePeriod\":\"2014/09 - 2016/08\",\"contentParagraphs\":[\"Web Developer for creating Xmovo, a social network for training and fitness. Was developed using .NET technologies: Asp.NET MVC 5, C#, Angular JS, and then React JS, Signal-R, DDD, SOLID principles, and others.\"]},{\"title\":\"Lead Software Developer\",\"place\":\"Hayco\",\"placeUrl\":\"http://www.hayco.icrt.cu/\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3eQJriRcdCJkRizjvFIXeKjIIh-YQMBt_SiHeBfZL_GjvNprUeBsxlLcb1OQcIz0oEUHSV-Wm3lSxWFfHaRnzprzCXnbeSRS7egD1xwU3_kkoWLOhRLk4mJY3OczUKucsGi4BNMfkk-OB-d1V7NMN-zaw\",\"timePeriod\":\"2014/11 - 2015/12\",\"contentParagraphs\":[\"Develop and maintain all kind of software in the company. Mainly on .NET technologies.\"]}],\"education\":[{\"title\":\"Computer Science Bachelor of Science (BSc)\",\"place\":\"University of Havana\",\"placeUrl\":\"http://www.uh.cu\",\"image\":\"https://lh3.googleusercontent.com/pw/ACtC-3eU2fJDzygIqoFlfDqF1-MmM2MfyHQYMx6qnRv1hf07lbF-BtvJ-MTXdqMsJT7kdTQqur1wZYihHUJAhBYuI_zW67_tzJlUiVaXj_vhNiVYIIiVB75xL6ZyIDKorHn2_veH_77OG_wqDVP4Edwsq1Z71A\",\"timePeriod\":\"2007/09 - 2013/05\"}],\"projects\":[{\"title\":\"Rulyotano.Math\",\"github\":\"https://github.com/rulyotano/Rulyotano.Math\",\"nuget\":\"https://www.nuget.org/packages/Rulyotano.Math\"},{\"title\":\"tree-extended\",\"github\":\"https://github.com/rulyotano/tree-extended\",\"npm\":\"https://www.npmjs.com/package/tree-extended\"},{\"title\":\"Mines Sweeper\",\"github\":\"https://github.com/rulyotano/minesweeper\",\"web\":\"https://webminesweeper.azurewebsites.net/mines-sweeper\"},{\"title\":\"Mimacom Test\",\"github\":\"https://github.com/rulyotano/mimacom_react_task\",\"web\":\"https://mimacom-shop.azurewebsites.net/\"}]}");

/***/ })

})
//# sourceMappingURL=index.js.7170a838d5e31c7739f2.hot-update.js.map