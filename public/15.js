(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_1__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        role: '',
        name: '',
        email: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.post('/users'));

            case 3:
              this.$emit('close');
              this.$inertia.reload({});
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "bg-gray-200",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c(
        "header",
        {
          staticClass:
            "flex justify-between items-center py-4 px-6 bg-white shadow-sm"
        },
        [
          _c("h1", { staticClass: "text-gray-700 font-medium" }, [
            _vm._v("New user")
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "a",
              {
                staticClass:
                  "hover:bg-red-200 inline-flex items-center px-1 py-1 rounded-full hover:text-red-500",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.$emit("close")
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-5 w-5 fill-current",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                    _c("path", {
                      attrs: {
                        d:
                          "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      }
                    })
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "px-6 mt-6" }, [
        _c("section", [
          _c("div", [
            _c(
              "label",
              { staticClass: "text-sm font-medium", attrs: { for: "name" } },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              staticClass: "form-input w-full mt-2",
              attrs: { type: "text", id: "name" },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.hasError("name")
              ? _c(
                  "span",
                  { staticClass: "inline-block text-sm text-red-500 mt-1" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.errors.first("name")) +
                        "\n                "
                    )
                  ]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "mt-6" }, [
          _c("div", [
            _c(
              "label",
              { staticClass: "text-sm font-medium", attrs: { for: "email" } },
              [_vm._v("Email address")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email"
                }
              ],
              staticClass: "form-input w-full mt-2",
              attrs: { type: "email", id: "email" },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.hasError("email")
              ? _c(
                  "span",
                  { staticClass: "inline-block text-sm text-red-500 mt-1" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.errors.first("email")) +
                        "\n                "
                    )
                  ]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "mt-6" }, [
          _c("div", { staticClass: "text-sm font-medium" }, [
            _vm._v("Role assignment")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2" }, [
            _c(
              "label",
              {
                staticClass:
                  "flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer",
                class: {
                  "border-blue-200 bg-blue-100":
                    _vm.form.role === "administrator"
                },
                attrs: { for: "administrator" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.role,
                      expression: "form.role"
                    }
                  ],
                  staticClass: "form-radio h-5 w-5 mr-4",
                  attrs: {
                    type: "radio",
                    id: "administrator",
                    value: "administrator"
                  },
                  domProps: { checked: _vm._q(_vm.form.role, "administrator") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "role", "administrator")
                    }
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer",
                class: {
                  "border-blue-200 bg-blue-100": _vm.form.role === "unicef"
                },
                attrs: { for: "unicef" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.role,
                      expression: "form.role"
                    }
                  ],
                  staticClass: "form-radio h-5 w-5 mr-4",
                  attrs: { type: "radio", id: "unicef", value: "unicef" },
                  domProps: { checked: _vm._q(_vm.form.role, "unicef") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "role", "unicef")
                    }
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer",
                class: {
                  "border-blue-200 bg-blue-100": _vm.form.role === "government"
                },
                attrs: { for: "government" }
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.role,
                      expression: "form.role"
                    }
                  ],
                  staticClass: "form-radio h-5 w-5 mr-4",
                  attrs: {
                    type: "radio",
                    id: "government",
                    value: "government"
                  },
                  domProps: { checked: _vm._q(_vm.form.role, "government") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.form, "role", "government")
                    }
                  }
                })
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "flex items-center justify-between px-6 mt-6 pb-6" },
        [
          _c(
            "button",
            {
              staticClass:
                "inline-flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$emit("close")
                }
              }
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Save changes")]
          )
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
    return _c("span", [
      _c("span", { staticClass: "block font-medium leading-1 text-sm" }, [
        _vm._v("Administrator")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "block text-sm text-gray-600" }, [
        _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "block font-medium leading-1 text-sm" }, [
        _vm._v("UNICEF")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "block text-sm text-gray-600" }, [
        _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "block font-medium leading-1 text-sm" }, [
        _vm._v("Government")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "block text-sm text-gray-600" }, [
        _vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=636aa3ac& */ "./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=636aa3ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Create.vue?vue&type=template&id=636aa3ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_636aa3ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);