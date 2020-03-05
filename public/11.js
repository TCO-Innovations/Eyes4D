(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);


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
      apiEndPoint: "",
      report: {},
      period: 'monthly',
      date: new Date(),
      isVisible: false,
      selectedDate: new Date().getDate(),
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear()
    };
  },
  mounted: function mounted() {
    var query = Object.assign({
      period: this.period,
      date: this.date.toJSON().slice(0, 10)
    }, query_string__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.search));
    this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
      url: "".concat(window.location.origin, "/api/handwashing_characteristics"),
      query: query
    });
  },
  watch: {
    area: {
      deep: true,
      handler: function handler() {
        this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
          url: this.apiEndPoint,
          query: _defineProperty({}, this.area.type.toLowerCase(), this.area.name)
        });
      }
    },
    apiEndPoint: function apiEndPoint() {
      this.fetchReport();
    },
    selectedDate: function selectedDate(date) {
      this.date.setDate(date);
      this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: this.apiEndPoint,
        query: {
          date: this.date.toJSON().slice(0, 10)
        }
      });
    },
    selectedMonth: function selectedMonth(month) {
      this.date.setMonth(month);
      this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: this.apiEndPoint,
        query: {
          date: this.date.toJSON().slice(0, 10)
        }
      });
    },
    selectedYear: function selectedYear(year) {
      this.date.setFullYear(year);
      this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: this.apiEndPoint,
        query: {
          date: this.date.toJSON().slice(0, 10)
        }
      });
    },
    duration: function duration(year) {
      this.selectedYear = year;
      this.date.setFullYear(year);
      this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: this.apiEndPoint,
        query: {
          date: this.date.toJSON().slice(0, 10)
        }
      });
    }
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'column'
        },
        title: {
          text: this.title,
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
            text: this.yAxisTitle
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
          data: [{
            name: this.currentLanguage === 'english' ? 'Hand wash place' : 'Kuna sehemu yakuoshea mikono',
            y: this.report.has_handwash_place
          }, {
            name: this.currentLanguage === 'english' ? 'Hand wash container' : 'Kuna chombo chakuoshea mikono',
            y: this.report.has_handwash_container
          }, {
            name: this.currentLanguage === 'english' ? 'Has Soap' : 'Kuna sabuni',
            y: this.report.has_soap
          }]
        }]
      };
    },
    areaName: function areaName() {
      return "".concat(this.area.name ? this.area.name : "All", " ").concat(this.area.type ? this.area.type : "Regions");
    },
    title: function title() {
      return this.currentLanguage === 'english' ? 'Hand Washing Characteristics' : 'Tabia uoshaji mikono';
    },
    yAxisTitle: function yAxisTitle() {
      return this.currentLanguage === 'english' ? 'Household With Handwash Place' : 'Nyumba zenye sehemu yakuoshea mikono';
    }
  },
  methods: {
    getMonthName: function getMonthName(month) {
      return new Date(this.selectedYear, month, this.selectedDate).toLocaleString('default', {
        month: 'long'
      });
    },
    getReportBy: function getReportBy(period) {
      this.period = period;
      this.apiEndPoint = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: this.apiEndPoint,
        query: {
          period: period
        }
      });
    },
    fetchReport: function fetchReport() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.apiEndPoint));

            case 2:
              response = _context.sent;
              this.report = response.data[0];

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mx-auto bg-white shadow rounded-lg overflow-hidden" },
    [
      _c(
        "header",
        {
          staticClass:
            "px-6 bg-gray-100 border-b border-blue-100 flex justify-between items-center"
        },
        [
          _c("div", { staticClass: "text-sm text-gray-600" }, [
            _c(
              "button",
              {
                staticClass: "px-2",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.isVisible = !_vm.isVisible
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
                    class: { "border-blue-500": _vm.period === "monthly" },
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.getReportBy("monthly")
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
                        return _vm.getReportBy("annually")
                      }
                    }
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Annually")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Mwaka")]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("form", { staticClass: "flex items-center" }, [
              _vm.period === "daily" || _vm.period === "monthly"
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedMonth,
                          expression: "selectedMonth"
                        }
                      ],
                      staticClass: "bg-transparent",
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
                          _vm.selectedMonth = $event.target.multiple
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
                      value: _vm.selectedYear,
                      expression: "selectedYear"
                    }
                  ],
                  staticClass: "bg-transparent",
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
                      _vm.selectedYear = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(Array(5).keys(), function(yearNumber) {
                  return _c(
                    "option",
                    { domProps: { value: _vm.selectedYear - yearNumber } },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.selectedYear - yearNumber) +
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

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802& */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802&");
/* harmony import */ var _HandwashingStationCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandwashingStationCharacteristics.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HandwashingStationCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingStationCharacteristics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue?vue&type=template&id=2c8d5802&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingStationCharacteristics_vue_vue_type_template_id_2c8d5802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);