(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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
      return "/api/house_with_latrine";
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
            color: '#DF5353' // red

          }, {
            from: (this.report.total * 0.333333).toFixed(1),
            to: (this.report.total * 0.666667).toFixed(1),
            color: '#DDDF0D' // yellow

          }, {
            from: (this.report.total * 0.666667).toFixed(1),
            to: this.report.total,
            color: '#55BF3B' // green

          }]
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Speed',
          data: [this.report.latrine_count],
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
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voca */ "./node_modules/voca/index.js");
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
  },
  data: function data() {
    return {
      houses: []
    };
  },
  computed: {
    areaName: function areaName() {
      return "".concat(this.area.name ? this.area.name : "All", " ").concat(this.area.type ? this.area.type : "Regions");
    }
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  methods: {
    titleCase: function titleCase(string) {
      return voca__WEBPACK_IMPORTED_MODULE_2___default.a.titleCase(string);
    },
    fetchReport: function fetchReport() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/latrine_construction_improvement"));

            case 2:
              response = _context.sent;
              this.houses = response.data;

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
        "mx-auto border-t-4 border-blue-400 shadow-lg overflow-hidden"
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
  return _c("div", { staticClass: "shadow-lg overflow-hidden" }, [
    _c("header", { staticClass: "px-6 bg-blue-100 py-4" }, [
      _c("h2", { staticClass: "text-lg mb-2" }, [
        _vm._v("Handwashing Practice Scorecard")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-sm text-gray-700" }, [
        _vm._v(
          "\n            " +
            _vm._s(_vm.areaName) +
            " - July 2019 to September 2019\n        "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "overflow-x-scroll", staticStyle: { height: "42rem" } },
      [
        _c("table", { staticClass: "whitespace-no-wrap" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.houses, function(house) {
              return _c("tr", { key: house.id }, [
                _c("td", { staticClass: "border-b text-left  py-4 px-4" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.titleCase(house.head_of_house)) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-left  py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_handwash_place),
                      "bg-red-200": !Math.round(house.has_handwash_place)
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(Math.round(house.has_handwash_place)) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_soap),
                      "bg-red-200": !Math.round(house.has_soap)
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(Math.round(house.has_soap)) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_handwash_container),
                      "bg-red-200": !Math.round(house.has_handwash_container)
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(Math.round(house.has_handwash_container)) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4 bg-yellow-200"
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          (
                            (house.has_handwash_place +
                              house.has_soap +
                              house.has_handwash_container) /
                            3
                          ).toFixed(2)
                        ) +
                        "\n                "
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"
          },
          [_vm._v("\n                    Head Of House\n                ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"
          },
          [_vm._v("\n                    Has handwash place\n                ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"
          },
          [_vm._v("\n                    Has soap\n                ")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"
          },
          [
            _vm._v(
              "\n                    Has handwash container\n                "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"
          },
          [
            _vm._v(
              "\n                    Hand washing practise average\n                "
            )
          ]
        )
      ])
    ])
  }
]
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
              {
                staticClass:
                  "text-xl uppercase tracking-wider font-normal text-blue-700"
              },
              [
                _vm._v(
                  "\n                    Handwashing Practice\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c("nav", { staticClass: "flex items-center" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectedRegion,
                      expression: "selectedRegion"
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
                      _vm.selectedRegion = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("Region...")]),
                  _vm._v(" "),
                  _vm._l(_vm.regions, function(region) {
                    return _c(
                      "option",
                      { key: region.id, domProps: { value: region.name } },
                      [_vm._v(_vm._s(region.name))]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.districts.length
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedDistrict,
                          expression: "selectedDistrict"
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
                          _vm.selectedDistrict = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("District...")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.districts, function(district) {
                        return _c(
                          "option",
                          {
                            key: district.name,
                            domProps: { value: district.name }
                          },
                          [_vm._v(_vm._s(district.name))]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.villages.length
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedVillage,
                          expression: "selectedVillage"
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
                          _vm.selectedVillage = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Village...")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.villages, function(village) {
                        return _c(
                          "option",
                          {
                            key: village.name,
                            domProps: { value: village.name }
                          },
                          [_vm._v(_vm._s(village.name))]
                        )
                      })
                    ],
                    2
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
                      value: _vm.selectedPeriod,
                      expression: "selectedPeriod"
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
                      _vm.selectedPeriod = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(Array(5).keys(), function(yearNumber) {
                  return _c(
                    "option",
                    {
                      key: new Date().getFullYear() - yearNumber,
                      domProps: { value: new Date().getFullYear() - yearNumber }
                    },
                    [_vm._v(_vm._s(new Date().getFullYear() - yearNumber))]
                  )
                }),
                0
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-16 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-1/2 px-6" },
          [_c("HandwashingHouses", { attrs: { area: _vm.area } })],
          1
        ),
        _vm._v(" "),
        _c("section", { staticClass: "w-1/2 px-6" })
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
          [_c("HandwashingScoreCard", { attrs: { area: _vm.area } })],
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