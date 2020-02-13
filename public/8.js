(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      period: "daily",
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
      isVisible: false,
      statistics: [],
      categories: []
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
        title: {
          text: 'Hand Washing Characteristics Trend',
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: "".concat(this.areaName, ": Jul 2019 - Sep 2019")
        },
        yAxis: {
          title: {
            text: 'Number of Households'
          }
        },
        xAxis: {
          categories: this.categories
        },
        series: this.statistics,
        credits: {
          enabled: false
        }
      };
    },
    areaName: function areaName() {
      return "".concat(this.area.name ? this.area.name : "All", " ").concat(this.area.type ? this.area.type : "Regions");
    }
  },
  methods: {
    toggle: function toggle() {
      this.isVisible = !this.isVisible;
    },
    getMonthName: function getMonthName(month) {
      return new Date(this.year, month, this.day).toLocaleString('default', {
        month: 'long'
      });
    },
    aggregateAttribute: function aggregateAttribute(response, type) {
      return response.data.map(function (item) {
        return item[type] == null ? 0 : item[type];
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/latrine_characteristics_trend', {
        params: {
          period: this.period,
          date: this.date
        }
      }).then(function (response) {
        if (_this.period === 'daily') {
          _this.categories = response.data.map(function (item) {
            return item['hour'];
          });
        }

        if (_this.period === 'monthly') {
          _this.categories = response.data.map(function (item) {
            return item['day'];
          });
        }

        if (_this.period === 'annually') {
          _this.categories = response.data.map(function (item) {
            return item['month'];
          });
        }

        _this.statistics = _this.transformResult(response);
      });
    },
    transformResult: function transformResult(response) {
      return [{
        name: "Hand wash place",
        data: this.aggregateAttribute(response, 'has_latrine')
      }, {
        name: "Hand wash container",
        data: this.aggregateAttribute(response, 'has_lockable_door')
      }, {
        name: "Soap",
        data: this.aggregateAttribute(response, 'has_brick_wall')
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "px-6 bg-blue-100 flex justify-between items-center" },
        [
          _c("div", { staticClass: "text-sm text-gray-600" }, [
            _c(
              "button",
              {
                staticClass: "px-2",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toggle($event)
                  }
                }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(!_vm.isVisible ? "Show" : "Hide") +
                    " Details\n            "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }, [
            _c("ul", { staticClass: "flex items-center mx-6" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass:
                      "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                    class: { "border-blue-500": _vm.period === "daily" },
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
                      "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                    class: { "border-blue-500": _vm.period === "monthly" },
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
                      "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                    class: { "border-blue-500": _vm.period === "annually" },
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
            ]),
            _vm._v(" "),
            _c("form", { staticClass: "flex items-center" }, [
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
                      staticClass: "bg-blue-100",
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
                      staticClass: "bg-blue-100",
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
                  staticClass: "bg-blue-100",
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
        { staticClass: "px-6 py-8", class: { "border-b": _vm.isVisible } },
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

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4& */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4&");
/* harmony import */ var _HandwashingStationCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HandwashingStationCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristicsTrend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue?vue&type=template&id=7f0c36e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristicsTrend_vue_vue_type_template_id_7f0c36e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);