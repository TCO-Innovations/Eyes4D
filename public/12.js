(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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