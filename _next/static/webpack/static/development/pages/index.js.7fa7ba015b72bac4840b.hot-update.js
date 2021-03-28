webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var components_Copyright__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Copyright */ "./src/components/Copyright.tsx");
/* harmony import */ var components_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Avatar */ "./src/components/Avatar.tsx");
/* harmony import */ var components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/ReferenceIcon */ "./src/components/ReferenceIcon.tsx");
/* harmony import */ var components_SectionItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/SectionItem */ "./src/components/SectionItem.tsx");
/* harmony import */ var components_StackOverflowItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/StackOverflowItem */ "./src/components/StackOverflowItem.tsx");
/* harmony import */ var components_icons_StackOverflowIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/icons/StackOverflowIcon */ "./src/components/icons/StackOverflowIcon.tsx");
/* harmony import */ var components_icons_HackerrankIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/icons/HackerrankIcon */ "./src/components/icons/HackerrankIcon.tsx");
/* harmony import */ var components_icons_CodesignalIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/icons/CodesignalIcon */ "./src/components/icons/CodesignalIcon.tsx");
/* harmony import */ var components_Appbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Appbar */ "./src/components/Appbar.tsx");
/* harmony import */ var components_DataItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/DataItem */ "./src/components/DataItem.tsx");
/* harmony import */ var settings_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! settings.json */ "./src/settings.json");
var settings_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! settings.json */ "./src/settings.json", 1);
/* harmony import */ var gravatar_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! gravatar.json */ "./src/gravatar.json");
var gravatar_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t(/*! gravatar.json */ "./src/gravatar.json", 1);

var _jsxFileName = "C:\\Personal\\mui-profile\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // import Skeleton from '@material-ui/lab/Skeleton';













function Index() {
  var _this = this;

  var name = settings_json__WEBPACK_IMPORTED_MODULE_22__.fullName;
  var imageSrc = settings_json__WEBPACK_IMPORTED_MODULE_22__.imageUrl;
  var role = settings_json__WEBPACK_IMPORTED_MODULE_22__.role;

  var _gravatar$entry = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gravatar_json__WEBPACK_IMPORTED_MODULE_23__.entry, 1),
      gravatarItem = _gravatar$entry[0];

  var profileImage = "".concat(gravatarItem.thumbnailUrl, "?s=160");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(components_Appbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(components_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    imgSrc: profileImage,
    imgAlt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    component: "h6",
    gutterBottom: true,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, role), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 2,
    paddingRight: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a,
    description: "@rulyotano",
    href: "https://github.com/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "Madrid, Spain",
    href: "https://en.wikipedia.org/wiki/Madrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default.a,
    description: "in/raulotanohurtado",
    href: "https://www.linkedin.com/in/raulotanohurtado/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: components_icons_StackOverflowIcon__WEBPACK_IMPORTED_MODULE_17__["default"],
    description: "stackoverflow/ra\xFAl-ota\xF1o",
    href: "https://stackoverflow.com/users/1655482/ra%c3%bal-ota%c3%b1o",
    expandContent: __jsx(components_StackOverflowItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 34
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: components_icons_HackerrankIcon__WEBPACK_IMPORTED_MODULE_18__["default"],
    description: "hackerrank/rulyotano",
    href: "https://www.hackerrank.com/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: components_icons_CodesignalIcon__WEBPACK_IMPORTED_MODULE_19__["default"],
    description: "codesignal/rulyotano",
    href: "https://app.codesignal.com/profile/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a,
    description: "contact@rulyotano.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_22__.experience.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: it.title,
      title: it.title,
      place: it.place,
      placeUrl: it.placeUrl,
      image: it.image,
      timePeriod: it.timePeriod,
      contentParagraphs: it.contentParagraphs,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    });
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_22__.education.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: it.title,
      title: it.title,
      place: it.place,
      placeUrl: it.placeUrl,
      image: it.image,
      timePeriod: it.timePeriod,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    });
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Tech staff",
    initiallyExpanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_22__.techStaff.map(function (staff) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      display: "inline-block",
      key: staff,
      m: 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: staff,
      onDelete: function onDelete() {},
      deleteIcon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 70
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }));
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }), __jsx(components_Copyright__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/icons/CodesignalIcon.tsx":
/*!*************************************************!*\
  !*** ./src/components/icons/CodesignalIcon.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodesignalIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Personal\\mui-profile\\src\\components\\icons\\CodesignalIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CodesignalIcon(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$useOriginalColor = _ref.useOriginalColor,
      useOriginalColor = _ref$useOriginalColor === void 0 ? false : _ref$useOriginalColor;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var color = useOriginalColor ? "#1d9dd8" : theme.palette.text.primary;
  var heightValue = height || theme.spacing(3);
  var widthValue = width || theme.spacing(3);
  return __jsx("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 768 768",
    width: widthValue,
    height: heightValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: color,
    d: "M0 0h768v768H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M85.8 158.1l229.1 41L384 471l69.1-272 229.1-41-41.6 64-142.7 20.5-17.9 57.7 92.2-10.2-30.7 50.6-76.2 7L384 609.9l-81.3-262.4-76.8-7-30.1-50.6 91.5 9.6-17.3-57.6-142.7-19.8-41.5-64z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.7fa7ba015b72bac4840b.hot-update.js.map