webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _src_components_Copyright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Copyright */ "./src/components/Copyright.tsx");
/* harmony import */ var _src_components_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Avatar */ "./src/components/Avatar.tsx");
/* harmony import */ var _src_components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/ReferenceIcon */ "./src/components/ReferenceIcon.tsx");
/* harmony import */ var _src_components_SectionItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/SectionItem */ "./src/components/SectionItem.tsx");
/* harmony import */ var _src_settings_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/settings.json */ "./src/settings.json");
var _src_settings_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/settings.json */ "./src/settings.json", 1);
var _jsxFileName = "/Users/raulotanohurtado/mines/mui-profile/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Index() {
  var _this = this;

  var name = _src_settings_json__WEBPACK_IMPORTED_MODULE_15__.fullName;
  var imageSrc = _src_settings_json__WEBPACK_IMPORTED_MODULE_15__.imageUrl;
  var role = _src_settings_json__WEBPACK_IMPORTED_MODULE_15__.role;
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    my: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_src_components_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    imgSrc: imageSrc,
    imgAlt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    m: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    component: "h6",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, role), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    m: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_src_components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_1___default.a,
    description: "@rulyotano",
    href: "https://github.com/rulyotano",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_src_components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_2___default.a,
    description: "Madrid, Spain",
    href: "https://en.wikipedia.org/wiki/Madrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_src_components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "in/raulotanohurtado",
    href: "https://www.linkedin.com/in/raulotanohurtado/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_src_components_ReferenceIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "in/raulotanohurtado",
    href: "https://www.linkedin.com/in/raulotanohurtado/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    m: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(StackoverflowItem, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    my: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_src_components_SectionItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_src_components_SectionItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animation: "wave",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(_src_components_SectionItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "Tech staff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, _src_settings_json__WEBPACK_IMPORTED_MODULE_15__.techStaff.map(function (staff) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
      display: "inline-block",
      key: staff,
      m: 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 44
      }
    }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: staff,
      onDelete: function onDelete() {},
      deleteIcon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 145
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 92
      }
    }));
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    my: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_src_components_Copyright__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/StackoverflowItem.tsx":
false

})
//# sourceMappingURL=index.js.df9f045f784683ff671a.hot-update.js.map