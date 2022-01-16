(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d28":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("Header",{attrs:{viewport:t.viewport}}),n("router-view")],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("header",{staticClass:"header"},[t.viewport.is768?n("button",{staticClass:"header-nav-button",attrs:{title:"Open menu",type:"button"},on:{click:t.openMenu}},[n("v-icon",{attrs:{name:"bars"}})],1):t._e(),n("nav",{staticClass:"header-nav"},[t.viewport.is768?n("button",{staticClass:"header-nav-close-button",attrs:{title:"Close menu",type:"button"},on:{click:t.closeMenu}},[n("span",{staticClass:"label"},[t._v("x")])]):t._e(),n("ul",[t._l(t.navItems,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/"+e.to}},[t._v(t._s(e.text))])],1)})),t._m(0),t._m(1)],2)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"mailto:roman.purgstaller@protonmail.com"}},[t._v("contact")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"./roman-purgstaller-resume.pdf",target:"_blank"}},[t._v("cv")])])}],l=(n("a5f6"),{name:"Header",props:{viewport:Object},data:()=>({navItems:[{id:1,to:"",text:"is"},{id:2,to:"about",text:"about"},{id:3,to:"projects",text:"projects"}]}),methods:{openMenu(){document.body.classList.add("-open-nav")},closeMenu(){document.body.classList.remove("-open-nav")}}}),c=l,u=n("2877"),d=Object(u["a"])(c,o,s,!1,null,null,null),p=d.exports,m=(n("a1a3"),{name:"Index",components:{Header:p},data:()=>({viewport:{width:window.innerWidth,height:window.innerHeight,is568:window.innerWidth<=568,is768:window.innerWidth<=768,is1024:window.innerWidth<=1024}})}),h=m,f=Object(u["a"])(h,a,i,!1,null,null,null),v=f.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"home"}},[n("div",{staticClass:"static-container-content"},[n("h1",[t._v("Roman Purgstaller")]),n("h3",[t._v("Software Engineer / Architect / Product Designer")]),n("h3",[t._v("currently based in Graz, Austria")]),n("div",{staticClass:"media-icon-container"},t._l(t.mediaIcons,(function(t){return n("a",{key:t.id,attrs:{href:t.href,title:t.title,target:"_blank"}},[n("v-icon",{attrs:{name:t.iconName,href:t.ref}})],1)})),0)]),t._m(0)])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"static-container-img"},[r("img",{attrs:{id:"lander-img",src:n("988b")}}),r("div",{staticClass:"portfolio-title"})])}],w=(n("1d28"),{name:"projects",data:()=>({mediaIcons:[{id:1,title:"github",href:"https://github.com/rpurgstaller",iconName:"brands/github"},{id:2,title:"hackerrank",href:"https://www.hackerrank.com/romanpurgstaller",iconName:"brands/hackerrank"},{id:3,title:"stack-overflow",href:"https://stackoverflow.com/users/1618893/roman-purgstaller?tab=profile",iconName:"brands/stack-overflow"},{id:4,title:"linkedin",href:"",iconName:"brands/linkedin"},{id:5,title:"resume",href:"roman-purgstaller-resume.pdf",iconName:"cv"}]})}),y=w,k=Object(u["a"])(y,g,_,!1,null,null,null),j=k.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.projects,(function(e,r){return n("div",{key:r,staticClass:"project-container"},[n("div",{staticClass:"tag-list"},t._l(e.tags,(function(e,r){return n("div",{key:r},[t._v(" "+t._s(e.title)+" ")])})),0),n("h3",[t._v(t._s(e.title))]),n("a",[t._v(t._s(e.text))]),n("div",{staticClass:"projects-media-icon-container"},t._l(e.mediaIcons,(function(t){return n("a",{key:t.id,attrs:{href:t.href,title:t.title,target:"_blank"}},[n("v-icon",{attrs:{name:t.iconName,href:t.ref}})],1)})),0),n("hr")])})),0)},C=[],I=(n("bf10"),{name:"projects",data:()=>({projects:[{title:"Personal Portfolio ",text:"This site was built using Vue CLI.",link:"sarcasm-detector",mediaIcons:[{id:1,title:"github",href:"https://github.com/rpurgstaller",iconName:"brands/github"}],tags:[{title:"vue-cli"},{title:"web-development"}]},{title:"Sarcasm Detection",text:"A sarcasm detector, oh, what a useful invention! I made this in university and while the results were disillusioning, it was a lot of fun implementing.",link:"sarcasm-detector",mediaIcons:[{id:1,title:"github",href:"https://github.com/rpurgstaller",iconName:"brands/github"}],tags:[{title:"python"},{title:"scikit-learn"}]},{title:"Beanbot CLI",text:"Save and modify your transactions and create a double-entry bookkeeping using beancount.",link:"sarcasm-detector",mediaIcons:[{id:1,title:"github",href:"https://github.com/rpurgstaller",iconName:"brands/github"}],tags:[{title:"python"},{title:"sqlite3"},{title:"sqlAlchemy"}]}]}),methods:{getLink:function(t){return"/projects/"+t}}}),O=I,P=(n("ed0c"),Object(u["a"])(O,x,C,!1,null,null,null)),E=P.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"about"}},[n("div",{staticClass:"static-container-content"},[n("p",[t._v("Hi, my name is Roman. These days I live in Graz and work at "),n("a",{attrs:{href:"https://www.b4b-solutions.com/"}},[t._v("b4b-solutions")]),t._v(" as a Cloud Architect advancing SAP Software.")]),n("br"),n("p",[t._v("After finishing my studies in Software Engineering / Management at Graz University of Technology, I had the opportunity to work in different fields as a software engineer and product owner.")]),n("a",[t._v("While I am fascinated with the variety in software engineering, I especially have a strong personal interest in dealing with data and AI methods.")]),n("br"),n("br"),n("p",[t._v("When I'm not coding, I'm propably hiking, climbing, on a run or getting crushed at a game of chess.")]),n("p",[t._v("I also enjoy traveling and photography.")]),n("p",[t._v("Want to get in touch? Just send me an "),n("a",{attrs:{href:"mailto:roman.purgstaller@protonmail.com"}},[t._v("e-mail")]),t._v(".")])])])}],$={},A=Object(u["a"])($,S,N,!1,null,null,null),M=A.exports;r["a"].use(b["a"]);const W=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:M},{path:"/projects",name:"Projects",component:E}],H=new b["a"]({mode:"history",base:"/",routes:W});H.beforeEach((t,e,n)=>{document.body.classList.remove("-open-nav"),document.title=t.name+" :: Roman Purgstaller",n()});var L=H,T=(n("d06d"),n("849c"));r["a"].config.productionTip=!1,r["a"].component("v-icon",T["a"]),new r["a"]({router:L,render:t=>t(v)}).$mount("#app")},"988b":function(t,e,n){t.exports=n.p+"img/lander.a4090c68.jpeg"},a1a3:function(t,e,n){},a5f6:function(t,e,n){},bf10:function(t,e,n){},e79b:function(t,e,n){},ed0c:function(t,e,n){"use strict";n("e79b")}});
//# sourceMappingURL=app.55fbfc18.js.map