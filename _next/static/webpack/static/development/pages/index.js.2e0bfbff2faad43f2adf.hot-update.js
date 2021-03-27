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
/* harmony import */ var components_icons_StackOverflowIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/icons/StackOverflowIcon */ "./src/components/icons/StackOverflowIcon.tsx");
/* harmony import */ var components_icons_NugetIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/icons/NugetIcon */ "./src/components/icons/NugetIcon.tsx");
/* harmony import */ var components_Appbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Appbar */ "./src/components/Appbar.tsx");
/* harmony import */ var components_DataItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/DataItem */ "./src/components/DataItem.tsx");
/* harmony import */ var settings_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! settings.json */ "./src/settings.json");
var settings_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! settings.json */ "./src/settings.json", 1);
/* harmony import */ var gravatar_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gravatar.json */ "./src/gravatar.json");
var gravatar_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! gravatar.json */ "./src/gravatar.json", 1);

var _jsxFileName = "C:\\Personal\\mui-profile\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // import Skeleton from '@material-ui/lab/Skeleton';











function Index() {
  var _this = this;

  var name = settings_json__WEBPACK_IMPORTED_MODULE_20__.fullName;
  var imageSrc = settings_json__WEBPACK_IMPORTED_MODULE_20__.imageUrl;
  var role = settings_json__WEBPACK_IMPORTED_MODULE_20__.role;

  var _gravatar$entry = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gravatar_json__WEBPACK_IMPORTED_MODULE_21__.entry, 1),
      gravatarItem = _gravatar$entry[0];

  var profileImage = "".concat(gravatarItem.thumbnailUrl, "?s=160");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(components_Appbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(components_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    imgSrc: profileImage,
    imgAlt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
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
      lineNumber: 42,
      columnNumber: 11
    }
  }, role), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a,
    description: "@rulyotano",
    href: "https://github.com/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "Madrid, Spain",
    href: "https://en.wikipedia.org/wiki/Madrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default.a,
    description: "in/raulotanohurtado",
    href: "https://www.linkedin.com/in/raulotanohurtado/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: components_icons_StackOverflowIcon__WEBPACK_IMPORTED_MODULE_16__["default"],
    description: "stackoverflow/ra\xFAl-ota\xF1o",
    href: "https://stackoverflow.com/users/1655482/ra%c3%bal-ota%c3%b1o",
    expandContent: __jsx(components_icons_NugetIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 34
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a,
    description: "contact@rulyotano.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  })))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_20__.experience.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
        lineNumber: 97,
        columnNumber: 15
      }
    });
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_20__.education.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: it.title,
      title: it.title,
      place: it.place,
      placeUrl: it.placeUrl,
      image: it.image,
      timePeriod: it.timePeriod,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
    title: "Tech staff",
    initiallyExpanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_20__.techStaff.map(function (staff) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      display: "inline-block",
      key: staff,
      m: 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: staff,
      onDelete: function onDelete() {},
      deleteIcon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 70
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }));
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), __jsx(components_Copyright__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/StackOverflowItem.tsx":
false,

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
//# sourceMappingURL=index.js.2e0bfbff2faad43f2adf.hot-update.js.map