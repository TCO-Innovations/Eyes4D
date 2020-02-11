(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateRangePicker */ "./resources/js/Pages/LatrineConstruction/DateRangePicker.vue");
/* harmony import */ var _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HouseholdVisiting */ "./resources/js/Pages/LatrineConstruction/HouseholdVisiting.vue");
/* harmony import */ var _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LatrineTypesDistribution */ "./resources/js/Pages/LatrineConstruction/LatrineTypesDistribution.vue");
/* harmony import */ var _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LatrineCharacteristics */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue");
/* harmony import */ var _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LatrineCharacteristicsTrend */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristicsTrend.vue");
/* harmony import */ var _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LatrineConstructionImprovementScoreCard */ "./resources/js/Pages/LatrineConstruction/LatrineConstructionImprovementScoreCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppLayout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    DateRangePicker: _DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    HouseholdVisiting: _HouseholdVisiting__WEBPACK_IMPORTED_MODULE_3__["default"],
    LatrineScoreCard: _LatrineConstructionImprovementScoreCard__WEBPACK_IMPORTED_MODULE_7__["default"],
    LatrineCharacteristics: _LatrineCharacteristics__WEBPACK_IMPORTED_MODULE_5__["default"],
    LatrineTypesDistribution: _LatrineTypesDistribution__WEBPACK_IMPORTED_MODULE_4__["default"],
    LatrineCharacteristicsTrend: _LatrineCharacteristicsTrend__WEBPACK_IMPORTED_MODULE_6__["default"]
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
  },
  watch: {
    selectedPeriod: function selectedPeriod(value) {
      history.pushState(null, null, query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringifyUrl({
        url: window.location.href,
        query: {
          period: value
        }
      }));
    }
  }
});

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
          _c("h1", { staticClass: "text-2xl font-medium text-gray-700" }, [
            _vm._v("Latrine Construction and Improvement")
          ]),
          _vm._v(" "),
          _c("DateRangePicker")
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 bg-blue-600 rounded-lg shadow" }, [
        _c("div", { staticClass: "w-1/4" }, [
          _c("div", { staticClass: "px-3 py-5 text-center" }, [
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
          _c("div", { staticClass: "px-3 py-5 text-center" }, [
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
          _c("div", { staticClass: "px-3 py-5 text-center" }, [
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
          _c("div", { staticClass: "px-3 py-5 text-center" }, [
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
          [_c("LatrineTypesDistribution")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineCharacteristics")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8 -mx-6" }, [
        _c(
          "section",
          { staticClass: "w-full px-6" },
          [_c("LatrineCharacteristicsTrend")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-8" }, [
        _c("section", { staticClass: "w-full" }, [_c("LatrineScoreCard")], 1)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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



/***/ })

}]);