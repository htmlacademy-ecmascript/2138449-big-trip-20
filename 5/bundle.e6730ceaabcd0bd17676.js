(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g=function(e){return e instanceof S},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},w=_;w.l=$,w.i=g,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},v=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return f(c?_-g:_+(6-g),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[w.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var f=w.p(c),v=function(e){var t=M(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[f]||1,m=this.$d.getTime()+n*h;return w.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return w.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||h[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,v=w.p(d),h=M(n),m=(h.utcOffset()-this.utcOffset())*e,_=this-h,y=w.m(this,h);return y=(f={},f[u]=y/12,f[l]=y,f[c]=y/3,f[o]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/t,f[s]=_/e,f[i]=_/1e3,f)[v]||_,p?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),k=S.prototype;return M.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,S,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},p=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},v=function(e){return e<0},h=function(e){return v(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?v(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function v(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*u[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(c);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=v.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*u[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/o),e%=o,this.$d.months=h(e/l),e%=l,this.$d.days=h(e/r),e%=r,this.$d.hours=h(e/s),e%=s,this.$d.minutes=h(e/i),e%=i,this.$d.seconds=h(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=e.negative||t.negative||i.negative||s.negative||r.negative||o.negative,c=s.format||r.format||o.format?"T":"",u=(l?"-":"")+"P"+e.format+t.format+i.format+c+s.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/u[f(e)]},m.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?h(t/u[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var i;return i=t?e*u[f(t)]:d(e)?e.$ms:p(e,this).$ms,p(this.$ms+i*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return p(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},v}();return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return p(e,{$l:n},t)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),a.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=s(f,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function t(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.BEFOREEND;if(!(t instanceof b))throw new Error("Can render only components");if(null===n)throw new Error("Container element doesn't exist");n.insertAdjacentElement(i,t.element)}function i(e,t){if(!(e instanceof b&&t instanceof b))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var s=n(379),r=n.n(s),a=n(795),o=n.n(a),l=n(569),c=n.n(l),u=n(565),d=n.n(u),p=n(216),f=n.n(p),v=n(589),h=n.n(v),m=n(10),_={};_.styleTagTransform=h(),_.setAttributes=d(),_.insert=c().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=f(),r()(m.Z,_),m.Z&&m.Z.locals&&m.Z.locals;const y="shake";class b{#e=null;constructor(){if(new.target===b)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),e?.()}),600)}}var g=n(484),$=n.n(g),M=n(646),w=n.n(M);$().extend(w());const S=36e5;function k(e,t){return e?$()(e).format(t):""}const C="DD/MM/YY HH:mm",E={basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:!1,offers:[],type:"flight"};class x extends b{#t=null;#n=null;#i=null;constructor(e){let{point:t=E,onFormSubmit:n,onFormCancel:i}=e;super(),this.#t=t,this.#n=n,this.#i=i,this.element.querySelector("form").addEventListener("submit",this.#s),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#r),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(e){const{dateFrom:t,dateTo:n,destination:i,offers:s,type:r,basePrice:a}=e,o=k(t,C),l=k(n,C);return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n\n          <div class="event__type-item">\n            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n      ${r}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${i.name}" list="destination-list-1">\n      <datalist id="destination-list-1">\n        <option value="Amsterdam"></option>\n        <option value="Geneva"></option>\n        <option value="Chamonix"></option>\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Delete</button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </header>\n  <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n   <label class="event__offer-label" for="event-offer-luggage-1">\n     <span class="event__offer-title">${s.offers[0].title}</span>\n     &plus;&euro;&nbsp;\n     <span class="event__offer-price">${s.offers[0].price}</span>\n   </label>\n </div>\n\n <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n   <label class="event__offer-label" for="event-offer-comfort-1">\n     <span class="event__offer-title">${s.offers[1].title}</span>\n     &plus;&euro;&nbsp;\n     <span class="event__offer-price">${s.offers[1].price}</span>\n   </label>\n </div>\n\n <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n   <label class="event__offer-label" for="event-offer-meal-1">\n     <span class="event__offer-title">${s.offers[2].title}</span>\n     &plus;&euro;&nbsp;\n     <span class="event__offer-price">${s.offers[2].price}</span>\n   </label>\n </div>\n\n <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n   <label class="event__offer-label" for="event-offer-seats-1">\n     <span class="event__offer-title">${s.offers[3].title}</span>\n     &plus;&euro;&nbsp;\n     <span class="event__offer-price">${s.offers[3].price}</span>\n   </label>\n </div>\n\n <div class="event__offer-selector">\n   <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n   <label class="event__offer-label" for="event-offer-train-1">\n     <span class="event__offer-title">${s.offers[4].title}</span>\n     &plus;&euro;&nbsp;\n     <span class="event__offer-price">${s.offers[4].price}</span>\n   </label>\n </div>\n</div>\n    </section>\n\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${i.description}</p>\n    </section>\n  </section>\n</form></li>`}(this.#t)}#s=e=>{e.preventDefault(),this.#n()};#r=e=>{e.preventDefault(),this.#i()}}const A="HH:mm";class D extends b{#t=null;#a=null;constructor(e){let{point:t,onEditClick:n}=e;super(),this.#t=t,this.#a=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o)}get template(){return function(e){const{basePrice:t,dateFrom:n,dateTo:i,destination:s,offers:r,type:a,isFavorite:o}=e,l=o?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${k(n,"MMM DD")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} ${s.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${k(n,A)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${k(i,A)}</time>\n      </p>\n      <p class="event__duration">${function(e,t){const n=$()(t).diff($()(e));let i=0;switch(!0){case n>=864e5:i=$().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=S:i=$().duration(n).format("HH[H] mm[M]");break;case n<S:i=$().duration(n).format("mm[M]")}return i}(n,i)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${t}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${c=r,`<li class="event__offer">\n    <span class="event__offer-title">${c.offers[1].title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${c.offers[1].price}</span>\n  </li>`}\n    </ul>\n    <button class="event__favorite-btn ${l}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var c}(this.#t)}#o=e=>{e.preventDefault(),this.#a()}}class T extends b{get template(){return'<ul class="trip-events__list"></ul>'}}class F extends b{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n <div class="trip-sort__item  trip-sort__item--day">\n   <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n   <label class="trip-sort__btn" for="sort-day">Day</label>\n </div>\n\n <div class="trip-sort__item  trip-sort__item--event">\n   <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n   <label class="trip-sort__btn" for="sort-event">Event</label>\n </div>\n\n <div class="trip-sort__item  trip-sort__item--time">\n   <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n   <label class="trip-sort__btn" for="sort-time">Time</label>\n </div>\n\n <div class="trip-sort__item  trip-sort__item--price">\n   <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n   <label class="trip-sort__btn" for="sort-price">Price</label>\n </div>\n\n <div class="trip-sort__item  trip-sort__item--offer">\n   <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n   <label class="trip-sort__btn" for="sort-offer">Offers</label>\n </div>\n</form>'}}class H extends b{get template(){return'<section class="trip-events"><section>'}}const O=[{type:"train",offers:[{id:"1",title:"Switch to comfort",price:80},{id:"11",title:"Add luggage",price:40},{id:"111",title:"Choose seats",price:20},{id:"1111",title:"Travel by plane",price:120},{id:"11111",title:"Choose wagon",price:30},{id:"1111",title:"Upgrade to VIP",price:200}]},{type:"flight",offers:[{id:"2",title:"Add meal",price:30},{id:"4",title:"Travel by train",price:40},{id:"44",title:"Switch to comfort",price:80},{id:"123",title:"Choose seats",price:50},{id:"444",title:"Switch to VIP",price:160},{id:"123",title:"Choose class",price:90}]},{type:"bus",offers:[{id:"3",title:"Choose seats",price:20},{id:"33",title:"Switch to comfort",price:60},{id:"333",title:"Add luggage",price:42},{id:"3333",title:"Book nearby seats",price:139},{id:"333",title:"Upgrade to bussines",price:92}]},{type:"drive",offers:[{id:"5",title:"Add luggage",price:10},{id:"55",title:"Choose car",price:120},{id:"555",title:"Choose driver",price:100},{id:"5555",title:"Choose way",price:150},{id:"55555",title:"Choose class",price:60}]}],P=[{id:"100",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=2664",description:"Geneva is a beautifull city"},{src:"https://loremflickr.com/248/152?random=23939939393",description:"Evening Geneva"}]},{id:"200",description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random=37535733",description:"Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy."}]},{id:"300",description:"Nunc fermentum tortor ac porta dapibus.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=868668868",description:"Amsterdam is a city on the water"}]},{id:"400",description:"Vake park is great.",name:"Tbilisi",pictures:[{src:"https://loremflickr.com/248/152?random=868668393",description:"Tbilisi is the capital of Georgia"}]}],L=[{id:"23",basePrice:195,dateFrom:"2022-09-08T02:05:16.735Z",dateTo:"2022-09-13T14:23:08.155Z",destination:P[1],isFavorite:!1,offers:O[0],type:"train"},{id:"68",basePrice:273,dateFrom:"2021-01-01T12:00:10.001Z",dateTo:"2021-01-15T14:40:10.235Z",destination:P[2],isFavorite:!0,offers:O[2],type:"bus"},{id:"17",basePrice:379,dateFrom:"2020-12-01T01:00:00.000Z",dateTo:"2020-12-02T11:10:20.080Z",destination:P[0],isFavorite:!1,offers:O[1],type:"flight"},{id:"2",basePrice:153,dateFrom:"2022-10-08T02:05:16.735Z",dateTo:"2022-10-13T14:23:08.155Z",destination:P[3],isFavorite:!1,offers:O[3],type:"drive"}];function Y(){return(e=L)[Math.floor(Math.random()*e.length)];var e}const B=document.querySelector("body"),I=B.querySelector(".page-header").querySelector(".trip-main"),N=I.querySelector(".trip-controls__filters"),Z=B.querySelector(".page-main").querySelector(".trip-events"),j=new class{#l=Array.from({length:3},Y);get points(){return this.#l}},q=new class{#c=null;#u=null;#d=new H;#p=new T;#f=[];constructor(e){let{boardContainer:t,pointsModel:n}=e;this.#c=t,this.#u=n}init(){this.#f=[...this.#u.points],t(this.#d,this.#c),t(new F,this.#d.element),t(this.#p,this.#d.element);for(let e=0;e<this.#f.length;e++)this.#v(this.#f[e])}#v(e){const n=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",n))},s=new D({point:e,onEditClick:()=>{i(r,s),document.addEventListener("keydown",n)}}),r=new x({point:e,onFormSubmit:()=>{a(),document.removeEventListener("keydown",n)},onFormCancel:()=>{a(),document.removeEventListener("keydown",n)}});function a(){i(s,r)}t(s,this.#p.element)}}({boardContainer:Z,pointsModel:j});t(new class extends b{get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}},I,e.AFTERBEGIN),t(new class extends b{get template(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}},N),q.init()})()})();
//# sourceMappingURL=bundle.e6730ceaabcd0bd17676.js.map