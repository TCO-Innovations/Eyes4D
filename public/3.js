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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var _PasswordChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordChange */ "./resources/js/Shared/PasswordChange.vue");
/* harmony import */ var _ProfileView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileView */ "./resources/js/Shared/ProfileView.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }
  },
  data: function data() {
    return {
      districts: [],
      villages: [],
      selectedRegion: '',
      selectedDistrict: '',
      selectedVillage: '',
      limit: 5
    };
  },
  methods: {
    isRoute: function isRoute(name) {
      return route().current(name);
    },
    changeLanguage: function changeLanguage(language) {
      window.localStorage.setItem('language', language);
      this.$inertia.reload({
        method: 'get',
        preserveState: false,
        preserveScroll: true
      });
    },
    handlePassword: function handlePassword() {
      this.$modal.show(_PasswordChange__WEBPACK_IMPORTED_MODULE_3__["default"], {}, {
        height: 'auto'
      });
    },
    handleProfile: function handleProfile() {
      this.$modal.show(_ProfileView__WEBPACK_IMPORTED_MODULE_4__["default"], {}, {
        height: 'auto'
      });
    },
    handleSignout: function handleSignout() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSignout$(_context) {
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
    },
    fetchDistricts: function fetchDistricts(region) {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchDistricts$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/regions/".concat(region, "/districts")));

            case 2:
              _ref = _context2.sent;
              data = _ref.data;
              this.districts = data;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    fetchVillages: function fetchVillages(district) {
      var _ref2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchVillages$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/districts/".concat(district, "/villages")));

            case 2:
              _ref2 = _context3.sent;
              data = _ref2.data;
              this.villages = data;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    selectRegion: function selectRegion(region) {
      this.selectedRegion = region;
      this.fetchDistricts(region);
      _events__WEBPACK_IMPORTED_MODULE_2__["default"].$emit("filter:area", {
        name: region,
        type: 'region'
      });
    },
    selectDistrict: function selectDistrict(district) {
      this.selectedDistrict = district;
      this.fetchVillages(district);
      _events__WEBPACK_IMPORTED_MODULE_2__["default"].$emit("filter:area", {
        name: district,
        type: 'district'
      });
    },
    selectVillage: function selectVillage(village) {
      this.selectedVillage = village;
      _events__WEBPACK_IMPORTED_MODULE_2__["default"].$emit("filter:area", {
        name: village,
        type: 'village'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        password_old: '',
        password: '',
        password_confirmation: ''
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.put('self/password'));

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        name: this.$page.auth.user.name,
        email: this.$page.auth.user.email
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.put('self/profile'));

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
                attrs: { offset: "12", placement: "bottom-start" },
                scopedSlots: _vm._u([
                  {
                    key: "popover",
                    fn: function() {
                      return [
                        _c(
                          "div",
                          { staticClass: "w-48 rounded-md shadow-lg" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "py-1 rounded-md bg-white shadow-xs"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.handleProfile($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current mr-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "english"
                                      ? [_vm._v("Your account")]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "kiswahili"
                                      ? [_vm._v("Akaunti yako")]
                                      : _vm._e()
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.handlePassword($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current mr-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "english"
                                      ? [_vm._v("Change password")]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "kiswahili"
                                      ? [_vm._v("Badili nywila")]
                                      : _vm._e()
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.handleSignout($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current mr-2",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
                                        }),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "english"
                                      ? [_vm._v("Sign out")]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentLanguage === "kiswahili"
                                      ? [_vm._v("Toka")]
                                      : _vm._e()
                                  ],
                                  2
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
      _c(
        "div",
        { staticClass: "w-1/4 pt-8 border-r bg-gray-100 min-h-screen" },
        [
          _c("div", { staticClass: "px-6" }, [
            _c(
              "h3",
              {
                staticClass:
                  "text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-4 w-4 fill-current mr-2",
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
                          "M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm.currentLanguage === "english"
                  ? [_vm._v("Dashboards")]
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentLanguage === "kiswahili"
                  ? [_vm._v("Dashibodi")]
                  : _vm._e()
              ],
              2
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
                      "-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg",
                    class: {
                      "text-gray-700 bg-gray-200": _vm.isRoute("latrine")
                    },
                    attrs: { href: "/home" }
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Latrine Construction And Practise")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Matumizi ya vyoo")]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg mt-2",
                    class: {
                      "text-gray-700 bg-gray-200": _vm.isRoute(
                        "handwash_practise"
                      )
                    },
                    attrs: { href: "/handwash_practise" }
                  },
                  [
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Handwashing Infrastructure")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Mazingira ya kunawia")]
                      : _vm._e()
                  ],
                  2
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
                    "text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide"
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-4 w-4 fill-current mr-2",
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
                            "M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.currentLanguage === "english"
                    ? [_vm._v("Settings")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentLanguage === "kiswahili"
                    ? [_vm._v("Mipangilio")]
                    : _vm._e()
                ],
                2
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
                        "-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg",
                      class: {
                        "text-gray-700 bg-gray-200": _vm.isRoute("users.*")
                      },
                      attrs: { href: "/users" }
                    },
                    [
                      _vm.currentLanguage === "english"
                        ? [_vm._v("Users list")]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentLanguage === "kiswahili"
                        ? [_vm._v("Listi ya watumiaji")]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm.isRoute("latrine") || _vm.isRoute("handwash_practise")
            ? _c("div", { staticClass: "mt-10" }, [
                _c("div", { staticClass: "px-6" }, [
                  _c(
                    "h3",
                    {
                      staticClass:
                        "text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-4 w-4 fill-current mr-2",
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
                                "M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _vm.currentLanguage === "english"
                        ? [_vm._v("Region")]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentLanguage === "kiswahili"
                        ? [_vm._v("Mikoa")]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-3" },
                    _vm._l(_vm.regions, function(region) {
                      return _c(
                        "div",
                        { staticClass: "text-sm mt-4 block" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "block flex items-center justify-between",
                              class: {
                                "text-blue-500 font-medium":
                                  region.name === _vm.selectedRegion
                              },
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.selectRegion(region.name)
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "inline-flex items-center" },
                                [
                                  region.name === _vm.selectedRegion
                                    ? [
                                        _c(
                                          "svg",
                                          {
                                            staticClass:
                                              "h-4 w-4 fill-current text-gray-600 mr-2",
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 24 24"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                              }
                                            }),
                                            _c("path", {
                                              attrs: {
                                                d:
                                                  "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "svg",
                                          {
                                            staticClass:
                                              "h-4 w-4 fill-current text-gray-600 mr-2",
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 24 24"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                              }
                                            }),
                                            _c("path", {
                                              attrs: {
                                                d:
                                                  "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm._f("toTitleCase")(region.name)
                                      ) +
                                      " Region\n                                "
                                  )
                                ],
                                2
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.districts, function(district) {
                            return _c(
                              "div",
                              { staticClass: "block mt-3 ml-4" },
                              [
                                _c(
                                  "a",
                                  {
                                    key: district.name,
                                    staticClass: "block flex items-center mt-2",
                                    class: {
                                      "text-blue-500 font-medium":
                                        district.name === _vm.selectedDistrict
                                    },
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.selectDistrict(district.name)
                                      }
                                    }
                                  },
                                  [
                                    district.name === _vm.selectedDistrict
                                      ? [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "h-4 w-4 fill-current text-gray-600 mr-2",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  fill: "none",
                                                  d: "M0 0h24v24H0z"
                                                }
                                              }),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      : [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "h-4 w-4 fill-current text-gray-600 mr-2",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  fill: "none",
                                                  d: "M0 0h24v24H0z"
                                                }
                                              }),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                                }
                                              })
                                            ]
                                          )
                                        ],
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm._f("toTitleCase")(district.name)
                                        ) +
                                        " District\n                                "
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                district.name === _vm.selectedDistrict
                                  ? _c(
                                      "div",
                                      {
                                        key: district.name,
                                        staticClass:
                                          "block mt-3 ml-4 transition duration-500 ease-in-out"
                                      },
                                      [
                                        _c(
                                          "div",
                                          _vm._l(
                                            _vm.villages.slice(0, _vm.limit),
                                            function(village) {
                                              return _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "block flex items-center mt-2 transition duration-500 ease-in-out",
                                                  class: {
                                                    "text-blue-500 font-medium":
                                                      village.name ===
                                                      _vm.selectedVillage
                                                  },
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.selectVillage(
                                                        village.name
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "h-4 w-4 fill-current text-gray-600 mr-2",
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          fill: "none",
                                                          d: "M0 0h24v24H0z"
                                                        }
                                                      }),
                                                      _c("path", {
                                                        attrs: {
                                                          d: "M5 11h14v2H5z"
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm._f("toTitleCase")(
                                                          village.name
                                                        )
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _vm.limit < _vm.villages.length
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "block flex items-center mt-2 text-blue-500 leading-loose text-sm",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    _vm.limit = _vm.limit + 5
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "h-4 w-4 fill-current mr-2",
                                                    attrs: {
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      viewBox: "0 0 24 24"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        fill: "none",
                                                        d: "M0 0h24v24H0z"
                                                      }
                                                    }),
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(
                                                  "\n                                        Show more...\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.limit > _vm.villages.length
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "block mt-2 text-blue-500 leading-loose text-sm",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    _vm.limit = 5
                                                  }
                                                }
                                              },
                                              [_vm._v("Show less...")]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          })
                        ],
                        2
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-3/4 pt-8" }, [_vm._t("default")], 2)
    ]),
    _vm._v(" "),
    _c("footer", { staticClass: "fixed bottom-0 left-0 ml-4 mb-4" }, [
      _c("div", { staticClass: "bg-blue-500 py-1 px-1 rounded-lg" }, [
        _c(
          "button",
          {
            staticClass: "px-3 py-1 rounded text-xs font-medium",
            class: {
              "text-blue-500 bg-white shadow-sm":
                _vm.currentLanguage === "english",
              "text-white": _vm.currentLanguage !== "english"
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.changeLanguage("english")
              }
            }
          },
          [_vm._v("English")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "px-3 py-1 rounded text-xs font-medium",
            class: {
              "text-blue-500 bg-white shadow-sm":
                _vm.currentLanguage === "kiswahili",
              "text-white": _vm.currentLanguage !== "kiswahili"
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.changeLanguage("kiswahili")
              }
            }
          },
          [_vm._v("Kiswahili")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            _vm._v("Change password")
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
              {
                staticClass: "text-sm font-medium",
                attrs: { for: "password_old" }
              },
              [_vm._v("Old password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password_old,
                  expression: "form.password_old"
                }
              ],
              staticClass: "form-input w-full mt-2",
              attrs: { type: "password", id: "password_old" },
              domProps: { value: _vm.form.password_old },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password_old", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.hasError("password_old")
              ? _c(
                  "span",
                  { staticClass: "inline-block text-sm text-red-500 mt-1" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.errors.first("password_old")) +
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
              {
                staticClass: "text-sm font-medium",
                attrs: { for: "password" }
              },
              [_vm._v("Password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password,
                  expression: "form.password"
                }
              ],
              staticClass: "form-input w-full mt-2",
              attrs: { type: "password", id: "password" },
              domProps: { value: _vm.form.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.hasError("password")
              ? _c(
                  "span",
                  { staticClass: "inline-block text-sm text-red-500 mt-1" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.errors.first("password")) +
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
              {
                staticClass: "text-sm font-medium",
                attrs: { for: "password_confirmation" }
              },
              [_vm._v("Confirm password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password_confirmation,
                  expression: "form.password_confirmation"
                }
              ],
              staticClass: "form-input w-full mt-2",
              attrs: { type: "password", id: "password_confirmation" },
              domProps: { value: _vm.form.password_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.form,
                    "password_confirmation",
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _vm.form.hasError("password_confirmation")
              ? _c(
                  "span",
                  { staticClass: "inline-block text-sm text-red-500 mt-1" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.errors.first("password_confirmation")) +
                        "\n                "
                    )
                  ]
                )
              : _vm._e()
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
            [_vm._v("Change password")]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c& ***!
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
            _vm._v("My account [" + _vm._s(_vm.$page.auth.user.role) + "]")
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
            [_vm._v("Update profile")]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
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



/***/ }),

/***/ "./resources/js/Shared/PasswordChange.vue":
/*!************************************************!*\
  !*** ./resources/js/Shared/PasswordChange.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=template&id=1674b307& */ "./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307&");
/* harmony import */ var _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=script&lang=js& */ "./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/PasswordChange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PasswordChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordChange.vue?vue&type=template&id=1674b307& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/PasswordChange.vue?vue&type=template&id=1674b307&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1674b307___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/ProfileView.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/ProfileView.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=template&id=d276eb7c& */ "./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c&");
/* harmony import */ var _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=script&lang=js& */ "./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/ProfileView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProfileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileView.vue?vue&type=template&id=d276eb7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProfileView.vue?vue&type=template&id=d276eb7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_d276eb7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/events.js":
/*!********************************!*\
  !*** ./resources/js/events.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ })

}]);