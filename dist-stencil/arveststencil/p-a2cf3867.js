const e="arveststencil";let t,n,l=!1,s=!1;const o="undefined"!=typeof window?window:{},c=o.document||{head:{}},r={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=y(e,n),c=f(t,s),i=d(n);r.ael(o,l,c,i),(t.o=t.o||[]).push((()=>r.rel(o,l,c,i)))}))},f=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){te(e)}},y=(e,t)=>4&t?c:8&t?o:e,d=e=>0!=(2&e),p=new WeakMap,h=e=>"sc-"+e.p,$={},m=e=>"object"==(e=typeof e)||"function"===e,b=(e,t,...n)=>{let l=null,s=null,o=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!m(l))&&(l+=""),o&&c?r[r.length-1].h+=l:r.push(o?w(null,l):l),c=o)};if(i(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,g);const a=w(e,null);return a.$=t,r.length>0&&(a.m=r),a.v=s,a},w=(e,t)=>({t:0,g:e,h:t,j:null,m:null,$:null,v:null}),v={},g={forEach:(e,t)=>e.map(j).forEach(t),map:(e,t)=>e.map(j).map(t).map(S)},j=e=>({vattrs:e.$,vchildren:e.m,vkey:e.v,vname:e.S,vtag:e.g,vtext:e.h}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),b(e.vtag,t,...e.vchildren||[])}const t=w(e.vtag,e.vtext);return t.$=e.vattrs,t.m=e.vchildren,t.v=e.vkey,t.S=e.vname,t},k=(e,t,n,l,s,c)=>{if(n!==l){let i=ee(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=M(n),o=M(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const o=m(l);if((i||o&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&c||s)&&!o&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):ee(o,a)?a.slice(2):a[2]+t.slice(3),n&&r.rel(e,t,n,!1),l&&r.ael(e,t,l,!1)}},O=/\s/,M=e=>e?e.split(O):[],C=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.$||$,c=t.$||$;for(l in o)l in c||k(s,l,o[l],void 0,n,t.t);for(l in c)k(s,l,o[l],c[l],n,t.t)},x=(e,n,s)=>{let o,r,i=n.m[s],a=0;if(null!==i.h)o=i.j=c.createTextNode(i.h);else{if(l||(l="svg"===i.g),o=i.j=c.createElementNS(l?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.g),l&&"foreignObject"===i.g&&(l=!1),C(null,i,l),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),i.m)for(a=0;a<i.m.length;++a)r=x(e,i,a),r&&o.appendChild(r);"svg"===i.g?l=!1:"foreignObject"===o.tagName&&(l=!0)}return o},P=(e,t,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=x(null,l,o),r&&(s[o].j=r,i.insertBefore(r,t)))},E=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,L(l),s.remove())},R=(e,t)=>e.g===t.g&&e.v===t.v,W=(e,t)=>{const n=t.j=e.j,s=e.m,o=t.m,c=t.g,r=t.h;null===r?(l="svg"===c||"foreignObject"!==c&&l,"slot"===c||C(e,t,l),null!==s&&null!==o?((e,t,n,l)=>{let s,o,c=0,r=0,i=0,a=0,u=t.length-1,f=t[0],y=t[u],d=l.length-1,p=l[0],h=l[d];for(;c<=u&&r<=d;)if(null==f)f=t[++c];else if(null==y)y=t[--u];else if(null==p)p=l[++r];else if(null==h)h=l[--d];else if(R(f,p))W(f,p),f=t[++c],p=l[++r];else if(R(y,h))W(y,h),y=t[--u],h=l[--d];else if(R(f,h))W(f,h),e.insertBefore(f.j,y.j.nextSibling),f=t[++c],h=l[--d];else if(R(y,p))W(y,p),e.insertBefore(y.j,f.j),y=t[--u],p=l[++r];else{for(i=-1,a=c;a<=u;++a)if(t[a]&&null!==t[a].v&&t[a].v===p.v){i=a;break}i>=0?(o=t[i],o.g!==p.g?s=x(t&&t[r],n,i):(W(o,p),t[i]=void 0,s=o.j),p=l[++r]):(s=x(t&&t[r],n,r),p=l[++r]),s&&f.j.parentNode.insertBefore(s,f.j)}c>u?P(e,null==l[d+1]?null:l[d+1].j,n,l,r,d):r>d&&E(t,c,u)})(n,s,t,o):null!==o?(null!==e.h&&(n.textContent=""),P(n,null,t,o,0,o.length-1)):null!==s&&E(s,0,s.length-1),l&&"svg"===c&&(l=!1)):e.h!==r&&(n.data=r)},L=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(L)},T=e=>X(e).k,A=(e,t,n)=>{const l=T(e);return{emit:e=>F(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},F=(e,t,n)=>{const l=r.ce(t,n);return e.dispatchEvent(l),l},H=(e,t)=>{t&&!e.O&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.O=t)))},N=(e,t)=>{if(e.t|=16,!(4&e.t))return H(e,e.M),fe((()=>U(e,t)));e.t|=512},U=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>z(n,e,t))),e.u=null),l=z(n,"componentWillLoad")),l=B(l,(()=>z(n,"componentWillRender"))),B(l,(()=>q(e,n,t)))},q=async(e,t,n)=>{const l=e.k,s=l["s-rc"];n&&(e=>{const t=e.C,n=e.k,l=t.t,s=((e,t)=>{let n=h(t),l=se.get(n);if(e=11===e.nodeType?e:c,l)if("string"==typeof l){let t,s=p.get(e=e.head||e);s||p.set(e,s=new Set),s.has(n)||(t=c.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);D(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>V(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},D=(e,l)=>{try{l=l.render(),e.t&=-17,e.t|=2,((e,l)=>{const s=e.k,o=e.C,c=e.P||w(null,null),r=(e=>e&&e.g===v)(l)?l:b(null,null,l);n=s.tagName,o.R&&(r.$=r.$||{},o.R.map((([e,t])=>r.$[t]=s[e]))),r.g=null,r.t|=4,e.P=r,r.j=c.j=s.shadowRoot||s,t=s["s-sc"],W(c,r)})(e,l)}catch(t){te(t,e.k)}return null},V=e=>{const t=e.k,n=e.M;z(e.i,"componentDidRender"),64&e.t||(e.t|=64,G(t),e.W(t),n||_()),e.L(t),e.O&&(e.O(),e.O=void 0),512&e.t&&ue((()=>N(e,!1))),e.t&=-517},_=()=>{G(c.documentElement),ue((()=>F(o,"appload",{detail:{namespace:"arveststencil"}})))},z=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){te(e)}},B=(e,t)=>e&&e.then?e.then(t):t(),G=e=>e.classList.add("hydrated"),I=(e,t,n)=>{if(t.T){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.T),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>X(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=X(e),o=s.k,c=s.F.get(t),r=s.t,i=s.i;if(n=((e,t)=>null==e||m(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.T[t][0]),!(8&r&&void 0!==c||n===c)&&(s.F.set(t,n),i)){if(l.A&&128&r){const e=l.A[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){te(e,o)}}))}2==(18&r)&&N(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=X(this);return n.H.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){r.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.R.push([e,s]),s}))}}return e},J=e=>{z(e,"connectedCallback")},K=(e,t={})=>{const n=[],l=t.exclude||[],s=o.customElements,i=c.head,f=i.querySelector("meta[charset]"),y=c.createElement("style"),d=[];let p,$=!0;Object.assign(r,t),r.l=new URL(t.resourcesUrl||"./",c.baseURI).href,e.map((e=>e[1].map((t=>{const o={t:t[0],p:t[1],T:t[2],N:t[3]};o.T=t[2],o.N=t[3],o.R=[],o.A={};const c=o.p,i=class extends HTMLElement{constructor(e){super(e),Z(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),$?d.push(this):r.jmp((()=>(e=>{if(0==(1&r.t)){const t=X(e),n=t.C,l=()=>{};if(1&t.t)u(e,t,n.N),J(t.i);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){H(t,t.M=n);break}}n.T&&Object.entries(n.T).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=le(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.A=s.watchers,I(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){te(e)}t.t&=-9,t.t|=128,e(),J(t.i)}if(s.style){let e=s.style;const t=h(n);if(!se.has(t)){const l=()=>{};((e,t,n)=>{let l=se.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,se.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>N(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){r.jmp((()=>(()=>{if(0==(1&r.t)){const e=X(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return X(this).U}};o.q=e[0],l.includes(c)||s.get(c)||(n.push(c),s.define(c,I(i,o,1)))})))),y.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),i.insertBefore(y,f?f.nextSibling:i.firstChild),$=!1,d.length?d.map((e=>e.connectedCallback())):r.jmp((()=>p=setTimeout(_,30)))},Q=new WeakMap,X=e=>Q.get(e),Y=(e,t)=>Q.set(t.i=e,t),Z=(e,t)=>{const n={t:0,k:e,C:t,F:new Map};return n.H=new Promise((e=>n.L=e)),n.U=new Promise((e=>n.W=e)),e["s-p"]=[],e["s-rc"]=[],u(e,n,t.N),Q.set(e,n)},ee=(e,t)=>t in e,te=(e,t)=>(0,console.error)(e,t),ne=new Map,le=e=>{const t=e.p.replace(/-/g,"_"),n=e.q,l=ne.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(ne.set(n,e),e[t])),te)},se=new Map,oe=[],ce=[],re=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&r.t?ue(ae):r.raf(ae))},ie=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){te(e)}e.length=0},ae=()=>{ie(oe),ie(ce),(s=oe.length>0)&&r.raf(ae)},ue=e=>i().then(e),fe=re(ce,!0);export{v as H,e as N,K as b,A as c,T as g,b as h,i as p,Y as r}