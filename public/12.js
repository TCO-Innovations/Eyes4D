(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2:function(t,e,r){t.exports=r(44)},22:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),a=r(1),i=r.n(a),s=r(6),c=r.n(s),h={props:{area:{required:!0,type:Object}},data:function(){return{houses:[]}},computed:{areaName:function(){return"".concat(this.area.name?this.area.name:"All"," ").concat(this.area.type?this.area.type:"Regions")}},mounted:function(){this.fetchReport()},methods:{titleCase:function(t){return c.a.titleCase(t)},fetchReport:function(){var t;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(i.a.get("api/latrine_construction_improvement"));case 2:t=e.sent,this.houses=t.data;case 4:case"end":return e.stop()}}),null,this)}}},l=r(0),u=Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow-lg overflow-hidden"},[r("header",{staticClass:"px-6 bg-blue-100 py-4"},[r("h2",{staticClass:"text-lg mb-2"},[t._v("Latrine Construction and Improvement Scorecard")]),t._v(" "),r("div",{staticClass:"text-sm text-gray-700"},[t._v("\n            "+t._s(t.areaName)+" - July 2019 to September 2019\n        ")])]),t._v(" "),r("div",{staticClass:"overflow-x-scroll",staticStyle:{height:"42rem"}},[r("table",{staticClass:"whitespace-no-wrap"},[t._m(0),t._v(" "),r("tbody",t._l(t.houses,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"border-b text-left  py-4 px-4"},[t._v("\n                        "+t._s(t.titleCase(e.head_of_house))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_latrine),"bg-red-200":!Math.round(e.has_latrine)}},[t._v("\n                        "+t._s(Math.round(e.has_latrine))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_cemented_floor),"bg-red-200":!Math.round(e.has_cemented_floor)}},[t._v("\n                        "+t._s(Math.round(e.has_cemented_floor))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_lockable_door),"bg-red-200":!Math.round(e.has_lockable_door)}},[t._v("\n                        "+t._s(Math.round(e.has_lockable_door))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_iron_sheet_roof),"bg-red-200":!Math.round(e.has_iron_sheet_roof)}},[t._v("\n                        "+t._s(Math.round(e.has_iron_sheet_roof))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_brick_wall),"bg-red-200":!Math.round(e.has_brick_wall)}},[t._v("\n                        "+t._s(Math.round(e.has_brick_wall))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_adjacent_bathroom),"bg-red-200":!Math.round(e.has_adjacent_bathroom)}},[t._v("\n                        "+t._s(Math.round(e.has_adjacent_bathroom))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.clean_latrine),"bg-red-200":!Math.round(e.clean_latrine)}},[t._v("\n                        "+t._s(Math.round(e.clean_latrine))+"\n                    ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4 bg-yellow-200"},[t._v("\n                        "+t._s(((e.has_latrine+e.has_cemented_floor+e.has_lockable_door+e.has_iron_sheet_roof+e.has_brick_wall+e.has_adjacent_bathroom+e.clean_latrine)/7).toFixed(2))+"\n                    ")])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"},[t._v("\n                        Head Of House\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Has latrine\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Easy washable cemented floor\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Lockable door\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Iron sheet roof\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Wall with bricks\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Adjacent bathroom\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Clean latrine\n                    ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                        Latrine construction and improvement average\n                    ")])])])}],!1,null,"e295bce6",null);e.default=u.exports},44:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new M(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=h(t,e,r);if("normal"===c.type){if(n=r.done?f:u,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",u="suspendedYield",d="executing",f="completed",p={};function _(){}function g(){}function v(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==r&&n.call(x,a)&&(y=x);var m=v.prototype=_.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var s=h(t[r],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=m.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(c(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),h=n.call(i,"finallyLoc");if(c&&h){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);