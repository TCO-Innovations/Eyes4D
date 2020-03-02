(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppPagination.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AppPagination.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
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
    links: Array
  },
  methods: {
    switchPage: function switchPage(label) {
      this.$emit('page', label);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_AppPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/AppPagination */ "./resources/js/Components/AppPagination.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppPagination: _Components_AppPagination__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      houses: [],
      links: [],
      filters: {
        page: 1,
        areaType: null,
        areaName: null,
        start: null,
        stop: null
      }
    };
  },
  watch: {
    filters: {
      deep: true,
      handler: function handler() {
        this.fetchReport();
      }
    },
    period: {
      deep: true,
      handler: function handler(value) {
        this.filters.start = value.start;
        this.filters.stop = value.stop;
      }
    }
  },
  computed: {
    areaName: function areaName() {
      if (this.filters.areaName && this.filters.areaType) {
        var name = "".concat(this.filters.areaName, " ").concat(this.filters.areaType);
        return voca__WEBPACK_IMPORTED_MODULE_2___default.a.titleCase(name);
      }

      return "All Regions";
    },
    timeRange: function timeRange() {
      if (this.period) {
        return "".concat(this.toFormattedDate(this.period.start), " - ").concat(this.toFormattedDate(this.period.stop));
      }

      return "All The Time";
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchReport();
    _events__WEBPACK_IMPORTED_MODULE_3__["default"].$on("filter:area", function (area) {
      _this.filters.areaName = area.name;
      _this.filters.areaType = area.type;
    });
  },
  methods: {
    fetchReport: function fetchReport() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchReport$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/latrine_construction_improvement", {
                params: this.filters
              }));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              this.houses = data.data;
              this.links = data.links;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    toFormattedDate: function toFormattedDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format("MMM DD, YYYY");
    },
    switchPage: function switchPage(page) {
      this.filters.page = page;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-6 -mb-1 flex flex-wrap" },
    [
      _vm._l(_vm.links, function(link, key) {
        return [
          link.url === null
            ? _c(
                "div",
                {
                  key: key,
                  staticClass:
                    "mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",
                  class: { "ml-auto": link.label === "Next" }
                },
                [_vm._v(_vm._s(link.label))]
              )
            : _c(
                "a",
                {
                  key: key,
                  staticClass:
                    "mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500",
                  class: {
                    "bg-white": link.active,
                    "ml-auto": link.label === "Next"
                  },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.switchPage(link.label)
                    }
                  }
                },
                [_vm._v(_vm._s(link.label))]
              )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "mx-auto bg-white rounded-lg shadow overflow-hidden" },
        [
          _c(
            "header",
            { staticClass: "flex justify-between px-6 bg-gray-100 py-4" },
            [
              _c("div", [
                _c("h2", { staticClass: "text-lg mb-2" }, [
                  _vm._v("Latrine Construction and Improvement Scorecard")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-sm text-gray-700" }, [
                  _vm._v(_vm._s(_vm.areaName) + ": " + _vm._s(_vm.timeRange))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-col" }, [
                _c("div", { staticClass: "flex -mx-4" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "px-4 flex items-center text-sm text-gray-600"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass:
                            "h-3 w-3 fill-current text-green-600 mr-2",
                          attrs: {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: { width: "24", height: "24", rx: "4" }
                          })
                        ]
                      ),
                      _vm._v(
                        "\n                        Present\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "px-4 flex items-center text-sm text-gray-600"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-3 w-3 fill-current text-red-600 mr-2",
                          attrs: {
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("rect", {
                            attrs: { width: "24", height: "24", rx: "4" }
                          })
                        ]
                      ),
                      _vm._v(
                        "\n                        Absent\n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overflow-x-scroll" }, [
            _c("table", { staticClass: "whitespace-no-wrap" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "text-sm" },
                _vm._l(_vm.houses, function(house) {
                  return _c(
                    "tr",
                    { key: house.id },
                    [
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-l-0 border-gray-400 text-left  py-4 px-4"
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                _vm._f("toTitleCase")(house.head_of_house)
                              ) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600": house.has_latrine === "Yes",
                            "bg-red-600": house.has_latrine === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_latrine))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600": house.has_cemented_floor === "Yes",
                            "bg-red-600": house.has_cemented_floor === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_cemented_floor))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600": house.has_lockable_door === "Yes",
                            "bg-red-600": house.has_lockable_door === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_lockable_door))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600": house.has_iron_sheet_roof === "Yes",
                            "bg-red-600": house.has_iron_sheet_roof === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_iron_sheet_roof))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600": house.has_brick_wall === "Yes",
                            "bg-red-600": house.has_brick_wall === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_brick_wall))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600":
                              house.has_adjacent_bathroom === "Yes",
                            "bg-red-600": house.has_adjacent_bathroom === "No"
                          }
                        },
                        [_vm._v(_vm._s(house.has_adjacent_bathroom))]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass:
                            "border border-gray-400 text-right py-4 text-transparent px-4",
                          class: {
                            "bg-green-600":
                              house.kinyesi_ukutani === "No" &&
                              house.kinyesi_kuzunguka_nyumba === "No",
                            "bg-red-600":
                              house.kinyesi_ukutani === "Yes" ||
                              house.kinyesi_kuzunguka_nyumba === "Yes"
                          }
                        },
                        [_vm._v(_vm._s(house.clean_latrine))]
                      ),
                      _vm._v(" "),
                      house.has_latrine === "No"
                        ? [_vm._m(2, true)]
                        : house.has_latrine === "Yes" &&
                          house.has_cemented_floor === "No"
                        ? [_vm._m(3, true)]
                        : house.has_latrine === 1 &&
                          house.has_cemented_floor === 1 &&
                          (house.has_lockable_door === 1 ||
                            house.has_brick_wall ||
                            house.has_iron_sheet_roof)
                        ? [_vm._m(4, true)]
                        : house.has_latrine === "Yes" &&
                          house.has_cemented_floor === "Yes"
                        ? [_vm._m(5, true)]
                        : _vm._e()
                    ],
                    2
                  )
                }),
                0
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("AppPagination", {
        attrs: { links: _vm.links },
        on: { page: _vm.switchPage }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-start text-sm mt-3 text-gray-600" },
      [
        _c(
          "span",
          {
            staticClass:
              "inline-block text-center text-red-500 h-3 w-3 mr-2 text-base"
          },
          [_vm._v("*")]
        ),
        _vm._v(
          "\n                    Observation has no impact on latrine type\n                "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c(
        "tr",
        {
          staticClass:
            "text-xs uppercase tracking-wider text-gray-700 font-semibold"
        },
        [
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-left whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Head Of House")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Has latrine")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Easy washable cemented floor")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Lockable door")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Iron sheet roof")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Wall with bricks")])])]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [
              _c("div", [
                _c("span", [
                  _vm._v("Adjacent bathroom "),
                  _c("sup", { staticClass: "text-base text-red-500" }, [
                    _vm._v("*")
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [
              _c("div", [
                _c("span", [
                  _vm._v("Clean latrine "),
                  _c("sup", { staticClass: "text-base text-red-500" }, [
                    _vm._v("*")
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticClass: "py-4 px-4 border-b text-right whitespace-no-wrap" },
            [_c("div", [_c("span", [_vm._v("Latrine type")])])]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass:
          "border border-r-0 border-gray-400 text-right py-4 px-4 bg-red-500"
      },
      [_c("span", [_vm._v("No Latrine")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass:
          "border border-r-0 border-gray-400 text-right py-4 px-4 bg-green-500"
      },
      [_c("span", [_vm._v("Traditional Pit latrine")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass:
          "border border-r-0 border-gray-400 text-right py-4 px-4 bg-gray-800 text-white"
      },
      [_c("span", [_vm._v("Ventilated Improved Pit (VIP) Latrine")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass:
          "border border-r-0 border-gray-400 text-right py-4 px-4 bg-pink-500"
      },
      [_c("span", [_vm._v("Improved Traditional Pit latrine")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/AppPagination.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/AppPagination.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppPagination.vue?vue&type=template&id=338482e0& */ "./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0&");
/* harmony import */ var _AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppPagination.vue?vue&type=script&lang=js& */ "./resources/js/Components/AppPagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/AppPagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/AppPagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/AppPagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppPagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppPagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppPagination.vue?vue&type=template&id=338482e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/AppPagination.vue?vue&type=template&id=338482e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_338482e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260& */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&");
/* harmony import */ var _LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);