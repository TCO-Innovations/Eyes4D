(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var _Components_DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/DatePicker */ "./resources/js/Components/DatePicker.vue");
/* harmony import */ var _Components_CustomDateItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/CustomDateItem */ "./resources/js/Components/CustomDateItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    period: {
      required: true,
      type: Object
    }
  },
  components: {
    DatePicker: _Components_DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomDateItem: _Components_CustomDateItem__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      periodRange: this.period,
      customDateItems: [{
        title: 'Last 30 Days',
        name: 'last30Days'
      }, {
        title: 'This month',
        name: 'thisMonth'
      }, {
        title: 'Last month',
        name: 'lastMonth'
      }, {
        title: 'Last 3 months',
        name: 'last3Months'
      }, {
        title: 'Last 6 Months',
        name: 'last6Months'
      }, {
        title: 'Last year',
        name: 'lastYear'
      }, {
        title: 'All time',
        name: 'allTime'
      }]
    };
  },
  mounted: function mounted() {
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("filter:period", this.periodRange);
  },
  watch: {
    period: {
      deep: true,
      handler: function handler() {
        _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("filter:period", this.periodRange);
      }
    }
  },
  methods: {
    appendStart: function appendStart(date) {
      this.periodRange.start = date;
    },
    appendStop: function appendStop(date) {
      this.periodRange.stop = date;
    }
  }
});

/***/ }),

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
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isVisible: false,
      isLoading: true
    };
  },
  computed: {
    title: function title() {
      return this.currentLanguage === 'english' ? 'Hand Washing Characteristics' : 'Tabia uoshaji mikono';
    },
    yAxisTitle: function yAxisTitle() {
      return this.currentLanguage === 'english' ? 'Household With Handwash Place' : 'Nyumba zenye sehemu yakuoshea mikono';
    },
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
          text: this.subTitle
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
          data: this.data
        }]
      };
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/handwashing_characteristics", {
                params: this.filters
              }));

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              this.data = [{
                name: this.currentLanguage === 'english' ? 'handwashing place' : 'Sehemu ya kunawia',
                y: data.filter(function (item) {
                  return item.has_handwashing_place === 'Yes';
                }).length,
                color: '#48BB78'
              }, {
                name: this.currentLanguage === 'english' ? 'handwashing container' : 'Chombo cha kunawia',
                y: data.filter(function (item) {
                  return item.has_handwashing_container === 'Yes';
                }).length,
                color: '#4299E1'
              }, {
                name: this.currentLanguage === 'english' ? 'has soap' : 'Kuna sabuni',
                y: data.filter(function (item) {
                  return item.has_soap === 'Yes';
                }).length,
                color: '#ED64A6'
              }];
              this.isLoading = false;

            case 7:
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
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Components_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/DateRangePicker */ "./resources/js/Components/DateRangePicker.vue");
/* harmony import */ var _HandwashingScoreCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HandwashingScoreCard */ "./resources/js/Pages/HandwashingPractice/HandwashingScoreCard.vue");
/* harmony import */ var _LatrineConstruction_NumberOfUReporters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LatrineConstruction/NumberOfUReporters */ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue");
/* harmony import */ var _LatrineConstruction_NumberOfVillages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LatrineConstruction//NumberOfVillages */ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue");
/* harmony import */ var _LatrineConstruction_VisitedHousehold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LatrineConstruction/VisitedHousehold */ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue");
/* harmony import */ var _LatrineConstruction_TotalNumberOfHouseholds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LatrineConstruction/TotalNumberOfHouseholds */ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue");
/* harmony import */ var _HandwashingHouses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HandwashingHouses */ "./resources/js/Pages/HandwashingPractice/HandwashingHouses.vue");
/* harmony import */ var _HandwashingStationCharacteristics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HandwashingStationCharacteristics */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristics.vue");
/* harmony import */ var _HandwashingStationCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HandwashingStationCharacteristicsTrend */ "./resources/js/Pages/HandwashingPractice/HandwashingStationCharacteristicsTrend.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppLayout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],
    NumberOfUReporters: _LatrineConstruction_NumberOfUReporters__WEBPACK_IMPORTED_MODULE_6__["default"],
    NumberOfVillages: _LatrineConstruction_NumberOfVillages__WEBPACK_IMPORTED_MODULE_7__["default"],
    VisitedHousehold: _LatrineConstruction_VisitedHousehold__WEBPACK_IMPORTED_MODULE_8__["default"],
    TotalNumberOfHouseholds: _LatrineConstruction_TotalNumberOfHouseholds__WEBPACK_IMPORTED_MODULE_9__["default"],
    DateRangePicker: _Components_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    HandwashingScoreCard: _HandwashingScoreCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    HandwashingHouses: _HandwashingHouses__WEBPACK_IMPORTED_MODULE_10__["default"],
    HandwashingStationCharacteristics: _HandwashingStationCharacteristics__WEBPACK_IMPORTED_MODULE_11__["default"],
    HandwashingStationCharacteristicsTrend: _HandwashingStationCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_12__["default"]
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
        stop: '2020-04-30'
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
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
      total: null
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/number_of_reporters", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.total = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
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
      total: null
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/number_of_villages", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.total = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
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
      total: null
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/total_number_of_households", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.total = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");

