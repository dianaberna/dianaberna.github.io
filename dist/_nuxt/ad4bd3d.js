(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56b15182",content,!0,{sourceMap:!1})},149:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("257af960",content,!0,{sourceMap:!1})},150:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("40b32560",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";n(225);var o=n(11),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col h-screen justify-between"},[e("div",{},[e("Header")],1),this._v(" "),e("div",{staticClass:"mb-auto"},[e("Nuxt")],1),this._v(" "),e("div",{staticClass:"h-10"},[e("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(239).default,Footer:n(240).default})},171:function(t,e,n){n(172),t.exports=n(173)},225:function(t,e,n){"use strict";n(148)},226:function(t,e,n){(e=n(23)(!1)).push([t.i,".wrapper{max-width:1280px}.wrapper,.wrapper-small{margin-left:auto;margin-right:auto}.wrapper-small{max-width:1024px;padding-left:1.5rem;padding-right:1.5rem}.flex-center{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},227:function(t,e,n){"use strict";n(149)},228:function(t,e,n){(e=n(23)(!1)).push([t.i,'body{font-family:poppins,sans-serif}.mobile-link{display:block;padding:.5rem .75rem;color:#4a5568;color:rgba(74,85,104,var(--text-opacity));border-radius:.375rem;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.mobile-link,.nav-link{font-size:1.125rem;--text-opacity:1;font-weight:500}.nav-link{margin-left:3rem;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.font-rubik,.nav-link{font-family:rubik,sans-serif}.nav-link{font-weight:500;font-size:20px;position:relative;text-transform:uppercase;text-decoration:none;padding-bottom:8px}.nav-link:after,.nav-link:before{content:"";position:absolute;bottom:2px;left:0;right:0;height:2px;background-color:#d53f8c}.nav-link:before{opacity:0;transform:translateY(-8px);transition:transform 0s cubic-bezier(.175,.885,.32,1.275),opacity 0s}.nav-link:after{opacity:0;transform:translateY(4px);transition:transform .2s cubic-bezier(.175,.885,.32,1.275),opacity .2s}.nav-link:focus:after,.nav-link:focus:before,.nav-link:hover:after,.nav-link:hover:before{opacity:1;transform:translateY(0)}.nav-link:focus:before,.nav-link:hover:before{transition:transform .2s cubic-bezier(.175,.885,.32,1.275),opacity .2s}.nav-link:focus:after,.nav-link:hover:after{transition:transform 0s cubic-bezier(.175,.885,.32,1.275) .2s,opacity 0s .2s}',""]),t.exports=e},229:function(t,e,n){"use strict";n(150)},230:function(t,e,n){(e=n(23)(!1)).push([t.i,".social-link{margin-left:.5rem;margin-right:.5rem;font-size:1.875rem;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}",""]),t.exports=e},239:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}},r=(n(227),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"wrapper py-4 md:py-10 lg:py-20"},[n("div",{staticClass:"px-10 flex justify-between items-center"},[n("div",{staticClass:"logo font-rubik"},[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticClass:"text-2xl font-bold text-gray-700"},[t._v("< DB/ >")])])],1),t._v(" "),n("div",{staticClass:"navbar hidden md:block"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"about"}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link ",attrs:{to:"blog"}},[t._v("Blog")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link ",attrs:{to:"community"}},[t._v("Community")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link ",attrs:{to:"contact"}},[t._v("Contact")])],1),t._v(" "),n("div",{staticClass:"ml-3 flex md:hidden"},[n("button",{staticClass:"flex-center rounded-md",on:{click:t.toggle}},[n("svg",{class:[t.isOpen?"hidden":"block","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),n("svg",{class:[t.isOpen?"block":"hidden","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),n("div",{class:[t.isOpen?"":"hidden","md:hidden"]},[n("div",{staticClass:"px-2 pt-2 pb-3 sm:px-3 bg-primary"},[n("nuxt-link",{staticClass:"mobile-link focus:outline-none hover:text-gray-700",attrs:{to:"portfolio"}},[t._v("Portfolio\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-700",attrs:{to:"about"}},[t._v("About\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-700",attrs:{to:"blog"}},[t._v("Blog\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-700",attrs:{to:"community"}},[t._v("\n            Community")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-700",attrs:{to:"contact"}},[t._v("\n            Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);var o={components:{Social:n(82).default}},r=n(11),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper mx-auto px-10"},[e("hr",{staticClass:"h-px mt-6 border-gray-300 max-w-screen-xl mx-auto"}),this._v(" "),e("div",{staticClass:"md:py-10"},[e("div",{staticClass:"flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"},[e("div",[e("nuxt-link",{attrs:{to:"index"}},[e("p",{staticClass:"text-gray-700 font-semibold"},[this._v(" Diana Bernabei P.IVA 02430130449")])]),this._v(" "),e("nuxt-link",{staticClass:"text-gray-700 font-semibold",attrs:{to:"credits"}},[this._v("Credits")])],1),this._v(" "),e("div",[e("Social")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Social:n(82).default})},82:function(t,e,n){"use strict";n.r(e);var o={},r=(n(229),n(11)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper text-left"},[e("a",{staticClass:"social-link hover:text-pink-600",attrs:{href:"https://github.com/dianaberna",target:"_blank","aria-label":"Github"}},[e("i",{staticClass:"bx bxl-github"})]),this._v(" "),e("a",{staticClass:"social-link hover:text-pink-600",attrs:{href:"https://twitter.com/dianabernabei",target:"_blank","aria-label":"Twitter"}},[e("i",{staticClass:"bx bxl-twitter"})]),this._v(" "),e("a",{staticClass:"social-link hover:text-pink-600",attrs:{href:"https://www.instagram.com/_dianacodes/",target:"_blank","aria-label":"Instagram"}},[e("i",{staticClass:"bx bxl-instagram-alt"})]),this._v(" "),e("a",{staticClass:"social-link hover:text-pink-600",attrs:{href:"https://www.linkedin.com/in/dianabernabei/",target:"_blank","aria-label":"LinkedIn"}},[e("i",{staticClass:"bx bxl-linkedin-square"})]),this._v(" "),e("a",{staticClass:"social-link hover:text-pink-600",attrs:{href:"https://www.twitch.tv/dianacodes",target:"_blank","aria-label":"Twitch"}},[e("i",{staticClass:"bx bxl-twitch"})])])}],!1,null,null,null);e.default=component.exports}},[[171,10,1,11]]]);