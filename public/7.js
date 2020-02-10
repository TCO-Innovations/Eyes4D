(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    area: {
      required: true,
      type: Object
    },
    duration: {
      required: true
    }
  },
  data: function data() {
    return {
      isVisible: false,
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      date: new Date(),
      period: 'monthly',
      statistics: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  watch: {
    day: function day() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    },
    month: function month() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    },
    year: function year() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    },
    duration: function duration(value) {
      this.year = value;
      this.date = new Date(value, this.month, this.day);
      this.fetchReport();
    }
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Latrine Characteristics',
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: "".concat(this.areaName, ": Jul 2019 - Sep 2019")
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Household With Latrines'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
          pointFormat: '<span>{point.name}</span>: <b>{point.y}</b><br/>'
        },
        credits: {
          enabled: false
        },
        series: [{
          colorByPoint: true,
          data: this.statistics
        }]
      };
    },
    areaName: function areaName() {
      return "".concat(this.area.name ? this.area.name : "All", " ").concat(this.area.type ? this.area.type : "Regions");
    }
  },
  methods: {
    toggle: function toggle() {
      return this.isVisible = !this.isVisible;
    },
    getMonthName: function getMonthName(month) {
      return new Date(this.year, month, this.day).toLocaleString('default', {
        month: 'long'
      });
    },
    aggregateAttribute: function aggregateAttribute(response, name) {
      return response.data.map(function (item) {
        return item[name];
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    dailyReport: function dailyReport() {
      this.period = "daily";
      this.fetchReport();
    },
    monthlyReport: function monthlyReport() {
      this.period = "monthly";
      this.fetchReport();
    },
    annuallyReport: function annuallyReport() {
      this.period = "annually";
      this.fetchReport();
    },
    fetchReport: function fetchReport() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/latrine_characteristics', {
        params: {
          period: this.period,
          date: this.date
        }
      }).then(function (response) {
        _this.statistics = _this.transformResult(response);
      });
    },
    transformResult: function transformResult(response) {
      return [{
        name: "Has Latrine",
        y: this.aggregateAttribute(response, 'has_latrine')
      }, {
        name: "Lockable Door",
        y: this.aggregateAttribute(response, 'has_lockable_door')
      }, {
        name: "Brick Wall",
        y: this.aggregateAttribute(response, 'has_brick_wall')
      }, {
        name: "Cemented Floor",
        y: this.aggregateAttribute(response, 'has_cemented_floor')
      }, {
        name: "Iron Sheet Roof",
        y: this.aggregateAttribute(response, 'has_iron_sheet_roof')
      }, {
        name: "Adjacent bathroom",
        y: this.aggregateAttribute(response, 'has_adjacent_bathroom')
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
                  return _vm.toggle($event)
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
                        "border-blue-500 text-gray-700": _vm.period === "daily"
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.dailyReport($event)
                        }
                      }
                    },
                    [_vm._v("Daily")]
                  )
                ]),
                _vm._v(" "),
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
                          return _vm.monthlyReport($event)
                        }
                      }
                    },
                    [_vm._v("Monthly")]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass:
                        "px-3 py-5 inline-block border-b-2 border-transparent hover:border-blue-500",
                      class: {
                        "border-blue-500 text-gray-700":
                          _vm.period === "annually"
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.annuallyReport($event)
                        }
                      }
                    },
                    [_vm._v("Annually")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("form", { staticClass: "flex items-center flex-shrink-0" }, [
              _vm.period === "daily"
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.day,
                          expression: "day"
                        }
                      ],
                      staticClass:
                        "form-select form-select-sm border-0 bg-transparent w-16",
                      attrs: { id: "day" },
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
                          _vm.day = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(
                      new Date(_vm.year, _vm.month + 1, 0).getDate(),
                      function(dayNumber) {
                        return _c(
                          "option",
                          { domProps: { value: dayNumber } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(dayNumber) +
                                "\n                    "
                            )
                          ]
                        )
                      }
                    ),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.period === "daily" || _vm.period === "monthly"
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.month,
                          expression: "month"
                        }
                      ],
                      staticClass:
                        "form-select form-select-sm border-0 bg-transparent w-24",
                      attrs: { id: "month" },
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
                          _vm.month = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(Array(12).keys(), function(monthNumber) {
                      return _c(
                        "option",
                        { domProps: { value: monthNumber } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.getMonthName(monthNumber)) +
                              "\n                    "
                          )
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.year,
                      expression: "year"
                    }
                  ],
                  staticClass:
                    "form-select form-select-sm border-0 bg-transparent w-20",
                  attrs: { id: "year" },
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
                      _vm.year = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(Array(5).keys(), function(yearNumber) {
                  return _c(
                    "option",
                    { domProps: { value: _vm.year - yearNumber } },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.year - yearNumber) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "px-6 py-8" },
        [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
        1
      ),
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
                _vm._v(" Easy Washable Cemented Floor\n                    ")
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
                _vm._v(" Iron Sheet Roof\n                    ")
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
                _vm._v(" Adjacent Bathroom\n                    ")
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
                _vm._v(" Lockable Door\n                    ")
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
                _vm._v(" Wall With Bricks\n                    ")
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

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&");
/* harmony import */ var _LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineCharacteristics.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);