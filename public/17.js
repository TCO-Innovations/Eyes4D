(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    metrics: {
      required: true
    }
  },
  mounted: function mounted() {
    highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.chart(this.$refs.contactContainer, {
      chart: {
        type: 'bar',
        height: 3200 // '100%'

      },
      title: {
        text: 'Contacts Consolidation'
      },
      subtitle: {
        text: 'Source: <a href="#">Wikipedia.org</a>'
      },
      xAxis: {
        categories: this.metrics.map(function (item) {
          return item.name;
        }),
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Household Visits',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Household Visits',
        data: this.metrics.map(function (item) {
          return item.visits;
        })
      }]
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    metrics: {
      required: true
    }
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'House Without Latrines',
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: 'Ipinda Village - Jan 2019 to Jun 2019'
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
          }, {// default background
          }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },
        // the value axis
        yAxis: {
          min: 0,
          max: 2168,
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
            to: 720,
            color: '#DF5353' // red

          }, {
            from: 720,
            to: 1444,
            color: '#DDDF0D' // yellow

          }, {
            from: 1444,
            to: 2166,
            color: '#55BF3B' // green

          }]
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Speed',
          data: [this.metrics[0].latrine_count],
          tooltip: {
            valueSuffix: 'Total'
          }
        }]
      };
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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HouseWithLatrines */ "./resources/js/Pages/LatrineConstruction/HouseWithLatrines.vue");
/* harmony import */ var _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LatrineTypesDistribution */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue");
/* harmony import */ var _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LatrineCharacteristics */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue");
/* harmony import */ var _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue");
/* harmony import */ var _ContactConsolidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactConsolidation */ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue");
/* harmony import */ var _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VisitingsPerVillage */ "./resources/js/Pages/LatrineConstruction/VisitingsPerVillage.vue");
/* harmony import */ var _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VisitingsPerContact */ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue");
/* harmony import */ var _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    LatrineCharacteristicsTrend: _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_5__["default"],
    HouseWithLatrines: _HouseWithLatrines__WEBPACK_IMPORTED_MODULE_2__["default"],
    LatrineCharacteristics: _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_4__["default"],
    ContactConsolidation: _ContactConsolidation__WEBPACK_IMPORTED_MODULE_6__["default"],
    VisitingPerContact: _VisitingsPerContact__WEBPACK_IMPORTED_MODULE_8__["default"],
    VisitingPerVillage: _VisitingsPerVillage__WEBPACK_IMPORTED_MODULE_7__["default"],
    LatrineTypesDistribution: _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_3__["default"],
    LatrineConstructionImprovementScoreCard: _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    metrics: {
      required: true
    }
  },
  data: function data() {
    return {
      region: "",
      period: new Date().getFullYear(),
      regions: [{
        id: 1,
        name: "Mbeya",
        displayName: "Tanzania > Mbeya"
      }, {
        id: 2,
        name: "Arusha",
        displayName: "Tanzania > Arusha"
      }, {
        id: 3,
        name: "Dar es salaam",
        displayName: "Tanzania > Dar es salaam"
      }, {
        id: 4,
        name: "Dodoma",
        displayName: "Tanzania > Dodoma"
      }, {
        id: 5,
        name: "Mwanza",
        displayName: "Tanzania > Mwanza"
      }],
      query: ""
    };
  },
  mounted: function mounted() {
    console.log(location.pathname);
    this.query = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
      period: this.period,
      region: this.region
    });
    history.pushState(null, null, "?".concat(this.query));
  },
  methods: {
    appendPeriod: function appendPeriod(period) {
      this.query = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
        period: this.period,
        region: this.region
      });
      this.period = period;
      history.pushState(null, null, "?".concat(this.query));
    },
    appendRegion: function appendRegion(region) {
      this.query = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
        period: this.period,
        region: region
      });
      this.region = region;
      history.pushState(null, null, "?".concat(this.query));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js& ***!
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

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/visiting_per_contact", {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    isRoute: function isRoute(name) {
      return route().current(name);
    },
    handleSignOut: function handleSignOut() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSignOut$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/logout"));

            case 2:
              window.location.href = "/login";

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("div", { ref: "contactContainer" })])
}
var staticRenderFns = []
render._withStripped = true



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
            _c(
              "h1",
              {
                staticClass:
                  "text-2xl uppercase tracking-wider font-light text-blue-700"
              },
              [
                _vm._v(
                  "\n                    Latrine Construction and Improvement\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "nav",
              { staticClass: "flex items-center" },
              [
                _c(
                  "v-popover",
                  {
                    attrs: { trigger: "hover", placement: "bottom-start" },
                    scopedSlots: _vm._u([
                      {
                        key: "popover",
                        fn: function() {
                          return [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white shadow-xl text-xs uppercase tracking-wider text-gray-700"
                              },
                              _vm._l(_vm.regions, function(regionObject) {
                                return _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block py-2 px-5 hover:bg-blue-100",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.appendRegion(
                                          regionObject.name
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(regionObject.name) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("button", { staticClass: "flex items-center px-2" }, [
                      _c(
                        "span",
                        { staticClass: "mr-2 text-xs text-gray-700" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.region === ""
                                  ? "Organization Unit"
                                  : _vm.region
                              ) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "svg",
                        {
                          staticClass: "h-4 w-4 fill-current",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: { fill: "none", d: "M0 0h24v24H0z" }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-popover",
                  {
                    attrs: { trigger: "hover", placement: "bottom-start" },
                    scopedSlots: _vm._u([
                      {
                        key: "popover",
                        fn: function() {
                          return [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white shadow-xl text-xs uppercase tracking-wider text-gray-700"
                              },
                              _vm._l(Array(5).keys(), function(yearNumber) {
                                return _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block py-2 px-5 hover:bg-blue-100",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.appendPeriod(
                                          new Date().getFullYear() - yearNumber
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          new Date().getFullYear() - yearNumber
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("button", { staticClass: "flex items-center px-4" }, [
                      _c(
                        "span",
                        { staticClass: "mr-2 text-sm text-gray-700" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.period) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "svg",
                        {
                          staticClass: "h-4 w-4 fill-current",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: { fill: "none", d: "M0 0h24v24H0z" }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                            }
                          })
                        ]
                      )
                    ])
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
        _c("div", { staticClass: "w-1/2 px-6" }, [_c("VisitingPerContact")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 px-6" }, [_c("VisitingPerVillage")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-16 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-1/2 px-6" },
          [
            _c("HouseWithLatrines", {
              attrs: { metrics: _vm.metrics.latrines }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "w-1/2 px-6" },
          [_c("LatrineTypesDistribution")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineCharacteristics")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex -mx-6 mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineCharacteristicsTrend")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-16" }, [
        _c(
          "section",
          { staticClass: "w-full" },
          [_c("LatrineConstructionImprovementScoreCard")],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975& ***!
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
  return _c("div", { staticClass: "shadow-lg" }, [
    _c(
      "header",
      { staticClass: "flex justify-between px-4 py-5 bg-blue-100" },
      [
        _c(
          "h3",
          {
            staticClass:
              "text-xs uppercase tracking-wide font-semibold text-blue-700"
          },
          [_vm._v("Visiting Per Contact")]
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
                  "\n                        " +
                    _vm._s(_vm.titleCase(visit.contact_name)) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-sm py-3" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.titleCase(visit.village)) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "text-sm py-3" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(visit.visits) +
                    "\n                    "
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
  ])
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
          [_vm._v("Contact")]
        ),
        _vm._v(" "),
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
          [_vm._v("Visits")]
        )
      ])
    ])
  }
]
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
  return _c("div", { staticClass: "shadow-lg" }, [
    _c(
      "header",
      { staticClass: "flex justify-between px-4 py-5 bg-blue-100" },
      [
        _c(
          "h3",
          {
            staticClass:
              "text-xs uppercase tracking-wide font-semibold text-blue-700"
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
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      "header",
      { staticClass: "flex items-center justify-between bg-blue-600 border-b" },
      [
        _c("div", { staticClass: "px-6 font-bold text-white" }, [
          _vm._v("\n            Eyes4D\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex-shrink-0 px-4 py-4" },
          [
            _c(
              "v-popover",
              {
                scopedSlots: _vm._u([
                  {
                    key: "popover",
                    fn: function() {
                      return [
                        _c("div", { staticClass: "bg-white shadow-xl" }, [
                          _c(
                            "header",
                            { staticClass: "text-xs px-4 py-4 border-b" },
                            [
                              _c("h3", { staticClass: "font-semibold" }, [
                                _vm._v("David Pella")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-gray-500" }, [
                                _vm._v("david.pella@example.com")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "nav",
                            { staticClass: "text-sm text-gray-700 py-2" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "block px-4 py-3 hover:bg-gray-200",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Profile")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "block px-4 py-3 hover:bg-gray-200",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Changes Password")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "block px-4 py-3 hover:bg-gray-200",
                                  attrs: { href: "/logout" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.handleSignOut($event)
                                    }
                                  }
                                },
                                [_vm._v("Sign out")]
                              )
                            ]
                          )
                        ])
                      ]
                    },
                    proxy: true
                  }
                ])
              },
              [
                _c(
                  "button",
                  { staticClass: "hidden sm:flex sm:items-center sm:w-full" },
                  [
                    _c("img", {
                      staticClass: "h-8 w-8 rounded-full object-cover",
                      attrs: {
                        src:
                          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "hidden lg:inline ml-4 mr-2 text-sm font-medium text-white"
                      },
                      [
                        _vm._v(
                          "\n                    Monica White\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass:
                          "ml-2 h-6 w-6 fill-current text-gray-400 lg:ml-auto",
                        attrs: { viewBox: "0 0 24 24" }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
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
    _c("div", { staticClass: "flex w-full py-12" }, [
      _c("aside", { staticClass: "w-1/4" }, [
        _c(
          "nav",
          { staticClass: "text-xs uppercase text-gray-700 tracking-wider" },
          [
            _c(
              "inertia-link",
              {
                staticClass:
                  "block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500",
                class: {
                  "text-blue-800 border-blue-500 bg-blue-100": _vm.isRoute(
                    "latrine"
                  )
                },
                attrs: { href: "/home" }
              },
              [_vm._v("Latrine Construction and Improvement")]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass:
                  "block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500",
                class: {
                  "text-blue-800 border-blue-500 bg-blue-100": _vm.isRoute(
                    "handwash_practise"
                  )
                },
                attrs: { href: "/handwash_practise" }
              },
              [_vm._v("Handwashing practice")]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass:
                  "block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500",
                class: {
                  "text-blue-800 border-blue-500 bg-blue-100": _vm.isRoute(
                    "handwash_behaviour"
                  )
                },
                attrs: { href: "/handwash_behaviour" }
              },
              [_vm._v("Handwashing Behaviour")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-3/4" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true& */ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true&");
/* harmony import */ var _ContactConsolidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactConsolidation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactConsolidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39915434",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/ContactConsolidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactConsolidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactConsolidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactConsolidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/ContactConsolidation.vue?vue&type=template&id=39915434&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactConsolidation_vue_vue_type_template_id_39915434_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitingsPerContact.vue?vue&type=template&id=5290d975& */ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975&");
/* harmony import */ var _VisitingsPerContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitingsPerContact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitingsPerContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitingsPerContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitingsPerContact.vue?vue&type=template&id=5290d975& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=template&id=5290d975&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitingsPerContact_vue_vue_type_template_id_5290d975___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);