//
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
      total: null
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/visited_household", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.total = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c(
      "nav",
      {
        staticClass:
          "flex items-center bg-white shadow rounded-lg px-3 text-sm py-1"
      },
      [
        _c(
          "div",
          { staticClass: "flex items-center justify-between" },
          [
            _c("DatePicker", {
              staticClass:
                "bg-transparent w-24 focus:outline-none focus:text-blue-500 text-center",
              attrs: { placeholder: "From.." },
              model: {
                value: _vm.period.start,
                callback: function($$v) {
                  _vm.$set(_vm.period, "start", $$v)
                },
                expression: "period.start"
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
            _c("DatePicker", {
              staticClass:
                "bg-transparent w-24 focus:outline-none focus:text-blue-500 text-center",
              attrs: { placeholder: "To.." },
              model: {
                value: _vm.period.stop,
                callback: function($$v) {
                  _vm.$set(_vm.period, "stop", $$v)
                },
                expression: "period.stop"
              }
            })
          ],
          1
        ),
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
                      { staticClass: "bg-white rounded-lg overflow-hidden" },
                      _vm._l(_vm.customDateItems, function(customDateItem) {
                        return _c("CustomDateItem", {
                          key: customDateItem.name,
                          attrs: {
                            dateItem: customDateItem,
                            period: _vm.period
                          },
                          on: { stop: _vm.appendStop, start: _vm.appendStart }
                        })
                      }),
                      1
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
                  "border-l pl-3 ml-3 py-1 text-gray-600 focus:outline-none focus:text-blue-500"
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
                    _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



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
            ])
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
              { staticClass: "px-6 py-8" },
              [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
              1
            )
          ]),
      _vm._v(" "),
      _vm.isVisible
        ? _c("div", { staticClass: "px-6 py-6 bg-gray-100" }, [
            _c("table", { staticClass: "w-full" }, [
              _c(
                "tbody",
                _vm._l(_vm.data, function(item) {
                  return _c("tr", [
                    _c("th", { staticClass: "py-1" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex items-center text-sm font-semibold text-gray-700"
                        },
                        [
                          _c("span", {
                            staticClass: "block h-4 w-4 rounded mr-2",
                            style: { background: item.color }
                          }),
                          _vm._v(
                            " " +
                              _vm._s(item.name) +
                              "\n                        "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
                      _vm._v(_vm._s(item.y))
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        : _vm._e()
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
  return _c("AppLayout", { attrs: { regions: _vm.regions } }, [
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
            _c("DateRangePicker", { attrs: { period: _vm.period } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 bg-blue-600 rounded-lg shadow" }, [
        _c(
          "div",
          { staticClass: "w-1/4" },
          [_c("NumberOfUReporters", { attrs: { period: _vm.period } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/4" },
          [_c("NumberOfVillages", { attrs: { period: _vm.period } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/4" },
          [_c("VisitedHousehold", { attrs: { period: _vm.period } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/4" },
          [_c("TotalNumberOfHouseholds", { attrs: { period: _vm.period } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [
            _c("HandwashingStationCharacteristics", {
              attrs: { period: _vm.period }
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
              attrs: { period: _vm.period }
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
          [_c("HandwashingScoreCard", { attrs: { period: _vm.period } })],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-3 py-5 text-center" }, [
    _c(
      "h3",
      {
        staticClass:
          "text-blue-200 text-xs uppercase tracking-wide font-semibold"
      },
      [
        _vm.currentLanguage === "english"
          ? [_vm._v("Number of U-Reporters")]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentLanguage === "kiswahili"
          ? [_vm._v("Idadi ya U-reporters")]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-white text-5xl font-medium" }, [
      _vm._v(_vm._s(_vm._f("toNumberFormat")(_vm.total)))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-3 py-5 text-center" }, [
    _c(
      "h3",
      {
        staticClass:
          "text-blue-200 text-xs uppercase tracking-wide font-semibold"
      },
      [
        _vm.currentLanguage === "english"
          ? [_vm._v("Number of villages")]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentLanguage === "kiswahili"
          ? [_vm._v("Idadi ya vijiji")]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-white text-5xl font-medium" }, [
      _vm._v(_vm._s(_vm._f("toNumberFormat")(_vm.total)))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-3 py-5 text-center" }, [
    _c(
      "h3",
      {
        staticClass:
          "text-blue-200 text-xs uppercase tracking-wide font-semibold"
      },
      [
        _vm.currentLanguage === "english"
          ? [_vm._v("Total Number Of Households")]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentLanguage === "kiswahili"
          ? [_vm._v("Idadi ya nyumba zote")]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-white text-5xl font-medium" }, [
      _vm._v(_vm._s(_vm._f("toNumberFormat")(_vm.total)))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-3 py-5 text-center" }, [
    _c(
      "h3",
      {
        staticClass:
          "text-blue-200 text-xs uppercase tracking-wide font-semibold"
      },
      [
        _vm.currentLanguage === "english"
          ? [_vm._v("Visited Household")]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentLanguage === "kiswahili"
          ? [_vm._v("Nyumba zilizotembelewa")]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "text-white text-5xl font-medium" }, [
      _vm._v(_vm._s(_vm._f("toNumberFormat")(_vm.total)))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/DateRangePicker.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/DateRangePicker.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=6cb264bc& */ "./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=6cb264bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/DateRangePicker.vue?vue&type=template&id=6cb264bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_6cb264bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberOfUReporters.vue?vue&type=template&id=5f1375d7& */ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7&");
/* harmony import */ var _NumberOfUReporters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberOfUReporters.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NumberOfUReporters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfUReporters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberOfUReporters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfUReporters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberOfUReporters.vue?vue&type=template&id=5f1375d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue?vue&type=template&id=5f1375d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfUReporters_vue_vue_type_template_id_5f1375d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberOfVillages.vue?vue&type=template&id=6d895fe1& */ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1&");
/* harmony import */ var _NumberOfVillages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberOfVillages.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NumberOfVillages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/NumberOfVillages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfVillages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberOfVillages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfVillages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberOfVillages.vue?vue&type=template&id=6d895fe1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue?vue&type=template&id=6d895fe1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOfVillages_vue_vue_type_template_id_6d895fe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee& */ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee&");
/* harmony import */ var _TotalNumberOfHouseholds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TotalNumberOfHouseholds.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TotalNumberOfHouseholds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalNumberOfHouseholds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TotalNumberOfHouseholds.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalNumberOfHouseholds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue?vue&type=template&id=341369ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalNumberOfHouseholds_vue_vue_type_template_id_341369ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitedHousehold.vue?vue&type=template&id=12d11762& */ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762&");
/* harmony import */ var _VisitedHousehold_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitedHousehold.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitedHousehold_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/VisitedHousehold.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitedHousehold_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitedHousehold.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitedHousehold_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitedHousehold.vue?vue&type=template&id=12d11762& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue?vue&type=template&id=12d11762&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitedHousehold_vue_vue_type_template_id_12d11762___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);