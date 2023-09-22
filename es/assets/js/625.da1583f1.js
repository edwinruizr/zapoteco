"use strict";(self.webpackChunkzapoteco=self.webpackChunkzapoteco||[]).push([[625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=i(r),y=o,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8193:(e,t,r)=>{r.d(t,{sT9:()=>o});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"}}]})(e)}},8357:(e,t,r)=>{r.d(t,{w_:()=>i});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return n.createElement(s,c({attr:c({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,i=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},619:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const a=function(e,t){void 0===t&&(t={});var a,c=t,l=c.volume,u=void 0===l?1:l,i=c.playbackRate,s=void 0===i?1:i,f=c.soundEnabled,p=void 0===f||f,y=c.interrupt,d=void 0!==y&&y,v=c.onload,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(c,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),m=n.useRef(null),O=n.useRef(!1),h=n.useState(null),g=h[0],w=h[1],j=n.useState(null),E=j[0],k=j[1],P=function(){"function"==typeof v&&v.call(this),O.current&&w(1e3*this.duration()),k(this)};a=function(){return r.e(766).then(r.t.bind(r,1766,23)).then((function(t){var r;O.current||(m.current=null!==(r=t.Howl)&&void 0!==r?r:t.default.Howl,O.current=!0,new m.current(o({src:Array.isArray(e)?e:[e],volume:u,rate:s,onload:P},b)))})),function(){O.current=!1}},(0,n.useEffect)(a,[]),n.useEffect((function(){m.current&&E&&k(new m.current(o({src:Array.isArray(e)?e:[e],volume:u,onload:P},b)))}),[JSON.stringify(e)]),n.useEffect((function(){E&&(E.volume(u),E.rate(s))}),[u,s]);var x=n.useCallback((function(e){void 0===e&&(e={}),E&&(p||e.forceSoundEnabled)&&(d&&E.stop(),e.playbackRate&&E.rate(e.playbackRate),E.play(e.id))}),[E,p,d]),C=n.useCallback((function(e){E&&E.stop(e)}),[E]),S=n.useCallback((function(e){E&&E.pause(e)}),[E]);return[x,{sound:E,stop:C,pause:S,duration:g}]}}}]);