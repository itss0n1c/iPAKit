import{S,i as j,s as I,e as g,t as D,a as k,b as _,c as w,d as p,f as G,g as T,l as U,h as O,j as E,k as B,n as A,m as F,o as J,p as $,q as L,r as q,u as V,v as z,w as Q}from"./vendor.96055bc8.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=e(l);fetch(l.href,o)}};W();const M="https://api.ipakit.dev";async function X(i,t="GET",e={}){const n=new URL(M);n.pathname=i;for(const o of Object.keys(e))n.searchParams.append(o,e[o]);const l=await fetch(n.toString(),{method:t});if(!l.ok)throw l;return l.json()}function N(i,t,e){const n=i.slice();return n[9]=t[e],n[10]=t,n[11]=e,n}function K(i){let t,e,n,l,o,h,v,f,m=Object.keys(i[0]),c=[];for(let a=0;a<m.length;a+=1)c[a]=H(N(i,m,a));return{c(){t=g("main"),e=g("div"),n=D(i[1]),l=k(),o=g("div");for(let a=0;a<c.length;a+=1)c[a].c();h=k(),v=g("pre"),f=g("code"),_(e,"class","endpoint svelte-6tdc3y"),_(o,"class","queries svelte-6tdc3y"),_(f,"class","hljs language-typescript"),_(v,"class","results svelte-6tdc3y"),_(t,"class","svelte-6tdc3y")},m(a,r){w(a,t,r),p(t,e),p(e,n),p(t,l),p(t,o);for(let s=0;s<c.length;s+=1)c[s].m(o,null);p(t,h),p(t,v),p(v,f),f.innerHTML=i[3]},p(a,r){if(r&2&&G(n,a[1]),r&1){m=Object.keys(a[0]);let s;for(s=0;s<m.length;s+=1){const b=N(a,m,s);c[s]?c[s].p(b,r):(c[s]=H(b),c[s].c(),c[s].m(o,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=m.length}r&8&&(f.innerHTML=a[3])},d(a){a&&O(t),E(c,a)}}}function H(i){let t,e,n,l,o,h;function v(){i[5].call(e,i[9])}return{c(){t=g("div"),e=g("input"),l=k(),_(e,"type","text"),_(e,"placeholder",n=i[9]),_(e,"class","svelte-6tdc3y"),_(t,"class","query input-field svelte-6tdc3y")},m(f,m){w(f,t,m),p(t,e),T(e,i[0][i[9]]),p(t,l),o||(h=U(e,"input",v),o=!0)},p(f,m){i=f,m&1&&n!==(n=i[9])&&_(e,"placeholder",n),m&1&&e.value!==i[0][i[9]]&&T(e,i[0][i[9]])},d(f){f&&O(t),o=!1,h()}}}function Y(i){let t,e=i[2]&&K(i);return{c(){e&&e.c(),t=B()},m(n,l){e&&e.m(n,l),w(n,t,l)},p(n,[l]){n[2]?e?e.p(n,l):(e=K(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:A,o:A,d(n){e&&e.d(n),n&&O(t)}}}function Z(i,t,e){let{info:n}=t,l,o,h=!1,v;async function f(){let r=new URL(M);r.pathname=n.path;for(let s of Object.keys(l))l[s]!==""&&r.searchParams.append(s,l[s]);e(1,o=r.toString()),console.log(n,o),await c()}async function m(){e(0,l=n.default.query),await f(),e(2,h=!0)}async function c(){let r={};for(let b of Object.keys(l))l[b]!==""&&(r[b]=l[b]);let s=await X(n.path,"GET",r);console.log(s.resultCount,l),e(3,v=F.highlight("JSON",JSON.stringify(s,null,4)).value)}function a(r){l[r]=this.value,e(0,l)}return i.$$set=r=>{"info"in r&&e(4,n=r.info)},i.$$.update=()=>{i.$$.dirty&16&&n&&m(),i.$$.dirty&1&&l&&f()},[l,o,h,v,n,a]}class x extends S{constructor(t){super();j(this,t,Z,Y,I,{info:4})}}function R(i,t,e){const n=i.slice();return n[1]=t[e],n}function C(i){let t,e;return t=new x({props:{info:i[1]}}),{c(){J(t.$$.fragment)},m(n,l){$(t,n,l),e=!0},p:A,i(n){e||(L(t.$$.fragment,n),e=!0)},o(n){q(t.$$.fragment,n),e=!1},d(n){V(t,n)}}}function ee(i){let t,e,n,l,o,h,v,f,m,c,a,r=i[0],s=[];for(let u=0;u<r.length;u+=1)s[u]=C(R(i,r,u));const b=u=>q(s[u],1,1,()=>{s[u]=null});return{c(){t=g("main"),e=g("section"),e.innerHTML=`<div class="container"><div class="title">IPAKit</div> 
		<div class="subtitle">A FOSS API for finding iOS Apps.</div> 
		<div class="buttons"><a href="https://github.com/itss0n1c/IPAKit" rel="noopener" target="_blank" class="button bg-github color-white"><i class="fab fa-github"></i><span>View on Github</span></a></div></div>`,n=k(),l=g("section"),o=g("div"),h=g("div"),h.textContent="API",v=k(),f=g("div");for(let u=0;u<s.length;u+=1)s[u].c();m=k(),c=g("section"),c.innerHTML='<p>Made with <i class="fas fa-heart color-red"></i> and <i class="fas fa-code color-gray"></i> by <a href="https://github.com/IPAKit-Team" class="link color-blue" rel="noopener" target="_blank">IPAKit Team</a></p>',_(e,"class","header"),_(h,"class","title"),_(f,"class","endpoints"),_(o,"class","container"),_(l,"class","api"),_(c,"class","footer")},m(u,y){w(u,t,y),p(t,e),p(t,n),p(t,l),p(l,o),p(o,h),p(o,v),p(o,f);for(let d=0;d<s.length;d+=1)s[d].m(f,null);p(t,m),p(t,c),a=!0},p(u,[y]){if(y&1){r=u[0];let d;for(d=0;d<r.length;d+=1){const P=R(u,r,d);s[d]?(s[d].p(P,y),L(s[d],1)):(s[d]=C(P),s[d].c(),L(s[d],1),s[d].m(f,null))}for(Q(),d=r.length;d<s.length;d+=1)b(d);z()}},i(u){if(!a){for(let y=0;y<r.length;y+=1)L(s[y]);a=!0}},o(u){s=s.filter(Boolean);for(let y=0;y<s.length;y+=1)q(s[y]);a=!1},d(u){u&&O(t),E(s,u)}}}function te(i){return[[{path:"/search",queries:["name","bundle_id"],default:{query:{name:"Delta",bundle_id:"com.rileytestut.Delta"}}}]]}class ne extends S{constructor(t){super();j(this,t,te,ee,I,{})}}new ne({target:document.getElementById("app")});