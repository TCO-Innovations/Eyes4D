(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isVisible: false,
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      date: new Date(),
      period: 'daily',
      statistics: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  watch: {
    day: function day() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    },
    month: function month() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    },
    year: function year() {
      this.date = new Date(this.year, this.month, this.day);
      this.fetchReport();
    }
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Latrine Characteristics',
          margin: 36,
          style: {
            "color": "#333333",
            "fontSize": "14px"
          }
        },
        subtitle: {
          text: 'Ipinda Village: Jan 2019 - Jun 2019'
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Household With Latrines'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
          pointFormat: '<span>{point.name}</span>: <b>{point.y}</b><br/>'
        },
        credits: {
          enabled: false
        },
        series: [{
          colorByPoint: true,
          data: this.statistics
        }]
      };
    }
  },
  methods: {
    toggle: function toggle() {
      return this.isVisible = !this.isVisible;
    },
    getMonthName: function getMonthName(month) {
      return new Date(this.year, month, this.day).toLocaleString('default', {
        month: 'long'
      });
    },
    aggregateAttribute: function aggregateAttribute(response, name) {
      return response.data.map(function (item) {
        return item[name];
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    dailyReport: function dailyReport() {
      this.period = "daily";
      this.fetchReport();
    },
    monthlyReport: function monthlyReport() {
      this.period = "monthly";
      this.fetchReport();
    },
    annuallyReport: function annuallyReport() {
      this.period = "annually";
      this.fetchReport();
    },
    fetchReport: function fetchReport() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/latrine_characteristics', {
        params: {
          period: this.period,
          date: this.date
        }
      }).then(function (response) {
        _this.statistics = _this.transformResult(response);
      });
    },
    transformResult: function transformResult(response) {
      return [{
        name: "Has Latrine",
        y: this.aggregateAttribute(response, 'has_latrine')
      }, {
        name: "Lockable Door",
        y: this.aggregateAttribute(response, 'has_lockable_door')
      }, {
        name: "Brick Wall",
        y: this.aggregateAttribute(response, 'has_brick_wall')
      }, {
        name: "Cemented Floor",
        y: this.aggregateAttribute(response, 'has_cemented_floor')
      }, {
        name: "Iron Sheet Roof",
        y: this.aggregateAttribute(response, 'has_iron_sheet_roof')
      }, {
        name: "Adjacent bathroom",
        y: this.aggregateAttribute(response, 'has_adjacent_bathroom')
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = Object.assign({}, object);
	if (options.skipNull) {
		for (const key of Object.keys(objectCopy)) {
			if (objectCopy[key] === undefined || objectCopy[key] === null) {
				delete objectCopy[key];
			}
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mx-auto shadow-lg overflow-hidden" }, [
    _c(
      "header",
      {
        staticClass:
          "px-6 bg-blue-100 border-b border-blue-100 flex justify-between items-center"
      },
      [
        _c("div", { staticClass: "text-sm text-gray-600" }, [
          _c(
            "button",
            {
              staticClass: "px-2",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggle($event)
                }
              }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(!_vm.isVisible ? "Show" : "Hide") +
                  " Details\n            "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex" }, [
          _c("ul", { staticClass: "flex items-center mx-6" }, [
            _c("li", [
              _c(
                "a",
                {
                  staticClass:
                    "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                  class: { "border-blue-500": _vm.period === "daily" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.dailyReport($event)
                    }
                  }
                },
                [_vm._v("Daily")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass:
                    "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                  class: { "border-blue-500": _vm.period === "monthly" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.monthlyReport($event)
                    }
                  }
                },
                [_vm._v("Monthly")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass:
                    "px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",
                  class: { "border-blue-500": _vm.period === "annually" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.annuallyReport($event)
                    }
                  }
                },
                [_vm._v("Annually")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("form", { staticClass: "flex items-center" }, [
            _vm.period === "daily"
              ? _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.day,
                        expression: "day"
                      }
                    ],
                    staticClass: "bg-blue-100",
                    attrs: { id: "day" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.day = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(
                    new Date(_vm.year, _vm.month + 1, 0).getDate(),
                    function(dayNumber) {
                      return _c("option", { domProps: { value: dayNumber } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(dayNumber) +
                            "\n                    "
                        )
                      ])
                    }
                  ),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.period === "daily" || _vm.period === "monthly"
              ? _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.month,
                        expression: "month"
                      }
                    ],
                    staticClass: "bg-blue-100",
                    attrs: { id: "month" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.month = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(Array(12).keys(), function(monthNumber) {
                    return _c("option", { domProps: { value: monthNumber } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.getMonthName(monthNumber)) +
                          "\n                    "
                      )
                    ])
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.year,
                    expression: "year"
                  }
                ],
                staticClass: "bg-blue-100",
                attrs: { id: "year" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.year = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(Array(5).keys(), function(yearNumber) {
                return _c(
                  "option",
                  { domProps: { value: _vm.year - yearNumber } },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.year - yearNumber) +
                        "\n                    "
                    )
                  ]
                )
              }),
              0
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "px-6 py-8" },
      [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
      1
    ),
    _vm._v(" "),
    _vm.isVisible
      ? _c("div", { staticClass: "px-6 py-6 bg-gray-100" }, [_vm._m(0)])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "w-full" }, [
      _c("tbody", [
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-blue-500 mr-2"
                }),
                _vm._v(" Easy Washable Cemented Floor\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-green-500 mr-2"
                }),
                _vm._v(" Iron Sheet Roof\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-yellow-500 mr-2"
                }),
                _vm._v(" Adjacent Bathroom\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-red-500 mr-2"
                }),
                _vm._v(" Lockable Door\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { staticClass: "py-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center text-sm font-semibold text-gray-700"
              },
              [
                _c("span", {
                  staticClass: "block h-4 w-4 rounded bg-purple-500 mr-2"
                }),
                _vm._v(" Wall With Bricks\n                    ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("12")
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "py-2 px-2 font-normal text-sm" }, [
            _vm._v("20%")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&");
/* harmony import */ var _LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatrineCharacteristics.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/LatrineConstruction/LatrineCharacteristics.vue?vue&type=template&id=3a84fbb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatrineCharacteristics_vue_vue_type_template_id_3a84fbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);