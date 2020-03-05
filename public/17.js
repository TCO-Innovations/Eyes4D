(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: function data() {
    return {
      data: []
    };
  },
  computed: {
    title: function title() {
      return this.currentLanguage === 'english' ? 'U-Reporters age demography' : 'Demografia ya umri wa U-Reporters';
    },
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'column'
        },
        credits: {
          enabled: false
        },
        title: {
          align: 'center',
          text: this.title,
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          align: 'center',
          text: this.subTitle
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Number of U-Reporters'
          }
        },
        series: [{
          name: 'Total',
          colorByPoint: true,
          data: this.data
        }],
        legend: {
          enabled: false
        }
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
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/age_demography", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.data = [{
                name: 'Age < 20',
                y: data.filter(function (contact) {
                  return contact.contact_age_in_years < 20;
                }).length,
                color: '#4299E1'
              }, {
                name: 'Age 20 - 24',
                y: data.filter(function (contact) {
                  return contact.contact_age_in_years >= 20 && contact.contact_age_in_years <= 24;
                }).length,
                color: '#48BB78'
              }, {
                name: 'Age > 25',
                y: data.filter(function (contact) {
                  return contact.contact_age_in_years > 25;
                }).length,
                color: '#F56565'
              }];

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var _Components_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/DatePicker */ "./resources/js/Components/DatePicker.vue");
/* harmony import */ var _Components_CustomDateItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/CustomDateItem */ "./resources/js/Components/CustomDateItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DatePicker: _Components_DatePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomDateItem: _Components_CustomDateItem__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].$emit("filter:period", this.periodRange);
  },
  watch: {
    period: {
      deep: true,
      handler: function handler() {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].$emit("filter:period", this.periodRange);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  computed: {
    title: function title() {
      return this.currentLanguage === 'english' ? 'U-Reporters gender demography' : 'Demografia ya jinsia wa U-Reporters';
    },
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'pie'
        },
        credits: {
          enabled: false
        },
        title: {
          align: 'center',
          text: this.title,
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          align: 'center',
          text: this.subTitle
        },
        series: [{
          name: 'Total',
          data: this.data
        }],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
              enabled: false
            }
          }
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          itemMarginTop: 10,
          itemMarginBottom: 10
        }
      };
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data, colors;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/gender_demography", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              colors = {
                Male: "#4299E1",
                Female: "#48BB78"
              };
              this.data = data.map(function (item) {
                return {
                  y: item.total,
                  name: item.gender,
                  color: colors[item.gender]
                };
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
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
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker */ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue");
/* harmony import */ var _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HouseholdVisiting */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue");
/* harmony import */ var _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LatrineTypesDistribution */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue");
/* harmony import */ var _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LatrineCharacteristics */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue");
/* harmony import */ var _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue");
/* harmony import */ var _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue");
/* harmony import */ var _NumberOfUReporters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NumberOfUReporters */ "./resources/js/Pages/LatrineConstruction/NumberOfUReporters.vue");
/* harmony import */ var _NumberOfVillages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NumberOfVillages */ "./resources/js/Pages/LatrineConstruction/NumberOfVillages.vue");
/* harmony import */ var _VisitedHousehold__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisitedHousehold */ "./resources/js/Pages/LatrineConstruction/VisitedHousehold.vue");
/* harmony import */ var _TotalNumberOfHouseholds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TotalNumberOfHouseholds */ "./resources/js/Pages/LatrineConstruction/TotalNumberOfHouseholds.vue");
/* harmony import */ var _GenderDemography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GenderDemography */ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue");
/* harmony import */ var _AgeDemography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AgeDemography */ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppLayout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    NumberOfUReporters: _NumberOfUReporters__WEBPACK_IMPORTED_MODULE_7__["default"],
    NumberOfVillages: _NumberOfVillages__WEBPACK_IMPORTED_MODULE_8__["default"],
    VisitedHousehold: _VisitedHousehold__WEBPACK_IMPORTED_MODULE_9__["default"],
    AgeDemography: _AgeDemography__WEBPACK_IMPORTED_MODULE_12__["default"],
    TotalNumberOfHouseholds: _TotalNumberOfHouseholds__WEBPACK_IMPORTED_MODULE_10__["default"],
    GenderDemography: _GenderDemography__WEBPACK_IMPORTED_MODULE_11__["default"],
    DateRangePicker: _DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    HouseholdVisiting: _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_2__["default"],
    LatrineScoreCard: _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_6__["default"],
    LatrineCharacteristics: _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_4__["default"],
    LatrineTypesDistribution: _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_3__["default"],
    LatrineCharacteristicsTrend: _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      period: {
        start: '2019-12-01',
        stop: '2020-04-30'
      }
    };
  },
  props: {
    regions: {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReportComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ReportComponent */ "./resources/js/ReportComponent.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _ReportComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      data: null
    };
  },
  computed: {
    title: function title() {
      return this.currentLanguage === 'english' ? 'Latrine type distribution' : 'Mgawanyiko wa aina za vyoo';
    },
    yAxisTitle: function yAxisTitle() {
      return this.currentLanguage === 'english' ? 'Number of households' : 'Idadi ya nyumba';
    },
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'pie'
        },
        credits: {
          enabled: false
        },
        title: {
          align: 'left',
          text: this.title,
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          align: 'left',
          text: this.subTitle
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          itemMarginTop: 10,
          itemMarginBottom: 10
        },
        series: [{
          name: 'Total latrines:',
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
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/latrine_type_distribution', {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.data = [{
                name: 'Traditional Pit latrine',
                color: "#667EEA",
                y: data.filter(function (house) {
                  return house.has_latrine === 'Yes' && house.has_cemented_floor === 'No';
                }).length
              }, {
                name: 'Ventilated Improved Pit (VIP) Latrine',
                color: "#2D3748",
                y: data.filter(function (house) {
                  return house.has_latrine === 'Yes' && house.has_cemented_floor === 'Yes' && (house.has_lockable_door === 'Yes' || house.has_brick_wall === 'Yes' || house.has_iron_sheet_roof === 'Yes');
                }).length
              }, {
                name: 'Improved Traditional Pit latrine',
                y: data.filter(function (house) {
                  return house.has_latrine === 'Yes' && house.has_cemented_floor === 'No';
                }).length,
                color: "#744210"
              }];

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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

