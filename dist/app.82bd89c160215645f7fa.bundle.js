!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}({0:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);n(0);(()=>{const t=document.querySelectorAll(".nav-link"),e={howItWorks:document.querySelector(".section--howitworks"),downloadApp:document.querySelector(".section--messageright"),contact:document.querySelector(".contact")};function n(){event.preventDefault(),window.scroll({top:e[this.dataset.linkto].offsetTop-60,left:0,behavior:"smooth"})}t.forEach(t=>{t.addEventListener("click",n)})})(),(()=>{const t=document.getElementById("contactForm"),e=document.querySelector(".contact");t.addEventListener("submit",()=>{event.preventDefault(),e.innerHTML='<div class="contact2" style="margin:100px auto; text-align: center;">\n\t<div class="contact__title">\n\t\t<h2>We\'ve successfully received your message - stay tuned!</h2>\n\t\t<p class="greentext">Thank you, we’ll get back to you as soon as possible</p>\n\t</div>\n\t<div class="womantext">\n\t\t<img src="./images/womantexting.svg" alt="" />\n\t</div>\n</div>',window.scroll({top:e.offsetTop-60,left:0,behavior:"smooth"})})})()}});