import{V as xn,W as wn,C as Oe,X as jt,Y as Ft,Z as ye,r as E,_ as Sn,$ as kn,a0 as Cn,a1 as Te,a2 as An,a3 as ge,f as T,o as S,c as I,a as G,a4 as Me,a5 as ut,a6 as En,a7 as Tn,h as g,a8 as H,l as b,R as Bt,H as je,a9 as Pn,aa as In,ab as Nn,M as zt,ac as On,ad as te,ae as Gt,b as _e,w as Z,P as Fe,af as D,ag as Lt,t as Xe,ah as et,ai as tt,aj as Mn,ak as jn,T as q,F as nt,al as Ce,v as X,K as $t,z as dt,am as Fn,an as Bn,ao as ue,ap as Dt,aq as zn,ar as Gn,i as Rt,as as Ln,at as $n,au as qt,av as We,aw as ht,ax as Dn,k as Rn,u as qn,B as Hn,s as Un,p as Vn,e as Wn}from"./D8TBUKrS.js";import{b as Zn}from"./BhU8AHXA.js";import{_ as Kn}from"./DlAUqK2U.js";function Ht(e){var t;const n=jt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ut=ye?window:void 0;function Yn(...e){let t,n,r,a;if(xn(e[0])||Array.isArray(e[0])?([n,r,a]=e,t=Ut):[t,n,r,a]=e,!t)return wn;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],s=()=>{i.forEach(d=>d()),i.length=0},o=(d,p,f,_)=>(d.addEventListener(p,f,_),()=>d.removeEventListener(p,f,_)),l=Oe(()=>[Ht(t),jt(a)],([d,p])=>{s(),d&&i.push(...n.flatMap(f=>r.map(_=>o(d,f,_,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ft(c),c}function Qn(e,t=!1){const n=E(),r=()=>n.value=!!e();return r(),Sn(r,t),n}const pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ft="__vueuse_ssr_handlers__";pt[ft]=pt[ft]||{};var gt=Object.getOwnPropertySymbols,Jn=Object.prototype.hasOwnProperty,Xn=Object.prototype.propertyIsEnumerable,er=(e,t)=>{var n={};for(var r in e)Jn.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&gt)for(var r of gt(e))t.indexOf(r)<0&&Xn.call(e,r)&&(n[r]=e[r]);return n};function tr(e,t,n={}){const r=n,{window:a=Ut}=r,i=er(r,["window"]);let s;const o=Qn(()=>a&&"ResizeObserver"in a),l=()=>{s&&(s.disconnect(),s=void 0)},c=Oe(()=>Ht(e),p=>{l(),o.value&&a&&p&&(s=new ResizeObserver(t),s.observe(p,i))},{immediate:!0,flush:"post"}),d=()=>{l(),c()};return Ft(d),{isSupported:o,stop:d}}var mt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mt||(mt={}));var nr=Object.defineProperty,vt=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,yt=(e,t,n)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ir=(e,t)=>{for(var n in t||(t={}))rr.call(t,n)&&yt(e,n,t[n]);if(vt)for(var n of vt(t))ar.call(t,n)&&yt(e,n,t[n]);return e};const sr={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ir({linear:kn},sr);var or=typeof global=="object"&&global&&global.Object===Object&&global,lr=typeof self=="object"&&self&&self.Object===Object&&self,rt=or||lr||Function("return this")(),ae=rt.Symbol,Vt=Object.prototype,cr=Vt.hasOwnProperty,ur=Vt.toString,de=ae?ae.toStringTag:void 0;function dr(e){var t=cr.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch{}var a=ur.call(e);return r&&(t?e[de]=n:delete e[de]),a}var hr=Object.prototype,pr=hr.toString;function fr(e){return pr.call(e)}var gr="[object Null]",mr="[object Undefined]",_t=ae?ae.toStringTag:void 0;function Wt(e){return e==null?e===void 0?mr:gr:_t&&_t in Object(e)?dr(e):fr(e)}function vr(e){return e!=null&&typeof e=="object"}var yr="[object Symbol]";function at(e){return typeof e=="symbol"||vr(e)&&Wt(e)==yr}function _r(e,t){for(var n=-1,r=e==null?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}var it=Array.isArray,br=1/0,bt=ae?ae.prototype:void 0,xt=bt?bt.toString:void 0;function Zt(e){if(typeof e=="string")return e;if(it(e))return _r(e,Zt)+"";if(at(e))return xt?xt.call(e):"";var t=e+"";return t=="0"&&1/e==-br?"-0":t}function Kt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var xr="[object AsyncFunction]",wr="[object Function]",Sr="[object GeneratorFunction]",kr="[object Proxy]";function Cr(e){if(!Kt(e))return!1;var t=Wt(e);return t==wr||t==Sr||t==xr||t==kr}var De=rt["__core-js_shared__"],wt=function(){var e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ar(e){return!!wt&&wt in e}var Er=Function.prototype,Tr=Er.toString;function Pr(e){if(e!=null){try{return Tr.call(e)}catch{}try{return e+""}catch{}}return""}var Ir=/[\\^$.*+?()[\]{}|]/g,Nr=/^\[object .+?Constructor\]$/,Or=Function.prototype,Mr=Object.prototype,jr=Or.toString,Fr=Mr.hasOwnProperty,Br=RegExp("^"+jr.call(Fr).replace(Ir,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zr(e){if(!Kt(e)||Ar(e))return!1;var t=Cr(e)?Br:Nr;return t.test(Pr(e))}function Gr(e,t){return e==null?void 0:e[t]}function Yt(e,t){var n=Gr(e,t);return zr(n)?n:void 0}function Lr(e,t){return e===t||e!==e&&t!==t}var $r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dr=/^\w*$/;function Rr(e,t){if(it(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||at(e)?!0:Dr.test(e)||!$r.test(e)||t!=null&&e in Object(t)}var me=Yt(Object,"create");function qr(){this.__data__=me?me(null):{},this.size=0}function Hr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ur="__lodash_hash_undefined__",Vr=Object.prototype,Wr=Vr.hasOwnProperty;function Zr(e){var t=this.__data__;if(me){var n=t[e];return n===Ur?void 0:n}return Wr.call(t,e)?t[e]:void 0}var Kr=Object.prototype,Yr=Kr.hasOwnProperty;function Qr(e){var t=this.__data__;return me?t[e]!==void 0:Yr.call(t,e)}var Jr="__lodash_hash_undefined__";function Xr(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&t===void 0?Jr:t,this}function ne(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ne.prototype.clear=qr;ne.prototype.delete=Hr;ne.prototype.get=Zr;ne.prototype.has=Qr;ne.prototype.set=Xr;function ea(){this.__data__=[],this.size=0}function Be(e,t){for(var n=e.length;n--;)if(Lr(e[n][0],t))return n;return-1}var ta=Array.prototype,na=ta.splice;function ra(e){var t=this.__data__,n=Be(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():na.call(t,n,1),--this.size,!0}function aa(e){var t=this.__data__,n=Be(t,e);return n<0?void 0:t[n][1]}function ia(e){return Be(this.__data__,e)>-1}function sa(e,t){var n=this.__data__,r=Be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function se(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}se.prototype.clear=ea;se.prototype.delete=ra;se.prototype.get=aa;se.prototype.has=ia;se.prototype.set=sa;var oa=Yt(rt,"Map");function la(){this.size=0,this.__data__={hash:new ne,map:new(oa||se),string:new ne}}function ca(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ze(e,t){var n=e.__data__;return ca(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ua(e){var t=ze(this,e).delete(e);return this.size-=t?1:0,t}function da(e){return ze(this,e).get(e)}function ha(e){return ze(this,e).has(e)}function pa(e,t){var n=ze(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function re(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}re.prototype.clear=la;re.prototype.delete=ua;re.prototype.get=da;re.prototype.has=ha;re.prototype.set=pa;var fa="Expected a function";function st(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(fa);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var s=e.apply(this,r);return n.cache=i.set(a,s)||i,s};return n.cache=new(st.Cache||re),n}st.Cache=re;var ga=500;function ma(e){var t=st(e,function(r){return n.size===ga&&n.clear(),r}),n=t.cache;return t}var va=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ya=/\\(\\)?/g,_a=ma(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(va,function(n,r,a,i){t.push(a?i.replace(ya,"$1"):r||n)}),t});function ba(e){return e==null?"":Zt(e)}function xa(e,t){return it(e)?e:Rr(e,t)?[e]:_a(ba(e))}var wa=1/0;function Sa(e){if(typeof e=="string"||at(e))return e;var t=e+"";return t=="0"&&1/e==-wa?"-0":t}function ka(e,t){t=xa(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Sa(t[n++])];return n&&n==r?e:void 0}function Ca(e,t,n){var r=e==null?void 0:ka(e,t);return r===void 0?n:r}function Aa(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var a=e[t];r[a[0]]=a[1]}return r}const St=e=>Object.keys(e),Qt=(e="")=>e.split(" ").filter(t=>!!t.trim()),kt=(e,t)=>{!e||!t.trim()||e.classList.add(...Qt(t))},Pe=(e,t)=>{!e||!t.trim()||e.classList.remove(...Qt(t))},he=(e,t)=>{var n;if(!ye||!e||!t)return"";let r=Cn(t);r==="float"&&(r="cssFloat");try{const a=e.style[r];if(a)return a;const i=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return i?i[r]:""}catch{return e.style[r]}};function Ze(e,t="px"){if(!e)return"";if(Te(e)||An(e))return`${e}${t}`;if(ge(e))return e}/*! Element Plus Icons Vue v2.3.1 */var Ea=T({name:"CircleCloseFilled",__name:"circle-close-filled",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})]))}}),Jt=Ea,Ta=T({name:"Close",__name:"close",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),Pa=Ta,Ia=T({name:"InfoFilled",__name:"info-filled",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})]))}}),Xt=Ia,Na=T({name:"Loading",__name:"loading",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})]))}}),Oa=Na,Ma=T({name:"SuccessFilled",__name:"success-filled",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})]))}}),en=Ma,ja=T({name:"WarningFilled",__name:"warning-filled",setup(e){return(t,n)=>(S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[G("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})]))}}),tn=ja;const nn="__epPropKey",Q=e=>e,Fa=e=>Me(e)&&!!e[nn],rn=(e,t)=>{if(!Me(e)||Fa(e))return e;const{values:n,required:r,default:a,type:i,validator:s}=e,l={type:i,required:!!r,validator:n||s?c=>{let d=!1,p=[];if(n&&(p=Array.from(n),ut(e,"default")&&p.push(a),d||(d=p.includes(c))),s&&(d||(d=s(c))),!d&&p.length>0){const f=[...new Set(p)].map(_=>JSON.stringify(_)).join(", ");En(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`)}return d}:void 0,[nn]:!0};return ut(e,"default")&&(l.default=a),l},Ge=e=>Aa(Object.entries(e).map(([t,n])=>[t,rn(n,t)])),Ke=Q([String,Object,Function]),Ba={Close:Pa,SuccessFilled:en,InfoFilled:Xt,WarningFilled:tn,CircleCloseFilled:Jt},Ct={success:en,warning:tn,error:Jt,info:Xt},ot=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(t??{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},za=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),Ga=e=>(e.install=Tn,e),La={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},$a=["","default","small","large"],Da=e=>e,Ye=({from:e,replacement:t,scope:n,version:r,ref:a,type:i="API"},s)=>{Oe(()=>g(s),o=>{},{immediate:!0})};var Ra={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const qa=e=>(t,n)=>Ha(t,n,g(e)),Ha=(e,t,n)=>Ca(n,e,e).replace(/\{(\w+)\}/g,(r,a)=>{var i;return`${(i=t==null?void 0:t[a])!=null?i:`{${a}}`}`}),Ua=e=>{const t=b(()=>g(e).name),n=Bt(e)?e:E(e);return{lang:t,locale:n,t:qa(e)}},an=Symbol("localeContextKey"),Va=e=>{const t=e||H(an,E());return Ua(b(()=>t.value||Ra))},Ae="el",Wa="is-",J=(e,t,n,r,a)=>{let i=`${e}-${t}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),a&&(i+=`--${a}`),i},sn=Symbol("namespaceContextKey"),Za=e=>{const t=e||(je()?H(sn,E(Ae)):E(Ae));return b(()=>g(t)||Ae)},oe=(e,t)=>{const n=Za(t);return{namespace:n,b:(m="")=>J(n.value,e,m,"",""),e:m=>m?J(n.value,e,"",m,""):"",m:m=>m?J(n.value,e,"","",m):"",be:(m,y)=>m&&y?J(n.value,e,m,y,""):"",em:(m,y)=>m&&y?J(n.value,e,"",m,y):"",bm:(m,y)=>m&&y?J(n.value,e,m,"",y):"",bem:(m,y,x)=>m&&y&&x?J(n.value,e,m,y,x):"",is:(m,...y)=>{const x=y.length>=1?y[0]:!0;return m&&x?`${Wa}${m}`:""},cssVar:m=>{const y={};for(const x in m)m[x]&&(y[`--${n.value}-${x}`]=m[x]);return y},cssVarName:m=>`--${n.value}-${m}`,cssVarBlock:m=>{const y={};for(const x in m)m[x]&&(y[`--${n.value}-${e}-${x}`]=m[x]);return y},cssVarBlockName:m=>`--${n.value}-${e}-${m}`}},on=e=>{const t=je();return b(()=>{var n,r;return(r=(n=t==null?void 0:t.proxy)==null?void 0:n.$props)==null?void 0:r[e]})},Ka=rn({type:String,values:$a,required:!1}),ln=Symbol("size"),Ya=()=>{const e=H(ln,{});return b(()=>g(e.size)||"")},cn=Symbol(),Ie=E();function lt(e,t=void 0){const n=je()?H(cn,Ie):Ie;return e?b(()=>{var r,a;return(a=(r=n.value)==null?void 0:r[e])!=null?a:t}):n}function un(e,t){const n=lt(),r=oe(e,b(()=>{var o;return((o=n.value)==null?void 0:o.namespace)||Ae})),a=Va(b(()=>{var o;return(o=n.value)==null?void 0:o.locale})),i=Pn(b(()=>{var o;return((o=n.value)==null?void 0:o.zIndex)||In})),s=b(()=>{var o;return g(t)||((o=n.value)==null?void 0:o.size)||""});return Qa(b(()=>g(n)||{})),{ns:r,locale:a,zIndex:i,size:s}}const Qa=(e,t,n=!1)=>{var r;const a=!!je(),i=a?lt():void 0,s=(r=void 0)!=null?r:a?zt:void 0;if(!s)return;const o=b(()=>{const l=g(e);return i!=null&&i.value?Ja(i.value,l):l});return s(cn,o),s(an,b(()=>o.value.locale)),s(sn,b(()=>o.value.namespace)),s(Nn,b(()=>o.value.zIndex)),s(ln,{size:b(()=>o.value.size||"")}),(n||!Ie.value)&&(Ie.value=o.value),o},Ja=(e,t)=>{const n=[...new Set([...St(e),...St(t)])],r={};for(const a of n)r[a]=t[a]!==void 0?t[a]:e[a];return r},At={};var be=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Xa=Ge({size:{type:Q([Number,String])},color:{type:String}}),ei=T({name:"ElIcon",inheritAttrs:!1}),ti=T({...ei,props:Xa,setup(e){const t=e,n=oe("icon"),r=b(()=>{const{size:a,color:i}=t;return!a&&!i?{}:{fontSize:On(a)?void 0:Ze(a),"--color":i}});return(a,i)=>(S(),I("i",Gt({class:g(n).b(),style:g(r)},a.$attrs),[te(a.$slots,"default")],16))}});var ni=be(ti,[["__file","icon.vue"]]);const Ne=ot(ni),ct=Symbol("formContextKey"),dn=Symbol("formItemContextKey"),ri=(e,t={})=>{const n=E(void 0),r=t.prop?n:on("size"),a=t.global?n:Ya(),i=t.form?{size:void 0}:H(ct,void 0),s=t.formItem?{size:void 0}:H(dn,void 0);return b(()=>r.value||g(e)||(s==null?void 0:s.size)||(i==null?void 0:i.size)||a.value||"")},hn=e=>{const t=on("disabled"),n=H(ct,void 0);return b(()=>t.value||g(e)||(n==null?void 0:n.disabled)||!1)},ai=()=>{const e=H(ct,void 0),t=H(dn,void 0);return{form:e,formItem:t}},ii=Ge({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:Q([String,Object,Array])},badgeStyle:{type:Q([String,Object,Array])},offset:{type:Q(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),si=["textContent"],oi=T({name:"ElBadge"}),li=T({...oi,props:ii,setup(e,{expose:t}){const n=e,r=oe("badge"),a=b(()=>n.isDot?"":Te(n.value)&&Te(n.max)?n.max<n.value?`${n.max}+`:n.value===0&&!n.showZero?"":`${n.value}`:`${n.value}`),i=b(()=>{var s,o,l,c,d,p;return[{backgroundColor:n.color,marginRight:Ze(-((o=(s=n.offset)==null?void 0:s[0])!=null?o:0)),marginTop:Ze((c=(l=n.offset)==null?void 0:l[1])!=null?c:0)},(d=n.dotStyle)!=null?d:{},(p=n.badgeStyle)!=null?p:{}]});return Ye({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},b(()=>!!n.dotStyle)),Ye({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},b(()=>!!n.dotClass)),t({content:a}),(s,o)=>(S(),I("div",{class:D(g(r).b())},[te(s.$slots,"default"),_e(tt,{name:`${g(r).namespace.value}-zoom-in-center`,persisted:""},{default:Z(()=>[Fe(G("sup",{class:D([g(r).e("content"),g(r).em("content",s.type),g(r).is("fixed",!!s.$slots.default),g(r).is("dot",s.isDot),s.dotClass,s.badgeClass]),style:Lt(g(i)),textContent:Xe(g(a))},null,14,si),[[et,!s.hidden&&(g(a)||s.isDot)]])]),_:1},8,["name"])],2))}});var ci=be(li,[["__file","badge.vue"]]);const ui=ot(ci),pn=Symbol("buttonGroupContextKey"),di=(e,t)=>{Ye({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},b(()=>e.type==="text"));const n=H(pn,void 0),r=lt("button"),{form:a}=ai(),i=ri(b(()=>n==null?void 0:n.size)),s=hn(),o=E(),l=Mn(),c=b(()=>e.type||(n==null?void 0:n.type)||""),d=b(()=>{var v,m,y;return(y=(m=e.autoInsertSpace)!=null?m:(v=r.value)==null?void 0:v.autoInsertSpace)!=null?y:!1}),p=b(()=>e.tag==="button"?{ariaDisabled:s.value||e.loading,disabled:s.value||e.loading,autofocus:e.autofocus,type:e.nativeType}:{}),f=b(()=>{var v;const m=(v=l.default)==null?void 0:v.call(l);if(d.value&&(m==null?void 0:m.length)===1){const y=m[0];if((y==null?void 0:y.type)===jn){const x=y.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(x.trim())}}return!1});return{_disabled:s,_size:i,_type:c,_ref:o,_props:p,shouldAddSpace:f,handleClick:v=>{e.nativeType==="reset"&&(a==null||a.resetFields()),t("click",v)}}},hi=["default","primary","success","warning","info","danger","text",""],pi=["button","submit","reset"],Qe=Ge({size:Ka,disabled:Boolean,type:{type:String,values:hi,default:""},icon:{type:Ke},nativeType:{type:String,values:pi,default:"button"},loading:Boolean,loadingIcon:{type:Ke,default:()=>Oa},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:Q([String,Object]),default:"button"}}),fi={click:e=>e instanceof MouseEvent};function N(e,t){gi(e)&&(e="100%");var n=mi(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function xe(e){return Math.min(1,Math.max(0,e))}function gi(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function mi(e){return typeof e=="string"&&e.indexOf("%")!==-1}function fn(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function we(e){return e<=1?"".concat(Number(e)*100,"%"):e}function ee(e){return e.length===1?"0"+e:String(e)}function vi(e,t,n){return{r:N(e,255)*255,g:N(t,255)*255,b:N(n,255)*255}}function Et(e,t,n){e=N(e,255),t=N(t,255),n=N(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i=0,s=0,o=(r+a)/2;if(r===a)s=0,i=0;else{var l=r-a;switch(s=o>.5?l/(2-r-a):l/(r+a),r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s,l:o}}function Re(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yi(e,t,n){var r,a,i;if(e=N(e,360),t=N(t,100),n=N(n,100),t===0)a=n,i=n,r=n;else{var s=n<.5?n*(1+t):n+t-n*t,o=2*n-s;r=Re(o,s,e+1/3),a=Re(o,s,e),i=Re(o,s,e-1/3)}return{r:r*255,g:a*255,b:i*255}}function Tt(e,t,n){e=N(e,255),t=N(t,255),n=N(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i=0,s=r,o=r-a,l=r===0?0:o/r;if(r===a)i=0;else{switch(r){case e:i=(t-n)/o+(t<n?6:0);break;case t:i=(n-e)/o+2;break;case n:i=(e-t)/o+4;break}i/=6}return{h:i,s:l,v:s}}function _i(e,t,n){e=N(e,360)*6,t=N(t,100),n=N(n,100);var r=Math.floor(e),a=e-r,i=n*(1-t),s=n*(1-a*t),o=n*(1-(1-a)*t),l=r%6,c=[n,s,i,i,o,n][l],d=[o,n,n,s,i,i][l],p=[i,i,o,n,n,s][l];return{r:c*255,g:d*255,b:p*255}}function Pt(e,t,n,r){var a=[ee(Math.round(e).toString(16)),ee(Math.round(t).toString(16)),ee(Math.round(n).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function bi(e,t,n,r,a){var i=[ee(Math.round(e).toString(16)),ee(Math.round(t).toString(16)),ee(Math.round(n).toString(16)),ee(xi(r))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function xi(e){return Math.round(parseFloat(e)*255).toString(16)}function It(e){return z(e)/255}function z(e){return parseInt(e,16)}function wi(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Je={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Si(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,s=!1,o=!1;return typeof e=="string"&&(e=Ai(e)),typeof e=="object"&&(W(e.r)&&W(e.g)&&W(e.b)?(t=vi(e.r,e.g,e.b),s=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):W(e.h)&&W(e.s)&&W(e.v)?(r=we(e.s),a=we(e.v),t=_i(e.h,r,a),s=!0,o="hsv"):W(e.h)&&W(e.s)&&W(e.l)&&(r=we(e.s),i=we(e.l),t=yi(e.h,r,i),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=fn(n),{ok:s,format:e.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var ki="[-\\+]?\\d+%?",Ci="[-\\+]?\\d*\\.\\d+%?",Y="(?:".concat(Ci,")|(?:").concat(ki,")"),qe="[\\s|\\(]+(".concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")\\s*\\)?"),He="[\\s|\\(]+(".concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")\\s*\\)?"),$={CSS_UNIT:new RegExp(Y),rgb:new RegExp("rgb"+qe),rgba:new RegExp("rgba"+He),hsl:new RegExp("hsl"+qe),hsla:new RegExp("hsla"+He),hsv:new RegExp("hsv"+qe),hsva:new RegExp("hsva"+He),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ai(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Je[e])e=Je[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=$.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=$.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=$.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=$.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=$.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=$.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=$.hex8.exec(e),n?{r:z(n[1]),g:z(n[2]),b:z(n[3]),a:It(n[4]),format:t?"name":"hex8"}:(n=$.hex6.exec(e),n?{r:z(n[1]),g:z(n[2]),b:z(n[3]),format:t?"name":"hex"}:(n=$.hex4.exec(e),n?{r:z(n[1]+n[1]),g:z(n[2]+n[2]),b:z(n[3]+n[3]),a:It(n[4]+n[4]),format:t?"name":"hex8"}:(n=$.hex3.exec(e),n?{r:z(n[1]+n[1]),g:z(n[2]+n[2]),b:z(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function W(e){return!!$.CSS_UNIT.exec(String(e))}var Ei=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=wi(t)),this.originalInput=t;var a=Si(t);this.originalInput=t,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:a.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,a,i=t.r/255,s=t.g/255,o=t.b/255;return i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),.2126*n+.7152*r+.0722*a},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=fn(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Tt(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Tt(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Et(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Et(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Pt(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),bi(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(N(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(N(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Pt(this.r,this.g,this.b,!1),n=0,r=Object.entries(Je);n<r.length;n++){var a=r[n],i=a[0],s=a[1];if(t===s)return i}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,a=this.a<1&&this.a>=0,i=!n&&a&&(t.startsWith("hex")||t==="name");return i?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=xe(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=xe(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=xe(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=xe(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),a=new e(t).toRgb(),i=n/100,s={r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a};return new e(s)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),a=360/n,i=[this];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,i.push(new e(r));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,a=n.s,i=n.v,s=[],o=1/t;t--;)s.push(new e({h:r,s:a,v:i})),i=(i+o)%1;return s},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),a=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/a,g:(n.g*n.a+r.g*r.a*(1-n.a))/a,b:(n.b*n.a+r.b*r.a*(1-n.a))/a,a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,a=[this],i=360/t,s=1;s<t;s++)a.push(new e({h:(r+s*i)%360,s:n.s,l:n.l}));return a},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();function K(e,t=20){return e.mix("#141414",t).toString()}function Ti(e){const t=hn(),n=oe("button");return b(()=>{let r={};const a=e.color;if(a){const i=new Ei(a),s=e.dark?i.tint(20).toString():K(i,20);if(e.plain)r=n.cssVarBlock({"bg-color":e.dark?K(i,90):i.tint(90).toString(),"text-color":a,"border-color":e.dark?K(i,50):i.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":a,"hover-border-color":a,"active-bg-color":s,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":s}),t.value&&(r[n.cssVarBlockName("disabled-bg-color")]=e.dark?K(i,90):i.tint(90).toString(),r[n.cssVarBlockName("disabled-text-color")]=e.dark?K(i,50):i.tint(50).toString(),r[n.cssVarBlockName("disabled-border-color")]=e.dark?K(i,80):i.tint(80).toString());else{const o=e.dark?K(i,30):i.tint(30).toString(),l=i.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(r=n.cssVarBlock({"bg-color":a,"text-color":l,"border-color":a,"hover-bg-color":o,"hover-text-color":l,"hover-border-color":o,"active-bg-color":s,"active-border-color":s}),t.value){const c=e.dark?K(i,50):i.tint(50).toString();r[n.cssVarBlockName("disabled-bg-color")]=c,r[n.cssVarBlockName("disabled-text-color")]=e.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,r[n.cssVarBlockName("disabled-border-color")]=c}}}return r})}const Pi=T({name:"ElButton"}),Ii=T({...Pi,props:Qe,emits:fi,setup(e,{expose:t,emit:n}){const r=e,a=Ti(r),i=oe("button"),{_ref:s,_size:o,_type:l,_disabled:c,_props:d,shouldAddSpace:p,handleClick:f}=di(r,n),_=b(()=>[i.b(),i.m(l.value),i.m(o.value),i.is("disabled",c.value),i.is("loading",r.loading),i.is("plain",r.plain),i.is("round",r.round),i.is("circle",r.circle),i.is("text",r.text),i.is("link",r.link),i.is("has-bg",r.bg)]);return t({ref:s,size:o,type:l,disabled:c,shouldAddSpace:p}),(v,m)=>(S(),q(Ce(v.tag),Gt({ref_key:"_ref",ref:s},g(d),{class:g(_),style:g(a),onClick:g(f)}),{default:Z(()=>[v.loading?(S(),I(nt,{key:0},[v.$slots.loading?te(v.$slots,"loading",{key:0}):(S(),q(g(Ne),{key:1,class:D(g(i).is("loading"))},{default:Z(()=>[(S(),q(Ce(v.loadingIcon)))]),_:1},8,["class"]))],64)):v.icon||v.$slots.icon?(S(),q(g(Ne),{key:1},{default:Z(()=>[v.icon?(S(),q(Ce(v.icon),{key:0})):te(v.$slots,"icon",{key:1})]),_:3})):X("v-if",!0),v.$slots.default?(S(),I("span",{key:2,class:D({[g(i).em("text","expand")]:g(p)})},[te(v.$slots,"default")],2)):X("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var Ni=be(Ii,[["__file","button.vue"]]);const Oi={size:Qe.size,type:Qe.type},Mi=T({name:"ElButtonGroup"}),ji=T({...Mi,props:Oi,setup(e){const t=e;zt(pn,$t({size:dt(t,"size"),type:dt(t,"type")}));const n=oe("button");return(r,a)=>(S(),I("div",{class:D(`${g(n).b("group")}`)},[te(r.$slots,"default")],2))}});var gn=be(ji,[["__file","button-group.vue"]]);const Fi=ot(Ni,{ButtonGroup:gn});Ga(gn);function Bi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zi(e){let t;const n=E(!1),r=$t({...e,originalPosition:"",originalOverflow:"",visible:!1});function a(f){r.text=f}function i(){const f=r.parent,_=p.ns;if(!f.vLoadingAddClassList){let v=f.getAttribute("loading-number");v=Number.parseInt(v)-1,v?f.setAttribute("loading-number",v.toString()):(Pe(f,_.bm("parent","relative")),f.removeAttribute("loading-number")),Pe(f,_.bm("parent","hidden"))}s(),d.unmount()}function s(){var f,_;(_=(f=p.$el)==null?void 0:f.parentNode)==null||_.removeChild(p.$el)}function o(){var f;e.beforeClose&&!e.beforeClose()||(n.value=!0,clearTimeout(t),t=window.setTimeout(l,400),r.visible=!1,(f=e.closed)==null||f.call(e))}function l(){if(!n.value)return;const f=r.parent;n.value=!1,f.vLoadingAddClassList=void 0,i()}const c=T({name:"ElLoading",setup(f,{expose:_}){const{ns:v,zIndex:m}=un("loading");return _({ns:v,zIndex:m}),()=>{const y=r.spinner||r.svg,x=ue("svg",{class:"circular",viewBox:r.svgViewBox?r.svgViewBox:"0 0 50 50",...y?{innerHTML:y}:{}},[ue("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),L=r.text?ue("p",{class:v.b("text")},[r.text]):void 0;return ue(tt,{name:v.b("fade"),onAfterLeave:l},{default:Z(()=>[Fe(_e("div",{style:{backgroundColor:r.background||""},class:[v.b("mask"),r.customClass,r.fullscreen?"is-fullscreen":""]},[ue("div",{class:v.b("spinner")},[x,L])]),[[et,r.visible]])])})}}}),d=Fn(c),p=d.mount(document.createElement("div"));return{...Bn(r),setText:a,removeElLoadingChild:s,close:o,handleAfterLeave:l,vm:p,get $el(){return p.$el}}}let Se;const Gi=function(e={}){if(!ye)return;const t=Li(e);if(t.fullscreen&&Se)return Se;const n=zi({...t,closed:()=>{var a;(a=t.closed)==null||a.call(t),t.fullscreen&&(Se=void 0)}});$i(t,t.parent,n),Nt(t,t.parent,n),t.parent.vLoadingAddClassList=()=>Nt(t,t.parent,n);let r=t.parent.getAttribute("loading-number");return r?r=`${Number.parseInt(r)+1}`:r="1",t.parent.setAttribute("loading-number",r),t.parent.appendChild(n.$el),Dt(()=>n.visible.value=t.visible),t.fullscreen&&(Se=n),n},Li=e=>{var t,n,r,a;let i;return ge(e.target)?i=(t=document.querySelector(e.target))!=null?t:document.body:i=e.target||document.body,{parent:i===document.body||e.body?document.body:i,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:i===document.body&&((n=e.fullscreen)!=null?n:!0),lock:(r=e.lock)!=null?r:!1,customClass:e.customClass||"",visible:(a=e.visible)!=null?a:!0,target:i}},$i=async(e,t,n)=>{const{nextZIndex:r}=n.vm.zIndex||n.vm._.exposed.zIndex,a={};if(e.fullscreen)n.originalPosition.value=he(document.body,"position"),n.originalOverflow.value=he(document.body,"overflow"),a.zIndex=r();else if(e.parent===document.body){n.originalPosition.value=he(document.body,"position"),await Dt();for(const i of["top","left"]){const s=i==="top"?"scrollTop":"scrollLeft";a[i]=`${e.target.getBoundingClientRect()[i]+document.body[s]+document.documentElement[s]-Number.parseInt(he(document.body,`margin-${i}`),10)}px`}for(const i of["height","width"])a[i]=`${e.target.getBoundingClientRect()[i]}px`}else n.originalPosition.value=he(t,"position");for(const[i,s]of Object.entries(a))n.$el.style[i]=s},Nt=(e,t,n)=>{const r=n.vm.ns||n.vm._.exposed.ns;["absolute","fixed","sticky"].includes(n.originalPosition.value)?Pe(t,r.bm("parent","relative")):kt(t,r.bm("parent","relative")),e.fullscreen&&e.lock?kt(t,r.bm("parent","hidden")):Pe(t,r.bm("parent","hidden"))},Ee=Symbol("ElLoading"),Ot=(e,t)=>{var n,r,a,i;const s=t.instance,o=f=>Me(t.value)?t.value[f]:void 0,l=f=>{const _=ge(f)&&(s==null?void 0:s[f])||f;return _&&E(_)},c=f=>l(o(f)||e.getAttribute(`element-loading-${zn(f)}`)),d=(n=o("fullscreen"))!=null?n:t.modifiers.fullscreen,p={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:d,target:(r=o("target"))!=null?r:d?void 0:e,body:(a=o("body"))!=null?a:t.modifiers.body,lock:(i=o("lock"))!=null?i:t.modifiers.lock};e[Ee]={options:p,instance:Gi(p)}},Di=(e,t)=>{for(const n of Object.keys(t))Bt(t[n])&&(t[n].value=e[n])},Ri={mounted(e,t){t.value&&Ot(e,t)},updated(e,t){const n=e[Ee];t.oldValue!==t.value&&(t.value&&!t.oldValue?Ot(e,t):t.value&&t.oldValue?Me(t.value)&&Di(t.value,n.options):n==null||n.instance.close())},unmounted(e){var t;(t=e[Ee])==null||t.instance.close(),e[Ee]=null}},mn=["success","info","warning","error"],O=Da({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:ye?document.body:void 0}),qi=Ge({customClass:{type:String,default:O.customClass},center:{type:Boolean,default:O.center},dangerouslyUseHTMLString:{type:Boolean,default:O.dangerouslyUseHTMLString},duration:{type:Number,default:O.duration},icon:{type:Ke,default:O.icon},id:{type:String,default:O.id},message:{type:Q([String,Object,Function]),default:O.message},onClose:{type:Q(Function),default:O.onClose},showClose:{type:Boolean,default:O.showClose},type:{type:String,values:mn,default:O.type},plain:{type:Boolean,default:O.plain},offset:{type:Number,default:O.offset},zIndex:{type:Number,default:O.zIndex},grouping:{type:Boolean,default:O.grouping},repeatNum:{type:Number,default:O.repeatNum}}),Hi={destroy:()=>!0},R=Gn([]),Ui=e=>{const t=R.findIndex(a=>a.id===e),n=R[t];let r;return t>0&&(r=R[t-1]),{current:n,prev:r}},Vi=e=>{const{prev:t}=Ui(e);return t?t.vm.exposed.bottom.value:0},Wi=(e,t)=>R.findIndex(r=>r.id===e)>0?16:t,Zi=["id"],Ki=["innerHTML"],Yi=T({name:"ElMessage"}),Qi=T({...Yi,props:qi,emits:Hi,setup(e,{expose:t}){const n=e,{Close:r}=Ba,{ns:a,zIndex:i}=un("message"),{currentZIndex:s,nextZIndex:o}=i,l=E(),c=E(!1),d=E(0);let p;const f=b(()=>n.type?n.type==="error"?"danger":n.type:"info"),_=b(()=>{const u=n.type;return{[a.bm("icon",u)]:u&&Ct[u]}}),v=b(()=>n.icon||Ct[n.type]||""),m=b(()=>Vi(n.id)),y=b(()=>Wi(n.id,n.offset)+m.value),x=b(()=>d.value+y.value),L=b(()=>({top:`${y.value}px`,zIndex:s.value}));function j(){n.duration!==0&&({stop:p}=$n(()=>{h()},n.duration))}function P(){p==null||p()}function h(){c.value=!1}function w({code:u}){u===La.esc&&h()}return Rt(()=>{j(),o(),c.value=!0}),Oe(()=>n.repeatNum,()=>{P(),j()}),Yn(document,"keydown",w),tr(l,()=>{d.value=l.value.getBoundingClientRect().height}),t({visible:c,bottom:x,close:h}),(u,C)=>(S(),q(tt,{name:g(a).b("fade"),onBeforeLeave:u.onClose,onAfterLeave:C[0]||(C[0]=k=>u.$emit("destroy")),persisted:""},{default:Z(()=>[Fe(G("div",{id:u.id,ref_key:"messageRef",ref:l,class:D([g(a).b(),{[g(a).m(u.type)]:u.type},g(a).is("center",u.center),g(a).is("closable",u.showClose),g(a).is("plain",u.plain),u.customClass]),style:Lt(g(L)),role:"alert",onMouseenter:P,onMouseleave:j},[u.repeatNum>1?(S(),q(g(ui),{key:0,value:u.repeatNum,type:g(f),class:D(g(a).e("badge"))},null,8,["value","type","class"])):X("v-if",!0),g(v)?(S(),q(g(Ne),{key:1,class:D([g(a).e("icon"),g(_)])},{default:Z(()=>[(S(),q(Ce(g(v))))]),_:1},8,["class"])):X("v-if",!0),te(u.$slots,"default",{},()=>[u.dangerouslyUseHTMLString?(S(),I(nt,{key:1},[X(" Caution here, message could've been compromised, never use user's input as message "),G("p",{class:D(g(a).e("content")),innerHTML:u.message},null,10,Ki)],2112)):(S(),I("p",{key:0,class:D(g(a).e("content"))},Xe(u.message),3))]),u.showClose?(S(),q(g(Ne),{key:2,class:D(g(a).e("closeBtn")),onClick:Ln(h,["stop"])},{default:Z(()=>[_e(g(r))]),_:1},8,["class","onClick"])):X("v-if",!0)],46,Zi),[[et,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Ji=be(Qi,[["__file","message.vue"]]);let Xi=1;const vn=e=>{const t=!e||ge(e)||qt(e)||We(e)?{message:e}:e,n={...O,...t};if(!n.appendTo)n.appendTo=document.body;else if(ge(n.appendTo)){let r=document.querySelector(n.appendTo);Dn(r)||(r=document.body),n.appendTo=r}return n},es=e=>{const t=R.indexOf(e);if(t===-1)return;R.splice(t,1);const{handler:n}=e;n.close()},ts=({appendTo:e,...t},n)=>{const r=`message_${Xi++}`,a=t.onClose,i=document.createElement("div"),s={...t,id:r,onClose:()=>{a==null||a(),es(d)},onDestroy:()=>{ht(null,i)}},o=_e(Ji,s,We(s.message)||qt(s.message)?{default:We(s.message)?s.message:()=>s.message}:null);o.appContext=n||ie._context,ht(o,i),e.appendChild(i.firstElementChild);const l=o.component,d={id:r,vnode:o,vm:l,handler:{close:()=>{l.exposed.visible.value=!1}},props:o.component.props};return d},ie=(e={},t)=>{if(!ye)return{close:()=>{}};if(Te(At.max)&&R.length>=At.max)return{close:()=>{}};const n=vn(e);if(n.grouping&&R.length){const a=R.find(({vnode:i})=>{var s;return((s=i.props)==null?void 0:s.message)===n.message});if(a)return a.props.repeatNum+=1,a.props.type=n.type,a.handler}const r=ts(n,t);return R.push(r),r.handler};mn.forEach(e=>{ie[e]=(t={},n)=>{const r=vn(t);return ie({...r,type:e},n)}});function ns(e){for(const t of R)(!e||e===t.props.type)&&t.handler.close()}ie.closeAll=ns;ie._context=null;const ke=za(ie,"$message"),rs=Rn("global",()=>{const e=E(!1);return{isGifJsLoaded:e,setGifJsLoaded:n=>{e.value=n}}}),as=`// gif.worker.js 0.2.0 - https://github.com/jnordberg/gif.js
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        const a = typeof require == 'function' && require; if (!u && a)
          return a(o, !0); if (i)
          return i(o, !0); const f = new Error(\`Cannot find module '\${o}'\`); throw f.code = 'MODULE_NOT_FOUND', f
      } const l = n[o] = { exports: {} }; t[o][0].call(l.exports, (e) => { const n = t[o][1][e]; return s(n || e) }, l, l.exports, e, t, n, r)
    } return n[o].exports
  } var i = typeof require == 'function' && require; for (let o = 0; o < r.length; o++)s(r[o]); return s
})({ 1: [function (require, module, exports) {
  const NeuQuant = require('./TypedNeuQuant.js'); const LZWEncoder = require('./LZWEncoder.js'); function ByteArray() { this.page = -1; this.pages = []; this.newPage() }ByteArray.pageSize = 4096; ByteArray.charMap = {}; for (let i = 0; i < 256; i++)ByteArray.charMap[i] = String.fromCharCode(i); ByteArray.prototype.newPage = function () { this.pages[++this.page] = new Uint8Array(ByteArray.pageSize); this.cursor = 0 }; ByteArray.prototype.getData = function () { let rv = ''; for (let p = 0; p < this.pages.length; p++) for (let i = 0; i < ByteArray.pageSize; i++) { rv += ByteArray.charMap[this.pages[p][i]] } return rv }; ByteArray.prototype.writeByte = function (val) {
    if (this.cursor >= ByteArray.pageSize)
      this.newPage(); this.pages[this.page][this.cursor++] = val
  }; ByteArray.prototype.writeUTFBytes = function (string) { for (let l = string.length, i = 0; i < l; i++) this.writeByte(string.charCodeAt(i)) }; ByteArray.prototype.writeBytes = function (array, offset, length) { for (let l = length || array.length, i = offset || 0; i < l; i++) this.writeByte(array[i]) }; function GIFEncoder(width, height) { this.width = ~~width; this.height = ~~height; this.transparent = null; this.transIndex = 0; this.repeat = -1; this.delay = 0; this.image = null; this.pixels = null; this.indexedPixels = null; this.colorDepth = null; this.colorTab = null; this.neuQuant = null; this.usedEntry = []; this.palSize = 7; this.dispose = -1; this.firstFrame = true; this.sample = 10; this.dither = false; this.globalPalette = false; this.out = new ByteArray() }GIFEncoder.prototype.setDelay = function (milliseconds) { this.delay = Math.round(milliseconds / 10) }; GIFEncoder.prototype.setFrameRate = function (fps) { this.delay = Math.round(100 / fps) }; GIFEncoder.prototype.setDispose = function (disposalCode) {
    if (disposalCode >= 0)
      this.dispose = disposalCode
  }; GIFEncoder.prototype.setRepeat = function (repeat) { this.repeat = repeat }; GIFEncoder.prototype.setTransparent = function (color) { this.transparent = color }; GIFEncoder.prototype.addFrame = function (imageData) {
    this.image = imageData; this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null; this.getImagePixels(); this.analyzePixels(); if (this.globalPalette === true)
      this.globalPalette = this.colorTab; if (this.firstFrame) { this.writeLSD(); this.writePalette(); if (this.repeat >= 0) { this.writeNetscapeExt() } } this.writeGraphicCtrlExt(); this.writeImageDesc(); if (!this.firstFrame && !this.globalPalette)
      this.writePalette(); this.writePixels(); this.firstFrame = false
  }; GIFEncoder.prototype.finish = function () { this.out.writeByte(59) }; GIFEncoder.prototype.setQuality = function (quality) {
    if (quality < 1)
      quality = 1; this.sample = quality
  }; GIFEncoder.prototype.setDither = function (dither) {
    if (dither === true)
      dither = 'FloydSteinberg'; this.dither = dither
  }; GIFEncoder.prototype.setGlobalPalette = function (palette) { this.globalPalette = palette }; GIFEncoder.prototype.getGlobalPalette = function () { return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette }; GIFEncoder.prototype.writeHeader = function () { this.out.writeUTFBytes('GIF89a') }; GIFEncoder.prototype.analyzePixels = function () {
    if (!this.colorTab) { this.neuQuant = new NeuQuant(this.pixels, this.sample); this.neuQuant.buildColormap(); this.colorTab = this.neuQuant.getColormap() } if (this.dither)
      this.ditherPixels(this.dither.replace('-serpentine', ''), this.dither.match(/-serpentine/) !== null)
    else { this.indexPixels() } this.pixels = null; this.colorDepth = 8; this.palSize = 7; if (this.transparent !== null)
      this.transIndex = this.findClosest(this.transparent, true)
  }; GIFEncoder.prototype.indexPixels = function (imgq) { const nPix = this.pixels.length / 3; this.indexedPixels = new Uint8Array(nPix); let k = 0; for (let j = 0; j < nPix; j++) { const index = this.findClosestRGB(this.pixels[k++] & 255, this.pixels[k++] & 255, this.pixels[k++] & 255); this.usedEntry[index] = true; this.indexedPixels[j] = index } }; GIFEncoder.prototype.ditherPixels = function (kernel, serpentine) {
    const kernels = { FalseFloydSteinberg: [[3 / 8, 1, 0], [3 / 8, 0, 1], [2 / 8, 1, 1]], FloydSteinberg: [[7 / 16, 1, 0], [3 / 16, -1, 1], [5 / 16, 0, 1], [1 / 16, 1, 1]], Stucki: [[8 / 42, 1, 0], [4 / 42, 2, 0], [2 / 42, -2, 1], [4 / 42, -1, 1], [8 / 42, 0, 1], [4 / 42, 1, 1], [2 / 42, 2, 1], [1 / 42, -2, 2], [2 / 42, -1, 2], [4 / 42, 0, 2], [2 / 42, 1, 2], [1 / 42, 2, 2]], Atkinson: [[1 / 8, 1, 0], [1 / 8, 2, 0], [1 / 8, -1, 1], [1 / 8, 0, 1], [1 / 8, 1, 1], [1 / 8, 0, 2]] }; if (!kernel || !kernels[kernel]) { throw \`Unknown dithering kernel: \${kernel}\` } const ds = kernels[kernel]; let index = 0; const height = this.height; const width = this.width; const data = this.pixels; let direction = serpentine ? -1 : 1; this.indexedPixels = new Uint8Array(this.pixels.length / 3); for (let y = 0; y < height; y++) {
      if (serpentine)
        direction = direction * -1; for (let x = direction == 1 ? 0 : width - 1, xend = direction == 1 ? width : 0; x !== xend; x += direction) { index = y * width + x; let idx = index * 3; const r1 = data[idx]; const g1 = data[idx + 1]; const b1 = data[idx + 2]; idx = this.findClosestRGB(r1, g1, b1); this.usedEntry[idx] = true; this.indexedPixels[index] = idx; idx *= 3; const r2 = this.colorTab[idx]; const g2 = this.colorTab[idx + 1]; const b2 = this.colorTab[idx + 2]; const er = r1 - r2; const eg = g1 - g2; const eb = b1 - b2; for (let i = direction == 1 ? 0 : ds.length - 1, end = direction == 1 ? ds.length : 0; i !== end; i += direction) { const x1 = ds[i][1]; const y1 = ds[i][2]; if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) { const d = ds[i][0]; idx = index + x1 + y1 * width; idx *= 3; data[idx] = Math.max(0, Math.min(255, data[idx] + er * d)); data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + eg * d)); data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + eb * d)) } } }
    }
  }; GIFEncoder.prototype.findClosest = function (c, used) { return this.findClosestRGB((c & 16711680) >> 16, (c & 65280) >> 8, c & 255, used) }; GIFEncoder.prototype.findClosestRGB = function (r, g, b, used) {
    if (this.colorTab === null)
      return -1; if (this.neuQuant && !used) { return this.neuQuant.lookupRGB(r, g, b) } const c = b | g << 8 | r << 16; let minpos = 0; let dmin = 256 * 256 * 256; const len = this.colorTab.length; for (let i = 0, index = 0; i < len; index++) { const dr = r - (this.colorTab[i++] & 255); const dg = g - (this.colorTab[i++] & 255); const db = b - (this.colorTab[i++] & 255); const d = dr * dr + dg * dg + db * db; if ((!used || this.usedEntry[index]) && d < dmin) { dmin = d; minpos = index } } return minpos
  }; GIFEncoder.prototype.getImagePixels = function () { const w = this.width; const h = this.height; this.pixels = new Uint8Array(w * h * 3); const data = this.image; let srcPos = 0; let count = 0; for (let i = 0; i < h; i++) for (let j = 0; j < w; j++) { this.pixels[count++] = data[srcPos++]; this.pixels[count++] = data[srcPos++]; this.pixels[count++] = data[srcPos++]; srcPos++ } }; GIFEncoder.prototype.writeGraphicCtrlExt = function () {
    this.out.writeByte(33); this.out.writeByte(249); this.out.writeByte(4); let transp, disp; if (this.transparent === null) { transp = 0; disp = 0 }
    else { transp = 1; disp = 2 } if (this.dispose >= 0) { disp = dispose & 7 }disp <<= 2; this.out.writeByte(0 | disp | 0 | transp); this.writeShort(this.delay); this.out.writeByte(this.transIndex); this.out.writeByte(0)
  }; GIFEncoder.prototype.writeImageDesc = function () {
    this.out.writeByte(44); this.writeShort(0); this.writeShort(0); this.writeShort(this.width); this.writeShort(this.height); if (this.firstFrame || this.globalPalette)
      this.out.writeByte(0)
    else this.out.writeByte(128 | 0 | 0 | 0 | this.palSize)
  }; GIFEncoder.prototype.writeLSD = function () { this.writeShort(this.width); this.writeShort(this.height); this.out.writeByte(128 | 112 | 0 | this.palSize); this.out.writeByte(0); this.out.writeByte(0) }; GIFEncoder.prototype.writeNetscapeExt = function () { this.out.writeByte(33); this.out.writeByte(255); this.out.writeByte(11); this.out.writeUTFBytes('NETSCAPE2.0'); this.out.writeByte(3); this.out.writeByte(1); this.writeShort(this.repeat); this.out.writeByte(0) }; GIFEncoder.prototype.writePalette = function () { this.out.writeBytes(this.colorTab); const n = 3 * 256 - this.colorTab.length; for (let i = 0; i < n; i++) this.out.writeByte(0) }; GIFEncoder.prototype.writeShort = function (pValue) { this.out.writeByte(pValue & 255); this.out.writeByte(pValue >> 8 & 255) }; GIFEncoder.prototype.writePixels = function () { const enc = new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth); enc.encode(this.out) }; GIFEncoder.prototype.stream = function () { return this.out }; module.exports = GIFEncoder
}, { './LZWEncoder.js': 2, './TypedNeuQuant.js': 3 }], 2: [function (require, module, exports) {
  const EOF = -1; const BITS = 12; const HSIZE = 5003; const masks = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]; function LZWEncoder(width, height, pixels, colorDepth) {
    const initCodeSize = Math.max(2, colorDepth); const accum = new Uint8Array(256); const htab = new Int32Array(HSIZE); const codetab = new Int32Array(HSIZE); let cur_accum; let cur_bits = 0; let a_count; let free_ent = 0; let maxcode; let clear_flg = false; let g_init_bits, ClearCode, EOFCode; function char_out(c, outs) {
      accum[a_count++] = c; if (a_count >= 254)
        flush_char(outs)
    } function cl_block(outs) { cl_hash(HSIZE); free_ent = ClearCode + 2; clear_flg = true; output(ClearCode, outs) } function cl_hash(hsize) { for (let i = 0; i < hsize; ++i)htab[i] = -1 } function compress(init_bits, outs) {
      let fcode, c, i, ent, disp, hsize_reg, hshift; g_init_bits = init_bits; clear_flg = false; n_bits = g_init_bits; maxcode = MAXCODE(n_bits); ClearCode = 1 << init_bits - 1; EOFCode = ClearCode + 1; free_ent = ClearCode + 2; a_count = 0; ent = nextPixel(); hshift = 0; for (fcode = HSIZE; fcode < 65536; fcode *= 2)++hshift; hshift = 8 - hshift; hsize_reg = HSIZE; cl_hash(hsize_reg); output(ClearCode, outs); outer_loop:while ((c = nextPixel()) != EOF) {
        fcode = (c << BITS) + ent; i = c << hshift ^ ent; if (htab[i] === fcode) { ent = codetab[i]; continue }
        else if (htab[i] >= 0) {
          disp = hsize_reg - i; if (i === 0)
            disp = 1; do {
            if ((i -= disp) < 0)
              i += hsize_reg; if (htab[i] === fcode) { ent = codetab[i]; continue outer_loop }
          } while (htab[i] >= 0)
        }output(ent, outs); ent = c; if (free_ent < 1 << BITS) { codetab[i] = free_ent++; htab[i] = fcode }
        else { cl_block(outs) }
      }output(ent, outs); output(EOFCode, outs)
    } function encode(outs) { outs.writeByte(initCodeSize); remaining = width * height; curPixel = 0; compress(initCodeSize + 1, outs); outs.writeByte(0) } function flush_char(outs) { if (a_count > 0) { outs.writeByte(a_count); outs.writeBytes(accum, 0, a_count); a_count = 0 } } function MAXCODE(n_bits) { return (1 << n_bits) - 1 } function nextPixel() {
      if (remaining === 0)
        return EOF; --remaining; const pix = pixels[curPixel++]; return pix & 255
    } function output(code, outs) {
      cur_accum &= masks[cur_bits]; if (cur_bits > 0)
        cur_accum |= code << cur_bits; else cur_accum = code; cur_bits += n_bits; while (cur_bits >= 8) { char_out(cur_accum & 255, outs); cur_accum >>= 8; cur_bits -= 8 } if (free_ent > maxcode || clear_flg) {
        if (clear_flg) { maxcode = MAXCODE(n_bits = g_init_bits); clear_flg = false }
        else {
          ++n_bits; if (n_bits == BITS)
            maxcode = 1 << BITS; else maxcode = MAXCODE(n_bits)
        }
      } if (code == EOFCode) { while (cur_bits > 0) { char_out(cur_accum & 255, outs); cur_accum >>= 8; cur_bits -= 8 }flush_char(outs) }
    } this.encode = encode
  }module.exports = LZWEncoder
}, {}], 3: [function (require, module, exports) {
  const ncycles = 100; const netsize = 256; const maxnetpos = netsize - 1; const netbiasshift = 4; const intbiasshift = 16; const intbias = 1 << intbiasshift; const gammashift = 10; const gamma = 1 << gammashift; const betashift = 10; const beta = intbias >> betashift; const betagamma = intbias << gammashift - betashift; const initrad = netsize >> 3; const radiusbiasshift = 6; const radiusbias = 1 << radiusbiasshift; const initradius = initrad * radiusbias; const radiusdec = 30; const alphabiasshift = 10; const initalpha = 1 << alphabiasshift; let alphadec; const radbiasshift = 8; const radbias = 1 << radbiasshift; const alpharadbshift = alphabiasshift + radbiasshift; const alpharadbias = 1 << alpharadbshift; const prime1 = 499; const prime2 = 491; const prime3 = 487; const prime4 = 503; const minpicturebytes = 3 * prime4; function NeuQuant(pixels, samplefac) {
    let network; let netindex; let bias; let freq; let radpower; function init() { network = []; netindex = new Int32Array(256); bias = new Int32Array(netsize); freq = new Int32Array(netsize); radpower = new Int32Array(netsize >> 3); let i, v; for (i = 0; i < netsize; i++) { v = (i << netbiasshift + 8) / netsize; network[i] = new Float64Array([v, v, v, 0]); freq[i] = intbias / netsize; bias[i] = 0 } } function unbiasnet() { for (let i = 0; i < netsize; i++) { network[i][0] >>= netbiasshift; network[i][1] >>= netbiasshift; network[i][2] >>= netbiasshift; network[i][3] = i } } function altersingle(alpha, i, b, g, r) { network[i][0] -= alpha * (network[i][0] - b) / initalpha; network[i][1] -= alpha * (network[i][1] - g) / initalpha; network[i][2] -= alpha * (network[i][2] - r) / initalpha } function alterneigh(radius, i, b, g, r) { const lo = Math.abs(i - radius); const hi = Math.min(i + radius, netsize); let j = i + 1; let k = i - 1; let m = 1; let p, a; while (j < hi || k > lo) { a = radpower[m++]; if (j < hi) { p = network[j++]; p[0] -= a * (p[0] - b) / alpharadbias; p[1] -= a * (p[1] - g) / alpharadbias; p[2] -= a * (p[2] - r) / alpharadbias } if (k > lo) { p = network[k--]; p[0] -= a * (p[0] - b) / alpharadbias; p[1] -= a * (p[1] - g) / alpharadbias; p[2] -= a * (p[2] - r) / alpharadbias } } } function contest(b, g, r) { let bestd = ~(1 << 31); let bestbiasd = bestd; let bestpos = -1; let bestbiaspos = bestpos; let i, n, dist, biasdist, betafreq; for (i = 0; i < netsize; i++) { n = network[i]; dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r); if (dist < bestd) { bestd = dist; bestpos = i }biasdist = dist - (bias[i] >> intbiasshift - netbiasshift); if (biasdist < bestbiasd) { bestbiasd = biasdist; bestbiaspos = i }betafreq = freq[i] >> betashift; freq[i] -= betafreq; bias[i] += betafreq << gammashift }freq[bestpos] += beta; bias[bestpos] -= betagamma; return bestbiaspos } function inxbuild() { let i; let j; let p; let q; let smallpos; let smallval; let previouscol = 0; let startpos = 0; for (i = 0; i < netsize; i++) { p = network[i]; smallpos = i; smallval = p[1]; for (j = i + 1; j < netsize; j++) { q = network[j]; if (q[1] < smallval) { smallpos = j; smallval = q[1] } }q = network[smallpos]; if (i != smallpos) { j = q[0]; q[0] = p[0]; p[0] = j; j = q[1]; q[1] = p[1]; p[1] = j; j = q[2]; q[2] = p[2]; p[2] = j; j = q[3]; q[3] = p[3]; p[3] = j } if (smallval != previouscol) { netindex[previouscol] = startpos + i >> 1; for (j = previouscol + 1; j < smallval; j++)netindex[j] = i; previouscol = smallval; startpos = i } }netindex[previouscol] = startpos + maxnetpos >> 1; for (j = previouscol + 1; j < 256; j++)netindex[j] = maxnetpos } function inxsearch(b, g, r) {
      let a, p, dist; let bestd = 1e3; let best = -1; let i = netindex[g]; let j = i - 1; while (i < netsize || j >= 0) {
        if (i < netsize) {
          p = network[i]; dist = p[1] - g; if (dist >= bestd) { i = netsize }
          else {
            i++; if (dist < 0)
              dist = -dist; a = p[0] - b; if (a < 0)
              a = -a; dist += a; if (dist < bestd) {
              a = p[2] - r; if (a < 0)
                a = -a; dist += a; if (dist < bestd) { bestd = dist; best = p[3] }
            }
          }
        } if (j >= 0) {
          p = network[j]; dist = g - p[1]; if (dist >= bestd) { j = -1 }
          else {
            j--; if (dist < 0)
              dist = -dist; a = p[0] - b; if (a < 0)
              a = -a; dist += a; if (dist < bestd) {
              a = p[2] - r; if (a < 0)
                a = -a; dist += a; if (dist < bestd) { bestd = dist; best = p[3] }
            }
          }
        }
      } return best
    } function learn() {
      let i; const lengthcount = pixels.length; const alphadec = 30 + (samplefac - 1) / 3; const samplepixels = lengthcount / (3 * samplefac); let delta = ~~(samplepixels / ncycles); let alpha = initalpha; let radius = initradius; let rad = radius >> radiusbiasshift; if (rad <= 1)
        rad = 0; for (i = 0; i < rad; i++)radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad)); let step; if (lengthcount < minpicturebytes) { samplefac = 1; step = 3 }
      else if (lengthcount % prime1 !== 0) { step = 3 * prime1 }
      else if (lengthcount % prime2 !== 0) { step = 3 * prime2 }
      else if (lengthcount % prime3 !== 0) { step = 3 * prime3 }
      else { step = 3 * prime4 } let b, g, r, j; let pix = 0; i = 0; while (i < samplepixels) {
        b = (pixels[pix] & 255) << netbiasshift; g = (pixels[pix + 1] & 255) << netbiasshift; r = (pixels[pix + 2] & 255) << netbiasshift; j = contest(b, g, r); altersingle(alpha, j, b, g, r); if (rad !== 0)
          alterneigh(rad, j, b, g, r); pix += step; if (pix >= lengthcount)
          pix -= lengthcount; i++; if (delta === 0)
          delta = 1; if (i % delta === 0) {
          alpha -= alpha / alphadec; radius -= radius / radiusdec; rad = radius >> radiusbiasshift; if (rad <= 1)
            rad = 0; for (j = 0; j < rad; j++)radpower[j] = alpha * ((rad * rad - j * j) * radbias / (rad * rad))
        }
      }
    } function buildColormap() { init(); learn(); unbiasnet(); inxbuild() } this.buildColormap = buildColormap; function getColormap() { const map = []; const index = []; for (let i = 0; i < netsize; i++)index[network[i][3]] = i; let k = 0; for (let l = 0; l < netsize; l++) { const j = index[l]; map[k++] = network[j][0]; map[k++] = network[j][1]; map[k++] = network[j][2] } return map } this.getColormap = getColormap; this.lookupRGB = inxsearch
  }module.exports = NeuQuant
}, {}], 4: [function (require, module, exports) {
  let GIFEncoder, renderFrame; GIFEncoder = require('./GIFEncoder.js'); renderFrame = function (frame) {
    let encoder, page, stream, transfer; encoder = new GIFEncoder(frame.width, frame.height); if (frame.index === 0)
      encoder.writeHeader()
    else { encoder.firstFrame = false }encoder.setTransparent(frame.transparent); encoder.setRepeat(frame.repeat); encoder.setDelay(frame.delay); encoder.setQuality(frame.quality); encoder.setDither(frame.dither); encoder.setGlobalPalette(frame.globalPalette); encoder.addFrame(frame.data); if (frame.last) { encoder.finish() } if (frame.globalPalette === true) { frame.globalPalette = encoder.getGlobalPalette() }stream = encoder.stream(); frame.data = stream.pages; frame.cursor = stream.cursor; frame.pageSize = stream.constructor.pageSize; if (frame.canTransfer) { transfer = (function () { let i, len, ref, results; ref = frame.data; results = []; for (i = 0, len = ref.length; i < len; i++) { page = ref[i]; results.push(page.buffer) } return results }()); return self.postMessage(frame, transfer) }
    else { return self.postMessage(frame) }
  }; self.onmessage = function (event) { return renderFrame(event.data) }
}, { './GIFEncoder.js': 1 }] }, {}, [4])
// # sourceMappingURL=gif.worker.js.map
`,is=`/* eslint-disable */
/*!!
 *  Canvas 2 Svg v1.0.19
 *  A low level canvas to SVG converter. Uses a mock canvas context to build an SVG document.
 *
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Author:
 *  Kerry Liu
 *
 *  Copyright (c) 2014 Gliffy Inc.
 */

;(function () {
  "use strict";

  var STYLES, ctx, CanvasGradient, CanvasPattern, namedEntities;

  //helper function to format a string
  function format(str, args) {
    var keys = Object.keys(args), i;
    for (i=0; i<keys.length; i++) {
      str = str.replace(new RegExp("\\\\{" + keys[i] + "\\\\}", "gi"), args[keys[i]]);
    }
    return str;
  }

  //helper function that generates a random string
  function randomString(holder) {
    var chars, randomstring, i;
    if (!holder) {
      throw new Error("cannot create a random attribute name for an undefined object");
    }
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    randomstring = "";
    do {
      randomstring = "";
      for (i = 0; i < 12; i++) {
        randomstring += chars[Math.floor(Math.random() * chars.length)];
      }
    } while (holder[randomstring]);
    return randomstring;
  }

  //helper function to map named to numbered entities
  function createNamedToNumberedLookup(items, radix) {
    var i, entity, lookup = {}, base10, base16;
    items = items.split(',');
    radix = radix || 10;
    // Map from named to numbered entities.
    for (i = 0; i < items.length; i += 2) {
      entity = '&' + items[i + 1] + ';';
      base10 = parseInt(items[i], radix);
      lookup[entity] = '&#'+base10+';';
    }
    //FF and IE need to create a regex from hex values ie &nbsp; == \\xa0
    lookup["\\\\xa0"] = '&#160;';
    return lookup;
  }

  //helper function to map canvas-textAlign to svg-textAnchor
  function getTextAnchor(textAlign) {
    //TODO: support rtl languages
    var mapping = {"left":"start", "right":"end", "center":"middle", "start":"start", "end":"end"};
    return mapping[textAlign] || mapping.start;
  }

  //helper function to map canvas-textBaseline to svg-dominantBaseline
  function getDominantBaseline(textBaseline) {
    //INFO: not supported in all browsers
    var mapping = {"alphabetic": "alphabetic", "hanging": "hanging", "top":"text-before-edge", "bottom":"text-after-edge", "middle":"central"};
    return mapping[textBaseline] || mapping.alphabetic;
  }

  // Unpack entities lookup where the numbers are in radix 32 to reduce the size
  // entity mapping courtesy of tinymce
  namedEntities = createNamedToNumberedLookup(
      '50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,' +
      '5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,' +
      '5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,' +
      '5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,' +
      '68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,' +
      '6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,' +
      '6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,' +
      '75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,' +
      '7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,' +
      '7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,' +
      'sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,' +
      'st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,' +
      't9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,' +
      'tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,' +
      'u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,' +
      '81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,' +
      '8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,' +
      '8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,' +
      '8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,' +
      '8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,' +
      'nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,' +
      'rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,' +
      'Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,' +
      '80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,' +
      '811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro', 32);


  //Some basic mappings for attributes and default values.
  STYLES = {
    "strokeStyle":{
      svgAttr : "stroke", //corresponding svg attribute
      canvas : "#000000", //canvas default
      svg : "none",       //svg default
      apply : "stroke"    //apply on stroke() or fill()
    },
    "fillStyle":{
      svgAttr : "fill",
      canvas : "#000000",
      svg : null, //svg default is black, but we need to special case this to handle canvas stroke without fill
      apply : "fill"
    },
    "lineCap":{
      svgAttr : "stroke-linecap",
      canvas : "butt",
      svg : "butt",
      apply : "stroke"
    },
    "lineJoin":{
      svgAttr : "stroke-linejoin",
      canvas : "miter",
      svg : "miter",
      apply : "stroke"
    },
    "miterLimit":{
      svgAttr : "stroke-miterlimit",
      canvas : 10,
      svg : 4,
      apply : "stroke"
    },
    "lineWidth":{
      svgAttr : "stroke-width",
      canvas : 1,
      svg : 1,
      apply : "stroke"
    },
    "globalAlpha": {
      svgAttr : "opacity",
      canvas : 1,
      svg : 1,
      apply :  "fill stroke"
    },
    "font":{
      //font converts to multiple svg attributes, there is custom logic for this
      canvas : "10px sans-serif"
    },
    "shadowColor":{
      canvas : "#000000"
    },
    "shadowOffsetX":{
      canvas : 0
    },
    "shadowOffsetY":{
      canvas : 0
    },
    "shadowBlur":{
      canvas : 0
    },
    "textAlign":{
      canvas : "start"
    },
    "textBaseline":{
      canvas : "alphabetic"
    },
    "lineDash" : {
      svgAttr : "stroke-dasharray",
      canvas : [],
      svg : null,
      apply : "stroke"
    }
  };

  /**
   *
   * @param gradientNode - reference to the gradient
   * @constructor
   */
  CanvasGradient = function (gradientNode, ctx) {
    this.__root = gradientNode;
    this.__ctx = ctx;
  };

  /**
   * Adds a color stop to the gradient root
   */
  CanvasGradient.prototype.addColorStop = function (offset, color) {
    var stop = this.__ctx.__createElement("stop"), regex, matches;
    stop.setAttribute("offset", offset);
    if (color.indexOf("rgba") !== -1) {
      //separate alpha value, since webkit can't handle it
      regex = /rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d?\\.?\\d*)\\s*\\)/gi;
      matches = regex.exec(color);
      stop.setAttribute("stop-color", format("rgb({r},{g},{b})", {r:matches[1], g:matches[2], b:matches[3]}));
      stop.setAttribute("stop-opacity", matches[4]);
    } else {
      stop.setAttribute("stop-color", color);
    }
    this.__root.appendChild(stop);
  };

  CanvasPattern = function (pattern, ctx) {
    this.__root = pattern;
    this.__ctx = ctx;
  };

  /**
   * The mock canvas context
   * @param o - options include:
   * ctx - existing Context2D to wrap around
   * width - width of your canvas (defaults to 500)
   * height - height of your canvas (defaults to 500)
   * enableMirroring - enables canvas mirroring (get image data) (defaults to false)
   * document - the document object (defaults to the current document)
   */
  ctx = function (o) {
    var defaultOptions = { width:500, height:500, enableMirroring : false}, options;

    //keep support for this way of calling C2S: new C2S(width,height)
    if (arguments.length > 1) {
      options = defaultOptions;
      options.width = arguments[0];
      options.height = arguments[1];
    } else if ( !o ) {
      options = defaultOptions;
    } else {
      options = o;
    }

    if (!(this instanceof ctx)) {
      //did someone call this without new?
      return new ctx(options);
    }

    //setup options
    this.width = options.width || defaultOptions.width;
    this.height = options.height || defaultOptions.height;
    this.enableMirroring = options.enableMirroring !== undefined ? options.enableMirroring : defaultOptions.enableMirroring;

    this.canvas = this;   ///point back to this instance!
    this.__document = options.document || document;

    // allow passing in an existing context to wrap around
    // if a context is passed in, we know a canvas already exist
    if (options.ctx) {
      this.__ctx = options.ctx;
    } else {
      this.__canvas = this.__document.createElement("canvas");
      this.__ctx = this.__canvas.getContext("2d");
    }

    this.__setDefaultStyles();
    this.__stack = [this.__getStyleState()];
    this.__groupStack = [];

    //the root svg element
    this.__root = this.__document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.__root.setAttribute("version", 1.1);
    this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.__root.setAttribute("width", this.width);
    this.__root.setAttribute("height", this.height);

    //make sure we don't generate the same ids in defs
    this.__ids = {};

    //defs tag
    this.__defs = this.__document.createElementNS("http://www.w3.org/2000/svg", "defs");
    this.__root.appendChild(this.__defs);

    //also add a group child. the svg element can't use the transform attribute
    this.__currentElement = this.__document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.__root.appendChild(this.__currentElement);
  };


  /**
   * Creates the specified svg element
   * @private
   */
  ctx.prototype.__createElement = function (elementName, properties, resetFill) {
    if (typeof properties === "undefined") {
      properties = {};
    }

    var element = this.__document.createElementNS("http://www.w3.org/2000/svg", elementName),
        keys = Object.keys(properties), i, key;
    if (resetFill) {
      //if fill or stroke is not specified, the svg element should not display. By default SVG's fill is black.
      element.setAttribute("fill", "none");
      element.setAttribute("stroke", "none");
    }
    for (i=0; i<keys.length; i++) {
      key = keys[i];
      element.setAttribute(key, properties[key]);
    }
    return element;
  };

  /**
   * Applies default canvas styles to the context
   * @private
   */
  ctx.prototype.__setDefaultStyles = function () {
    //default 2d canvas context properties see:http://www.w3.org/TR/2dcontext/
    var keys = Object.keys(STYLES), i, key;
    for (i=0; i<keys.length; i++) {
      key = keys[i];
      this[key] = STYLES[key].canvas;
    }
  };

  /**
   * Applies styles on restore
   * @param styleState
   * @private
   */
  ctx.prototype.__applyStyleState = function (styleState) {
    var keys = Object.keys(styleState), i, key;
    for (i=0; i<keys.length; i++) {
      key = keys[i];
      this[key] = styleState[key];
    }
  };

  /**
   * Gets the current style state
   * @return {Object}
   * @private
   */
  ctx.prototype.__getStyleState = function () {
    var i, styleState = {}, keys = Object.keys(STYLES), key;
    for (i=0; i<keys.length; i++) {
      key = keys[i];
      styleState[key] = this[key];
    }
    return styleState;
  };

  /**
   * Apples the current styles to the current SVG element. On "ctx.fill" or "ctx.stroke"
   * @param type
   * @private
   */
  ctx.prototype.__applyStyleToCurrentElement = function (type) {
    var currentElement = this.__currentElement;
    var currentStyleGroup = this.__currentElementsToStyle;
    if (currentStyleGroup) {
      currentElement.setAttribute(type, "");
      currentElement = currentStyleGroup.element;
      currentStyleGroup.children.forEach(function (node) {
        node.setAttribute(type, "");
      })
    }

    var keys = Object.keys(STYLES), i, style, value, id, regex, matches;
    for (i = 0; i < keys.length; i++) {
      style = STYLES[keys[i]];
      value = this[keys[i]];
      if (style.apply) {
        //is this a gradient or pattern?
        if (value instanceof CanvasPattern) {
          //pattern
          if (value.__ctx) {
            //copy over defs
            while(value.__ctx.__defs.childNodes.length) {
              id = value.__ctx.__defs.childNodes[0].getAttribute("id");
              this.__ids[id] = id;
              this.__defs.appendChild(value.__ctx.__defs.childNodes[0]);
            }
          }
          currentElement.setAttribute(style.apply, format("url(#{id})", {id:value.__root.getAttribute("id")}));
        }
        else if (value instanceof CanvasGradient) {
          //gradient
          currentElement.setAttribute(style.apply, format("url(#{id})", {id:value.__root.getAttribute("id")}));
        } else if (style.apply.indexOf(type)!==-1 && style.svg !== value) {
          if ((style.svgAttr === "stroke" || style.svgAttr === "fill") && value.indexOf("rgba") !== -1) {
            //separate alpha value, since illustrator can't handle it
            regex = /rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d?\\.?\\d*)\\s*\\)/gi;
            matches = regex.exec(value);
            currentElement.setAttribute(style.svgAttr, format("rgb({r},{g},{b})", {r:matches[1], g:matches[2], b:matches[3]}));
            //should take globalAlpha here
            var opacity = matches[4];
            var globalAlpha = this.globalAlpha;
            if (globalAlpha != null) {
              opacity *= globalAlpha;
            }
            currentElement.setAttribute(style.svgAttr+"-opacity", opacity);
          } else {
            var attr = style.svgAttr;
            if (keys[i] === 'globalAlpha') {
              attr = type+'-'+style.svgAttr;
              if (currentElement.getAttribute(attr)) {
                //fill-opacity or stroke-opacity has already been set by stroke or fill.
                continue;
              }
            }
            //otherwise only update attribute if right type, and not svg default
            currentElement.setAttribute(attr, value);
          }
        }
      }
    }
  };

  /**
   * Will return the closest group or svg node. May return the current element.
   * @private
   */
  ctx.prototype.__closestGroupOrSvg = function (node) {
    node = node || this.__currentElement;
    if (node.nodeName === "g" || node.nodeName === "svg") {
      return node;
    } else {
      return this.__closestGroupOrSvg(node.parentNode);
    }
  };

  /**
   * Returns the serialized value of the svg so far
   * @param fixNamedEntities - Standalone SVG doesn't support named entities, which document.createTextNode encodes.
   *                           If true, we attempt to find all named entities and encode it as a numeric entity.
   * @return serialized svg
   */
  ctx.prototype.getSerializedSvg = function (fixNamedEntities) {
    var serialized = new XMLSerializer().serializeToString(this.__root),
        keys, i, key, value, regexp, xmlns;

    //IE search for a duplicate xmnls because they didn't implement setAttributeNS correctly
    xmlns = /xmlns="http:\\/\\/www\\.w3\\.org\\/2000\\/svg".+xmlns="http:\\/\\/www\\.w3\\.org\\/2000\\/svg/gi;
    if (xmlns.test(serialized)) {
      serialized = serialized.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink');
    }

    if (fixNamedEntities) {
      keys = Object.keys(namedEntities);
      //loop over each named entity and replace with the proper equivalent.
      for (i=0; i<keys.length; i++) {
        key = keys[i];
        value = namedEntities[key];
        regexp = new RegExp(key, "gi");
        if (regexp.test(serialized)) {
          serialized = serialized.replace(regexp, value);
        }
      }
    }

    return serialized;
  };


  /**
   * Returns the root svg
   * @return
   */
  ctx.prototype.getSvg = function () {
    return this.__root;
  };
  /**
   * Will generate a group tag.
   */
  ctx.prototype.save = function () {
    var group = this.__createElement("g");
    var parent = this.__closestGroupOrSvg();
    this.__groupStack.push(parent);
    parent.appendChild(group);
    this.__currentElement = group;
    this.__stack.push(this.__getStyleState());
  };
  /**
   * Sets current element to parent, or just root if already root
   */
  ctx.prototype.restore = function () {
    this.__currentElement = this.__groupStack.pop();
    this.__currentElementsToStyle = null;
    //Clearing canvas will make the poped group invalid, currentElement is set to the root group node.
    if (!this.__currentElement) {
      this.__currentElement = this.__root.childNodes[1];
    }
    var state = this.__stack.pop();
    this.__applyStyleState(state);
  };

  /**
   * Helper method to add transform
   * @private
   */
  ctx.prototype.__addTransform = function (t) {
    //if the current element has siblings, add another group
    var parent = this.__closestGroupOrSvg();
    if (parent.childNodes.length > 0) {
      if (this.__currentElement.nodeName === "path") {
        if (!this.__currentElementsToStyle) this.__currentElementsToStyle = {element: parent, children: []};
        this.__currentElementsToStyle.children.push(this.__currentElement)
        this.__applyCurrentDefaultPath();
      }

      var group = this.__createElement("g");
      parent.appendChild(group);
      this.__currentElement = group;
    }

    var transform = this.__currentElement.getAttribute("transform");
    if (transform) {
      transform += " ";
    } else {
      transform = "";
    }
    transform += t;
    this.__currentElement.setAttribute("transform", transform);
  };

  /**
   *  scales the current element
   */
  ctx.prototype.scale = function (x, y) {
    if (y === undefined) {
      y = x;
    }
    this.__addTransform(format("scale({x},{y})", {x:x, y:y}));
  };

  /**
   * rotates the current element
   */
  ctx.prototype.rotate = function (angle) {
    var degrees = (angle * 180 / Math.PI);
    this.__addTransform(format("rotate({angle},{cx},{cy})", {angle:degrees, cx:0, cy:0}));
  };

  /**
   * translates the current element
   */
  ctx.prototype.translate = function (x, y) {
    this.__addTransform(format("translate({x},{y})", {x:x,y:y}));
  };

  /**
   * applies a transform to the current element
   */
  ctx.prototype.transform = function (a, b, c, d, e, f) {
    this.__addTransform(format("matrix({a},{b},{c},{d},{e},{f})", {a:a, b:b, c:c, d:d, e:e, f:f}));
  };

  /**
   * Create a new Path Element
   */
  ctx.prototype.beginPath = function () {
    var path, parent;

    // Note that there is only one current default path, it is not part of the drawing state.
    // See also: https://html.spec.whatwg.org/multipage/scripting.html#current-default-path
    this.__currentDefaultPath = "";
    this.__currentPosition = {};

    path = this.__createElement("path", {}, true);
    parent = this.__closestGroupOrSvg();
    parent.appendChild(path);
    this.__currentElement = path;
  };

  /**
   * Helper function to apply currentDefaultPath to current path element
   * @private
   */
  ctx.prototype.__applyCurrentDefaultPath = function () {
    var currentElement = this.__currentElement;
    if (currentElement.nodeName === "path") {
      currentElement.setAttribute("d", this.__currentDefaultPath);
    } else {
      console.error("Attempted to apply path command to node", currentElement.nodeName);
    }
  };

  /**
   * Helper function to add path command
   * @private
   */
  ctx.prototype.__addPathCommand = function (command) {
    this.__currentDefaultPath += " ";
    this.__currentDefaultPath += command;
  };

  /**
   * Adds the move command to the current path element,
   * if the currentPathElement is not empty create a new path element
   */
  ctx.prototype.moveTo = function (x,y) {
    if (this.__currentElement.nodeName !== "path") {
      this.beginPath();
    }

    // creates a new subpath with the given point
    this.__currentPosition = {x: x, y: y};
    this.__addPathCommand(format("M {x} {y}", {x:x, y:y}));
  };

  /**
   * Closes the current path
   */
  ctx.prototype.closePath = function () {
    if (this.__currentDefaultPath) {
      this.__addPathCommand("Z");
    }
  };

  /**
   * Adds a line to command
   */
  ctx.prototype.lineTo = function (x, y) {
    this.__currentPosition = {x: x, y: y};
    if (this.__currentDefaultPath.indexOf('M') > -1) {
      this.__addPathCommand(format("L {x} {y}", {x:x, y:y}));
    } else {
      this.__addPathCommand(format("M {x} {y}", {x:x, y:y}));
    }
  };

  /**
   * Add a bezier command
   */
  ctx.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    this.__currentPosition = {x: x, y: y};
    this.__addPathCommand(format("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",
        {cp1x:cp1x, cp1y:cp1y, cp2x:cp2x, cp2y:cp2y, x:x, y:y}));
  };

  /**
   * Adds a quadratic curve to command
   */
  ctx.prototype.quadraticCurveTo = function (cpx, cpy, x, y) {
    this.__currentPosition = {x: x, y: y};
    this.__addPathCommand(format("Q {cpx} {cpy} {x} {y}", {cpx:cpx, cpy:cpy, x:x, y:y}));
  };


  /**
   * Return a new normalized vector of given vector
   */
  var normalize = function (vector) {
    var len = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
    return [vector[0] / len, vector[1] / len];
  };

  /**
   * Adds the arcTo to the current path
   *
   * @see http://www.w3.org/TR/2015/WD-2dcontext-20150514/#dom-context-2d-arcto
   */
  ctx.prototype.arcTo = function (x1, y1, x2, y2, radius) {
    // Let the point (x0, y0) be the last point in the subpath.
    var x0 = this.__currentPosition && this.__currentPosition.x;
    var y0 = this.__currentPosition && this.__currentPosition.y;

    // First ensure there is a subpath for (x1, y1).
    if (typeof x0 == "undefined" || typeof y0 == "undefined") {
      return;
    }

    // Negative values for radius must cause the implementation to throw an IndexSizeError exception.
    if (radius < 0) {
      throw new Error("IndexSizeError: The radius provided (" + radius + ") is negative.");
    }

    // If the point (x0, y0) is equal to the point (x1, y1),
    // or if the point (x1, y1) is equal to the point (x2, y2),
    // or if the radius radius is zero,
    // then the method must add the point (x1, y1) to the subpath,
    // and connect that point to the previous point (x0, y0) by a straight line.
    if (((x0 === x1) && (y0 === y1))
        || ((x1 === x2) && (y1 === y2))
        || (radius === 0)) {
      this.lineTo(x1, y1);
      return;
    }

    // Otherwise, if the points (x0, y0), (x1, y1), and (x2, y2) all lie on a single straight line,
    // then the method must add the point (x1, y1) to the subpath,
    // and connect that point to the previous point (x0, y0) by a straight line.
    var unit_vec_p1_p0 = normalize([x0 - x1, y0 - y1]);
    var unit_vec_p1_p2 = normalize([x2 - x1, y2 - y1]);
    if (unit_vec_p1_p0[0] * unit_vec_p1_p2[1] === unit_vec_p1_p0[1] * unit_vec_p1_p2[0]) {
      this.lineTo(x1, y1);
      return;
    }

    // Otherwise, let The Arc be the shortest arc given by circumference of the circle that has radius radius,
    // and that has one point tangent to the half-infinite line that crosses the point (x0, y0) and ends at the point (x1, y1),
    // and that has a different point tangent to the half-infinite line that ends at the point (x1, y1), and crosses the point (x2, y2).
    // The points at which this circle touches these two lines are called the start and end tangent points respectively.

    // note that both vectors are unit vectors, so the length is 1
    var cos = (unit_vec_p1_p0[0] * unit_vec_p1_p2[0] + unit_vec_p1_p0[1] * unit_vec_p1_p2[1]);
    var theta = Math.acos(Math.abs(cos));

    // Calculate origin
    var unit_vec_p1_origin = normalize([
      unit_vec_p1_p0[0] + unit_vec_p1_p2[0],
      unit_vec_p1_p0[1] + unit_vec_p1_p2[1]
    ]);
    var len_p1_origin = radius / Math.sin(theta / 2);
    var x = x1 + len_p1_origin * unit_vec_p1_origin[0];
    var y = y1 + len_p1_origin * unit_vec_p1_origin[1];

    // Calculate start angle and end angle
    // rotate 90deg clockwise (note that y axis points to its down)
    var unit_vec_origin_start_tangent = [
      -unit_vec_p1_p0[1],
      unit_vec_p1_p0[0]
    ];
    // rotate 90deg counter clockwise (note that y axis points to its down)
    var unit_vec_origin_end_tangent = [
      unit_vec_p1_p2[1],
      -unit_vec_p1_p2[0]
    ];
    var getAngle = function (vector) {
      // get angle (clockwise) between vector and (1, 0)
      var x = vector[0];
      var y = vector[1];
      if (y >= 0) { // note that y axis points to its down
        return Math.acos(x);
      } else {
        return -Math.acos(x);
      }
    };
    var startAngle = getAngle(unit_vec_origin_start_tangent);
    var endAngle = getAngle(unit_vec_origin_end_tangent);

    // Connect the point (x0, y0) to the start tangent point by a straight line
    this.lineTo(x + unit_vec_origin_start_tangent[0] * radius,
        y + unit_vec_origin_start_tangent[1] * radius);

    // Connect the start tangent point to the end tangent point by arc
    // and adding the end tangent point to the subpath.
    this.arc(x, y, radius, startAngle, endAngle);
  };

  /**
   * Sets the stroke property on the current element
   */
  ctx.prototype.stroke = function () {
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "fill stroke markers");
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("stroke");
  };

  /**
   * Sets fill properties on the current element
   */
  ctx.prototype.fill = function () {
    if (this.__currentElement.nodeName === "path") {
      this.__currentElement.setAttribute("paint-order", "stroke fill markers");
    }
    this.__applyCurrentDefaultPath();
    this.__applyStyleToCurrentElement("fill");
  };

  /**
   *  Adds a rectangle to the path.
   */
  ctx.prototype.rect = function (x, y, width, height) {
    if (this.__currentElement.nodeName !== "path") {
      this.beginPath();
    }
    this.moveTo(x, y);
    this.lineTo(x+width, y);
    this.lineTo(x+width, y+height);
    this.lineTo(x, y+height);
    this.lineTo(x, y);
    this.closePath();
  };


  /**
   * adds a rectangle element
   */
  ctx.prototype.fillRect = function (x, y, width, height) {
    var rect, parent;
    rect = this.__createElement("rect", {
      x : x,
      y : y,
      width : width,
      height : height
    }, true);
    parent = this.__closestGroupOrSvg();
    parent.appendChild(rect);
    this.__currentElement = rect;
    this.__applyStyleToCurrentElement("fill");
  };

  /**
   * Draws a rectangle with no fill
   * @param x
   * @param y
   * @param width
   * @param height
   */
  ctx.prototype.strokeRect = function (x, y, width, height) {
    var rect, parent;
    rect = this.__createElement("rect", {
      x : x,
      y : y,
      width : width,
      height : height
    }, true);
    parent = this.__closestGroupOrSvg();
    parent.appendChild(rect);
    this.__currentElement = rect;
    this.__applyStyleToCurrentElement("stroke");
  };


  /**
   * Clear entire canvas:
   * 1. save current transforms
   * 2. remove all the childNodes of the root g element
   */
  ctx.prototype.__clearCanvas = function () {
    var current = this.__closestGroupOrSvg(),
        transform = current.getAttribute("transform");
    var rootGroup = this.__root.childNodes[1];
    var childNodes = rootGroup.childNodes;
    for (var i = childNodes.length - 1; i >= 0; i--) {
      if (childNodes[i]) {
        rootGroup.removeChild(childNodes[i]);
      }
    }
    this.__currentElement = rootGroup;
    //reset __groupStack as all the child group nodes are all removed.
    this.__groupStack = [];
    if (transform) {
      this.__addTransform(transform);
    }
  };

  /**
   * "Clears" a canvas by just drawing a white rectangle in the current group.
   */
  ctx.prototype.clearRect = function (x, y, width, height) {
    //clear entire canvas
    if (x === 0 && y === 0 && width === this.width && height === this.height) {
      this.__clearCanvas();
      return;
    }
    var rect, parent = this.__closestGroupOrSvg();
    rect = this.__createElement("rect", {
      x : x,
      y : y,
      width : width,
      height : height,
      fill : "#FFFFFF"
    }, true);
    parent.appendChild(rect);
  };

  /**
   * Adds a linear gradient to a defs tag.
   * Returns a canvas gradient object that has a reference to it's parent def
   */
  ctx.prototype.createLinearGradient = function (x1, y1, x2, y2) {
    var grad = this.__createElement("linearGradient", {
      id : randomString(this.__ids),
      x1 : x1+"px",
      x2 : x2+"px",
      y1 : y1+"px",
      y2 : y2+"px",
      "gradientUnits" : "userSpaceOnUse"
    }, false);
    this.__defs.appendChild(grad);
    return new CanvasGradient(grad, this);
  };

  /**
   * Adds a radial gradient to a defs tag.
   * Returns a canvas gradient object that has a reference to it's parent def
   */
  ctx.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
    var grad = this.__createElement("radialGradient", {
      id : randomString(this.__ids),
      cx : x1+"px",
      cy : y1+"px",
      r  : r1+"px",
      fx : x0+"px",
      fy : y0+"px",
      "gradientUnits" : "userSpaceOnUse"
    }, false);
    this.__defs.appendChild(grad);
    return new CanvasGradient(grad, this);

  };

  /**
   * Parses the font string and returns svg mapping
   * @private
   */
  ctx.prototype.__parseFont = function () {
    var regex = /^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))(?:\\s*\\/\\s*(normal|[.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])))?\\s*([-,\\'\\"\\sa-z0-9]+?)\\s*$/i;
    var fontPart = regex.exec( this.font );
    var data = {
      style : fontPart[1] || 'normal',
      size : fontPart[4] || '10px',
      family : fontPart[6] || 'sans-serif',
      weight: fontPart[3] || 'normal',
      decoration : fontPart[2] || 'normal',
      href : null
    };

    //canvas doesn't support underline natively, but we can pass this attribute
    if (this.__fontUnderline === "underline") {
      data.decoration = "underline";
    }

    //canvas also doesn't support linking, but we can pass this as well
    if (this.__fontHref) {
      data.href = this.__fontHref;
    }

    return data;
  };

  /**
   * Helper to link text fragments
   * @param font
   * @param element
   * @return {*}
   * @private
   */
  ctx.prototype.__wrapTextLink = function (font, element) {
    if (font.href) {
      var a = this.__createElement("a");
      a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", font.href);
      a.appendChild(element);
      return a;
    }
    return element;
  };

  /**
   * Fills or strokes text
   * @param text
   * @param x
   * @param y
   * @param action - stroke or fill
   * @private
   */
  ctx.prototype.__applyText = function (text, x, y, action) {
    var font = this.__parseFont(),
        parent = this.__closestGroupOrSvg(),
        textElement = this.__createElement("text", {
          "font-family" : font.family,
          "font-size" : font.size,
          "font-style" : font.style,
          "font-weight" : font.weight,
          "text-decoration" : font.decoration,
          "x" : x,
          "y" : y,
          "text-anchor": getTextAnchor(this.textAlign),
          "dominant-baseline": getDominantBaseline(this.textBaseline)
        }, true);

    textElement.appendChild(this.__document.createTextNode(text));
    this.__currentElement = textElement;
    this.__applyStyleToCurrentElement(action);
    parent.appendChild(this.__wrapTextLink(font,textElement));
  };

  /**
   * Creates a text element
   * @param text
   * @param x
   * @param y
   */
  ctx.prototype.fillText = function (text, x, y) {
    this.__applyText(text, x, y, "fill");
  };

  /**
   * Strokes text
   * @param text
   * @param x
   * @param y
   */
  ctx.prototype.strokeText = function (text, x, y) {
    this.__applyText(text, x, y, "stroke");
  };

  /**
   * No need to implement this for svg.
   * @param text
   * @return {TextMetrics}
   */
  ctx.prototype.measureText = function (text) {
    this.__ctx.font = this.font;
    return this.__ctx.measureText(text);
  };

  /**
   *  Arc command!
   */
  ctx.prototype.arc = function (x, y, radius, startAngle, endAngle, counterClockwise) {
    // in canvas no circle is drawn if no angle is provided.
    if (startAngle === endAngle) {
      return;
    }
    startAngle = startAngle % (2*Math.PI);
    endAngle = endAngle % (2*Math.PI);
    if (startAngle === endAngle) {
      //circle time! subtract some of the angle so svg is happy (svg elliptical arc can't draw a full circle)
      endAngle = ((endAngle + (2*Math.PI)) - 0.001 * (counterClockwise ? -1 : 1)) % (2*Math.PI);
    }
    var endX = x+radius*Math.cos(endAngle),
        endY = y+radius*Math.sin(endAngle),
        startX = x+radius*Math.cos(startAngle),
        startY = y+radius*Math.sin(startAngle),
        sweepFlag = counterClockwise ? 0 : 1,
        largeArcFlag = 0,
        diff = endAngle - startAngle;

    // https://github.com/gliffy/canvas2svg/issues/4
    if (diff < 0) {
      diff += 2*Math.PI;
    }

    if (counterClockwise) {
      largeArcFlag = diff > Math.PI ? 0 : 1;
    } else {
      largeArcFlag = diff > Math.PI ? 1 : 0;
    }

    this.lineTo(startX, startY);
    this.__addPathCommand(format("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",
        {rx:radius, ry:radius, xAxisRotation:0, largeArcFlag:largeArcFlag, sweepFlag:sweepFlag, endX:endX, endY:endY}));

    this.__currentPosition = {x: endX, y: endY};
  };

  /**
   * Generates a ClipPath from the clip command.
   */
  ctx.prototype.clip = function () {
    var group = this.__closestGroupOrSvg(),
        clipPath = this.__createElement("clipPath"),
        id =  randomString(this.__ids),
        newGroup = this.__createElement("g");

    this.__applyCurrentDefaultPath();
    group.removeChild(this.__currentElement);
    clipPath.setAttribute("id", id);
    clipPath.appendChild(this.__currentElement);

    this.__defs.appendChild(clipPath);

    //set the clip path to this group
    group.setAttribute("clip-path", format("url(#{id})", {id:id}));

    //clip paths can be scaled and transformed, we need to add another wrapper group to avoid later transformations
    // to this path
    group.appendChild(newGroup);

    this.__currentElement = newGroup;

  };

  /**
   * Draws a canvas, image or mock context to this canvas.
   * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
   */
  ctx.prototype.drawImage = function () {
    //convert arguments to a real array
    var args = Array.prototype.slice.call(arguments),
        image=args[0],
        dx, dy, dw, dh, sx=0, sy=0, sw, sh, parent, svg, defs, group,
        currentElement, svgImage, canvas, context, id;

    if (args.length === 3) {
      dx = args[1];
      dy = args[2];
      sw = image.width;
      sh = image.height;
      dw = sw;
      dh = sh;
    } else if (args.length === 5) {
      dx = args[1];
      dy = args[2];
      dw = args[3];
      dh = args[4];
      sw = image.width;
      sh = image.height;
    } else if (args.length === 9) {
      sx = args[1];
      sy = args[2];
      sw = args[3];
      sh = args[4];
      dx = args[5];
      dy = args[6];
      dw = args[7];
      dh = args[8];
    } else {
      throw new Error("Invalid number of arguments passed to drawImage: " + arguments.length);
    }

    parent = this.__closestGroupOrSvg();
    currentElement = this.__currentElement;
    var translateDirective = "translate(" + dx + ", " + dy + ")";
    if (image instanceof ctx) {
      //canvas2svg mock canvas context. In the future we may want to clone nodes instead.
      //also I'm currently ignoring dw, dh, sw, sh, sx, sy for a mock context.
      svg = image.getSvg().cloneNode(true);
      if (svg.childNodes && svg.childNodes.length > 1) {
        defs = svg.childNodes[0];
        while(defs.childNodes.length) {
          id = defs.childNodes[0].getAttribute("id");
          this.__ids[id] = id;
          this.__defs.appendChild(defs.childNodes[0]);
        }
        group = svg.childNodes[1];
        if (group) {
          //save original transform
          var originTransform = group.getAttribute("transform");
          var transformDirective;
          if (originTransform) {
            transformDirective = originTransform+" "+translateDirective;
          } else {
            transformDirective = translateDirective;
          }
          group.setAttribute("transform", transformDirective);
          parent.appendChild(group);
        }
      }
    } else if (image.nodeName === "CANVAS" || image.nodeName === "IMG") {
      //canvas or image
      svgImage = this.__createElement("image");
      svgImage.setAttribute("width", dw);
      svgImage.setAttribute("height", dh);
      svgImage.setAttribute("preserveAspectRatio", "none");

      if (sx || sy || sw !== image.width || sh !== image.height) {
        //crop the image using a temporary canvas
        canvas = this.__document.createElement("canvas");
        canvas.width = dw;
        canvas.height = dh;
        context = canvas.getContext("2d");
        context.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh);
        image = canvas;
      }
      svgImage.setAttribute("transform", translateDirective);
      svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",
          image.nodeName === "CANVAS" ? image.toDataURL() : image.getAttribute("src"));
      parent.appendChild(svgImage);
    }
  };

  /**
   * Generates a pattern tag
   */
  ctx.prototype.createPattern = function (image, repetition) {
    var pattern = this.__document.createElementNS("http://www.w3.org/2000/svg", "pattern"), id = randomString(this.__ids),
        img;
    pattern.setAttribute("id", id);
    pattern.setAttribute("width", image.width);
    pattern.setAttribute("height", image.height);
    if (image.nodeName === "CANVAS" || image.nodeName === "IMG") {
      img = this.__document.createElementNS("http://www.w3.org/2000/svg", "image");
      img.setAttribute("width", image.width);
      img.setAttribute("height", image.height);
      img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",
          image.nodeName === "CANVAS" ? image.toDataURL() : image.getAttribute("src"));
      pattern.appendChild(img);
      this.__defs.appendChild(pattern);
    } else if (image instanceof ctx) {
      pattern.appendChild(image.__root.childNodes[1]);
      this.__defs.appendChild(pattern);
    }
    return new CanvasPattern(pattern, this);
  };

  ctx.prototype.setLineDash = function (dashArray) {
    if (dashArray && dashArray.length > 0) {
      this.lineDash = dashArray.join(",");
    } else {
      this.lineDash = null;
    }
  };

  /**
   * Not yet implemented
   */
  ctx.prototype.drawFocusRing = function () {};
  ctx.prototype.createImageData = function () {};
  ctx.prototype.getImageData = function () {};
  ctx.prototype.putImageData = function () {};
  ctx.prototype.globalCompositeOperation = function () {};
  ctx.prototype.setTransform = function () {};

  //add options for alternative namespace
  if (typeof window === "object") {
    window.C2S = ctx;
  }

  // CommonJS/Browserify
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = ctx;
  }

}());
`,ss=e=>(Vn("data-v-fefc6fa7"),e=e(),Wn(),e),os={"flex-center":""},ls=ss(()=>G("img",{"i-mdi-tray-arrow-down":"",alt:"下载"},null,-1)),cs={"ml-6px":"","flex-self-baseline":""},us={"mt-16px":"","w-fit":""},ds=["width","height"],hs=["src","alt","width","height"],ps=T({__name:"regular-polygon",props:{minCanvasSize:{default:500},sideCounts:{default:50},sideWidth:{default:1},sideColor:{default:"black"},diagonalWidth:{default:1},diagonalColor:{default:"black"},minSideLength:{default:100},onlyVertex:{type:Boolean,default:!0},animation:{type:Boolean,default:!1},startDirection:{},clockwise:{type:Boolean},lazy:{type:Boolean,default:!0}},setup(e){const t=e,n=`regular-polygon-${t.sideCounts}`,r=rs(),a=E(!1),i=E(0),s=E("");qn({script:[{key:"canvas2svg",innerHTML:is},{key:"gif",src:"https://cdn.bootcdn.net/ajax/libs/gif.js/0.2.0/gif.js",onload:()=>{console.log("gif.js loaded"),r.setGifJsLoaded(!0)},onerror:()=>{ke.error({message:"Fail to load gif.js from CDN"})}}]});const o=E(0),l=b(()=>{const h=t.sideCounts,u=t.minSideLength/Math.sin(2*Math.PI/h);return o.value=u,u>t.minCanvasSize?u:t.minCanvasSize}),c=b(()=>{const h=[],w=o.value/2,u=2*Math.PI/t.sideCounts;for(let C=0;C<t.sideCounts;C++){const k=C*u;h[C]={x:+(w*Math.sin(k)).toFixed(3),y:-(w*Math.cos(k)).toFixed(3)}}return h}),d=E();function p(){}Rt(async()=>{if(!d.value.getContext){console.warn("不支持 canvas");return}const h=d.value.getContext("2d",{alpha:!1});m(h),await f(h,{sideCounts:t.sideCounts,sideWidth:t.sideWidth,sideColor:t.sideColor}),await _(h,{sideCounts:t.sideCounts,diagonalWidth:t.diagonalWidth,diagonalColor:t.diagonalColor}),console.log("绘制完成"),window.addEventListener("resize",p)}),Hn(()=>{window.removeEventListener("resize",p)});async function f(h,w,u=()=>{}){return new Promise(async C=>{const{sideCounts:k,sideWidth:F,sideColor:V}=w;if(h.lineWidth=F,h.strokeStyle=V,h.beginPath(),h.moveTo(c.value[0].x,c.value[0].y),t.animation){for(let A=0;A<k-1;A++)await v(h,c.value[A],c.value[A+1]),u();await v(h,c.value[c.value.length-1],c.value[0]),u()}else{for(let A=0;A<k;A++)h.lineTo(c.value[A].x,c.value[A].y),u();h.lineTo(c.value[0].x,c.value[0].y),u(),h.stroke()}C(!0)})}async function _(h,w,u=()=>{}){return new Promise(async C=>{const{sideCounts:k,diagonalWidth:F,diagonalColor:V}=w;h.lineWidth=F,h.strokeStyle=V;for(let A=0;A<k-1;A++)for(let B=A+2;B<k&&!(A===0&&B===k-1);B++)t.animation?(await v(h,c.value[A],c.value[B]),u()):(h.beginPath(),h.moveTo(c.value[A].x,c.value[A].y),h.lineTo(c.value[B].x,c.value[B].y),u(),h.stroke());C(!0)})}function v(h,w,u){return new Promise(C=>{h.beginPath(),h.moveTo(w.x,w.y);const k=300,F=u.x-w.x,V=u.y-w.y,A=Date.now(),B=()=>{const ce=(Date.now()-A)/k;if(ce>1){h.lineTo(u.x,u.y),h.stroke(),C(!0);return}h.lineTo(w.x+F*ce,w.y+V*ce),h.stroke(),requestAnimationFrame(B)};requestAnimationFrame(B)})}function m(h){h.lineJoin="miter",h.fillStyle="white",h.fillRect(0,0,l.value,l.value),h.translate(l.value/2,l.value/2),h.scale(window.devicePixelRatio,window.devicePixelRatio)}const y=["JPEG","PNG","SVG","GIF","BASE64"];async function x(){const h=new C2S(l.value,l.value);m(h),await f(h,{sideCounts:t.sideCounts,sideWidth:t.sideWidth,sideColor:t.sideColor}),await _(h,{sideCounts:t.sideCounts,diagonalWidth:t.diagonalWidth,diagonalColor:t.diagonalColor});const w=h.getSerializedSvg(),u=new Blob([w],{type:"image/scg+xml;charset=utf-8"}),C=URL.createObjectURL(u);P(C,`${n}.svg`)}async function L(h){if(!(r.isGifJsLoaded&&typeof GIF=="function"))return ke.error({message:"Please wait until gif.js loaded"});const u=new GIF({workerScript:URL.createObjectURL(new Blob([as],{type:"application/javascript"})),workers:2,repeat:0,background:"#fff",quality:10,debug:!1,width:l.value,height:l.value});u.on("start",()=>{a.value=!0}),u.on("progress",k=>{console.log(k),i.value=k}),u.on("finished",k=>{a.value=!1;const F=URL.createObjectURL(k);s.value=F,P(F,`${n}.gif`),u.abort()}),u.on("abort",()=>{a.value=!1,i.value=0});const C=()=>{u.addFrame(h,{copy:!0,delay:t.sideCounts>10?100:300})};h.fillStyle="#fff",h.clearRect(-l.value/2,-l.value/2,l.value,l.value),h.fillRect(-l.value/2,-l.value/2,l.value,l.value),await f(h,{sideCounts:t.sideCounts,sideWidth:t.sideWidth,sideColor:t.sideColor},C),await _(h,{sideCounts:t.sideCounts,diagonalWidth:t.diagonalWidth,diagonalColor:t.diagonalColor},C),u.render()}async function j(h){let w="";switch(h){case"GIF":L(d.value.getContext("2d"));break;case"JPEG":w=d.value.toDataURL("image/jpeg",1),P(w,`${n}.jpeg`);break;case"PNG":w=d.value.toDataURL("image/png",1),P(w,`${n}.png`);break;case"SVG":x();break;case"BASE64":w=d.value.toDataURL("image/png",1);const{copy:u}=Zn({legacy:!0});u(w).then(()=>{ke.success({message:"Copied!"})}).catch(()=>{ke.error({message:"Fail to copy"})});break}}function P(h,w){const u=document.createElement("a");u.download=w,u.href=h,document.body.appendChild(u),u.click(),document.body.removeChild(u)}return(h,w)=>{const u=Fi,C=Ri;return S(),I("div",null,[(S(),I(nt,null,Un(y,k=>_e(u,{key:k,type:"primary",onClick:F=>j(k)},{default:Z(()=>[G("div",os,[ls,G("span",cs,Xe(k),1)])]),_:2},1032,["onClick"])),64)),Fe((S(),I("div",us,[G("canvas",{ref_key:"canvas",ref:d,width:g(l),height:g(l)},null,8,ds)])),[[C,g(a)&&{text:`${+g(i).toFixed(2)*100}%`}]]),g(s)?(S(),I("img",{key:0,src:g(s),alt:`regular-polygon-${h.sideCounts}.gif`,width:g(l),height:g(l)},null,8,hs)):X("",!0)])}}}),Ts=Kn(ps,[["__scopeId","data-v-fefc6fa7"]]);var U={},Mt=/^([+-])?0*(\d+)(\.(\d+))?$/,yn=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,fs=U.e2ten=function(e){var t=yn.exec(e.toString());if(!t)return e;var n=t[2],r=t[4]||"",a=t[5]?+t[5]:0;if(a>0){var i=r.substr(0,a);i=i.length<a?i+new Array(a-i.length+1).join("0"):i,r=r.substr(a),n+=i}else{a=-a;var s=n.length-a;s=s<0?0:s;var o=n.substr(s,a);o=o.length<a?new Array(a-o.length+1).join("0")+o:o,n=n.substring(0,s),r=o+r}return n=n==""?"0":n,(t[1]=="-"?"-":"")+n+(r?"."+r:"")};U.getNumbResult=function(e){var t=Mt.exec(e.toString());if(!t&&yn.test(e.toString())&&(t=Mt.exec(fs(e.toString()))),t)return{int:t[2],decimal:t[4],minus:t[1]=="-",num:t.slice(1,3).join("")}};U.centerArray=function e(t,n){if(t.splice.apply(t,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var r=[].slice.call(arguments,2);r.unshift(t),e.apply(null,r)}return t};var gs=U.hasAttr=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};U.extend=function(e){for(var t,n=arguments[0]||{},r=Array.prototype.slice.call(arguments,1),a=0;a<r.length;a++){var i=r[a];for(t in i)gs(i,t)&&(n[t]=i[t])}return n};U.getDigit=function(e){return e>=5?(e-4)*4+4:e};U.unshiftZero=function(e,t){if(t==null&&(t=1),!(t<=0))for(;t--;)e.unshift(0)};U.clearZero=function(e,t,n){if(e==null)return"";var r=~"*.?+$^[](){}|\\/".indexOf(t)?"\\"+t:t,a=new RegExp("^"+r+"+"),i=new RegExp(r+"+$"),s=new RegExp(r+"{2}","g");return e=e.toString(),n=="^"&&(e=e.replace(a,"")),(!n||n=="$")&&(e=e.replace(i,"")),(!n||n=="nto1")&&(e=e.replace(s,t)),e};var M=U;function fe(e,t){var n=M.getNumbResult(e);if(!n)return e;t=t||{};var r=this.ch,a=this.ch_u,i=this.ch_f||"",s=this.ch_d||".",o=r.charAt(0),l=n.int,c=n.decimal,d=n.minus,p="",f="",_=d?i:"",v=function j(P,h,w){P=M.getNumbResult(P).int;var u="",C=arguments.length>1?arguments[1]:t.tenMin,k=P.length;if(k==1)return r.charAt(+P);if(k<=4)for(var F=0,V=k;V--;){var A=+P.charAt(F);u+=C&&k==2&&F==0&&A==1?"":r.charAt(A),u+=A&&V?a.charAt(V):"",F++}else{for(var B=P.length/4>>0,le=P.length%4;le==0||!a.charAt(3+B);)le+=4,B--;var ce=P.substr(0,le),$e=P.substr(le);u=j(ce,C)+a.charAt(3+B)+($e.charAt(0)=="0"?o:"")+j($e,$e.length>4?C:!1)}return u=M.clearZero(u,o),u};if(c){c=M.clearZero(c,"0","$");for(var m=0;m<c.length;m++)f+=r.charAt(+c.charAt(m));f=f?s+f:""}if(p=v(l),t.ww&&a.length>5){var y=a.charAt(4),x=a.charAt(5),L=p.lastIndexOf(x);~L&&(p=p.substring(0,L).replace(new RegExp(x,"g"),y+y)+p.substring(L))}return _+p+f}function ms(e){e=e.toString();var t=e.split(this.ch_d),n=t[0].replace(this.ch_f,""),r=t[1],a=!!~t[0].indexOf(this.ch_f),i=this.ch_u.charAt(1),s=this.ch_u.charAt(4),o=this.ch_u.charAt(5);n=n.replace(new RegExp(s+"{2}","g"),o);for(var l=n.split(""),c=0,d=0,p=[],f=[],_=[],v=0;v<l.length;v++){var m=l[v],y=0,x=0;if(~(y=this.ch.indexOf(m)))y>0&&_.unshift(y);else if(~(x=this.ch_u.indexOf(m))){var L=M.getDigit(x);c>x?(M.unshiftZero(_,L),M.centerArray(f,_)):x>=d?(v==0&&(_=[1]),M.centerArray(p,f,_),p.length>0&&M.unshiftZero(p,L),d=x):(_.length==0&&i==m&&(_=[1]),M.centerArray(f,_),M.unshiftZero(f,M.getDigit(x)),c=x)}}M.centerArray(p,f,_).reverse(),p.length==0&&p.push(0);var j=0;if(r){p.push("."),j="0.";for(var v=0;v<r.length;v++)j+=this.ch.indexOf(r.charAt(v)),p.push(this.ch.indexOf(r.charAt(v)));j=+j}return a&&p.unshift("-"),parseFloat(p.join(""))}function vs(e,t){var n={ww:!0,complete:!1,outSymbol:!0,unOmitYuan:!1,forceZheng:!1},r=M.getNumbResult(e),a=this.ch.charAt(0);if(t=typeof t=="object"?t:{},!r)return e;t=M.extend(n,t);var i=r.int,s=r.decimal||"",o=t.outSymbol?this.m_t:"",l=r.minus?this.ch_f:"",c="";if(t.complete){for(var d=1;d<this.m_u.length;d++)c+=fe.call(this,s.charAt(d-1)||"0")+this.m_u.charAt(d);l+=fe.call(this,i,t)+this.m_u.charAt(0)}else{var p=t.unOmitYuan||i!=="0";if(s=s.substr(0,this.m_u.length-1),s=M.clearZero(s,"0","$"),s)for(var f,d=0;d<this.m_u.length-1;d++)s.charAt(d)&&s.charAt(d)!="0"&&(c+=fe.call(this,s.charAt(d))+this.m_u.charAt(d+1),f=!1),s.charAt(d)==="0"&&!f&&((d!=0||i!=="0")&&(c+=a),f=!0);(p||!c)&&(l+=fe.call(this,i,t)+this.m_u.charAt(0)),t.forceZheng?(c==""||c.charAt(c.length-1)!==this.m_u[2])&&(c+=this.m_z):l+=r.decimal?"":this.m_z,t.forceZheng}return o+l+c}var _n={CL:fe,unCL:ms,toMoney:vs},pe=_n,Ue=U;function ys(e,t){return{encodeS:function(n,r){return r=Ue.extend({ww:!0,tenMin:!0},r),pe.CL.call(e,n,r)},encodeB:function(n,r){return r=Ue.extend({ww:!0},r),pe.CL.call(t,n,r)},decodeS:function(){return pe.unCL.apply(e,arguments)},decodeB:function(){return pe.unCL.apply(t,arguments)},toMoney:function(n,r){return r=Ue.extend({ww:!0},r),pe.toMoney.call(t,n,r)}}}var _s=ys,bs={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"},xs={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"},ws={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"},Ss={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"},Ve=_n,bn=_s,ve={s:bs,b:xs,hk_s:ws,hk_b:Ss},Le=function(e){this.lang=e,this.encode=function(){return Ve.CL.apply(e,arguments)},this.decode=function(){return Ve.unCL.apply(e,arguments)},this.toMoney=function(){return Ve.toMoney.apply(e,arguments)}};Le.langs=ve;Le.cn=bn(ve.s,ve.b);Le.hk=bn(ve.hk_s,ve.hk_b);var ks=Le;const Ps=Bi(ks);export{Ts as _,Ps as n};
