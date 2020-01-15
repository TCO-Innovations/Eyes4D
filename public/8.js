(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! voca */ "./node_modules/voca/index.js");
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      houses: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("api/latrine_construction_improvement").then(function (response) {
      _this.houses = response.data;
    });
  },
  methods: {
    titleCase: function titleCase(string) {
      return voca__WEBPACK_IMPORTED_MODULE_1___default.a.titleCase(string);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "overflow-x-scroll", staticStyle: { height: "42rem" } },
      [
        _c("table", { staticClass: "whitespace-no-wrap" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.houses, function(house) {
              return _c("tr", { key: house.id }, [
                _c("td", { staticClass: "border-b text-left  py-4 px-4" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.titleCase(house.head_of_house)) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_latrine),
                      "bg-red-200": !Math.round(house.has_latrine)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_latrine)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_cemented_floor),
                      "bg-red-200": !Math.round(house.has_cemented_floor)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_cemented_floor)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_lockable_door),
                      "bg-red-200": !Math.round(house.has_lockable_door)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_lockable_door)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_iron_sheet_roof),
                      "bg-red-200": !Math.round(house.has_iron_sheet_roof)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_iron_sheet_roof)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_brick_wall),
                      "bg-red-200": !Math.round(house.has_brick_wall)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_brick_wall)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.has_adjacent_bathroom),
                      "bg-red-200": !Math.round(house.has_adjacent_bathroom)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.has_adjacent_bathroom)) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "border-b text-right py-4 px-4",
                    class: {
                      "bg-green-200": Math.round(house.clean_latrine),
                      "bg-red-200": !Math.round(house.clean_latrine)
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(Math.round(house.clean_latrine)) +
                        "\n                    "
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
                      "\n                        " +
                        _vm._s(
                          (
                            (house.has_latrine +
                              house.has_cemented_floor +
                              house.has_lockable_door +
                              house.has_iron_sheet_roof +
                              house.has_brick_wall +
                              house.has_adjacent_bathroom +
                              house.clean_latrine) /
                            7
                          ).toFixed(2)
                        ) +
                        "\n                    "
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
    return _c("header", { staticClass: "px-6 bg-blue-100 py-4" }, [
      _c("h2", { staticClass: "text-lg mb-2" }, [
        _vm._v("Latrine Construction and Improvement Scorecard")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-sm text-gray-700" }, [
        _vm._v("Ipinda Village - July 2019 to September 2019")
      ])
    ])
  },
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
          [
            _vm._v(
              "\n                        Head Of House\n                    "
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
              "\n                        Has latrine\n                    "
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
              "\n                        Easy washable cemented floor\n                    "
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
              "\n                        Lockable door\n                    "
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
              "\n                        Iron sheet roof\n                    "
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
              "\n                        Wall with bricks\n                    "
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
              "\n                        Adjacent bathroom\n                    "
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
              "\n                        Clean latrine\n                    "
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
              "\n                        Latrine construction and improvement average\n                    "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true& */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true&");
/* harmony import */ var _LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineConstructionImprovementScoreCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1098b260",
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

/***/ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue?vue&type=template&id=1098b260&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineConstructionImprovementScoreCard_vue_vue_type_template_id_1098b260_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);