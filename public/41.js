(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create */ "./resources/js/Pages/Users/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./resources/js/Pages/Users/Edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    regions: {
      required: true,
      type: Array
    },
    users: {
      required: true,
      type: Array
    }
  },
  components: {
    AppLayout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    handleCreating: function handleCreating() {
      this.$modal.show(_Create__WEBPACK_IMPORTED_MODULE_1__["default"], {}, {
        height: 'auto'
      });
    },
    handleEditing: function handleEditing(user) {
      this.$modal.show(_Edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: user
      }, {
        height: 'auto'
      });
    },
    handleDeleting: function handleDeleting(user) {
      this.$inertia["delete"]("/users/".concat(user.id));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "px-6" }, [
      _c("header", { staticClass: "flex items-center justify-between" }, [
        _c("h1", [_vm._v("Users")]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              staticClass:
                "inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleCreating($event)
                }
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "h-4 w-4 mr-2 fill-current",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }
                },
                [
                  _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                  _c("path", {
                    attrs: { d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" }
                  })
                ]
              ),
              _vm._v("\n                    New user\n                ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-white rounded-lg shadow overflow-hidden mt-6" },
        [
          _c("table", { staticClass: "w-full" }, [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    staticClass:
                      "text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100"
                  },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100"
                  },
                  [_vm._v("Email")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100"
                  },
                  [_vm._v("Role")]
                ),
                _vm._v(" "),
                _c("th", {
                  staticClass:
                    "text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100"
                })
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users, function(user) {
                return _c("tr", { key: user.id }, [
                  _c("td", { staticClass: "py-4 px-4 text-sm" }, [
                    _vm._v(_vm._s(user.name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "py-4 px-4 text-sm" }, [
                    _vm._v(_vm._s(user.email))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "py-4 px-4 text-sm" }, [
                    _vm._v(_vm._s(_vm._f("toTitleCase")(user.role)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "py-4 px-4 text-sm text-right" }, [
                    _c(
                      "div",
                      { staticClass: "flex justify-end" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-blue-600 hover:text-indigo-900 focus:outline-none focus:underline mx-3",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.handleEditing(user)
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-popover",
                          {
                            attrs: { placement: "top-start" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "popover",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-red-400 px-4 py-3"
                                        },
                                        [
                                          _c(
                                            "h4",
                                            {
                                              staticClass:
                                                "text-sm text-gray-600 font-normal"
                                            },
                                            [
                                              _vm._v(
                                                "Are you sure to trash this user?"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "footer",
                                            { staticClass: "flex mt-6" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "inline-flex font-medium rounded-lg py-1 px-3 bg-gray-300 leading-5 text-sm text-gray-800 mr-2"
                                                },
                                                [_vm._v("Cancel")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "inline-flex font-medium rounded-lg py-1 px-3 bg-red-500 leading-5 text-sm text-white",
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.handleDeleting(
                                                        user
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Delete")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-red-600 hover:text-indigo-900 focus:outline-none focus:underline",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5cc3d152& */ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5cc3d152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);