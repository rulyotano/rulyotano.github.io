webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/DataItem.tsx":
/*!*************************************!*\
  !*** ./src/components/DataItem.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataItem; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _ExpandButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExpandButton */ "./src/components/ExpandButton.tsx");


var _jsxFileName = "/Users/raulotanohurtado/mines/mui-profile/src/components/DataItem.tsx",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













function DataItem(_ref) {
  var _this = this;

  var _ref$image = _ref.image,
      image = _ref$image === void 0 ? null : _ref$image,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$place = _ref.place,
      place = _ref$place === void 0 ? "" : _ref$place,
      _ref$timePeriod = _ref.timePeriod,
      timePeriod = _ref$timePeriod === void 0 ? "" : _ref$timePeriod,
      _ref$placeUrl = _ref.placeUrl,
      placeUrl = _ref$placeUrl === void 0 ? "" : _ref$placeUrl,
      _ref$contentParagraph = _ref.contentParagraphs,
      contentParagraphs = _ref$contentParagraph === void 0 ? [] : _ref$contentParagraph;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isExpanded = _React$useState2[0],
      setIsExpanded = _React$useState2[1];

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "img",
    alt: title,
    height: "100",
    image: image,
    title: title,
    className: classes.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(Content, {
    classes: classes,
    title: title,
    place: place,
    timePeriod: timePeriod,
    placeUrl: placeUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx(Actions, {
    isExpanded: isExpanded,
    setIsExpanded: setIsExpanded,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    smUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(CustomDivider, {
    classes: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    display: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(Content, {
    classes: classes,
    title: title,
    place: place,
    timePeriod: timePeriod,
    placeUrl: placeUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "in": isExpanded,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(CustomDivider, {
    classes: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, contentParagraphs.map(function (it, index) {
    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.paragraph,
      component: "p",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 49
      }
    }, it);
  }))));
}

var CustomDivider = function CustomDivider(_ref2) {
  var classes = _ref2.classes;
  return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.mobileDivider,
    orientation: "horizontal",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 10
    }
  });
};

var Content = function Content(_ref3) {
  var classes = _ref3.classes,
      title = _ref3.title,
      place = _ref3.place,
      placeUrl = _ref3.placeUrl,
      timePeriod = _ref3.timePeriod;
  return __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.content,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    component: "h2",
    noWrap: true,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, title), __jsx(PlaceLink, {
    placeUrl: placeUrl,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    noWrap: true,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "@", place, " ", " ", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "i",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, timePeriod))));
};

var PlaceLink = function PlaceLink(_ref4) {
  var placeUrl = _ref4.placeUrl,
      children = _ref4.children;
  if (placeUrl) return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: placeUrl,
    color: "inherit",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 24
    }
  }, children);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children);
};

var Actions = function Actions(_ref5) {
  var isExpanded = _ref5.isExpanded,
      setIsExpanded = _ref5.setIsExpanded;
  return __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_ExpandButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    expanded: isExpanded,
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }));
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%"
    },
    content: {
      flexGrow: 1,
      overflow: "hidden"
    },
    mobileDivider: {
      width: "100%",
      marginBottom: theme.spacing(1)
    },
    image: {
      width: 150
    },
    paragraph: {
      textIndent: 2
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.81c3ee59168dca90fda8.hot-update.js.map