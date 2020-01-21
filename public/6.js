(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(t,e,r){"use strict";function n(t,e,r,n,a,s,o,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}r.d(e,"a",(function(){return n}))},18:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),s=(r(3),{props:{area:{required:!0,type:Object},duration:{required:!0}},data:function(){return{isVisible:!1,day:(new Date).getDate(),month:(new Date).getMonth(),year:(new Date).getFullYear(),date:new Date,period:"daily",statistics:[]}},mounted:function(){this.fetchReport()},watch:{day:function(){this.date=new Date(this.year,this.month,this.day),this.fetchReport()},month:function(){this.date=new Date(this.year,this.month,this.day),this.fetchReport()},year:function(){this.date=new Date(this.year,this.month,this.day),this.fetchReport()},duration:function(t){this.year=t,this.date=new Date(t,this.month,this.day),this.fetchReport()}},computed:{chartOptions:function(){return{chart:{type:"column"},title:{text:"Latrine Characteristics",margin:36,style:{color:"#333333",fontSize:"14px"}},subtitle:{text:"".concat(this.areaName,": Jul 2019 - Sep 2019")},accessibility:{announceNewData:{enabled:!0}},xAxis:{type:"category"},yAxis:{title:{text:"Household With Latrines"}},legend:{enabled:!1},tooltip:{headerFormat:'<span style="font-size:11px">{point.name}</span><br>',pointFormat:"<span>{point.name}</span>: <b>{point.y}</b><br/>"},credits:{enabled:!1},series:[{colorByPoint:!0,data:this.statistics}]}},areaName:function(){return"".concat(this.area.name?this.area.name:"All"," ").concat(this.area.type?this.area.type:"Regions")}},methods:{toggle:function(){return this.isVisible=!this.isVisible},getMonthName:function(t){return new Date(this.year,t,this.day).toLocaleString("default",{month:"long"})},aggregateAttribute:function(t,e){return t.data.map((function(t){return t[e]})).reduce((function(t,e){return t+e}))},dailyReport:function(){this.period="daily",this.fetchReport()},monthlyReport:function(){this.period="monthly",this.fetchReport()},annuallyReport:function(){this.period="annually",this.fetchReport()},fetchReport:function(){var t=this;a.a.get("/api/latrine_characteristics",{params:{period:this.period,date:this.date}}).then((function(e){t.statistics=t.transformResult(e)}))},transformResult:function(t){return[{name:"Has Latrine",y:this.aggregateAttribute(t,"has_latrine")},{name:"Lockable Door",y:this.aggregateAttribute(t,"has_lockable_door")},{name:"Brick Wall",y:this.aggregateAttribute(t,"has_brick_wall")},{name:"Cemented Floor",y:this.aggregateAttribute(t,"has_cemented_floor")},{name:"Iron Sheet Roof",y:this.aggregateAttribute(t,"has_iron_sheet_roof")},{name:"Adjacent bathroom",y:this.aggregateAttribute(t,"has_adjacent_bathroom")}]}}}),o=r(0),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto shadow-lg overflow-hidden"},[r("header",{staticClass:"px-6 bg-blue-100 border-b border-blue-100 flex justify-between items-center"},[r("div",{staticClass:"text-sm text-gray-600"},[r("button",{staticClass:"px-2",on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._v("\n                "+t._s(t.isVisible?"Hide":"Show")+" Details\n            ")])]),t._v(" "),r("div",{staticClass:"flex"},[r("ul",{staticClass:"flex items-center mx-6"},[r("li",[r("a",{staticClass:"px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",class:{"border-blue-500":"daily"===t.period},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.dailyReport(e)}}},[t._v("Daily")])]),t._v(" "),r("li",[r("a",{staticClass:"px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",class:{"border-blue-500":"monthly"===t.period},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.monthlyReport(e)}}},[t._v("Monthly")])]),t._v(" "),r("li",[r("a",{staticClass:"px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500",class:{"border-blue-500":"annually"===t.period},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.annuallyReport(e)}}},[t._v("Annually")])])]),t._v(" "),r("form",{staticClass:"flex items-center"},["daily"===t.period?r("select",{directives:[{name:"model",rawName:"v-model",value:t.day,expression:"day"}],staticClass:"bg-blue-100",attrs:{id:"day"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.day=e.target.multiple?r:r[0]}}},t._l(new Date(t.year,t.month+1,0).getDate(),(function(e){return r("option",{domProps:{value:e}},[t._v("\n                        "+t._s(e)+"\n                    ")])})),0):t._e(),t._v(" "),"daily"===t.period||"monthly"===t.period?r("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"bg-blue-100",attrs:{id:"month"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.month=e.target.multiple?r:r[0]}}},t._l(Array(12).keys(),(function(e){return r("option",{domProps:{value:e}},[t._v("\n                        "+t._s(t.getMonthName(e))+"\n                    ")])})),0):t._e(),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"bg-blue-100",attrs:{id:"year"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.year=e.target.multiple?r:r[0]}}},t._l(Array(5).keys(),(function(e){return r("option",{domProps:{value:t.year-e}},[t._v("\n                        "+t._s(t.year-e)+"\n                    ")])})),0)])])]),t._v(" "),r("div",{staticClass:"px-6 py-8"},[r("highcharts",{attrs:{options:t.chartOptions}})],1),t._v(" "),t.isVisible?r("div",{staticClass:"px-6 py-6 bg-gray-100"},[t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"w-full"},[r("tbody",[r("tr",[r("th",{staticClass:"py-1"},[r("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[r("span",{staticClass:"block h-4 w-4 rounded bg-blue-500 mr-2"}),t._v(" Easy Washable Cemented Floor\n                    ")])]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),r("tr",[r("th",{staticClass:"py-1"},[r("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[r("span",{staticClass:"block h-4 w-4 rounded bg-green-500 mr-2"}),t._v(" Iron Sheet Roof\n                    ")])]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),r("tr",[r("th",{staticClass:"py-1"},[r("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[r("span",{staticClass:"block h-4 w-4 rounded bg-yellow-500 mr-2"}),t._v(" Adjacent Bathroom\n                    ")])]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),r("tr",[r("th",{staticClass:"py-1"},[r("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[r("span",{staticClass:"block h-4 w-4 rounded bg-red-500 mr-2"}),t._v(" Lockable Door\n                    ")])]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),r("tr",[r("th",{staticClass:"py-1"},[r("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[r("span",{staticClass:"block h-4 w-4 rounded bg-purple-500 mr-2"}),t._v(" Wall With Bricks\n                    ")])]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),r("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])])])])}],!1,null,null,null);e.default=i.exports},3:function(t,e,r){"use strict";const n=r(45),a=r(46),s=r(47);function o(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function i(t,e){return e.decode?a(t):t}function l(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function c(t){const e=(t=l(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function u(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function p(t,e){const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":return(t,e,r)=>{const n="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;r[t]=n};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;for(const a of t.split("&")){let[t,o]=s(e.decode?a.replace(/\+/g," "):a,"=");o=void 0===o?null:i(o,e),r(i(t,e),o,n)}for(const t of Object.keys(n)){const r=n[t];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=u(r[t],e);else n[t]=u(r,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((t,e)=>{const r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(r):t[e]=r,t},Object.create(null))}e.extract=c,e.parse=p,e.stringify=(t,e)=>{if(!t)return"";const r=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const a=r.length;return void 0===n||t.skipNull&&null===n?r:null===n?[...r,[o(e,t),"[",a,"]"].join("")]:[...r,[o(e,t),"[",o(a,t),"]=",o(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n?r:null===n?[...r,[o(e,t),"[]"].join("")]:[...r,[o(e,t),"[]=",o(n,t)].join("")];case"comma":return e=>(r,n)=>null==n||0===n.length?r:0===r.length?[[o(e,t),"=",o(n,t)].join("")]:[[r,o(n,t)].join(",")];default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n?r:null===n?[...r,o(e,t)]:[...r,[o(e,t),"=",o(n,t)].join("")]}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),n=Object.assign({},t);if(e.skipNull)for(const t of Object.keys(n))void 0!==n[t]&&null!==n[t]||delete n[t];const a=Object.keys(n);return!1!==e.sort&&a.sort(e.sort),a.map(n=>{const a=t[n];return void 0===a?"":null===a?o(n,e):Array.isArray(a)?a.reduce(r(n),[]).join("&"):o(n,e)+"="+o(a,e)}).filter(t=>t.length>0).join("&")},e.parseUrl=(t,e)=>({url:l(t).split("?")[0]||"",query:p(c(t),e)}),e.stringifyUrl=(t,r)=>{const n=l(t.url).split("?")[0]||"",a=e.extract(t.url),s=e.parse(a),o=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url),i=Object.assign(s,t.query);let c=e.stringify(i,r);return c&&(c=`?${c}`),`${n}${c}${o}`}},45:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},46:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function s(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],s(r),s(n))}function o(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=s(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=o(r[0]);n!==r[0]&&(e[r[0]]=n)}r=a.exec(t)}e["%C2"]="�";for(var s=Object.keys(e),i=0;i<s.length;i++){var l=s[i];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},47:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}}}]);