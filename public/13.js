(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pikaday */ "./node_modules/pikaday/pikaday.js");
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pikaday__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HouseWithLatrines */ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue");
/* harmony import */ var _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LatrineTypesDistribution */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue");
/* harmony import */ var _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LatrineCharacteristics */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue");
/* harmony import */ var _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue");
/* harmony import */ var _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisitingsPerVillage */ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue");
/* harmony import */ var _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VisitingsPerContact */ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue");
/* harmony import */ var _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue");
/* harmony import */ var _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HouseholdVisiting */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue");


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
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],
    LatrineCharacteristicsTrend: _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_8__["default"],
    HouseWithLatrines: _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_5__["default"],
    LatrineCharacteristics: _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_7__["default"],
    VisitingPerContact: _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_10__["default"],
    VisitingPerVillage: _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_9__["default"],
    LatrineTypesDistribution: _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_6__["default"],
    HouseholdVisiting: _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_12__["default"],
    LatrineConstructionImprovementScoreCard: _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_11__["default"]
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
    },
    numberOfUReporters: {
      required: true
    },
    numberOfVillages: {
      required: true
    },
    numberOfVisitedHouseholds: {
      required: true
    },
    totalNumberOfHouseholds: {
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
      date: {
        start: '2019-12-01',
        stop: '2020-04-31'
      }
    };
  },
  watch: {
    selectedRegion: function selectedRegion(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringifyUrl({
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
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringifyUrl({
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
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringifyUrl({
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
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          period: value
        }
      }));
    }
  },
  mounted: function mounted() {
    new pikaday__WEBPACK_IMPORTED_MODULE_1___default.a({
      field: this.$refs.datepickerStart
    });
    new pikaday__WEBPACK_IMPORTED_MODULE_1___default.a({
      field: this.$refs.datepickerStop
    });
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
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/regions/".concat(region, "/districts"));

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
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/districts/".concat(district, "/villages"));

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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
      _c(
        "header",
        { staticClass: "flex mb-8 w-full justify-between border-b pb-8" },
        [
          _c("h1", { staticClass: "text-2xl font-semibold text-gray-600" }, [
            _vm._v("Latrine Construction and Improvement")
          ]),
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
                    _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
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
                              staticClass: "bg-white rounded-lg overflow-hidden"
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
                              d: "M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
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
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 bg-blue-600 rounded-lg shadow" }, [
        _c("div", { staticClass: "w-1/4" }, [
          _c("div", { staticClass: "px-3 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Number of U-Reporters")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm._f("toNumberFormat")(_vm.numberOfUReporters)) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/4" }, [
          _c("div", { staticClass: "px-3 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Number of villages")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm._f("toNumberFormat")(_vm.numberOfVillages)) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/4" }, [
          _c("div", { staticClass: "px-3 py-5" }, [
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
                    _vm._f("toNumberFormat")(_vm.numberOfVisitedHouseholds)
                  ) +
                  "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/4" }, [
          _c("div", { staticClass: "px-3 py-5" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-blue-200 text-xs uppercase tracking-wide font-semibold"
              },
              [_vm._v("Total Number Of Households")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-white text-5xl font-medium" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(
                    _vm._f("toNumberFormat")(_vm.totalNumberOfHouseholds)
                  ) +
                  "\n                    "
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c("div", { staticClass: "w-full px-6" }, [_c("HouseholdVisiting")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineTypesDistribution", { attrs: { area: _vm.area } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
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
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
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
      _c("div", { staticClass: "flex mb-8" }, [
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