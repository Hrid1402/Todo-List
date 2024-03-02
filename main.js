(()=>{"use strict";var e,t,o={},r={};function d(e){var t=r[e];if(void 0!==t)return t.exports;var l=r[e]={id:e,exports:{}};return o[e](l,l.exports,d),l.exports}d.m=o,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,o)=>(d.f[o](e,t),t)),[])),d.u=e=>e+".main.js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="todo-list:",d.l=(o,r,l,n)=>{if(e[o])e[o].push(r);else{var i,c;if(void 0!==l)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var u=a[s];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+l){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+l),i.src=o),e[o]=[r];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var d=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),d&&d.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e={792:0};d.f.j=(t,o)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var l=new Promise(((o,d)=>r=e[t]=[o,d]));o.push(r[2]=l);var n=d.p+d.u(t),i=new Error;d.l(n,(o=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",i.name="ChunkLoadError",i.type=l,i.request=n,r[1](i)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,l,[n,i,c]=o,a=0;if(n.some((t=>0!==e[t]))){for(r in i)d.o(i,r)&&(d.m[r]=i[r]);c&&c(d)}for(t&&t(o);a<n.length;a++)l=n[a],d.o(e,l)&&e[l]&&e[l][0](),e[l]=0},o=self.webpackChunktodo_list=self.webpackChunktodo_list||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),d.nc=void 0;const l=d.p+"images/trash..svg",n=d.p+"images/threeDots..svg";d.e(511).then(d.bind(d,511)),console.log("working");const i=document.querySelector("#addBTN"),c=document.querySelector("#dialog"),a=document.querySelector("#closeDialog"),s=document.querySelector("#createBTN"),u=document.querySelector("#title"),p=document.querySelector("#date"),m=document.querySelector("#low"),h=document.querySelector("#medium"),b=document.querySelector("#high"),v=document.querySelector("#AllTasks");let g=[],y=0,f=new class{constructor(){this.projects=[],this.projectsTasks=[]}addProject(e){this.projects.push(e)}};const k=document.querySelector("#description_Dialog"),E=document.querySelector("#description"),S=document.querySelector("#closeBTN"),C=document.querySelector("#d_titleInput"),q=document.querySelector("#description_D"),j=document.querySelector("#date_D"),w=document.querySelector("#low_D"),L=document.querySelector("#medium_D"),A=document.querySelector("#high_D"),x=document.querySelector("#allProjects"),P=document.querySelector("#addProject"),T=document.querySelector("#projectDialog"),_=document.querySelector("#P_name"),B=document.querySelector("#createProject"),D=document.querySelector("#actualProjectText");let F=null,M=-1;function N(e){const t=document.createElement("div"),o=document.createElement("button"),r=document.createElement("p"),d=document.createElement("img");o.setAttribute("id","projectButton"),o.addEventListener("click",(()=>{document.querySelectorAll("#projectButton").forEach((e=>{e.disabled=!1})),o.disabled=!0,F=0,D.textContent=e})),t.appendChild(o),r.textContent=e,o.appendChild(r),d.setAttribute("src",n),d.setAttribute("alt","config"),d.addEventListener("click",(e=>{console.log("dots"),e.stopPropagation()})),o.appendChild(d),t.classList.add("project"),t.setAttribute("id","project"),x.insertBefore(t,P),f.projectsTasks.push([])}function O(e){const t=e.split("-");return t[2]+"/"+t[1]+"/"+t[0]}function I(){m.disabled=!1,h.disabled=!1,b.disabled=!1,w.disabled=!1,L.disabled=!1,A.disabled=!1}function $(e){for(let t=0;t<g.length;t++)if(g[t].id==e)return g.indexOf(g[t])}N("Main"),document.querySelector("#projectButton").disabled=!0,D.textContent="Main",P.addEventListener("click",(()=>{console.log("add Project Clicked"),_.value="",T.showModal()})),B.addEventListener("click",(()=>{N(_.value),f.addProject(_.value),T.close()})),i.addEventListener("click",(()=>{console.log("Add Clicked"),I(),m.disabled=!0,u.value="",E.value="";let e=new Date;const t=e.getFullYear()+"-"+(e.getMonth()+1).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0");p.value=t,c.showModal()})),s.addEventListener("click",(()=>{let e="low";1==m.disabled?e="low":1==h.disabled?e="medium":1==b.disabled&&(e="high");let t=new Y(u.value,E.value,p.value,e);!function(e,t,o,r,d){console.log("created!");const n=document.createElement("div"),i=document.createElement("label"),c=document.createElement("input"),a=document.createElement("div"),s=document.createElement("div"),u=document.createElement("h1"),p=document.createElement("div"),m=document.createElement("div"),h=document.createElement("h1"),b=document.createElement("img");n.classList.add("taskBlock"),c.setAttribute("value","did"),c.setAttribute("type","checkbox"),c.setAttribute("id","checkbox"),c.addEventListener("click",(e=>{e.stopPropagation()})),i.appendChild(c),n.appendChild(i),a.classList.add("priority"),"low"==r?(w.disabled=!0,a.style.backgroundColor="#7ED957"):"medium"==r?(L.disabled=!0,a.style.backgroundColor="#FEC95F"):(A.disabled=!0,a.style.backgroundColor="#FF5757"),n.appendChild(a),s.classList.add("text"),u.textContent=e,s.appendChild(u),n.appendChild(s),h.textContent=O(o),m.appendChild(h),m.classList.add("date"),b.setAttribute("src",l),b.setAttribute("alt","trashIcon"),b.setAttribute("id","trashIcon"),b.addEventListener("click",(e=>{e.stopPropagation();const t=document.querySelectorAll(".taskBlock"),o=$(d);for(console.log("index",o),g.splice(o,1);t[o].firstChild;)t[o].removeChild(t[o].firstChild);t[o].remove()})),b.classList.add("Trash"),p.appendChild(m),p.appendChild(b),p.classList.add("end"),n.appendChild(p),n.addEventListener("click",(()=>{const e=$(d);k.showModal(),C.value=g[e].title,q.textContent=g[e].description,j.value=g[e].date,M=e,I(),"low"==g[e].priority?w.disabled=!0:"medium"==g[e].priority?L.disabled=!0:"high"==g[e].priority&&(A.disabled=!0),console.log("taskBlockClicked"),console.log(g[e])})),v.appendChild(n)}(t.title,t.description,t.date,e,t.id),g.push(t),f.projectsTasks[0].push(t),console.log("PropjectManager:",f.projectsTasks),console.log("taskList:",g),c.close()})),S.addEventListener("click",(()=>{!function(){const e=document.querySelectorAll(".taskBlock"),t=e[M].querySelector(".text h1"),o=e[M].querySelector(".end h1"),r=e[M].querySelector(".priority");g[M].title=C.value,g[M].description=q.value,g[M].date=j.value,1==w.disabled?(g[M].priority="low",r.style.backgroundColor="#7ED957"):1==L.disabled?(g[M].priority="medium",r.style.backgroundColor="#FEC95F"):1==A.disabled&&(g[M].priority="high",r.style.backgroundColor="#FF5757"),t.textContent=C.value,o.textContent=O(j.value)}(),k.close()})),m.addEventListener("click",(()=>{I(),m.disabled=!0})),h.addEventListener("click",(()=>{I(),h.disabled=!0})),b.addEventListener("click",(()=>{I(),b.disabled=!0})),w.addEventListener("click",(()=>{I(),w.disabled=!0})),L.addEventListener("click",(()=>{I(),L.disabled=!0})),A.addEventListener("click",(()=>{I(),A.disabled=!0})),a.addEventListener("click",(()=>{c.close()}));class Y{constructor(e,t,o,r){this.title=e,this.description=t,this.date=o,this.priority=r,y+=1,this.id=y}}})();