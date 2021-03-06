(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: function data() {
    return {
      visits: [],
      contacts: []
    };
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/household_visiting", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.visits = data.map(function (visit) {
                return _objectSpread({}, visit, {
                  isVisible: false
                });
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    fetchContacts: function fetchContacts(path) {
      var _ref2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchContacts$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(path));

            case 2:
              _ref2 = _context2.sent;
              data = _ref2.data;
              this.contacts = data;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    sortBy: function sortBy(field) {
      if (field in this.filters.sort) {
        this.filters.sort[field] = this.filters.sort[field] === 'desc' ? 'asc' : 'desc';
      } else {
        this.filters.sort = _defineProperty({}, field, 'desc');
      }
    },
    viewMore: function viewMore() {
      this.filters.limit = this.filters.limit + 5;
    },
    viewLess: function viewLess() {
      this.filters.limit = this.filters.limit - 5;
    },
    showContacts: function showContacts(visit) {
      var index = this.visits.findIndex(function (item) {
        return item.village === visit.village;
      });
      this.visits[index].isVisible = !this.visits[index].isVisible; //this.visits = this.visits.map(item => ({...item, isVisible: (item.village === visit.village)}));

      this.fetchContacts("api/villages/".concat(visit.village, "/contacts"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bg-white shadow rounded-lg overflow-hidden" },
    [
      _c(
        "header",
        { staticClass: "flex justify-between px-4 py-5 bg-gray-100" },
        [
          _c(
            "h3",
            {
              staticClass:
                "text-xs uppercase tracking-wide font-semibold text-gray-700"
            },
            [
              _vm.currentLanguage === "english"
                ? [_vm._v("Visiting Per Contact")]
                : _vm._e(),
              _vm._v(" "),
              _vm.currentLanguage === "kiswahili"
                ? [_vm._v("Utendaji kwa kila mawasiliano")]
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "overflow-y-auto" }, [
        _c(
          "table",
          { staticClass: "text-left w-full text-sm whitespace-no-wrap" },
          [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-left"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "inline-flex items-center",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sortBy("district")
                          }
                        }
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("District")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Wilaya")]
                          : _vm._e(),
                        _vm._v(" "),
                        "district" in _vm.filters.sort
                          ? [
                              _vm.filters.sort["district"] === "desc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.filters.sort["district"] === "asc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-left"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "inline-flex items-center",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sortBy("village")
                          }
                        }
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Village")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Kijiji")]
                          : _vm._e(),
                        _vm._v(" "),
                        "village" in _vm.filters.sort
                          ? [
                              _vm.filters.sort["village"] === "desc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.filters.sort["village"] === "asc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "inline-flex items-center",
                        attrs: { href: "#" }
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Number of U-Reporters")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Idadi ya U-Reporters")]
                          : _vm._e(),
                        _vm._v(" "),
                        "reporters" in _vm.filters.sort
                          ? [
                              _vm.filters.sort["reporters"] === "desc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.filters.sort["reporters"] === "asc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "inline-flex items-center",
                        attrs: { href: "#" }
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v(" Number of Households")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Idadi ya nyumba")]
                          : _vm._e(),
                        _vm._v(" "),
                        "houses" in _vm.filters.sort
                          ? [
                              _vm.filters.sort["houses"] === "desc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.filters.sort["houses"] === "asc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "inline-flex items-center",
                        attrs: { href: "#" }
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Visited Households")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Nyumba zilizotembelewa")]
                          : _vm._e(),
                        _vm._v(" "),
                        "visited_houses" in _vm.filters.sort
                          ? [
                              _vm.filters.sort["visited_houses"] === "desc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.filters.sort["visited_houses"] === "asc"
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right"
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Ratio")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Uwiano")]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.visits, function(visit) {
                  return [
                    _c(
                      "tr",
                      {
                        staticClass: "border-b last:border-0 cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.showContacts(visit)
                          }
                        }
                      },
                      [
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-left"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm._f("toTitleCase")(visit.district))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-left"
                          },
                          [_vm._v(_vm._s(_vm._f("toTitleCase")(visit.village)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-right"
                          },
                          [_vm._v(_vm._s(visit.reporters))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-right"
                          },
                          [
                            visit.total_household
                              ? [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(visit.total_household) +
                                      "\n                            "
                                  )
                                ]
                              : [
                                  _c("span", { staticClass: "text-gray-500" }, [
                                    _vm._v("NIL")
                                  ])
                                ]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-right"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(visit.visited_household) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "py-4 px-5 whitespace-no-wrap text-right"
                          },
                          [
                            visit.total_household && visit.visited_household
                              ? [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        (
                                          (visit.visited_household /
                                            visit.total_household) *
                                          100
                                        ).toFixed(2)
                                      ) +
                                      "%\n                            "
                                  )
                                ]
                              : [
                                  _c("span", { staticClass: "text-gray-500" }, [
                                    _vm._v("NIL")
                                  ])
                                ]
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    visit.isVisible
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "py-4 px-5 bg-gray-200",
                              attrs: { colspan: "6" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "py-4 px-4 shadow-sm bg-white rounded-lg"
                                },
                                [
                                  _c("table", { staticClass: "w-full" }, [
                                    _vm._m(0, true),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.contacts, function(contact) {
                                        return _c(
                                          "tr",
                                          { staticClass: "border-t" },
                                          [
                                            _c(
                                              "td",
                                              { staticClass: "py-3 px-4" },
                                              [
                                                _vm.$page.auth.user.permissions
                                                  .contacts_view
                                                  ? [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            _vm._f(
                                                              "toTitleCase"
                                                            )(
                                                              contact.contact_name
                                                            )
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-transparent bg-gray-300 rounded"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toTitleCase"
                                                              )(
                                                                contact.contact_name
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "py-3 px-4" },
                                              [
                                                _vm.$page.auth.user.permissions
                                                  .contacts_view
                                                  ? [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            contact.contact_phone
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-transparent bg-gray-300 rounded"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              contact.contact_phone
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "py-3 px-4" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("toTitleCase")(
                                                      contact.contact_gender
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass:
                                                  "py-3 px-4 text-right"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    contact.households_visited
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass:
                                                  "py-3 px-4 text-right"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    contact.last_household_visit
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ]
                })
              ],
              2
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "footer",
        {
          staticClass: "flex items-center justify-between px-6 py-4 bg-gray-100"
        },
        [
          _c(
            "button",
            {
              staticClass: "text-blue-500 text-sm",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.viewMore($event)
                }
              }
            },
            [
              _vm.currentLanguage === "english"
                ? [_vm._v("Load more")]
                : _vm._e(),
              _vm._v(" "),
              _vm.currentLanguage === "kiswahili"
                ? [_vm._v("Angalia zaidi")]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.filters.limit > 5
            ? _c(
                "button",
                {
                  staticClass: "text-blue-500 text-sm",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.viewLess($event)
                    }
                  }
                },
                [
                  _vm.currentLanguage === "english"
                    ? [_vm._v("Load less")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentLanguage === "kiswahili"
                    ? [_vm._v("Angalia kiasi")]
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "py-3 px-4" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-3 px-4" }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-3 px-4" }, [_vm._v("Gender")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-3 px-4 text-right" }, [_vm._v("Visits")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-3 px-4 text-right" }, [
          _vm._v("Last visit")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HouseholdVisiting.vue?vue&type=template&id=49b169a8& */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8&");
/* harmony import */ var _HouseholdVisiting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HouseholdVisiting.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HouseholdVisiting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseholdVisiting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HouseholdVisiting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseholdVisiting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HouseholdVisiting.vue?vue&type=template&id=49b169a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue?vue&type=template&id=49b169a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseholdVisiting_vue_vue_type_template_id_49b169a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);