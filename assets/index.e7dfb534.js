const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};m();const l=(t,r)=>{const n=r-t,s=new Array(n);for(let e=0,o=t;e<=n;e++)s[e]=String.fromCharCode(o++);return s},p=(t,r)=>(t=Math.ceil(t),r=Math.floor(r),Math.floor(Math.random()*(r-t+1)+t)),y=Array.from("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"),g=l(65,90),S=l(97,122),C=l(48,57),b=4,f=t=>{let r=[];const{length:n,hasNumbers:s,hasLowerCase:e,hasUpperCase:o,hasSymbols:c}=t,d=[{cond:e,chars:S},{cond:o,chars:g},{cond:s,chars:C},{cond:c,chars:y}];if(n<b)return"";for(const{cond:a,chars:u}of d)a&&(r=[...r,...u]);const i=Array.from({length:n},()=>r[p(0,r.length)]);for(const{cond:a,chars:u}of d){if(!a)continue;if(!i.some(h=>u.includes(h)))return f(t)}return i.join("")},L=document.querySelector("#form"),q=document.querySelector("#result"),w=document.querySelector("#numbers"),A=document.querySelector("#lowerCase"),I=document.querySelector("#upperCase"),M=document.querySelector("#symbols"),N=document.querySelector("#length");L.onsubmit=t=>{t.preventDefault();const r=w.checked,n=A.checked,s=I.checked,e=M.checked,o=N.value,c=f({length:+o,hasNumbers:r,hasLowerCase:n,hasUpperCase:s,hasSymbols:e});q.innerText=c};
