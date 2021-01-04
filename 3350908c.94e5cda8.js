(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return w}));var s=n(0),b=n.n(s);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,s,b=function(t,e){if(null==t)return{};var n,s,b={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var r=b.a.createContext({}),u=function(t){var e=b.a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return b.a.createElement(r.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},p=b.a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,o=t.parentName,r=c(t,["components","mdxType","originalType","parentName"]),d=u(n),p=s,w=d["".concat(o,".").concat(p)]||d[p]||i[p]||a;return n?b.a.createElement(w,l(l({ref:e},r),{},{components:n})):b.a.createElement(w,l({ref:e},r))}));function w(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:s,o[1]=l;for(var r=2;r<a;r++)o[r]=n[r];return b.a.createElement.apply(null,o)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return u}));var s=n(3),b=n(7),a=(n(0),n(108)),o={id:"buttons",title:"Buttons",sidebar_label:"Buttons",slug:"/Compoents/buttons"},l={unversionedId:"Components/buttons",id:"Components/buttons",isDocsHomePage:!1,title:"Buttons",description:"Use Swarup's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",source:"@site/docs\\Components\\button.md",slug:"/Compoents/buttons",permalink:"/swarup/docs/Compoents/buttons",editUrl:"https://github.com/Ajay1290/swarup/edit/master/website/docs/Components/button.md",version:"current",sidebar_label:"Buttons",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/swarup/docs/"},next:{title:"Badges",permalink:"/swarup/docs/Compoents/badges"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Types of Buttons",id:"types-of-buttons",children:[]},{value:"Button Sizes",id:"button-sizes",children:[]},{value:"Button Dropdown",id:"button-dropdown",children:[{value:"Default Button Dropdown",id:"default-button-dropdown",children:[]},{value:"Button Dropdown Lefted",id:"button-dropdown-lefted",children:[]},{value:"Button Dropdown Double Sided",id:"button-dropdown-double-sided",children:[]}]},{value:"Button Groups",id:"button-groups",children:[]},{value:"Button Shadow",id:"button-shadow",children:[]},{value:"Class Table",id:"class-table",children:[]}],r={toc:c};function u(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(a.b)("wrapper",Object(s.a)({},r,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{class:"lead"},"Use Swarup's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Very basic button which has a color of your theme\nThe .sw-btn classes are designed to be used with the ",Object(a.b)("inlineCode",{parentName:"p"},"<button>")," element. However, you can also use these classes on\n",Object(a.b)("inlineCode",{parentName:"p"},"<a>")," or ",Object(a.b)("inlineCode",{parentName:"p"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("button",{class:"sw-btn f-18"},"Button")),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<button class="sw-btn">Button</button>\n')),Object(a.b)("h2",{id:"types-of-buttons"},"Types of Buttons"),Object(a.b)("p",null,"Swarup includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("button",{class:"sw-btn f-18"},"Button"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-outline"},"Button"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-text"},"Button"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-secondary "},"Button"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-surface "},"Button")),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<button class="sw-btn">Button</button>\n<button class="sw-btn sw-btn-outline">Button</button>\n<button class="sw-btn sw-btn-text">Button</button>\n<button class="sw-btn sw-btn-secondary ">Button</button>\n<button class="sw-btn sw-btn-surface ">Button</button>\n')),Object(a.b)("h2",{id:"button-sizes"},"Button Sizes"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("button",{class:"sw-btn f-18 sw-btn-lg"},"Button"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-md"},"Button"),Object(a.b)("button",{class:"sw-btn f-18"},"Button"),Object(a.b)("button",{class:"sw-btn f-12 sw-btn-sm"},"Button")),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<button class="sw-btn sw-btn-lg">Button</button>\n<button class="sw-btn sw-btn-md">Button</button>\n<button class="sw-btn">Button</button>\n<button class="sw-btn sw-btn-sm">Button</button>\n')),Object(a.b)("h2",{id:"button-dropdown"},"Button Dropdown"),Object(a.b)("h3",{id:"default-button-dropdown"},"Default Button Dropdown"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("button",{class:"sw-btn f-18"},"Button"),Object(a.b)("div",{tabindex:"2",class:"sw-dropdown"},Object(a.b)("button",{class:"sw-btn sw-droplabel sw-btn-dropdown f-18 "}),Object(a.b)("div",{class:"sw-dropmenu "},Object(a.b)("a",{href:"https://www.google.com",class:"sw-item"},"Apple"),Object(a.b)("div",{class:"sw-item"},"Grapes"),Object(a.b)("div",{class:"sw-item"},"Watermelon"),Object(a.b)("div",{class:"sw-item"},"Watermelon"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <button class="sw-btn">Button</button>\n    <div tabindex="2" class="sw-dropdown">\n        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>\n        <div class="sw-dropmenu ">\n            <a href="https://www.google.com" class="sw-item">Apple</a>\n            <div class="sw-item">Grapes</div>\n            <div class="sw-item">Watermelon</div>\n            <div class="sw-item">Watermelon</div>\n        </div>\n    </div>\n</div>\n')),Object(a.b)("h3",{id:"button-dropdown-lefted"},"Button Dropdown Lefted"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("div",{tabindex:"2",class:"sw-dropdown"},Object(a.b)("button",{class:"sw-btn sw-droplabel sw-btn-dropdown f-18 "}),Object(a.b)("div",{class:"sw-dropmenu "},Object(a.b)("a",{href:"https://www.google.com",class:"sw-item"},"Apple"),Object(a.b)("div",{class:"sw-item"},"Grapes"),Object(a.b)("div",{class:"sw-item"},"Watermelon"),Object(a.b)("div",{class:"sw-item"},"Watermelon"))),Object(a.b)("button",{class:"sw-btn f-18"},"Button"))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <div tabindex="2" class="sw-dropdown">\n        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>\n        <div class="sw-dropmenu ">\n            <a href="https://www.google.com" class="sw-item">Apple</a>\n            <div class="sw-item">Grapes</div>\n            <div class="sw-item">Watermelon</div>\n            <div class="sw-item">Watermelon</div>\n        </div>\n    </div>\n    <button class="sw-btn">Button</button>\n</div>\n')),Object(a.b)("h3",{id:"button-dropdown-double-sided"},"Button Dropdown Double Sided"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("div",{tabindex:"2",class:"sw-dropdown"},Object(a.b)("button",{class:"sw-btn sw-droplabel sw-btn-dropdown f-18 "}),Object(a.b)("div",{class:"sw-dropmenu "},Object(a.b)("a",{href:"https://www.google.com",class:"sw-item"},"Apple"),Object(a.b)("div",{class:"sw-item"},"Grapes"),Object(a.b)("div",{class:"sw-item"},"Watermelon"),Object(a.b)("div",{class:"sw-item"},"Watermelon"))),Object(a.b)("button",{class:"sw-btn f-18"},"Button"),Object(a.b)("div",{tabindex:"2",class:"sw-dropdown"},Object(a.b)("button",{class:"sw-btn sw-droplabel sw-btn-dropdown f-18 "}),Object(a.b)("div",{class:"sw-dropmenu "},Object(a.b)("a",{href:"https://www.google.com",class:"sw-item"},"Apple"),Object(a.b)("div",{class:"sw-item"},"Grapes"),Object(a.b)("div",{class:"sw-item"},"Watermelon"),Object(a.b)("div",{class:"sw-item"},"Watermelon"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <div tabindex="2" class="sw-dropdown">\n        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>\n        <div class="sw-dropmenu ">\n            <a href="https://www.google.com" class="sw-item">Apple</a>\n            <div class="sw-item">Grapes</div>\n            <div class="sw-item">Watermelon</div>\n            <div class="sw-item">Watermelon</div>\n        </div>\n    </div>\n    <button class="sw-btn">Button</button>\n    <div tabindex="2" class="sw-dropdown">\n        <button class="sw-btn sw-droplabel sw-btn-dropdown " ></button>\n        <div class="sw-dropmenu ">\n            <a href="https://www.google.com" class="sw-item">Apple</a>\n            <div class="sw-item">Grapes</div>\n            <div class="sw-item">Watermelon</div>\n            <div class="sw-item">Watermelon</div>\n        </div>\n    </div>\n</div>\n')),Object(a.b)("h2",{id:"button-groups"},"Button Groups"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("button",{class:"sw-btn f-18"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18"},"Hello"))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <button class="sw-btn">Hello</button>\n    <button class="sw-btn">Hello</button>\n    <button class="sw-btn">Hello</button>\n</div>\n')),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("button",{class:"sw-btn f-18"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-secondary"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18"},"Hello"))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <button class="sw-btn">Hello</button>\n    <button class="sw-btn sw-btn-secondary">Hello</button>\n    <button class="sw-btn">Hello</button>\n</div>\n')),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("div",{class:"sw-btn-group"},Object(a.b)("button",{class:"sw-btn f-18 sw-btn-secondary"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18"},"Hello"),Object(a.b)("button",{class:"sw-btn f-18 sw-btn-secondary"},"Hello"))),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<div class="sw-btn-group">\n    <button class="sw-btn sw-btn-secondary">Hello</button>\n    <button class="sw-btn">Hello</button>\n    <button class="sw-btn sw-btn-secondary">Hello</button>\n</div>\n')),Object(a.b)("h2",{id:"button-shadow"},"Button Shadow"),Object(a.b)("div",{class:"example-showcase"},Object(a.b)("button",{class:"sw-btn f-18 raised"},"Hello")),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),'<button class="sw-btn raised">Hello</button>\n')),Object(a.b)("h2",{id:"class-table"},"Class Table"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Classes"),Object(a.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn *"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"Base Button class creates a default solid button")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-outline"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For button with outline")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-text"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For button with no outline")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-secondary"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For button with secondary color")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-surface"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For button with surface color")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-lg"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For large size button")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-md"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For medium size buttons bigger than default")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-sm"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For small size button")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-group"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For grouping serval button together")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),".sw-btn-dropdown"),Object(a.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"For adding dropdown functionalite to normal button")))))}u.isMDXComponent=!0}}]);