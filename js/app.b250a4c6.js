(function(){"use strict";var t={7005:function(t,e,o){var n=o(5130),i=o(6768),s=o(4232);const r={class:"mainBlock"},c=(0,i.Lk)("div",{class:"title"},"Visual cooler emulation",-1),u={class:"cooler"},l={class:"coolerRotator"},a=(0,i.Fv)('<div class="holes"><div class="hole">+</div><div class="hole">+</div><div class="hole">+</div><div class="hole">+</div></div>',1),d={class:"coolerControl"};function v(t,e,o,n,v,f){return(0,i.uX)(),(0,i.CE)("div",r,[c,(0,i.Lk)("div",u,[(0,i.Lk)("div",l,[a,(0,i.Lk)("div",{class:(0,s.C4)(["rotator",v.mode])},null,2)]),(0,i.Lk)("div",d,[(0,i.Lk)("button",{class:(0,s.C4)(["offButton",0==v.isActive?"active":""]),onClick:e[0]||(e[0]=(...t)=>f.stop&&f.stop(...t))}," 0 ",2),(0,i.Lk)("button",{class:(0,s.C4)(["speed1Button",1==v.isActive?"active":""]),onClick:e[1]||(e[1]=(...t)=>f.speed1&&f.speed1(...t))}," 1 ",2),(0,i.Lk)("button",{class:(0,s.C4)(["speed2Button",2==v.isActive?"active":""]),onClick:e[2]||(e[2]=(...t)=>f.speed2&&f.speed2(...t))}," 2 ",2),(0,i.Lk)("button",{class:(0,s.C4)(["speed3Button",3==v.isActive?"active":""]),onClick:e[3]||(e[3]=(...t)=>f.speed3&&f.speed3(...t))}," 3 ",2)])])])}var f={data(){return{mode:"",isActive:"0"}},methods:{stop(){this.mode="stop",this.isActive="0"},speed1(){this.mode="speed1",this.isActive="1"},speed2(){this.mode="speed2",this.isActive="2"},speed3(){this.mode="speed3",this.isActive="3"}}},p=o(1241);const h=(0,p.A)(f,[["render",v]]);var k=h;(0,n.Ef)(k).mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(a=0;a<t.length;a++){n=t[a][0],i=t[a][1],s=t[a][2];for(var c=!0,u=0;u<n.length;u++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[u])}))?n.splice(u--,1):(c=!1,s<r&&(r=s));if(c){t.splice(a--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var a=t.length;a>0&&t[a-1][2]>s;a--)t[a]=t[a-1];t[a]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],c=n[1],u=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(u)var a=u(o)}for(e&&e(n);l<r.length;l++)s=r[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(a)},n=self["webpackChunkslots"]=self["webpackChunkslots"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7005)}));n=o.O(n)})();
//# sourceMappingURL=app.b250a4c6.js.map