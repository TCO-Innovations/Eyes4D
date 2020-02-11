(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/latrine_construction_improvement");

              case 2:
                response = _context.sent;
                this.houses = response.data;

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
  return _c(
    "div",
    { staticClass: "shadow bg-white rounded-lg overflow-hidden" },
    [
      _c(
        "header",
        { staticClass: "flex justify-between px-6 bg-gray-100 py-4" },
        [
          _c("div", [
            _c("h2", { staticClass: "text-lg mb-2" }, [
              _vm._v("Handwashing Practice Scorecard")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm text-gray-700" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.areaName) +
                  " - July 2019 to September 2019\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col" }, [
            _c("div", { staticClass: "flex -mx-4" }, [
              _c(
                "span",
                { staticClass: "px-4 flex items-center text-sm text-gray-600" },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-3 w-3 fill-current text-green-600 mr-2",
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
                  _vm._v("\n                    Present\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "px-4 flex items-center text-sm text-gray-600" },
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
                  _vm._v("\n                    Absent\n                ")
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "overflow-x-scroll", staticStyle: { height: "42rem" } },
        [
          _c("table", { staticClass: "whitespace-no-wrap w-full" }, [
            _vm._m(1),
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
                      staticClass:
                        "border-b text-left  py-4 px-4 text-transparent",
                      class: {
                        "bg-green-500": Math.round(house.has_handwash_place),
                        "bg-red-500": !Math.round(house.has_handwash_place)
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
                      staticClass:
                        "border-b text-right py-4 px-4 text-transparent",
                      class: {
                        "bg-green-500": Math.round(house.has_soap),
                        "bg-red-500": !Math.round(house.has_soap)
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
                      staticClass:
                        "border-b text-right py-4 px-4 text-transparent",
                      class: {
                        "bg-green-500": Math.round(
                          house.has_handwash_container
                        ),
                        "bg-red-500": !Math.round(house.has_handwash_container)
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(Math.round(house.has_handwash_container)) +
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
    ]
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
          "\n                Observation has no impact on latrine type\n            "
        )
      ]
    )
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
              "\n                        Has handwash place\n                    "
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
          [_vm._v("\n                        Has soap\n                    ")]
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
              "\n                        Has handwash container\n                    "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



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



/***/ })

}]);