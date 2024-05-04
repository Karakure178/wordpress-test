"use strict";var F=Object.defineProperty;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))q.call(t,n)&&f(e,n,t[n]);return e};var D=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var p=(e,t,n)=>(D(e,t,"read from private field"),n?n.call(e):t.get(e)),h=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},g=(e,t,n,r)=>(D(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const S=require("../.Chunks/e2c2858e.js"),k=require("@wordpress/data"),x=require("@wordpress/compose"),d=require("react/jsx-runtime");require("react");const w=require("@wordpress/hooks"),P=require("@wordpress/i18n"),W=require("@wordpress/blocks"),_=require("@wordpress/block-editor"),b=e=>({namespacedWithDispatch:r=>k.withDispatch((i,s,{select:a})=>{const o=i(e),M=a(e);return r(o,M)}),namespacedWithSelect:r=>k.withSelect((i,s,a)=>{const o=i(e);return r(o,s,a)})}),H=(e,t,n)=>{const{namespacedWithDispatch:r,namespacedWithSelect:i}=b(e);let s=o=>o;t&&(s=i(t));let a=o=>o;return n&&(a=r(n)),x.compose(s,a)};var c;class v{constructor(){h(this,c,!1)}isInitialized(){return p(this,c)}_initLogic(){throw new Error("initLogic function is not implemented at extended class")}init(){this.isInitialized()||(this._initLogic.call(this,...arguments),g(this,c,!0))}}c=new WeakMap;var l;class L extends v{constructor(){super(...arguments);h(this,l,null)}_initLogic(n){const r=self||global;g(this,l,r[n]||{}),r[n]=void 0}getDataProperty(n,r=null){return p(this,l)[n]||r}}l=new WeakMap;const z=new L,y={filters:{ADD_SUB_COMPONENT:"subComponentAdd"}};function B(){const e="ub",t={FILTER:"filter",ACTION:"action"};this.hookTypes=y;const n=(r,i)=>`${e}.${i}.${r}`;this.applyFilters=(r,i)=>w.applyFilters(n(r,t.FILTER),i),this.addFilter=(r,i,s)=>{w.addFilter(n(r,t.FILTER),i,s)}}const I=new B,E=e=>t=>d.jsx(e,u(u({},t),I));function N({clientId:e}){function t(){return`ub-preview-provider_${e}`}return d.jsx("div",{className:"ub-preview-provider",id:t(),children:d.jsx(_.InnerBlocks,{})})}const j=()=>{W.registerBlockType("ub/preview-provider",{title:P.__("only for UB internal use","ultimate-blocks"),attributes:{},category:"ultimateblocks",supports:{inserter:!1,reusable:!1},edit:e=>d.jsx(N,u({},e)),save:()=>null})};exports.Debouncer=S.Debouncer;exports.IconSizeDefinition=S.IconSizeDefinition;exports.FrontendDataManager=z;exports.HookManager=I;exports.ManagerBase=v;exports.connectWithStore=H;exports.createNamespacedHelpers=b;exports.hookTypes=y;exports.registerPreviewManager=j;exports.withHookManager=E;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvanMvU3RvcmVIZWxwZXJzLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9iYXNlL01hbmFnZXJCYXNlLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9Gcm9udGVuZERhdGFNYW5hZ2VyLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9Ib29rTWFuYWdlci5qc3giLCIuLi8uLi9zcmMvaW5jL2pzL2NvbXBvbmVudHMvUHJldmlld1Byb3ZpZGVyL1ByZXZpZXdQcm92aWRlci5qc3giLCIuLi8uLi9zcmMvaW5jL2pzL3JlZ2lzdGVyUHJldmlld01hbmFnZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBuYW1lc3BhY2VkIHN0b3JlIGhlbHBlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVzcGFjZSBzdG9yZSBuYW1lc3BhY2VcclxuICogQHJldHVybiB7T2JqZWN0fSBuYW1lc3BhY2VkIGhlbHBlcnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyA9IChzdG9yZU5hbWVzcGFjZSkgPT4ge1xyXG5cdGNvbnN0IG5hbWVzcGFjZWRXaXRoRGlzcGF0Y2ggPSAoY2FsbGJhY2spID0+IHtcclxuXHRcdHJldHVybiB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoLCBvd25Qcm9wcywgeyBzZWxlY3QgfSkgPT4ge1xyXG5cdFx0XHRjb25zdCBuYW1lc3BhY2VkRGlzcGF0Y2ggPSBkaXNwYXRjaChzdG9yZU5hbWVzcGFjZSk7XHJcblx0XHRcdGNvbnN0IG5hbWVzcGFjZWRTZWxlY3QgPSBzZWxlY3Qoc3RvcmVOYW1lc3BhY2UpO1xyXG5cdFx0XHRyZXR1cm4gY2FsbGJhY2sobmFtZXNwYWNlZERpc3BhdGNoLCBuYW1lc3BhY2VkU2VsZWN0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG5hbWVzcGFjZWRXaXRoU2VsZWN0ID0gKGNhbGxiYWNrKSA9PiB7XHJcblx0XHRyZXR1cm4gd2l0aFNlbGVjdCgoc2VsZWN0LCBvd25Qcm9wcywgcmVnaXN0cnkpID0+IHtcclxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlZFNlbGVjdCA9IHNlbGVjdChzdG9yZU5hbWVzcGFjZSk7XHJcblx0XHRcdHJldHVybiBjYWxsYmFjayhuYW1lc3BhY2VkU2VsZWN0LCBvd25Qcm9wcywgcmVnaXN0cnkpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHsgbmFtZXNwYWNlZFdpdGhEaXNwYXRjaCwgbmFtZXNwYWNlZFdpdGhTZWxlY3QgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIT0MgZm9yIGNvbm5lY3RpbmcgY29tcG9uZW50cyB3aXRoIEd1dGVuYmVyZyBkYXRhIHN0b3Jlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgc3RvcmVOYW1lc3BhY2Ugc3RvcmUgbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdE1hcHBpbmcgIHNlbGVjdCBtYXBwaW5nXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbk1hcHBpbmcgIGFjdGlvbiBtYXBwaW5nXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjb21wb3NlZCBIT0MgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aFN0b3JlID0gKFxyXG5cdHN0b3JlTmFtZXNwYWNlLFxyXG5cdHNlbGVjdE1hcHBpbmcsXHJcblx0YWN0aW9uTWFwcGluZ1xyXG4pID0+IHtcclxuXHQvLyBnZW5lcmF0ZSBuYW1lc3BhY2VkIGhlbHBlcnMgZm9yIHJlbGF0ZWQgc3RvcmVcclxuXHRjb25zdCB7IG5hbWVzcGFjZWRXaXRoRGlzcGF0Y2gsIG5hbWVzcGFjZWRXaXRoU2VsZWN0IH0gPVxyXG5cdFx0Y3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMoc3RvcmVOYW1lc3BhY2UpO1xyXG5cclxuXHRsZXQgYXBwbHlTZWxlY3QgPSAocHJvcHMpID0+IHByb3BzO1xyXG5cdGlmIChzZWxlY3RNYXBwaW5nKSB7XHJcblx0XHRhcHBseVNlbGVjdCA9IG5hbWVzcGFjZWRXaXRoU2VsZWN0KHNlbGVjdE1hcHBpbmcpO1xyXG5cdH1cclxuXHJcblx0bGV0IGFwcGx5QWN0aW9uID0gKHByb3BzKSA9PiBwcm9wcztcclxuXHRpZiAoYWN0aW9uTWFwcGluZykge1xyXG5cdFx0YXBwbHlBY3Rpb24gPSBuYW1lc3BhY2VkV2l0aERpc3BhdGNoKGFjdGlvbk1hcHBpbmcpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbXBvc2UoYXBwbHlTZWxlY3QsIGFwcGx5QWN0aW9uKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIE1hbmFnZXIgYmFzZSBhYnN0cmFjdCBjbGFzcy5cclxuICpcclxuICogSW1wbGVtZW50IGBpbml0TG9naWNgIGZ1bmN0aW9uIHRvIGNvbXBseS5cclxuICovXHJcbmNsYXNzIE1hbmFnZXJCYXNlIHtcclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXphdGlvbiBzdGF0dXMgb2YgbWFuYWdlci5cclxuXHQgKlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHR5cGUge2Jvb2xlYW59XHJcblx0ICovXHJcblx0I2luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBpbml0aWFsaXphdGlvbiBzdGF0dXMgb2YgbWFuYWdlci5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IGluaXRpYWxpemF0aW9uIHN0YXR1c1xyXG5cdCAqL1xyXG5cdGlzSW5pdGlhbGl6ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4jaW5pdGlhbGl6ZWQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXphdGlvbiBsb2dpYy5cclxuXHQgKlxyXG5cdCAqIEBhYnN0cmFjdFxyXG5cdCAqL1xyXG5cdF9pbml0TG9naWMoKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdCdpbml0TG9naWMgZnVuY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGF0IGV4dGVuZGVkIGNsYXNzJ1xyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgbWFuYWdlciBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRpbml0KCkge1xyXG5cdFx0aWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xyXG5cdFx0XHR0aGlzLl9pbml0TG9naWMuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0XHR0aGlzLiNpbml0aWFsaXplZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNYW5hZ2VyQmFzZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlckJhc2U7XHJcbiIsImltcG9ydCBNYW5hZ2VyQmFzZSBmcm9tICdASW5jL2pzL2Jhc2UvTWFuYWdlckJhc2UnO1xyXG5cclxuLyoqXHJcbiAqIEZyb250ZW5kIGRhdGEgbWFuYWdlci5cclxuICovXHJcbmNsYXNzIEZyb250ZW5kRGF0YU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyQmFzZSB7XHJcblx0LyoqXHJcblx0ICogU2VydmVyIHNlbnQgZGF0YSBmb3IgZnJvbnRlbmQgb3BlcmF0aW9ucy5cclxuXHQgKlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHR5cGUge251bGx9XHJcblx0ICovXHJcblx0I2Zyb250ZW5kRGF0YSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBtYW5hZ2VyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2xvYmFsT2JqZWN0S2V5IG5hbWUgb2YgdGhlIGtleSB3aGVyZSBzZXJ2ZXIgc2VudCBkYXRhIGlzIHN0b3JlZCBhdCBnbG9iYWwgY29udGV4dFxyXG5cdCAqL1xyXG5cdF9pbml0TG9naWMoZ2xvYmFsT2JqZWN0S2V5KSB7XHJcblx0XHRjb25zdCBjb250ZXh0ID0gc2VsZiB8fCBnbG9iYWw7XHJcblx0XHR0aGlzLiNmcm9udGVuZERhdGEgPSBjb250ZXh0W2dsb2JhbE9iamVjdEtleV0gfHwge307XHJcblx0XHRjb250ZXh0W2dsb2JhbE9iamVjdEtleV0gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgZGF0YSB2YWx1ZSBvZiBoaWdoIGxldmVsIGtleS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgIGtleVxyXG5cdCAqIEBwYXJhbSB7YW55fSAgICBkZWZhdWx0VmFsIGRlZmF1bHQgdmFsdWVcclxuXHQgKiBAcmV0dXJuIHthbnl9IHZhbHVlXHJcblx0ICovXHJcblx0Z2V0RGF0YVByb3BlcnR5KGtleSwgZGVmYXVsdFZhbCA9IG51bGwpIHtcclxuXHRcdHJldHVybiB0aGlzLiNmcm9udGVuZERhdGFba2V5XSB8fCBkZWZhdWx0VmFsO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgRnJvbnRlbmREYXRhTWFuYWdlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZyb250ZW5kRGF0YU1hbmFnZXIoKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXBwbHlGaWx0ZXJzLCBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcclxuXHJcbi8qKlxyXG4gKiBDb21tb24gaG9va3MgdXNlZCB0aHJvdWdob3V0IHBsdWdpbi5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBob29rVHlwZXMgPSB7XHJcblx0ZmlsdGVyczoge1xyXG5cdFx0QUREX1NVQl9DT01QT05FTlQ6ICdzdWJDb21wb25lbnRBZGQnLFxyXG5cdH0sXHJcbn07XHJcblxyXG4vKipcclxuICogTWFuYWdlciByZXNwb25zaWJsZSBmb3IgcGx1Z2luIHdpZGUgbWVzc2FnaW5nIGFuZCBmaWx0ZXJpbmcgb3BlcmF0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIEhvb2tNYW5hZ2VyKCkge1xyXG5cdC8qKlxyXG5cdCAqIEhvb2sgbmFtZXNwYWNlXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGhvb2tOYW1lc3BhY2UgPSAndWInO1xyXG5cclxuXHQvKipcclxuXHQgKiBIb29rIHR5cGVzLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge09iamVjdH1cclxuXHQgKi9cclxuXHRjb25zdCB0eXBlcyA9IHtcclxuXHRcdEZJTFRFUjogJ2ZpbHRlcicsXHJcblx0XHRBQ1RJT046ICdhY3Rpb24nLFxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbW1vbiBob29rcyB1c2VkIHRocm91Z2hvdXQgcGx1Z2luLlxyXG5cdCAqXHJcblx0ICogQHR5cGUge09iamVjdH1cclxuXHQgKi9cclxuXHR0aGlzLmhvb2tUeXBlcyA9IGhvb2tUeXBlcztcclxuXHJcblx0LyoqXHJcblx0ICogUHJlcGFyZSBjb21wYXRpYmxlIGhvb2sgbmFtZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGhvb2sgdHlwZSwgYXZhaWxhYmxlIHR5cGVzIGFyZSBhdCB0eXBlcyB2YXJpYWJsZVxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gaG9vayBuYW1lXHJcblx0ICovXHJcblx0Y29uc3QgcHJlcGFyZUhvb2tOYW1lID0gKG5hbWUsIHR5cGUpID0+IHtcclxuXHRcdHJldHVybiBgJHtob29rTmFtZXNwYWNlfS4ke3R5cGV9LiR7bmFtZX1gO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IGZpbHRlci5cclxuXHQgKlxyXG5cdCAqIEl0IGlzIGEgd3JhcHBlciBmb3IgQHdvcmRwcmVzcy9ob29rcyBhcHBseUZpbHRlciBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWx0ZXJOYW1lIGZpbHRlciBuYW1lXHJcblx0ICogQHBhcmFtIHthbnl9ICAgIGRhdGEgICAgICAgZmlsdGVyIGRhdGFcclxuXHQgKiBAcmV0dXJuIHthbnl9IGZpbHRlcmVkIGRhdGFcclxuXHQgKi9cclxuXHR0aGlzLmFwcGx5RmlsdGVycyA9IChmaWx0ZXJOYW1lLCBkYXRhKSA9PiB7XHJcblx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKHByZXBhcmVIb29rTmFtZShmaWx0ZXJOYW1lLCB0eXBlcy5GSUxURVIpLCBkYXRhKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgZmlsdGVyLlxyXG5cdCAqXHJcblx0ICogSXQgaXMgYSB3cmFwcGVyIGZvciBAd29yZHByZXNzL2hvb2tzIGFkZEZpbHRlciBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgIGZpbHRlck5hbWUgICAgICAgZmlsdGVyIG5hbWVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICB1bmlxdWVJZGVudGlmaWVyIGlkZW50aWZpZXIgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICAgICBjYWxsYmFjayBmdW5jdGlvblxyXG5cdCAqL1xyXG5cdHRoaXMuYWRkRmlsdGVyID0gKGZpbHRlck5hbWUsIHVuaXF1ZUlkZW50aWZpZXIsIGNhbGxiYWNrKSA9PiB7XHJcblx0XHRhZGRGaWx0ZXIoXHJcblx0XHRcdHByZXBhcmVIb29rTmFtZShmaWx0ZXJOYW1lLCB0eXBlcy5GSUxURVIpLFxyXG5cdFx0XHR1bmlxdWVJZGVudGlmaWVyLFxyXG5cdFx0XHRjYWxsYmFja1xyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG4vLyBzaW5nbGV0b24gbWFuYWdlciBpbnN0YW5jZVxyXG5jb25zdCBtYW5hZ2VySW5zdGFuY2UgPSBuZXcgSG9va01hbmFnZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBIT0MgZm9yIGNvbm5lY3Rpb24gdG8gaG9vayBtYW5hZ2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTWC5FbGVtZW50fSBDb21wb25lbnQgY29tcG9uZW50XHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBIT0MgY29tcG9uZW50XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd2l0aEhvb2tNYW5hZ2VyID0gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSB7Li4ubWFuYWdlckluc3RhbmNlfSAvPjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAbW9kdWxlIEhvb2tNYW5hZ2VyIHNpbmdsZXRvbiBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlckluc3RhbmNlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcclxuXHJcbi8qKlxyXG4gKiBQcmV2aWV3IHByb3ZpZGVyIGNvbXBvbmVudCBmb3Igc2F2ZWQgc3R5bGVzIHByZXZpZXcgZ2VuZXJhdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAgICAgICAgIGNvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jbGllbnRJZCBibG9jayBjbGllbnQgaWRcclxuICogQGNsYXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBQcmV2aWV3UHJvdmlkZXIoeyBjbGllbnRJZCB9KSB7XHJcblx0ZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcclxuXHRcdHJldHVybiBgdWItcHJldmlldy1wcm92aWRlcl8ke2NsaWVudElkfWA7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyd1Yi1wcmV2aWV3LXByb3ZpZGVyJ30gaWQ9e2dlbmVyYXRlSWQoKX0+XHJcblx0XHRcdDxJbm5lckJsb2NrcyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgUHJldmlld1Byb3ZpZGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XHJcbmltcG9ydCBQcmV2aWV3UHJvdmlkZXIgZnJvbSAnQEluYy9qcy9jb21wb25lbnRzL1ByZXZpZXdQcm92aWRlci9QcmV2aWV3UHJvdmlkZXIuanN4JztcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBwcmV2aWV3IG1hbmFnZXIgYmxvY2suXHJcbiAqL1xyXG5jb25zdCByZWdpc3RlclByZXZpZXdNYW5hZ2VyID0gKCkgPT4ge1xyXG5cdHJlZ2lzdGVyQmxvY2tUeXBlKCd1Yi9wcmV2aWV3LXByb3ZpZGVyJywge1xyXG5cdFx0dGl0bGU6IF9fKCdvbmx5IGZvciBVQiBpbnRlcm5hbCB1c2UnLCAndWx0aW1hdGUtYmxvY2tzJyksXHJcblx0XHRhdHRyaWJ1dGVzOiB7fSxcclxuXHRcdGNhdGVnb3J5OiAndWx0aW1hdGVibG9ja3MnLFxyXG5cdFx0c3VwcG9ydHM6IHtcclxuXHRcdFx0aW5zZXJ0ZXI6IGZhbHNlLFxyXG5cdFx0XHRyZXVzYWJsZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0ZWRpdDogKHByb3BzKSA9PiB7XHJcblx0XHRcdHJldHVybiA8UHJldmlld1Byb3ZpZGVyIHsuLi5wcm9wc30gLz47XHJcblx0XHR9LFxyXG5cdFx0c2F2ZTogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH0sXHJcblx0fSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQG1vZHVsZSByZWdpc3RlclByZXZpZXdNYW5hZ2VyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclByZXZpZXdNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMiLCJzdG9yZU5hbWVzcGFjZSIsImNhbGxiYWNrIiwid2l0aERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInNlbGVjdCIsIm5hbWVzcGFjZWREaXNwYXRjaCIsIm5hbWVzcGFjZWRTZWxlY3QiLCJ3aXRoU2VsZWN0IiwicmVnaXN0cnkiLCJjb25uZWN0V2l0aFN0b3JlIiwic2VsZWN0TWFwcGluZyIsImFjdGlvbk1hcHBpbmciLCJuYW1lc3BhY2VkV2l0aERpc3BhdGNoIiwibmFtZXNwYWNlZFdpdGhTZWxlY3QiLCJhcHBseVNlbGVjdCIsInByb3BzIiwiYXBwbHlBY3Rpb24iLCJjb21wb3NlIiwiTWFuYWdlckJhc2UiLCJfX3ByaXZhdGVBZGQiLCJfaW5pdGlhbGl6ZWQiLCJfX3ByaXZhdGVHZXQiLCJfX3ByaXZhdGVTZXQiLCJGcm9udGVuZERhdGFNYW5hZ2VyIiwiX2Zyb250ZW5kRGF0YSIsImdsb2JhbE9iamVjdEtleSIsImNvbnRleHQiLCJrZXkiLCJkZWZhdWx0VmFsIiwiRnJvbnRlbmREYXRhTWFuYWdlciQxIiwiaG9va1R5cGVzIiwiSG9va01hbmFnZXIiLCJob29rTmFtZXNwYWNlIiwidHlwZXMiLCJwcmVwYXJlSG9va05hbWUiLCJuYW1lIiwidHlwZSIsImZpbHRlck5hbWUiLCJkYXRhIiwiYXBwbHlGaWx0ZXJzIiwidW5pcXVlSWRlbnRpZmllciIsImFkZEZpbHRlciIsIm1hbmFnZXJJbnN0YW5jZSIsIndpdGhIb29rTWFuYWdlciIsIkNvbXBvbmVudCIsImpzeCIsIl9fc3ByZWFkVmFsdWVzIiwiUHJldmlld1Byb3ZpZGVyIiwiY2xpZW50SWQiLCJnZW5lcmF0ZUlkIiwiSW5uZXJCbG9ja3MiLCJyZWdpc3RlclByZXZpZXdNYW5hZ2VyIiwicmVnaXN0ZXJCbG9ja1R5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