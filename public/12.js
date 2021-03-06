(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
  data: function data() {
    return {
      isVisible: false,
      categories: [],
      isLoading: true
    };
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        title: {
          text: this.title,
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: this.subTitle
        },
        yAxis: {
          title: {
            text: this.yAxisTitle
          }
        },
        xAxis: {
          categories: this.categories
        },
        series: this.data,
        credits: {
          enabled: false
        }
      };
    },
    title: function title() {
      return this.currentLanguage === 'english' ? 'Latrine Type by Month of Reporting' : 'Repoti ya mwezi kwa aina za vyoo';
    },
    yAxisTitle: function yAxisTitle() {
      return this.currentLanguage === 'english' ? 'Number of Households' : 'Idadi ya nyumba';
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.isLoading = true;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/latrine_characteristics_trend', {
                params: this.filters
              }));

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              this.data = [{
                name: this.currentLanguage === 'english' ? 'Lockable Door' : 'Mlango unaofunga',
                data: data.map(function (house) {
                  if (house.has_lockable_door) {
                    return house.has_lockable_door;
                  } else {
                    return 0;
                  }
                })
              }, {
                name: this.currentLanguage === 'english' ? 'Brick Wall' : 'Ukuta wa tofari',
                data: data.map(function (house) {
                  if (house.has_brick_wall) {
                    return house.has_brick_wall;
                  } else {
                    return 0;
                  }
                })
              }, {
                name: this.currentLanguage === 'english' ? 'Cemented Floor' : 'Sakafu ya saruji',
                data: data.map(function (house) {
                  if (house.has_cemented_floor) {
                    return house.has_cemented_floor;
                  } else {
                    return 0;
                  }
                })
              }, {
                name: this.currentLanguage === 'english' ? 'Iron Sheet Roof' : 'Paa la bati',
                data: data.map(function (house) {
                  if (house.has_iron_sheet_roof) {
                    return house.has_iron_sheet_roof;
                  } else {
                    return 0;
                  }
                })
              }, {
                name: this.currentLanguage === 'english' ? 'Adjacent bathroom' : 'Bafu mkabala na choo',
                data: data.map(function (house) {
                  if (house.has_adjacent_bathroom) {
                    return house.has_adjacent_bathroom;
                  } else {
                    return 0;
                  }
                })
              }];
              this.categories = data.map(function (house) {
                return moment__WEBPACK_IMPORTED_MODULE_1___default()(house.benchmark_date).format('MMM YYYY');
              });
              this.isLoading = false;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto bg-white rounded-lg shadow overflow-hidden" },
    [
      _c(
        "header",
        {
          staticClass:
            "px-6 bg-gray-100 border-b border-gray-100 flex justify-between items-center"
        },
        [
          _c(
            "button",
            {
              staticClass:
                "px-2 inline-flex items-center text-sm font-semibold text-gray-600",
              on: {
                click: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(!_vm.isVisible ? "Show" : "Hide") +
                  " Details\n            "
              ),
              _vm.isVisible
                ? [
                    _c(
                      "svg",
                      {
                        staticClass: "h-4 w-4 fill-current ml-1 text-gray-500",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: { fill: "none", d: "M0 0h24v24H0z" }
                        }),
                        _c("path", {
                          attrs: {
                            d:
                              "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                          }
                        })
                      ]
                    )
                  ]
                : [
                    _c(
                      "svg",
                      {
                        staticClass: "h-4 w-4 fill-current ml-1 text-gray-500",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: { fill: "none", d: "M0 0h24v24H0z" }
                        }),
                        _c("path", {
                          attrs: {
                            d:
                              "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                          }
                        })
                      ]
                    )
                  ]
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }, [
            _c(
              "ul",
              {
                staticClass:
                  "flex items-center mx-6 text-xs uppercase tracking-wide font-semibold text-gray-600"
              },
              [
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass:
                        "px-3 py-5 inline-block border-b-2 border-transparent hover:border-blue-500",
                      class: {
                        "border-blue-500 text-gray-700":
                          _vm.period === "monthly"
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                        }
                      }
                    },
                    [
                      _vm.currentLanguage === "english"
                        ? [_vm._v("Monthly")]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentLanguage === "kiswahili"
                        ? [_vm._v("Mwezi")]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "div",
            {
              staticClass: "flex items-center justify-center",
              staticStyle: { height: "25rem" }
            },
            [_c("span", [_vm._v("Loading...")])]
          )
        : _c("div", [
            _c(
              "div",
              {
                staticClass: "px-6 py-8",
                class: { "border-b": _vm.isVisible }
              },
              [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
              1
            )
          ]),
      _vm._v(" "),
      _vm.isVisible
        ? _c("div", { staticClass: "px-6 py-6 bg-gray-100" }, [_vm._m(0)])
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "w-full" }, [
      _c("tbody", [
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-blue-500 mr-2"
                }),
                _vm._v(
                  " Easy Washable Cemented Floor\n                        "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-green-500 mr-2"
                }),
                _vm._v(" Iron Sheet Roof\n                        ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-yellow-500 mr-2"
                }),
                _vm._v(" Adjacent Bathroom\n                        ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-red-500 mr-2"
                }),
                _vm._v(" Lockable Door\n                        ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-purple-500 mr-2"
                }),
                _vm._v(" Wall With Bricks\n                        ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0&");
/* harmony import */ var _LatrineCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristicsTrend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue?vue&type=template&id=ec8ac3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristicsTrend_vue_vue_type_template_id_ec8ac3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);