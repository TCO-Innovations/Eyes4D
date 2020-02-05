(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/VisitingsPerContact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! voca */ "./node_modules/voca/index.js");
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


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
      return voca__WEBPACK_IMPORTED_MODULE_1___default.a.titleCase(string);
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
    fetchResult: function () {
      var _fetchResult = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("api/visiting_per_contact", {
                  params: {
                    take: this.limit,
                    order: this.order
                  }
                });

              case 2:
                response = _context.sent;
                this.visits = response.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchResult() {
        return _fetchResult.apply(this, arguments);
      }

      return fetchResult;
    }()
  }
});

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
            [_vm._v("Visiting Per Contact")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "inline-flex items-center text-xs uppercase tracking-wide text-gray-600",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggleDirection($event)
                }
              }
            },
            [
              _vm._v(
                "\n            Sort Order: " +
                  _vm._s(_vm.titleCase(_vm.order)) +
                  "\n            "
              ),
              _vm.order === "desc"
                ? [
                    _c(
                      "svg",
                      {
                        staticClass: "h-4 w-4 fill-current text-gray-500 ml-1",
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
                            d:
                              "M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
                          }
                        })
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.order === "asc"
                ? [
                    _c(
                      "svg",
                      {
                        staticClass: "h-4 w-4 fill-current text-gray-500 ml-1",
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
                            d:
                              "M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
                          }
                        })
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
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
      _c("footer", { staticClass: "px-4 flex py-4 justify-between" }, [
        _c(
          "button",
          {
            staticClass: "text-xs uppercase text-blue-500 tracking-wide",
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
                staticClass: "text-xs uppercase text-blue-500 tracking-wide",
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
      ])
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
          { staticClass: "text-xs uppercase tracking-wide text-gray-600 py-4" },
          [_vm._v("Contact")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-xs uppercase tracking-wide text-gray-600 py-4" },
          [_vm._v("Village")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-xs uppercase tracking-wide text-gray-600 py-4" },
          [_vm._v("Visits")]
        )
      ])
    ])
  }
]
render._withStripped = true



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



/***/ })

}]);