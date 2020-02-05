(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1:function(t,e,r){t.exports=r(44)},12:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(2),i=r.n(a),s=r(5),c=r.n(s);function h(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var u,l,f={props:{area:{required:!0,type:Object}},data:function(){return{houses:[]}},computed:{areaName:function(){return"".concat(this.area.name?this.area.name:"All"," ").concat(this.area.type?this.area.type:"Regions")}},mounted:function(){this.fetchReport()},methods:{titleCase:function(t){return c.a.titleCase(t)},fetchReport:(u=o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("api/latrine_construction_improvement");case 2:e=t.sent,this.houses=e.data;case 4:case"end":return t.stop()}}),t,this)})),l=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=u.apply(t,e);function a(t){h(o,r,n,a,i,"next",t)}function i(t){h(o,r,n,a,i,"throw",t)}a(void 0)}))},function(){return l.apply(this,arguments)})}},p=r(0),d=Object(p.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow-lg overflow-hidden"},[r("header",{staticClass:"px-6 bg-blue-100 py-4"},[r("h2",{staticClass:"text-lg mb-2"},[t._v("Handwashing Practice Scorecard")]),t._v(" "),r("div",{staticClass:"text-sm text-gray-700"},[t._v("\n            "+t._s(t.areaName)+" - July 2019 to September 2019\n        ")])]),t._v(" "),r("div",{staticClass:"overflow-x-scroll",staticStyle:{height:"42rem"}},[r("table",{staticClass:"whitespace-no-wrap"},[t._m(0),t._v(" "),r("tbody",t._l(t.houses,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"border-b text-left  py-4 px-4"},[t._v("\n                    "+t._s(t.titleCase(e.head_of_house))+"\n                ")]),t._v(" "),r("td",{staticClass:"border-b text-left  py-4 px-4",class:{"bg-green-200":Math.round(e.has_handwash_place),"bg-red-200":!Math.round(e.has_handwash_place)}},[t._v("\n                    "+t._s(Math.round(e.has_handwash_place))+"\n                ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_soap),"bg-red-200":!Math.round(e.has_soap)}},[t._v("\n                    "+t._s(Math.round(e.has_soap))+"\n                ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4",class:{"bg-green-200":Math.round(e.has_handwash_container),"bg-red-200":!Math.round(e.has_handwash_container)}},[t._v("\n                    "+t._s(Math.round(e.has_handwash_container))+"\n                ")]),t._v(" "),r("td",{staticClass:"border-b text-right py-4 px-4 bg-yellow-200"},[t._v("\n                    "+t._s(((e.has_handwash_place+e.has_soap+e.has_handwash_container)/3).toFixed(2))+"\n                ")])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left"},[t._v("\n                    Head Of House\n                ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                    Has handwash place\n                ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                    Has soap\n                ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                    Has handwash container\n                ")]),t._v(" "),r("th",{staticClass:"py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right"},[t._v("\n                    Hand washing practise average\n                ")])])])}],!1,null,null,null);e.default=d.exports},44:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof u?e:u,a=Object.create(o.prototype),i=new b(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function u(){}function l(){}function f(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,o)&&(p=v);var y=f.prototype=u.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var s=c(t[n],t,o);if("throw"!==s.type){var h=s.arg,u=h.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){h.value=t,a(h)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return l.prototype=y.constructor=f,f.constructor=l,f[i]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o){var a=new m(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[i]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);