//
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
  data: function data() {
    return {
      total: 10,
      filters: {
        areaName: null,
        areaType: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchReport();
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].$on("filter:area", function (area) {
      _this.filters.areaType = area.type;
      _this.filters.areaName = area.name;
    });
  },
  watch: {
    filters: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/number_of_u_reporters", {
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

//
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
  data: function data() {
    return {
      total: null,
      filters: {
        areaType: null,
        areaName: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchReport();
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].$on("filter:area", function (area) {
      _this.filters.areaType = area.type;
      _this.filters.areaName = area.name;
    });
  },
  watch: {
    filters: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/number_of_villages", {
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

//
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
  data: function data() {
    return {
      total: null,
      filters: {
        areaType: null,
        areaName: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchReport();
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].$on("filter:area", function (area) {
      _this.filters.areaType = area.type;
      _this.filters.areaName = area.name;
    });
  },
  watch: {
    filters: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/total_number_of_households", {
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

//
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
  data: function data() {
    return {
      total: null,
      filters: {
        areaType: null,
        areaName: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchReport();
    _events__WEBPACK_IMPORTED_MODULE_1__["default"].$on("filter:area", function (area) {
      _this.filters.areaType = area.type;
      _this.filters.areaName = area.name;
    });
  },
  watch: {
    filters: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    }
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/visited_household", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-white shadow overflow-hidden rounded-lg py-6 px-4" },
    [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                value: _vm.periodRange.start,
                callback: function($$v) {
                  _vm.$set(_vm.periodRange, "start", $$v)
                },
                expression: "periodRange.start"
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
                value: _vm.periodRange.stop,
                callback: function($$v) {
                  _vm.$set(_vm.periodRange, "stop", $$v)
                },
                expression: "periodRange.stop"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae& ***!
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
  return _c(
    "div",
    { staticClass: "bg-white shadow overflow-hidden rounded-lg py-6 px-4" },
    [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
    1
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
  return _c("AppLayout", { attrs: { regions: _vm.regions } }, [
    _c("div", { staticClass: "px-12" }, [
      _c(
        "header",
        { staticClass: "flex mb-8 w-full justify-between border-b pb-8" },
        [
          _c(
            "h1",
            { staticClass: "text-2xl font-medium text-gray-700" },
            [
              _vm.currentLanguage === "english"
                ? [_vm._v("Latrine Construction and Improvement")]
                : _vm._e(),
              _vm._v(" "),
              _vm.currentLanguage === "kiswahili"
                ? [_vm._v("Matumizi ya vyoo")]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("DateRangePicker", { attrs: { period: _vm.period } })
        ],
        1
      ),
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
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "div",
          { staticClass: "w-1/2 px-6" },
          [_c("GenderDemography", { attrs: { period: _vm.period } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/2 px-6" },
          [_c("AgeDemography", { attrs: { period: _vm.period } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "div",
          { staticClass: "w-full px-6" },
          [_c("HouseholdVisiting", { attrs: { period: _vm.period } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineTypesDistribution", { attrs: { period: _vm.period } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineCharacteristics", { attrs: { period: _vm.period } })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [
            _c("LatrineCharacteristicsTrend", { attrs: { period: _vm.period } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8" }, [
        _c(
          "section",
          { staticClass: "w-full" },
          [_c("LatrineScoreCard", { attrs: { period: _vm.period } })],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "px-6 py-8 border-b" },
        [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
        1
      )
    ]
  )
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

/***/ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/AgeDemography.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgeDemography.vue?vue&type=template&id=71d585e3& */ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3&");
/* harmony import */ var _AgeDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgeDemography.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgeDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/AgeDemography.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgeDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgeDemography.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgeDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AgeDemography.vue?vue&type=template&id=71d585e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/AgeDemography.vue?vue&type=template&id=71d585e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgeDemography_vue_vue_type_template_id_71d585e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/DateRangePicker.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=58d82713& */ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=58d82713& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/DateRangePicker.vue?vue&type=template&id=58d82713&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_58d82713___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/GenderDemography.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenderDemography.vue?vue&type=template&id=774c1cae& */ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae&");
/* harmony import */ var _GenderDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenderDemography.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GenderDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/GenderDemography.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenderDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenderDemography.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenderDemography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GenderDemography.vue?vue&type=template&id=774c1cae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/GenderDemography.vue?vue&type=template&id=774c1cae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenderDemography_vue_vue_type_template_id_774c1cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c& */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c&");
/* harmony import */ var _LatrineTypesDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineTypesDistribution.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineTypesDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineTypesDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineTypesDistribution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineTypesDistribution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue?vue&type=template&id=b2e6bc6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineTypesDistribution_vue_vue_type_template_id_b2e6bc6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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