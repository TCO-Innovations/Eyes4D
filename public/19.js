(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }
  },
  data: function data() {
    return {
      report: {}
    };
  },
  watch: {
    area: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    }
  },
  computed: {
    path: function path() {
      return "/api/handwashing_houses";
    },
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'gauge',
          plotBorderWidth: 0,
          plotShadow: false,
          plotBackgroundColor: null,
          plotBackgroundImage: null
        },
        title: {
          margin: 36,
          text: 'House Without Handwashing Place',
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: "".concat(this.areaName, " - Jan 2019 to Jun 2019")
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [{
            backgroundColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [[0, '#FFF'], [1, '#333']]
            },
            borderWidth: 0,
            outerRadius: '109%'
          }, {
            backgroundColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [[0, '#333'], [1, '#FFF']]
            },
            borderWidth: 1,
            outerRadius: '107%'
          }, {}, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },
        yAxis: {
          min: 0,
          max: this.report.total,
          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',
          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: ''
          },
          plotBands: [{
            from: 0,
            to: (this.report.total * 0.333333).toFixed(1),
            color: '#55BF3B' // green

          }, {
            from: (this.report.total * 0.333333).toFixed(1),
            to: (this.report.total * 0.666667).toFixed(1),
            color: '#DDDF0D' // yellow

          }, {
            from: (this.report.total * 0.666667).toFixed(1),
            to: this.report.total,
            color: '#DF5353' // red

          }]
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Speed',
          data: [this.report.total - this.report.sub_total],
          tooltip: {
            valueSuffix: 'Total'
          }
        }]
      };
    },
    areaName: function areaName() {
      return "".concat(this.area.name ? this.area.name : "All", " ").concat(this.area.type ? this.area.type : "Regions");
    },
    parameters: function parameters() {
      if (!this.area.type && !this.area.name) {
        return null;
      }

      return _defineProperty({}, this.area.type.toLowerCase(), this.area.name);
    }
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  methods: {
    fetchReport: function fetchReport() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.path, {
                params: this.parameters
              }));

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _HandwashingScoreCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HandwashingScoreCard */ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue");
/* harmony import */ var _HandwashingHouses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HandwashingHouses */ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue");
/* harmony import */ var _HandwashingStationCharacteristics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HandwashingStationCharacteristics */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue");
/* harmony import */ var _HandwashingStationCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HandwashingStationCharacteristicsTrend */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],
    HandwashingScoreCard: _HandwashingScoreCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    HandwashingHouses: _HandwashingHouses__WEBPACK_IMPORTED_MODULE_5__["default"],
    HandwashingStationCharacteristics: _HandwashingStationCharacteristics__WEBPACK_IMPORTED_MODULE_6__["default"],
    HandwashingStationCharacteristicsTrend: _HandwashingStationCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    regions: {
      required: true
    }
  },
  data: function data() {
    return {
      districts: [],
      villages: [],
      selectedDistrict: "",
      selectedRegion: "",
      selectedVillage: "",
      selectedPeriod: new Date().getFullYear(),
      area: {
        name: "",
        type: ""
      },
      period: {
        start: '2019-12-01',
        stop: '2020-04-31'
      },
      date: {
        start: '2019-12-01',
        stop: '2020-04-31'
      }
    };
  },
  watch: {
    selectedRegion: function selectedRegion(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          region: value
        }
      }));
      this.area = {
        name: value,
        type: "Region"
      };

      if (value) {
        this.fetchDistricts(value);
      } else {
        this.districts = [];
        this.selectedDistrict = "";
        this.villages = [];
        this.selectedVillage = "";
      }
    },
    selectedDistrict: function selectedDistrict(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          district: value
        }
      }));
      this.area = {
        name: value,
        type: "District"
      };

      if (value) {
        this.fetchVillages(value);
      } else {
        this.villages = [];
      }
    },
    selectedVillage: function selectedVillage(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          village: value
        }
      }));
      this.area = {
        name: value,
        type: "Village"
      };
    },
    selectedPeriod: function selectedPeriod(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          period: value
        }
      }));
    }
  },
  methods: {
    fetchDistricts: function fetchDistricts(region) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDistricts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/regions/".concat(region, "/districts")));

            case 2:
              response = _context.sent;
              this.districts = response.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    fetchVillages: function fetchVillages(district) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchVillages$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/districts/".concat(district, "/villages")));

            case 2:
              response = _context2.sent;
              this.villages = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524& ***!
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
    {
      staticClass:
        "bg-white mx-auto border-t-4 border-blue-400 shadow-lg overflow-hidden"
    },
    [
      _c(
        "div",
        { staticClass: "py-8 px-8" },
        [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("layout", [
    _c("div", { staticClass: "px-12" }, [
      _c("div", { staticClass: "flex mb-16" }, [
        _c(
          "header",
          { staticClass: "w-full flex justify-between border-b pb-8" },
          [
            _c(
              "h1",
              { staticClass: "text-2xl font-medium text-gray-700" },
              [
                _vm.currentLanguage === "english"
                  ? [_vm._v("Handwashing Practice")]
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentLanguage === "kiswahili"
                  ? [_vm._v("Mazingira yakunawaia")]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "nav",
              {
                staticClass:
                  "flex items-center bg-white shadow rounded-lg px-3 text-sm"
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.date.start,
                      expression: "date.start"
                    }
                  ],
                  ref: "datepickerStart",
                  staticClass:
                    "bg-transparent w-24 focus:outline-none focus:text-blue-500",
                  attrs: { type: "text", value: "Feb 20, 2020" },
                  domProps: { value: _vm.date.start },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.date, "start", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "px-2 inline-block" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "h-5 w-5 fill-current text-gray-600",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        attrs: { fill: "none", d: "M0 0h24v24H0z" }
                      }),
                      _c("path", { attrs: { d: "M5 11h14v2H5z" } })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.date.stop,
                      expression: "date.stop"
                    }
                  ],
                  ref: "datepickerStop",
                  staticClass:
                    "bg-transparent w-24 focus:outline-none focus:text-blue-500",
                  attrs: { type: "text", value: "Mar 24, 2020" },
                  domProps: { value: _vm.date.stop },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.date, "stop", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-popover",
                  {
                    attrs: { placement: "bottom-end", offset: "16" },
                    scopedSlots: _vm._u([
                      {
                        key: "popover",
                        fn: function() {
                          return [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white rounded-lg overflow-hidden"
                              },
                              [
                                _c("div", [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("Last 30 Days")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("This month")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("Last month")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("Last 3 months")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("Last 6 Months")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm border-b",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("Last year")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "block flex items-center justify-between px-4 py-3 text-sm",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "mr-3 font-medium text-blue-500"
                                        },
                                        [_vm._v("All time")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-gray-600" },
                                        [_vm._v("Dec 28 2019 - Jan 28 2020")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "border-l pl-3 py-1 text-gray-600 focus:outline-none focus:text-blue-500"
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "w-5 h-5 fill-current",
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
                                  "M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [
            _c("HandwashingStationCharacteristics", {
              attrs: { area: _vm.area, duration: _vm.selectedPeriod }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [
            _c("HandwashingStationCharacteristicsTrend", {
              attrs: { area: _vm.area, duration: _vm.selectedPeriod }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full" },
          [
            _c("HandwashingScoreCard", {
              attrs: { area: _vm.area, period: _vm.period }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandwashingHouses.vue?vue&type=template&id=b8492524& */ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524&");
/* harmony import */ var _HandwashingHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandwashingHouses.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HandwashingHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HandwashingPractice/HandwashingHouses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingHouses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HandwashingHouses.vue?vue&type=template&id=b8492524& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue?vue&type=template&id=b8492524&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HandwashingHouses_vue_vue_type_template_id_b8492524___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=a8a2a98e& */ "./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HandwashingPractice/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=a8a2a98e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HandwashingPractice/Index.vue?vue&type=template&id=a8a2a98e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_a8a2a98e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);