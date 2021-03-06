(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_AppPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/AppPagination */ "./resources/js/Components/AppPagination.vue");
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

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
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
  components: {
    AppPagination: _Components_AppPagination__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      houses: [],
      links: []
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/latrine_construction_improvement", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.houses = data.data;
              this.links = data.links;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    toFormattedDate: function toFormattedDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("MMM DD, YYYY");
    },
    switchPage: function switchPage() {
      this.fetchReport();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "shadow bg-white rounded-lg overflow-hidden" }, [
      _c("header", { staticClass: "flex justify-between px-6 py-4" }, [
        _c("div", [
          _c(
            "h2",
            { staticClass: "text-lg mb-2" },
            [
              _vm.currentLanguage === "english"
                ? [_vm._v("Hand washing scorecard")]
                : _vm._e(),
              _vm._v(" "),
              _vm.currentLanguage === "kiswahili"
                ? [_vm._v("Alama katika unawaji mikono")]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-sm text-gray-700" }, [
            _vm._v(
              _vm._s(_vm.areaPresenter) + " - " + _vm._s(_vm.timePresenter)
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-col" }, [
          _c("div", { staticClass: "flex -mx-4" }, [
            _c(
              "span",
              { staticClass: "px-4 flex items-center text-sm text-gray-600" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-3 w-3 fill-current text-green-600 mr-2",
                    attrs: {
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: { width: "24", height: "24", rx: "4" }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm.currentLanguage === "english"
                  ? [_vm._v("Present")]
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentLanguage === "kiswahili" ? [_vm._v("Ipo")] : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "px-4 flex items-center text-sm text-gray-600" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-3 w-3 fill-current text-red-600 mr-2",
                    attrs: {
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("rect", {
                      attrs: { width: "24", height: "24", rx: "4" }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm.currentLanguage === "english"
                  ? [_vm._v("Absent")]
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentLanguage === "kiswahili"
                  ? [_vm._v("Haipo")]
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex items-start text-sm mt-3 text-gray-600" },
            [
              _c(
                "span",
                {
                  staticClass:
                    "inline-block text-center text-red-500 h-3 w-3 mr-2 text-base"
                },
                [_vm._v("*")]
              ),
              _vm._v(" "),
              _vm.currentLanguage === "english"
                ? [_vm._v("Observation has no impact on latrine type")]
                : _vm._e(),
              _vm._v(" "),
              _vm.currentLanguage === "kiswahili"
                ? [
                    _vm._v(
                      "Uangalizi usiokuwa na madhara kiutendaji wa sehemu ya kunawa"
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex justify-end px-6 py-4 border-b border-t bg-gray-100"
        },
        [
          _c(
            "a",
            {
              staticClass:
                "flex items-center text-sm text-gray-600 font-medium",
              attrs: {
                href: "/latrine-construction-improvement-scorecard-export"
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "h-4 w-4 fill-current text-gray-500 mr-2",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }
                },
                [
                  _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                  _c("path", {
                    attrs: {
                      d:
                        "M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"
                    }
                  })
                ]
              ),
              _vm._v("\n                Export as excel\n            ")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "overflow-x-scroll", staticStyle: { height: "42rem" } },
        [
          _c("table", { staticClass: "whitespace-no-wrap w-full" }, [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Head Of House")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Mkuu wa familia")]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Has handwash place",
                                  expression: "'Has handwash place'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Has handwash place")]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Kuna sehemu ya kunawa mikono",
                                  expression: "'Kuna sehemu ya kunawa mikono'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Kuna sehemu ya kunawa mikono")]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Has soap",
                                  expression: "'Has soap'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Has soap")]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Kuna sabuni",
                                  expression: "'Kuna sabuni'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Kuna sabuni")]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Has handwash container",
                                  expression: "'Has handwash container'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Has handwash container")]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Kuna chombo chakunawia",
                                  expression: "'Kuna chombo chakunawia'"
                                }
                              ],
                              staticClass: "inline-block w-32 truncate",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Kuna chombo chakunawia")]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.houses, function(house) {
                return _c("tr", { key: house.id }, [
                  _c("td", { staticClass: "border-b text-left  py-4 px-4" }, [
                    _vm._v(_vm._s(_vm._f("toTitleCase")(house.head_of_house)))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border text-left py-4 px-4 text-transparent w-32",
                      class: {
                        "bg-green-500": house.has_handwashing_place === "Yes",
                        "bg-red-500": house.has_handwashing_place === "No"
                      }
                    },
                    [_vm._v(_vm._s(Math.round(house.has_handwashing_place)))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border text-right py-4 px-4 text-transparent w-32",
                      class: {
                        "bg-green-500": house.has_soap === "Yes",
                        "bg-red-500": house.has_soap === "No"
                      }
                    },
                    [_vm._v(_vm._s(Math.round(house.has_soap)))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "border text-right py-4 px-4 text-transparent w-32",
                      class: {
                        "bg-green-500":
                          house.has_handwashing_container === "Yes",
                        "bg-red-500": house.has_handwashing_container === "No"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(Math.round(house.has_handwashing_container))
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex justify-between items-center" },
      [
        _c("div", { staticClass: "mt-6" }, [
          _c("label", { attrs: { for: "items_per_page" } }, [
            _vm._v("Items per page")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.perPage,
                  expression: "filters.perPage"
                }
              ],
              staticClass: "bg-transparent",
              attrs: { id: "items_per_page" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "perPage",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("AppPagination", {
          attrs: { links: _vm.links },
          on: { page: _vm.switchPage }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandwashingScoreCard.vue?vue&type=template&id=9512d712& */ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712&");
/* harmony import */ var _HandwashingScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandwashingScoreCard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HandwashingScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingScoreCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingScoreCard.vue?vue&type=template&id=9512d712& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue?vue&type=template&id=9512d712&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingScoreCard_vue_vue_type_template_id_9512d712___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);