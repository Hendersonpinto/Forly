!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}({0:function(e,t,o){},6:function(e,t,o){"use strict";o.r(t);const n=()=>{const e=document.querySelectorAll(".nav-link"),t={howItWorks:document.querySelector(".section--howitworks"),forPartners:document.querySelector(".section--forPartners"),forShoppers:document.querySelector(".section--forShoppers"),contact:document.querySelector(".contact")};function o(){event.preventDefault(),window.scroll({top:t[this.dataset.linkto].offsetTop-60,left:0,behavior:"smooth"})}e.forEach(e=>{e.addEventListener("click",o)})};o(0);const c=()=>{const e=document.querySelector(".video-button"),t=document.querySelector(".video__toggler"),o=document.querySelector(".card__content"),n=document.querySelector(".forly-video");e.addEventListener("click",e=>{o.classList.add("hidden"),n.play(),n.controls=!0,t.classList.add("activo")}),t.addEventListener("click",e=>{o.classList.remove("hidden"),n.pause(),n.controls=!1,t.classList.remove("activo")})};window.addEventListener("load",()=>{(()=>{const e=document.querySelector(".navbarfixed"),t=document.getElementById("howitworks"),o=document.getElementById("contact"),n=document.getElementById("forPartners"),c=document.getElementById("forShoppers"),s=(document.querySelector(".section--messageleft"),document.querySelector(".section--howitworks")),r=document.querySelector(".contact"),i=document.querySelector(".section--forPartners"),a=document.querySelector(".section--forShoppers"),l=i.offsetTop,d=l+i.offsetHeight,u=a.offsetTop,f=u+a.offsetHeight,v=s.offsetTop,m=v+s.offsetHeight,y=r.offsetTop,p=y+r.offsetHeight,h=document.querySelector(".banner").offsetHeight-250;window.addEventListener("scroll",(function(){const s=window.pageYOffset;s>h?(e.classList.remove("hidden"),e.classList.add("shown"),s>v-100&&s<m-100?t.classList.add("active"):t.classList.remove("active"),s>y-100&&s<p-100?o.classList.add("active"):o.classList.remove("active"),s>l-100&&s<d-100?n.classList.add("active"):n.classList.remove("active"),s>u-100&&s<f-100?c.classList.add("active"):c.classList.remove("active")):(e.classList.remove("shown"),e.classList.add("hidden"))}))})(),n(),(()=>{const e=document.getElementById("contactForm"),t=document.querySelector(".contact");e.addEventListener("submit",()=>{event.preventDefault(),t.innerHTML='<div class="contact2" style="margin:100px auto; text-align: center;">\n\t<div class="contact__title">\n\t\t<h2>We\'ve successfully received your message - stay tuned!</h2>\n\t\t<p class="greentext">Thank you, we’ll get back to you as soon as possible</p>\n\t</div>\n\t<div class="womantext">\n\t\t<img src="./images/womantexting.svg" alt="" />\n\t</div>\n</div>',window.scroll({top:t.offsetTop-60,left:0,behavior:"smooth"})})})(),(()=>{const e=document.querySelectorAll(".slide-section");window.addEventListener("scroll",(function(){const t=window.scrollY+window.innerHeight;e.forEach(e=>{const o=e.offsetParent.offsetTop+e.offsetTop+e.offsetHeight/4,n=e.querySelectorAll(".slide");t>o&&n.forEach(e=>e.classList.add("active"))})}))})(),c()})}});