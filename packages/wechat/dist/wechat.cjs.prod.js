/*!
 * vue-mini v0.2.2
 * https://github.com/vue-mini/vue-mini
 * (c) 2019-present Yang Mingshan
 * @license MIT
 */
"use strict";function e(e,t){const n=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)n[o[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}Object.defineProperty(exports,"__esModule",{value:!0});const t=()=>{},n=Object.assign,o=Object.prototype.hasOwnProperty,s=(e,t)=>o.call(e,t),i=Array.isArray,r=e=>"[object Map]"===h(e),c=e=>"symbol"==typeof e,a=e=>null!==e&&"object"==typeof e,l=Object.prototype.toString,h=e=>l.call(e),u=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,f=(e,t)=>!Object.is(e,t);let p;const d=[];class _{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&p&&(this.parent=p,this.index=(p.scopes||(p.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(d.push(this),p=this)}off(){this.active&&(d.pop(),p=d[d.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function v(e,t){(t=t||p)&&t.active&&t.effects.push(e)}const g=e=>{const t=new Set(e);return t.w=0,t.n=0,t},m=e=>(e.w&b)>0,y=e=>(e.n&b)>0,S=new WeakMap;let w=0,b=1;const x=[];let R;const T=Symbol(""),P=Symbol("");class O{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],v(this,n)}run(){if(!this.active)return this.fn();if(!x.includes(this))try{return x.push(R=this),A.push(j),j=!0,b=1<<++w,w<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=b})(this):E(this),this.fn()}finally{w<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const s=t[o];m(s)&&!y(s)?s.delete(e):t[n++]=s,s.w&=~b,s.n&=~b}t.length=n}})(this),b=1<<--w,k(),x.pop();const e=x.length;R=e>0?x[e-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let j=!0;const A=[];function k(){const e=A.pop();j=void 0===e||e}function I(e,t,n){if(!C())return;let o=S.get(e);o||S.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=g()),M(s)}function C(){return j&&void 0!==R}function M(e,t){let n=!1;w<=30?y(e)||(e.n|=b,n=!m(e)):n=!e.has(R),n&&(e.add(R),R.deps.push(e))}function H(e,t,n,o,s,c){const a=S.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&i(e))a.forEach(((e,t)=>{("length"===t||t>=o)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":i(e)?u(n)&&l.push(a.get("length")):(l.push(a.get(T)),r(e)&&l.push(a.get(P)));break;case"delete":i(e)||(l.push(a.get(T)),r(e)&&l.push(a.get(P)));break;case"set":r(e)&&l.push(a.get(T))}if(1===l.length)l[0]&&z(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);z(g(e))}}function z(e,t){for(const t of i(e)?e:[...e])(t!==R||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const F=e("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(c)),B=V(),D=V(!1,!0),N=V(!0),U=V(!0,!0),W=Q();function Q(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ke(this);for(let e=0,t=this.length;e<t;e++)I(n,0,e+"");const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(ke)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){A.push(j),j=!1;const n=ke(this)[t].apply(this,e);return k(),n}})),e}function V(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?t?be:we:t?Se:ye).get(n))return n;const l=i(n);if(!e&&l&&s(W,o))return Reflect.get(W,o,r);const h=Reflect.get(n,o,r);if(c(o)?L.has(o):F(o))return h;if(e||I(n,0,o),t)return h;if(ze(h)){return!l||!u(o)?h.value:h}return a(h)?e?Pe(h):Re(h):h}}function K(e=!1){return function(t,n,o,r){let c=t[n];if(!e&&(o=ke(o),c=ke(c),!i(t)&&ze(c)&&!ze(o)))return c.value=o,!0;const a=i(t)&&u(n)?Number(n)<t.length:s(t,n),l=Reflect.set(t,n,o,r);return t===ke(r)&&(a?f(o,c)&&H(t,"set",n,o):H(t,"add",n,o)),l}}const $={get:B,set:K(),deleteProperty:function(e,t){const n=s(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&H(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return c(t)&&L.has(t)||I(e,0,t),n},ownKeys:function(e){return I(e,0,i(e)?"length":T),Reflect.ownKeys(e)}},q={get:N,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},G=n({},$,{get:D,set:K(!0)}),J=n({},q,{get:U}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,o=!1){const s=ke(e=e.__v_raw),i=ke(t);t!==i&&!n&&I(s,0,t),!n&&I(s,0,i);const{has:r}=Y(s),c=o?X:n?Ce:Ie;return r.call(s,t)?c(e.get(t)):r.call(s,i)?c(e.get(i)):void(e!==s&&e.get(t))}function ee(e,t=!1){const n=this.__v_raw,o=ke(n),s=ke(e);return e!==s&&!t&&I(o,0,e),!t&&I(o,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function te(e,t=!1){return e=e.__v_raw,!t&&I(ke(e),0,T),Reflect.get(e,"size",e)}function ne(e){e=ke(e);const t=ke(this);return Y(t).has.call(t,e)||(t.add(e),H(t,"add",e,e)),this}function oe(e,t){t=ke(t);const n=ke(this),{has:o,get:s}=Y(n);let i=o.call(n,e);i||(e=ke(e),i=o.call(n,e));const r=s.call(n,e);return n.set(e,t),i?f(t,r)&&H(n,"set",e,t):H(n,"add",e,t),this}function se(e){const t=ke(this),{has:n,get:o}=Y(t);let s=n.call(t,e);s||(e=ke(e),s=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return s&&H(t,"delete",e,void 0),i}function ie(){const e=ke(this),t=0!==e.size,n=e.clear();return t&&H(e,"clear",void 0,void 0),n}function re(e,t){return function(n,o){const s=this,i=s.__v_raw,r=ke(i),c=t?X:e?Ce:Ie;return!e&&I(r,0,T),i.forEach(((e,t)=>n.call(o,c(e),c(t),s)))}}function ce(e,t,n){return function(...o){const s=this.__v_raw,i=ke(s),c=r(i),a="entries"===e||e===Symbol.iterator&&c,l="keys"===e&&c,h=s[e](...o),u=n?X:t?Ce:Ie;return!t&&I(i,0,l?P:T),{next(){const{value:e,done:t}=h.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return Z(this,e)},get size(){return te(this)},has:ee,add:ne,set:oe,delete:se,clear:ie,forEach:re(!1,!1)},t={get(e){return Z(this,e,!1,!0)},get size(){return te(this)},has:ee,add:ne,set:oe,delete:se,clear:ie,forEach:re(!1,!0)},n={get(e){return Z(this,e,!0)},get size(){return te(this,!0)},has(e){return ee.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:re(!0,!1)},o={get(e){return Z(this,e,!0,!0)},get size(){return te(this,!0)},has(e){return ee.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((s=>{e[s]=ce(s,!1,!1),n[s]=ce(s,!0,!1),t[s]=ce(s,!1,!0),o[s]=ce(s,!0,!0)})),[e,n,t,o]}const[he,ue,fe,pe]=le();function de(e,t){const n=t?e?pe:fe:e?ue:he;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(s(n,o)&&o in t?n:t,o,i)}const _e={get:de(!1,!1)},ve={get:de(!1,!0)},ge={get:de(!0,!1)},me={get:de(!0,!0)},ye=new WeakMap,Se=new WeakMap,we=new WeakMap,be=new WeakMap;function xe(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>h(e).slice(8,-1))(e))}function Re(e){return e&&e.__v_isReadonly?e:Oe(e,!1,$,_e,ye)}function Te(e){return Oe(e,!1,G,ve,Se)}function Pe(e){return Oe(e,!0,q,ge,we)}function Oe(e,t,n,o,s){if(!a(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const r=xe(e);if(0===r)return e;const c=new Proxy(e,2===r?o:n);return s.set(e,c),c}function Ee(e){return je(e)?Ee(e.__v_raw):!(!e||!e.__v_isReactive)}function je(e){return!(!e||!e.__v_isReadonly)}function Ae(e){return Ee(e)||je(e)}function ke(e){const t=e&&e.__v_raw;return t?ke(t):e}const Ie=e=>a(e)?Re(e):e,Ce=e=>a(e)?Pe(e):e;function Me(e){C()&&((e=ke(e)).dep||(e.dep=g()),M(e.dep))}function He(e,t){(e=ke(e)).dep&&z(e.dep)}function ze(e){return Boolean(e&&!0===e.__v_isRef)}function Fe(e,t){return ze(e)?e:new Le(e,t)}class Le{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ie(e)}get value(){return Me(this),this._value}set value(e){e=this._shallow?e:ke(e),f(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ie(e),He(this))}}function Be(e){return ze(e)?e.value:e}const De={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};class Ne{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>Me(this)),(()=>He(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}class Ue{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function We(e,t){const n=e[t];return ze(n)?n:new Ue(e,t)}class Qe{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new O(e,(()=>{this._dirty||(this._dirty=!0,He(this))})),this.__v_isReadonly=n}get value(){const e=ke(this);return Me(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Promise.resolve();let Ve=!1,Ke=!1;const $e=[];let qe=0;const Ge=Promise.resolve();let Je=null;function Xe(e){0!==$e.length&&$e.includes(e,Ve&&e.allowRecurse?qe+1:qe)||($e.push(e),Ve||Ke||(Ke=!0,Je=Ge.then(Ye)))}function Ye(e){Ke=!1,Ve=!0;try{for(qe=0;qe<$e.length;qe++){const e=$e[qe];!1!==e.active&&e()}}finally{qe=0,$e.length=0,Ve=!1,Je=null}}let Ze=null,et=null,tt=null;function nt(){return et||tt}const{isArray:ot}=Array;function st(e){return Object.prototype.toString.call(e).slice(8,-1)}function it(e){return null!==e&&"object"==typeof e}function rt(e){return"Object"===st(e)}function ct(e){return"function"==typeof e}function at(e,t){return e!==t&&(e==e||t==t)}function lt(e){return`__${e}__`}const ht={};function ut(e,t,n){return ft(e,t,n)}function ft(e,t,{immediate:n,deep:o,flush:s}={}){let i,r,c=!1,a=!1;if(ze(e)?(i=()=>e.value,c=Boolean(e._shallow)):Ee(e)?(i=()=>e,o=!0):ot(e)?(a=!0,c=e.some((e=>Ee(e))),i=()=>e.map((e=>ze(e)?e.value:Ee(e)?pt(e):ct(e)?e():void 0))):i=ct(e)?t?()=>e():()=>(r&&r(),e(l)):()=>{},t&&o){const e=i;i=()=>pt(e())}const l=e=>{r=p.onStop=()=>{e()}};let h=a?[]:ht;const u=()=>{if(p.active)if(t){const e=p.run();(o||c||(a?e.some(((e,t)=>at(e,h[t]))):at(e,h)))&&(r&&r(),t(e,h===ht?void 0:h,l),h=e)}else p.run()};let f;u.allowRecurse=Boolean(t),f="sync"===s?u:()=>{Xe(u)};const p=new O(i,f);t?n?u():h=p.run():p.run();const d=nt();return()=>{p.stop(),d&&d.__scope__&&function(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}(d.__scope__.effects,p)}}function pt(e,t){if(!it(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ze(e))pt(e.value,t);else if(ot(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if("Set"===st(e)||function(e){return"Map"===st(e)}(e))e.forEach((e=>{pt(e,t)}));else if(rt(e))for(const n in e)pt(e[n],t);return e}const dt=Object.create(null);function _t(e,t){const n=e[t];return function(...e){const o=this[lt(t)];o&&o.forEach((t=>t(...e))),void 0!==n&&n.call(this,...e)}}function vt(e){if(function(e){const t=new Set(["undefined","boolean","number","string"]);return null===e||t.has(typeof e)}(e)||ct(e))return e;if(ze(e))return vt(e.value);if(Ae(e))return vt(ke(e));if(ot(e))return e.map((e=>vt(e)));if(rt(e)){const t={};return Object.keys(e).forEach((n=>{t[n]=vt(e[n])})),t}throw new TypeError(`${st(e)} value is not supported`)}function gt(e,t){it(t)&&ut(ze(t)?t:()=>t,(()=>{this.setData({[e]:vt(t)})}),{deep:!0})}function mt(e,t){const n=e[t];return function(...e){const o=this[lt(t)];o&&o.forEach((t=>t(...e))),void 0!==n&&n.call(this,...e)}}const yt={onShow:"show",onHide:"hide",onResize:"resize",ready:"onReady"};function St(e,t){return xt(t,e.lifetimes[t]||e[t])}function wt(e,t){return xt(t,e.methods[t])}function bt(e,t){return xt(t,e.pageLifetimes[yt[t]])}function xt(e,t){const n=lt(e);return function(...e){const o=this[n];o&&o.forEach((t=>t(...e))),void 0!==t&&t.call(this,...e)}}const Rt=Nt("onShow"),Tt=Nt("onHide"),Pt=Nt("onError"),Ot=Nt("onPageNotFound"),Et=Nt("onUnhandledRejection"),jt=Nt("onThemeChange"),At=Ut("onShow"),kt=Ut("onHide"),It=Ut("onUnload"),Ct=Ut("onPullDownRefresh"),Mt=Ut("onReachBottom"),Ht=Ut("onResize"),zt=Ut("onTabItemTap"),Ft=Wt("onLoad"),Lt=Wt("moved"),Bt=Wt("detached"),Dt=Wt("error");function Nt(e){return t=>{Ze&&Qt(Ze,e,t)}}function Ut(e){return t=>{const n=nt();n&&Qt(n,e,t)}}function Wt(e){return t=>{tt&&Qt(tt,e,t)}}function Qt(e,t,n){const o=lt(t);void 0===e[o]&&(e[o]=[]),e[o].push(n)}exports.EffectScope=_,exports.ReactiveEffect=O,exports.computed=function(e,n){let o,s;const i="function"==typeof e;return i?(o=e,s=t):(o=e.get,s=e.set),new Qe(o,s,i||!s)},exports.createApp=function(e){let t,n;if(ct(e))t=e,n={};else{if(void 0===e.setup)return void App(e);const{setup:o,...s}=e;t=o,n=s}const o=n.onLaunch;n.onLaunch=function(e){Ze=this;const n=t(e);void 0!==n&&Object.keys(n).forEach((e=>{this[e]=n[e]})),Ze=null,void 0!==o&&o.call(this,e)},n.onShow=_t(n,"onShow"),n.onHide=_t(n,"onHide"),n.onError=_t(n,"onError"),n.onPageNotFound=_t(n,"onPageNotFound"),n.onUnhandledRejection=_t(n,"onUnhandledRejection"),n.onThemeChange=_t(n,"onThemeChange"),App(n)},exports.customRef=function(e){return new Ne(e)},exports.defineComponent=function(e,t){let n,o;t={listenPageScroll:!1,canShareToOthers:!1,canShareToTimeline:!1,...t};let s=null;if(ct(e))n=e,o={};else{if(void 0===e.setup)return Component(e);const{setup:t,...i}=e;n=t,o=i,o.properties&&(s=Object.keys(o.properties))}void 0===o.lifetimes&&(o.lifetimes={});const i=o.lifetimes.attached||o.attached;o.lifetimes.attached=function(){var e;this.__scope__=new _,tt=e=this,e.__scope__.on();const t={};s&&s.forEach((e=>{t[e]=this.data[e]})),this.__props__=Te(t);const o={is:this.is,id:this.id,dataset:this.dataset,triggerEvent:this.triggerEvent.bind(this),createSelectorQuery:this.createSelectorQuery.bind(this),createIntersectionObserver:this.createIntersectionObserver.bind(this),selectComponent:this.selectComponent.bind(this),selectAllComponents:this.selectAllComponents.bind(this),selectOwnerComponent:this.selectOwnerComponent.bind(this),getRelationNodes:this.getRelationNodes.bind(this),getTabBar:this.getTabBar.bind(this),getPageId:this.getPageId.bind(this),animate:this.animate.bind(this),clearAnimation:this.clearAnimation.bind(this),getOpenerEventChannel:this.getOpenerEventChannel.bind(this)},r=n(this.__props__,o);void 0!==r&&Object.keys(r).forEach((e=>{const t=r[e];ct(t)?this[e]=t:(this.setData({[e]:vt(t)}),gt.call(this,e,t))})),tt&&tt.__scope__.off(),tt=null,void 0!==i&&i.call(this)};const r=St(o,"detached");return o.lifetimes.detached=function(){r.call(this),this.__scope__.stop()},o.lifetimes.ready=xt(yt.ready,o.lifetimes.ready||o.ready),o.lifetimes.moved=St(o,"moved"),o.lifetimes.error=St(o,"error"),void 0===o.methods&&(o.methods={}),(o.methods.onPageScroll||t.listenPageScroll)&&(o.methods.onPageScroll=wt(o,"onPageScroll"),o.methods.__listenPageScroll__=()=>!0),void 0===o.methods.onShareAppMessage&&t.canShareToOthers&&(o.methods.onShareAppMessage=function(e){const t=this[lt("onShareAppMessage")];return t?t(e):{}},o.methods.__isInjectedShareToOthersHook__=()=>!0),void 0===o.methods.onShareTimeline&&t.canShareToTimeline&&(o.methods.onShareTimeline=function(){const e=this[lt("onShareTimeline")];return e?e():{}},o.methods.__isInjectedShareToTimelineHook__=()=>!0),void 0===o.methods.onAddToFavorites&&(o.methods.onAddToFavorites=function(e){const t=this[lt("onAddToFavorites")];return t?t(e):{}},o.methods.__isInjectedFavoritesHook__=()=>!0),o.methods.onLoad=wt(o,"onLoad"),o.methods.onPullDownRefresh=wt(o,"onPullDownRefresh"),o.methods.onReachBottom=wt(o,"onReachBottom"),o.methods.onTabItemTap=wt(o,"onTabItemTap"),void 0===o.pageLifetimes&&(o.pageLifetimes={}),o.pageLifetimes[yt.onShow]=bt(o,"onShow"),o.pageLifetimes[yt.onHide]=bt(o,"onHide"),o.pageLifetimes[yt.onResize]=bt(o,"onResize"),s&&(void 0===o.observers&&(o.observers={}),s.forEach((e=>{const t=o.observers[e];o.observers[e]=function(n){this.__props__&&(this.__props__[e]=n),void 0!==t&&t.call(this,n)}}))),Component(o)},exports.definePage=function(e,t){let n,o;if(t={listenPageScroll:!1,canShareToOthers:!1,canShareToTimeline:!1,...t},ct(e))n=e,o={};else{if(void 0===e.setup)return void Page(e);const{setup:t,...s}=e;n=t,o=s}const s=o.onLoad;o.onLoad=function(e){var t;this.__scope__=new _,et=t=this,t.__scope__.on();const o={is:this.is,route:this.route,options:this.options,createSelectorQuery:this.createSelectorQuery.bind(this),createIntersectionObserver:this.createIntersectionObserver.bind(this),selectComponent:this.selectComponent.bind(this),selectAllComponents:this.selectAllComponents.bind(this),getTabBar:this.getTabBar.bind(this),getPageId:this.getPageId.bind(this),animate:this.animate.bind(this),clearAnimation:this.clearAnimation.bind(this),getOpenerEventChannel:this.getOpenerEventChannel.bind(this)},i=n(e,o);void 0!==i&&Object.keys(i).forEach((e=>{const t=i[e];ct(t)?this[e]=t:(this.setData({[e]:vt(t)}),gt.call(this,e,t))})),et&&et.__scope__.off(),et=null,void 0!==s&&s.call(this,e)};const i=mt(o,"onUnload");o.onUnload=function(){i.call(this),this.__scope__.stop()},(o.onPageScroll||t.listenPageScroll)&&(o.onPageScroll=mt(o,"onPageScroll"),o.__listenPageScroll__=()=>!0),void 0===o.onShareAppMessage&&t.canShareToOthers&&(o.onShareAppMessage=function(e){const t=this[lt("onShareAppMessage")];return t?t(e):{}},o.__isInjectedShareToOthersHook__=()=>!0),void 0===o.onShareTimeline&&t.canShareToTimeline&&(o.onShareTimeline=function(){const e=this[lt("onShareTimeline")];return e?e():{}},o.__isInjectedShareToTimelineHook__=()=>!0),void 0===o.onAddToFavorites&&(o.onAddToFavorites=function(e){const t=this[lt("onAddToFavorites")];return t?t(e):{}},o.__isInjectedFavoritesHook__=()=>!0),o.onShow=mt(o,"onShow"),o.onReady=mt(o,"onReady"),o.onHide=mt(o,"onHide"),o.onPullDownRefresh=mt(o,"onPullDownRefresh"),o.onReachBottom=mt(o,"onReachBottom"),o.onResize=mt(o,"onResize"),o.onTabItemTap=mt(o,"onTabItemTap"),Page(o)},exports.effect=function(e,t){e.effect&&(e=e.effect.fn);const o=new O(e);t&&(n(o,t),t.scope&&v(o,t.scope)),t&&t.lazy||o.run();const s=o.run.bind(o);return s.effect=o,s},exports.effectScope=function(e){return new _(e)},exports.getCurrentScope=function(){return p},exports.inject=function(e,t,n=!1){return e in dt?dt[e]:arguments.length>1?n&&ct(t)?t():t:void 0},exports.isProxy=Ae,exports.isReactive=Ee,exports.isReadonly=je,exports.isRef=ze,exports.markRaw=function(e){return((e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})})(e,"__v_skip",!0),e},exports.nextTick=function(e){const t=Je||Ge;return e?t.then(e):t},exports.onAddToFavorites=e=>{const t=nt();if(t&&t.__isInjectedFavoritesHook__){const n=lt("onAddToFavorites");void 0===t[n]&&(t[n]=e)}},exports.onAppError=Pt,exports.onAppHide=Tt,exports.onAppShow=Rt,exports.onDetach=Bt,exports.onError=Dt,exports.onHide=kt,exports.onLoad=Ft,exports.onMove=Lt,exports.onPageNotFound=Ot,exports.onPageScroll=e=>{const t=nt();t&&t.__listenPageScroll__&&Qt(t,"onPageScroll",e)},exports.onPullDownRefresh=Ct,exports.onReachBottom=Mt,exports.onReady=e=>{const t=nt();t&&Qt(t,"onReady",e)},exports.onResize=Ht,exports.onScopeDispose=function(e){p&&p.cleanups.push(e)},exports.onShareAppMessage=e=>{const t=nt();if(t&&t.onShareAppMessage&&t.__isInjectedShareToOthersHook__){const n=lt("onShareAppMessage");void 0===t[n]&&(t[n]=e)}},exports.onShareTimeline=e=>{const t=nt();if(t&&t.onShareTimeline&&t.__isInjectedShareToTimelineHook__){const n=lt("onShareTimeline");void 0===t[n]&&(t[n]=e)}},exports.onShow=At,exports.onTabItemTap=zt,exports.onThemeChange=jt,exports.onUnhandledRejection=Et,exports.onUnload=It,exports.provide=function(e,t){dt[e]=t},exports.proxyRefs=function(e){return Ee(e)?e:new Proxy(e,De)},exports.reactive=Re,exports.readonly=Pe,exports.ref=function(e){return Fe(e,!1)},exports.shallowReactive=Te,exports.shallowReadonly=function(e){return Oe(e,!0,J,me,be)},exports.shallowRef=function(e){return Fe(e,!0)},exports.stop=function(e){e.effect.stop()},exports.toRaw=ke,exports.toRef=We,exports.toRefs=function(e){const t=i(e)?new Array(e.length):{};for(const n in e)t[n]=We(e,n);return t},exports.triggerRef=function(e){He(e)},exports.unref=Be,exports.watch=ut,exports.watchEffect=function(e,t){return ft(e,null,t)},exports.watchPostEffect=function(e,t){return ft(e,null,{flush:"post"})},exports.watchSyncEffect=function(e,t){return ft(e,null,{flush:"sync"})};
