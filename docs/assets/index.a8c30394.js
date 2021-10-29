import{S as A,i as S,s as j,e as g,t as C,a as y,b as _,c as b,d as m,f as D,g as P,l as G,h as k,j as I,k as H,n as O,m as U,o as B,p as F,q,r as w,u as J,v as $,w as V}from"./vendor.96055bc8.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=e(l);fetch(l.href,r)}};z();const E="https://api.ipakit.dev";async function Q(o,t="GET",e={}){const n=new URL(E);n.pathname=o;for(const r of Object.keys(e))n.searchParams.append(r,e[r]);const l=await fetch(n.toString(),{method:t});if(!l.ok)throw l;return l.json()}function N(o,t,e){const n=o.slice();return n[9]=t[e],n[10]=t,n[11]=e,n}function T(o){let t,e,n,l,r,h,v,c,d=Object.keys(o[0]),a=[];for(let s=0;s<d.length;s+=1)a[s]=K(N(o,d,s));return{c(){t=g("main"),e=g("div"),n=C(o[1]),l=y(),r=g("div");for(let s=0;s<a.length;s+=1)a[s].c();h=y(),v=g("pre"),c=g("code"),_(e,"class","endpoint svelte-o8rcnq"),_(r,"class","queries svelte-o8rcnq"),_(c,"class","hljs language-typescript"),_(v,"class","results svelte-o8rcnq"),_(t,"class","svelte-o8rcnq")},m(s,u){b(s,t,u),m(t,e),m(e,n),m(t,l),m(t,r);for(let i=0;i<a.length;i+=1)a[i].m(r,null);m(t,h),m(t,v),m(v,c),c.innerHTML=o[3]},p(s,u){if(u&2&&D(n,s[1]),u&1){d=Object.keys(s[0]);let i;for(i=0;i<d.length;i+=1){const f=N(s,d,i);a[i]?a[i].p(f,u):(a[i]=K(f),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=d.length}u&8&&(c.innerHTML=s[3])},d(s){s&&k(t),I(a,s)}}}function K(o){let t,e,n,l,r,h;function v(){o[5].call(e,o[9])}return{c(){t=g("div"),e=g("input"),l=y(),_(e,"type","url"),_(e,"placeholder",n=o[9]),_(e,"class","svelte-o8rcnq"),_(t,"class","query input-field svelte-o8rcnq")},m(c,d){b(c,t,d),m(t,e),P(e,o[0][o[9]]),m(t,l),r||(h=G(e,"input",v),r=!0)},p(c,d){o=c,d&1&&n!==(n=o[9])&&_(e,"placeholder",n),d&1&&P(e,o[0][o[9]])},d(c){c&&k(t),r=!1,h()}}}function W(o){let t,e=o[2]&&T(o);return{c(){e&&e.c(),t=H()},m(n,l){e&&e.m(n,l),b(n,t,l)},p(n,[l]){n[2]?e?e.p(n,l):(e=T(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:O,o:O,d(n){e&&e.d(n),n&&k(t)}}}function X(o,t,e){let{info:n}=t,l,r,h=!1,v;async function c(){let u=new URL(E);u.pathname=n.path;for(let i of Object.keys(l))l[i]!==""&&u.searchParams.append(i,l[i]);e(1,r=u.toString()),console.log(n,r),await a()}async function d(){e(0,l=n.default.query),await c(),e(2,h=!0)}async function a(){let u={};for(let f of Object.keys(l))l[f]!==""&&(u[f]=l[f]);let i=await Q(n.path,"GET",u);console.log(i.resultCount,l),e(3,v=U.highlight("JSON",JSON.stringify(i,null,4)).value)}function s(u){l[u]=this.value,e(0,l)}return o.$$set=u=>{"info"in u&&e(4,n=u.info)},o.$$.update=()=>{o.$$.dirty&16&&n&&d(),o.$$.dirty&1&&l&&c()},[l,r,h,v,n,s]}class Y extends A{constructor(t){super();S(this,t,X,W,j,{info:4})}}function M(o,t,e){const n=o.slice();return n[1]=t[e],n}function R(o){let t,e;return t=new Y({props:{info:o[1]}}),{c(){B(t.$$.fragment)},m(n,l){F(t,n,l),e=!0},p:O,i(n){e||(q(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){J(t,n)}}}function Z(o){let t,e,n,l,r,h,v,c,d,a=o[0],s=[];for(let i=0;i<a.length;i+=1)s[i]=R(M(o,a,i));const u=i=>w(s[i],1,1,()=>{s[i]=null});return{c(){t=g("main"),e=g("section"),e.innerHTML=`<div class="container"><div class="title">IPAKit</div> 
		<div class="subtitle">A FOSS API for finding iOS Apps.</div> 
		<div class="buttons"><a href="https://github.com/IPAKit-Team/IPAKit" rel="noopener" target="_blank" class="button bg-github color-white"><i class="fab fa-github"></i><span>View on Github</span></a></div></div>`,n=y(),l=g("section"),r=g("div"),h=g("div"),h.textContent="API",v=y(),c=g("div");for(let i=0;i<s.length;i+=1)s[i].c();_(e,"class","header"),_(h,"class","title"),_(c,"class","endpoints"),_(r,"class","container"),_(l,"class","api")},m(i,f){b(i,t,f),m(t,e),m(t,n),m(t,l),m(l,r),m(r,h),m(r,v),m(r,c);for(let p=0;p<s.length;p+=1)s[p].m(c,null);d=!0},p(i,[f]){if(f&1){a=i[0];let p;for(p=0;p<a.length;p+=1){const L=M(i,a,p);s[p]?(s[p].p(L,f),q(s[p],1)):(s[p]=R(L),s[p].c(),q(s[p],1),s[p].m(c,null))}for(V(),p=a.length;p<s.length;p+=1)u(p);$()}},i(i){if(!d){for(let f=0;f<a.length;f+=1)q(s[f]);d=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)w(s[f]);d=!1},d(i){i&&k(t),I(s,i)}}}function x(o){return[[{path:"/search",queries:["name","bundle_id"],default:{query:{name:"Delta",bundle_id:"com.rileytestut.Delta"}}}]]}class ee extends A{constructor(t){super();S(this,t,x,Z,j,{})}}new ee({target:document.getElementById("app")});
