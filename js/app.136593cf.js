(function(t){function e(e){for(var n,o,a=e[0],h=e[1],c=e[2],d=0,l=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);f&&f(e);while(l.length)l.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var h=i[a];0!==r[h]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=h;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"20d7":function(t,e,i){"use strict";i("5a4a")},2892:function(t,e,i){"use strict";i("64c8")},"2bda":function(t,e,i){"use strict";i("4b78")},4940:function(t,e,i){"use strict";i("c819")},"4b78":function(t,e,i){},"5a4a":function(t,e,i){},"64c8":function(t,e,i){},"7d05":function(t,e,i){},c819:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23");function r(t,e,i,r,s,o){var a=Object(n["i"])("MainApp");return Object(n["h"])(),Object(n["c"])(a)}var s={class:"main"},o={id:"content"},a={id:"social"};function h(t,e,i,r,h,c){var f=Object(n["i"])("fireflies-background"),d=Object(n["i"])("social-bar");return Object(n["h"])(),Object(n["d"])("div",s,[Object(n["f"])(f),Object(n["e"])("div",o,[Object(n["e"])("div",a,[Object(n["f"])(d)])])])}var c={class:"theme-night"},f=Object(n["e"])("canvas",{id:"fireflies"},null,-1),d=[f];function l(t,e,i,r,s,o){return Object(n["h"])(),Object(n["d"])("div",c,d)}i("04d3"),i("cb29");var u={name:"FirefliesBackground",mounted:function(){var t,e,i,n,r=[],s=50;t=window.innerWidth,e=window.innerHeight,i=document.getElementById("fireflies"),i.setAttribute("width",t+"px"),i.setAttribute("height",e+"px");var o=i.getContext("2d");function a(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=0;e<t;e++)r[e]=new c,r[e].reset()}function h(){o.clearRect(0,0,t,e);for(var i=0;i<r.length;i++)r[i].fade(),r[i].move(),r[i].draw()}function c(){this.s={ttl:8e3,xmax:5,ymax:2,rmax:10,rt:1,xdef:960,ydef:540,random:!0,blink:!0},this.reset=function(){this.x=this.s.random?t*Math.random():this.s.xdef,this.y=this.s.random?e*Math.random():this.s.ydef,this.r=(this.s.rmax-1)*Math.random()+1,this.dx=Math.random()*this.s.xmax*(Math.random()<.5?-1:1),this.dy=Math.random()*this.s.ymax*(Math.random()<.5?-1:1),this.half_life=this.s.ttl/s*(this.r/this.s.rmax),this.rt=Math.random()*this.half_life,this.s.rt=Math.random()+1,this.stop=.2*Math.random()+.4},this.fade=function(){this.rt+=this.s.rt},this.draw=function(){this.s.blink&&(this.rt<=0||this.rt>=this.half_life)?this.s.rt=-1*this.s.rt:this.rt>=this.half_life&&this.reset();var t=1-this.rt/this.half_life;o.beginPath(),o.arc(this.x,this.y,this.r,0,2*Math.PI,!0),o.closePath();var e=this.r*t;n=o.createRadialGradient(this.x,this.y,0,this.x,this.y,e<=0?1:e),n.addColorStop(0,"rgba(238,180,28,"+t+")"),n.addColorStop(this.stop,"rgba(238,180,28,"+.2*t+")"),n.addColorStop(1,"rgba(238,180,28,0)"),o.fillStyle=n,o.fill()},this.move=function(){this.x+=this.rt/this.half_life*this.dx,this.y+=this.rt/this.half_life*this.dy,(this.x>t||this.x<0)&&(this.dx*=-1),(this.y>e||this.y<0)&&(this.dy*=-1)}}a(50),setInterval(h,s)}},b=(i("2bda"),i("6b0d")),p=i.n(b);const v=p()(u,[["render",l]]);var m=v,y=Object(n["e"])("a",{href:"https://github.com/s0nnyhu",title:"Github",rel:"noopener noreferrer"},[Object(n["e"])("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em"},[Object(n["e"])("path",{title:"Github",fill:"#ffffff",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})])],-1),O=Object(n["e"])("a",{href:"https://www.linkedin.com/in/sonny-hu-16001384",title:"Linkedin",rel:"noopener noreferrer"},[Object(n["e"])("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em"},[Object(n["e"])("path",{title:"Linkedin",fill:"#ffffff",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})])],-1);function j(t,e,i,r,s,o){return Object(n["h"])(),Object(n["d"])(n["a"],null,[y,O],64)}var x={};i("20d7");const g=p()(x,[["render",j]]);var w=g,M={components:{FirefliesBackground:m,SocialBar:w}};i("2892");const _=p()(M,[["render",h]]);var k=_,C=Object(n["g"])({name:"App",components:{MainApp:k}});i("4940");const P=p()(C,[["render",r]]);var S=P;i("7d05");Object(n["b"])(S).mount("#app")}});
//# sourceMappingURL=app.136593cf.js.map