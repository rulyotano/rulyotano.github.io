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
/* harmony import */ var components_DataItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/DataItem */ "./src/components/DataItem.tsx");
/* harmony import */ var settings_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! settings.json */ "./src/settings.json");
var settings_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! settings.json */ "./src/settings.json", 1);
/* harmony import */ var gravatar_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! gravatar.json */ "./src/gravatar.json");
var gravatar_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! gravatar.json */ "./src/gravatar.json", 1);

var _jsxFileName = "C:\\Personal\\mui-profile\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // import Skeleton from '@material-ui/lab/Skeleton';










function Index() {
  var _this = this;

  var name = settings_json__WEBPACK_IMPORTED_MODULE_19__.fullName;
  var imageSrc = settings_json__WEBPACK_IMPORTED_MODULE_19__.imageUrl;
  var role = settings_json__WEBPACK_IMPORTED_MODULE_19__.role;

  var _gravatar$entry = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gravatar_json__WEBPACK_IMPORTED_MODULE_20__.entry, 1),
      gravatarItem = _gravatar$entry[0];

  var profileImage = "".concat(gravatarItem.thumbnailUrl, "?s=160");
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(components_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    imgSrc: profileImage,
    imgAlt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    component: "h6",
    gutterBottom: true,
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, role), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
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
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a,
    description: "@rulyotano",
    href: "https://github.com/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "Madrid, Spain",
    href: "https://en.wikipedia.org/wiki/Madrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default.a,
    description: "in/raulotanohurtado",
    href: "https://www.linkedin.com/in/raulotanohurtado/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: components_icons_StackOverflowIcon__WEBPACK_IMPORTED_MODULE_17__["default"],
    description: "stackoverflow/ra\xFAl-ota\xF1o",
    href: "https://stackoverflow.com/users/1655482/ra%c3%bal-ota%c3%b1o",
    expandContent: __jsx(components_StackOverflowItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 32
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a,
    description: "contact@rulyotano.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_19__.experience.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
        lineNumber: 94,
        columnNumber: 13
      }
    });
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_19__.education.map(function (it) {
    return __jsx(components_DataItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: it.title,
      title: it.title,
      place: it.place,
      placeUrl: it.placeUrl,
      image: it.image,
      timePeriod: it.timePeriod,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    });
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), __jsx(components_SectionItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Tech staff",
    initiallyExpanded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, settings_json__WEBPACK_IMPORTED_MODULE_19__.techStaff.map(function (staff) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
      display: "inline-block",
      key: staff,
      m: 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: staff,
      onDelete: function onDelete() {},
      deleteIcon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 67
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }));
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), __jsx(components_Copyright__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.e3b4987fcdd7845c6307.hot-update.js.map