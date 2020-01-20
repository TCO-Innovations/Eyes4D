(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{0:function(t,s,e){"use strict";function a(t,s,e,a,n,i,r,o){var l,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,s){return l.call(s),d(t,s)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))},17:function(t,s,e){"use strict";e.r(s);var a={props:{area:{required:!0,type:Object}},data:function(){return{isVisible:!1}},computed:{chartOptions:function(){return{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Latrine Type Distribution",margin:36,style:{color:"#333333",fontSize:"14px"}},subtitle:{text:"".concat(this.areaName," - Jan 2019 to Jun 2019")},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},credits:{enabled:!1},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Pour Flush Latrine",y:23.41,sliced:!0,selected:!0},{name:"VIP Latrine",y:11.84},{name:"Traditional Pit Latrine",y:10.85},{name:"EcoSan Latrine",y:4.67},{name:"FLush Latrine",y:4.18},{name:"Improved Traditional Pit Flush",y:7.05},{name:"Improved Shared Latrine",y:17.05}]}]}},areaName:function(){return"".concat(this.area.name?this.area.name:"All"," ").concat(this.area.type?this.area.type:"Regions")}},methods:{toggle:function(){this.isVisible=!this.isVisible}}},n=e(0),i=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mx-auto border-t-4 border-blue-400 shadow-lg overflow-hidden"},[s("div",{staticClass:"px-6 py-8 border-b",class:{"border-b":this.isVisible}},[s("highcharts",{attrs:{options:this.chartOptions}})],1),this._v(" "),this.isVisible?s("div",{staticClass:"px-6 py-6 bg-gray-100"},[this._m(0)]):this._e()])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",{staticClass:"w-full"},[e("tbody",[e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-blue-500 mr-2"}),t._v("\n                            EcoSan Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-green-500 mr-2"}),t._v("\n                            Pour Flush Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-yellow-500 mr-2"}),t._v("\n                            Flush Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-red-500 mr-2"}),t._v("\n                            VIP Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-purple-500 mr-2"}),t._v("\n                            Improved Traditional Pit Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-blue-500 mr-2"}),t._v("\n                            Traditional Pit Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])]),t._v(" "),e("tr",[e("th",{staticClass:"py-1"},[e("div",{staticClass:"flex items-center text-sm font-semibold text-gray-700"},[e("span",{staticClass:"block h-4 w-4 rounded bg-green-500 mr-2"}),t._v("\n                            Improved Shared Latrine\n                        ")])]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("12")]),t._v(" "),e("td",{staticClass:"py-2 px-2 font-normal text-sm"},[t._v("20%")])])])])}],!1,null,null,null);s.default=i.exports}}]);