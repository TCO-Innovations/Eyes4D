(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      regions: [{
        id: 1,
        name: "Mbeya"
      }, {
        id: 2,
        name: "Iringa"
      }, {
        id: 3,
        name: "Tanga"
      }, {
        id: 4,
        name: "Arusha"
      }]
    };
  },
  methods: {
    isRoute: function isRoute(name) {
      return route().current(name);
    },
    handleSignOut: function () {
      var _handleSignOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/logout");

              case 2:
                window.location.href = "/login";

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handleSignOut() {
        return _handleSignOut.apply(this, arguments);
      }

      return handleSignOut;
    }()
  }
});

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
          _vm._v("\n            " + _vm._s(_vm.$page.app.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex-shrink-0 px-10 py-4" },
          [
            _c(
              "v-popover",
              {
                attrs: { offset: "16", placement: "bottom-start" },
                scopedSlots: _vm._u([
                  {
                    key: "popover",
                    fn: function() {
                      return [
                        _c(
                          "div",
                          { staticClass: "bg-white shadow-xl rounded-lg px-3" },
                          [
                            _c(
                              "header",
                              { staticClass: "text-sm px-2 py-4 border-b-2" },
                              [
                                _c("p", { staticClass: "text-gray-700" }, [
                                  _vm._v(_vm._s(_vm.$page.auth.user.email))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "nav",
                              {
                                staticClass:
                                  "text-sm font-medium text-gray-600 pt-2 pb-4"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Profile")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Changes Password")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200",
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
                          "hidden lg:inline ml-4 mr-2 text-sm font-semibold tracking-wide text-white"
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$page.auth.user.name) +
                            "\n                    "
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
    _c("div", { staticClass: "flex w-full" }, [
      _c("div", { staticClass: "w-1/4 pt-8 border-r bg-gray-100" }, [
        _c("div", { staticClass: "px-6" }, [
          _c(
            "h3",
            {
              staticClass:
                "text-xs font-semibold text-gray-600 uppercase tracking-wide"
            },
            [_vm._v("Dashboards")]
          ),
          _vm._v(" "),
          _c(
            "nav",
            { staticClass: "text-sm font-semibold text-gray-600 mt-4" },
            [
              _c(
                "inertia-link",
                {
                  staticClass:
                    "-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg",
                  class: { "text-gray-700": _vm.isRoute("latrine") },
                  attrs: { href: "/home" }
                },
                [_vm._v("Latrine Construction And Practise")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg",
                  class: { "text-gray-700": _vm.isRoute("handwash_practise") },
                  attrs: { href: "/handwash_practise" }
                },
                [_vm._v("Handwashing Infrastructure")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-10" }, [
          _c("div", { staticClass: "px-6" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-xs font-semibold text-gray-600 uppercase tracking-wide"
              },
              [_vm._v("Organization Unit")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              _vm._l(_vm.regions, function(region) {
                return _c(
                  "label",
                  {
                    staticClass: "text-sm mt-2 block",
                    attrs: { for: region.id }
                  },
                  [
                    _c("input", {
                      staticClass: "form-checkbox mr-2",
                      attrs: { type: "checkbox", id: _vm.i }
                    }),
                    _vm._v(
                      "\n                            " +
                        _vm._s(region.name) +
                        "\n                        "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-3/4 pt-8" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-6 mt-10" }, [
      _c(
        "h3",
        {
          staticClass:
            "text-xs font-semibold text-gray-600 uppercase tracking-wide"
        },
        [_vm._v("Period Unit")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center justify-between mt-5 -mx-2" },
        [
          _c("div", { staticClass: "px-2 w-full" }, [
            _c("select", { staticClass: "form-select form-select-sm w-full" }, [
              _c("option", { attrs: { value: "" } }, [_vm._v("Day")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-2 w-full" }, [
            _c("select", { staticClass: "form-select form-select-sm w-full" }, [
              _c("option", { attrs: { value: "" } }, [_vm._v("Month")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-2 w-full" }, [
            _c("select", { staticClass: "form-select form-select-sm w-full" }, [
              _c("option", { attrs: { value: "" } }, [_vm._v("Year")])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center justify-between mt-5 -mx-2" },
        [
          _c("div", { staticClass: "px-2 w-1/2" }, [
            _c(
              "label",
              { staticClass: "text-xs mb-2 block", attrs: { for: "from" } },
              [_vm._v("Start From")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input form-input-sm w-full",
              attrs: { id: "from", type: "date", placeholder: "..." }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-2 w-1/2" }, [
            _c(
              "label",
              { staticClass: "text-xs mb-2 block", attrs: { for: "to" } },
              [_vm._v("End To")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input form-input-sm w-full",
              attrs: { id: "to", type: "date", placeholder: "..." }
            })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



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