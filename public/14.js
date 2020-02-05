(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          text: 'House Without Latrines',
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
          data: [this.report.total - this.report.latrine_count],
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
    fetchReport: function () {
      var _fetchReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.path, {
                  params: this.parameters
                });

              case 2:
                response = _context.sent;
                this.report = response.data[0];

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchReport() {
        return _fetchReport.apply(this, arguments);
      }

      return fetchReport;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HouseWithLatrines */ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue");
/* harmony import */ var _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LatrineTypesDistribution */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue");
/* harmony import */ var _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LatrineCharacteristics */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue");
/* harmony import */ var _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue");
/* harmony import */ var _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VisitingsPerVillage */ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue");
/* harmony import */ var _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisitingsPerContact */ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue");
/* harmony import */ var _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue");
/* harmony import */ var _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HouseholdVisiting */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LatrineCharacteristicsTrend: _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_7__["default"],
    HouseWithLatrines: _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_4__["default"],
    LatrineCharacteristics: _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_6__["default"],
    VisitingPerContact: _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_9__["default"],
    VisitingPerVillage: _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_8__["default"],
    LatrineTypesDistribution: _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_5__["default"],
    HouseholdVisiting: _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_11__["default"],
    LatrineConstructionImprovementScoreCard: _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    regions: {
      required: true
    },
    totalHouseholds: {
      required: true
    },
    visitedHouseholds: {
      required: true
    },
    houseWithLatrine: {
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
    fetchDistricts: function () {
      var _fetchDistricts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(region) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/regions/".concat(region, "/districts"));

              case 2:
                response = _context.sent;
                this.districts = response.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchDistricts(_x) {
        return _fetchDistricts.apply(this, arguments);
      }

      return fetchDistricts;
    }(),
    fetchVillages: function () {
      var _fetchVillages = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(district) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/districts/".concat(district, "/villages"));

              case 2:
                response = _context2.sent;
                this.villages = response.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchVillages(_x2) {
        return _fetchVillages.apply(this, arguments);
      }

      return fetchVillages;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ "./node_modules/voca/index.js");
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      visits: [],
      limit: 5,
      order: 'desc'
    };
  },
  mounted: function mounted() {
    this.fetchResult();
  },
  methods: {
    titleCase: function titleCase(string) {
      return voca__WEBPACK_IMPORTED_MODULE_0___default.a.titleCase(string);
    },
    more: function more() {
      this.limit = this.limit + 5;
      this.fetchResult();
    },
    less: function less() {
      this.limit = this.limit - 5;
      this.fetchResult();
    },
    toggleDirection: function toggleDirection() {
      this.order = this.order === "desc" ? "asc" : "desc";
      this.fetchResult();
    },
    fetchResult: function fetchResult() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/visiting_per_village", {
        params: {
          take: this.limit,
          order: this.order
        }
      }).then(function (response) {
        _this.visits = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62& ***!
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
    { staticClass: "mx-auto bg-white rounded-lg shadow overflow-hidden" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170& ***!
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
            _c("h1", { staticClass: "text-2xl font-semibold text-gray-600" }, [
              _vm._v(
                "\n                    Latrine Construction and Improvement\n                "
              )
            ]),
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
                  staticClass:
                    "min-w-24 form-select form-select-sm border-0 bg-transparent",
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
                      staticClass:
                        "min-w-24 form-select form-select-sm border-0 bg-transparent",
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
                      staticClass:
                        "min-w-24 form-select form-select-sm border-0 bg-transparent",
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
                  staticClass:
                    "w-20 form-select form-select-sm border-0 bg-transparent",
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
      _c("div", { staticClass: "flex mb-16 bg-blue-600 rounded-lg shadow" }, [
        _c("div", { staticClass: "w-1/3 px-6" }, [
          _c("div", { staticClass: "px-6 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Total Household")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(
                    new Intl.NumberFormat("en-US").format(_vm.totalHouseholds)
                  ) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/3 px-6" }, [
          _c("div", { staticClass: "px-6 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Visited Household")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(
                    new Intl.NumberFormat("en-US").format(_vm.visitedHouseholds)
                  ) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/3 px-6" }, [
          _c("div", { staticClass: "px-6 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Houses With Latrine")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(
                    new Intl.NumberFormat("en-US").format(_vm.houseWithLatrine)
                  ) +
                  "\n                    "
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c("div", { staticClass: "w-full px-6" }, [_c("HouseholdVisiting")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-16 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-1/2 px-6" },
          [_c("HouseWithLatrines", { attrs: { area: _vm.area } })],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "w-1/2 px-6" },
          [_c("LatrineTypesDistribution", { attrs: { area: _vm.area } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [
            _c("LatrineCharacteristics", {
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
            _c("LatrineCharacteristicsTrend", {
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
            _c("LatrineConstructionImprovementScoreCard", {
              attrs: { area: _vm.area }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-white shadow-lg rounded-lg overflow-hidden" },
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
            [_vm._v("Visiting Per Village")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-xs" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toggleDirection($event)
                  }
                }
              },
              [_vm._v("Sort Order: " + _vm._s(_vm.titleCase(_vm.order)))]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "py-4 px-4" }, [
        _c("table", { staticClass: "w-full text-left" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.visits, function(visit) {
              return _c("tr", { staticClass: "border-b last:border-b-0" }, [
                _c("th", { staticClass: "text-sm py-3" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.titleCase(visit.village)) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-sm py-3" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.titleCase(visit.district)) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-sm py-3" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(visit.visits) +
                      "\n                "
                  )
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "footer",
        {
          staticClass:
            "px-4 flex py-4 justify-between text-xs uppercase text-blue-500 tracking-wider"
        },
        [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.more($event)
                }
              }
            },
            [_vm._v("View More")]
          ),
          _vm._v(" "),
          _vm.limit > 5
            ? _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.less($event)
                    }
                  }
                },
                [_vm._v("View Less")]
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
    return _c("tbody", [
      _c("tr", { staticClass: "border-b" }, [
        _c(
          "th",
          {
            staticClass:
              "text-xs uppercase tracking-wider font-light text-gray-600 py-4"
          },
          [_vm._v("Village")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "text-xs uppercase tracking-wider font-light text-gray-600 py-4"
          },
          [_vm._v("District")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "text-xs uppercase tracking-wider font-light text-gray-600 py-4"
          },
          [_vm._v("Visits")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HouseWithLatrines.vue?vue&type=template&id=48087c62& */ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62&");
/* harmony import */ var _HouseWithLatrines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HouseWithLatrines.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HouseWithLatrines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseWithLatrines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HouseWithLatrines.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseWithLatrines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HouseWithLatrines.vue?vue&type=template&id=48087c62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=template&id=48087c62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HouseWithLatrines_vue_vue_type_template_id_48087c62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c0134170& */ "./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c0134170& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/Index.vue?vue&type=template&id=c0134170&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c0134170___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitingsPerVillage.vue?vue&type=template&id=443f3401& */ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401&");
/* harmony import */ var _VisitingsPerVillage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitingsPerVillage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitingsPerVillage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerVillage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitingsPerVillage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerVillage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitingsPerVillage.vue?vue&type=template&id=443f3401& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue?vue&type=template&id=443f3401&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerVillage_vue_vue_type_template_id_443f3401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);