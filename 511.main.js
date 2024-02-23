"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[511],{208:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]),i.push([n.id,':root{\n    --fontColor: #474942;\n    --backgroundColor: #FAF6F0;\n    --topColor: #FEC95F;\n    --mainColor: #FFEDC6;\n\n    --green: #7ED957;\n    --yellow: #FEC95F;\n    --red: #FF5757;\n}\nhtml, body{\n    height: 100%;\n}\n\nbody{\n    background-color: var(--backgroundColor);\n    margin: 0;\n}\n#dialog .dialogContent{\n    display: flex;\n    flex-direction: column;\n    padding: 35px 80px;\n}\n#dialog .dialogContent .topDialog{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n#dialog .dialogContent .mainInput{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n#dialog .dialogContent .bottomDialog{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n.bottomDialog .priority{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.bottomDialog .date{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n\n.content{\n    display: grid;\n    grid-template-columns: 0.2fr 1fr;\n    height: 100%;\n}\n.content .leftBar{\n    background-color: var(--mainColor);\n    grid-column: 1/2;\n}\n.top{\n    background-color: var(--topColor);\n}\n.top h1{\n    padding: 2.1875rem;\n    margin: 0;\n}\n.mainPart{\n    grid-column: 2/3;\n    background-color: var(--backgroundColor);\n}\n.tasksPart{\n    display: flex;\n    flex-direction: column;\n}\n.tasksPart button{\n    display: flex;\n    flex-direction: row;\n}\n.tasksPart button img{\n    width: 2.5rem;\n    height: 2.5rem;\n}\n.projectsPart{\n    display: flex;\n    flex-direction: column;\n}\n.project{\n    display: flex;\n    flex-direction: row;\n}\n\n.mainPart{\n    display: flex;\n    flex-direction: column;\n    gap: 2.5rem;\n    padding: 2.5rem;\n}\n.AllTasks{\n    display: grid;\n    grid-template-rows: 5rem;\n    grid-auto-rows: 5rem;\n    row-gap: 1.25rem;\n}\n.mainPart .addBtn{\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    display: flex;\n    flex-direction: row;\n    margin-left: auto;\n    align-items: center;\n    transition: transform 130ms;\n}\n.mainPart .addBtn:hover{\n    transform: scale(1.1);\n}\n.mainPart .addBtn:active{\n    border-radius: .9375rem;\n    background-color: #fec95f41;\n}\n.mainPart .addBtn p{\n    color: var(--fontColor);\n    font-size: 45px;\n    font-family: "Nunito Sans", sans-serif;\n    padding: 0;\n    margin: 0;\n}\n.mainPart .addBtn img{\n    width: 3.5rem;\n    height: 3.5rem;\n    filter: invert(81%) sepia(95%) saturate(2528%) hue-rotate(312deg) brightness(103%) contrast(100%);\n}\n.taskBlock{\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    background-color: var(--mainColor);\n\n    transition: transform 230ms, box-shadow 230ms;\n}\n.taskBlock:hover{\n    transform: scale(1.01);\n    box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.386);\n}\n.taskBlock .end{\n    display: flex;\n    flex-direction: row;\n    gap: 35px;\n    margin-right: .9375rem;\n    margin-left: auto;\n}\n\n.taskBlock .Trash{\n    width: 2.8125rem;\n    transition: transform 130ms;\n    filter: invert(59%) sepia(50%) saturate(3844%) hue-rotate(325deg) brightness(100%) contrast(102%);\n}\n\n.taskBlock .Trash:hover{\n    transform: scale(1.5);\n}\n.taskBlock .Trash:active{\n    filter: invert(0%) sepia(95%) saturate(19%) hue-rotate(282deg) brightness(105%) contrast(104%);\n}\n.taskBlock .date{\n    color: #47494279;\n    font-family: "Nunito Sans", sans-serif;\n}\n.taskBlock .priority{\n    background-color: var(--green);\n    width: 4%;\n    margin-right: .9375rem;\n    height: 100%;\n}\n.taskBlock label #checkbox{\n    width: 2.5rem;\n    height: 2.5rem;\n    margin: 0 1.5625rem;\n    accent-color: var(--topColor);\n}\n.taskBlock .text{\n    color: var(--fontColor);\n    font-family: "Nunito Sans", sans-serif;\n}',""]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},511:(n,t,e)=>{e.r(t),e.d(t,{default:()=>v});var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),l=e.n(s),c=e(56),d=e.n(c),u=e(540),f=e.n(u),p=e(113),m=e.n(p),g=e(208),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(g.A,h);const v=g.A&&g.A.locals?g.A.locals:void 0},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var f=e(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);