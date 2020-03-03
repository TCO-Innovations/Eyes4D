(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
                _c(
                  "h2",
                  { staticClass: "text-lg mb-2" },
                  [
                    _vm.currentLanguage === "english"
                      ? [
                          _vm._v(
                            "Latrine Construction and Improvement Scorecard"
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [_vm._v("Ubora wa miundombinu ya choo")]
                      : _vm._e()
                  ],
                  2
                ),
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
                      _vm._v(" "),
                      _vm.currentLanguage === "english"
                        ? [_vm._v("Present")]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentLanguage === "kiswahili"
                        ? [_vm._v("Ipo")]
                        : _vm._e()
                    ],
                    2
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
                      _vm._v(" "),
                      _vm.currentLanguage === "english"
                        ? [_vm._v("Absent")]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currentLanguage === "kiswahili"
                        ? [_vm._v("Haipo")]
                        : _vm._e()
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "flex items-start text-sm mt-3 text-gray-600"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "inline-block text-center text-red-500 h-3 w-3 mr-2 text-base"
                      },
                      [_vm._v("*")]
                    ),
                    _vm._v(" "),
                    _vm.currentLanguage === "english"
                      ? [_vm._v("Observation has no impact on latrine type")]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentLanguage === "kiswahili"
                      ? [
                          _vm._v(
                            "Uangalizi usiokuwa na madhara kiutendaji wa choo"
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overflow-x-scroll" }, [
            _c("table", { staticClass: "whitespace-no-wrap" }, [
              _c("thead", [
                _c(
                  "tr",
                  {
                    staticClass:
                      "text-xs uppercase tracking-wider text-gray-700 font-semibold"
                  },
                  [
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-left whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Head Of House")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Mkuu wa familia")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Has latrine")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Kuna choo")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Easy washable cemented floor")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Sakafu ya saruji")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Lockable door")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Mlango unafungika")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Iron sheet roof")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Paa la bati")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v(" Wall with bricks")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Ukuta wa tofari")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Adjacent bathroom")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Kuna bafu mkabala na choo")]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("sup", { staticClass: "text-base text-red-500" }, [
                          _vm._v("*")
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Clean latrine")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Choo kisafi")]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("sup", { staticClass: "text-base text-red-500" }, [
                          _vm._v("*")
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "py-4 px-4 border-b text-right whitespace-no-wrap"
                      },
                      [
                        _vm.currentLanguage === "english"
                          ? [_vm._v("Latrine type")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.currentLanguage === "kiswahili"
                          ? [_vm._v("Aina ya choo")]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                )
              ]),
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
                        ? [_vm._m(0, true)]
                        : house.has_latrine === "Yes" &&
                          house.has_cemented_floor === "No"
                        ? [_vm._m(1, true)]
                        : house.has_latrine === 1 &&
                          house.has_cemented_floor === 1 &&
                          (house.has_lockable_door === 1 ||
                            house.has_brick_wall ||
                            house.has_iron_sheet_roof)
                        ? [_vm._m(2, true)]
                        : house.has_latrine === "Yes" &&
                          house.has_cemented_floor === "Yes"
                        ? [_vm._m(3, true)]
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