var Je=Object.defineProperty;var we=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var ke=(l,e,t)=>e in l?Je(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,ye=(l,e)=>{for(var t in e||(e={}))Ke.call(e,t)&&ke(l,t,e[t]);if(we)for(var t of we(e))We.call(e,t)&&ke(l,t,e[t]);return l};import{D as et,S as J,i as K,s as W,L as re,M as le,a as v,d as _,b as o,g as C,J as u,K as j,e as b,c as $,N as ae,n as ce,o as R,p as ie,q as F,O as he,C as oe,P as de,w as Y,x as Q,y as X,B as Z,t as B,k as P,h as N,m as L,j as ue,l as me,Q as be,R as fe,T as ze,U as qe,V as pe,W as Ye,X as Ie,Y as tt,Z as Te,_ as Se,z as rt,$ as lt,a0 as st}from"../chunks/vendor-29ce4cc7.js";const ot={theme:"default",templates_settings:{profile:{website:{type:"boolean",value:!0},location:{type:"boolean",value:!0,editable:!0}},"profile-small":{}}},at=()=>{const{subscribe:l,update:e,set:t}=et(ye({},ot));return{subscribe:l,update:e,set:t}},se=at(),ge=8583669,Qe="https://stackoverflow.com",Ae=`${Qe}/users/8583669/johannchopin`,nt="https://stackoverflow-readme-profile.johannchopin.fr",Xe="johannchopin",Ze="stackoverflow-readme-profile",_e=`https://github.com/${Xe}/${Ze}`,ct=/^https:\/\/stackoverflow\.com\/users\/[0-9]+\d\/[a-z]+/g,$e="selectTheme",it=`[![user::id's SO profile](:path)](${_e})`,ut=`<a href="${_e}">
  <img src=":path" alt="user::id's SO profile">
</a>`,Pe=(l,e,t)=>l.split(e).join(t),Le=(l,e,t)=>Pe(Pe(l,":id",e.toString()),":path",t),ft=l=>{navigator.clipboard.writeText(l)},ht=(l,e,t,r)=>{const s={theme:t};Object.keys(r).forEach(m=>{s[m]=r[m].value});const n=new URLSearchParams(s).toString();return`${nt}/${e}/${l}?${n}`},dt=l=>Number(l.replace(`${Qe}/users/`,"").split("/")[0]);function mt(l){let e,t;return{c(){e=re("svg"),t=re("path"),this.h()},l(r){e=le(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var s=v(e);t=le(s,"path",{d:!0}),v(t).forEach(_),s.forEach(_),this.h()},h(){o(t,"d","M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","16"),o(e,"height","16"),o(e,"fill","currentColor"),o(e,"class","bi bi-check-lg"),o(e,"viewBox","0 0 16 16")},m(r,s){C(r,e,s),u(e,t)},p:j,i:j,o:j,d(r){r&&_(e)}}}class _t extends J{constructor(e){super();K(this,e,null,mt,W,{})}}function pt(l){let e,t,r;return{c(){e=re("svg"),t=re("path"),r=re("path"),this.h()},l(s){e=le(s,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var n=v(e);t=le(n,"path",{d:!0}),v(t).forEach(_),r=le(n,"path",{d:!0}),v(r).forEach(_),n.forEach(_),this.h()},h(){o(t,"d","M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"),o(r,"d","M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","16"),o(e,"height","16"),o(e,"fill","currentColor"),o(e,"class","bi bi-clipboard"),o(e,"viewBox","0 0 16 16")},m(s,n){C(s,e,n),u(e,t),u(e,r)},p:j,i:j,o:j,d(s){s&&_(e)}}}class gt extends J{constructor(e){super();K(this,e,null,pt,W,{})}}function vt(l){let e,t;return e=new gt({}),{c(){Y(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,s){X(e,r,s),t=!0},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){R(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function bt(l){let e,t;return e=new _t({}),{c(){Y(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,s){X(e,r,s),t=!0},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){R(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function $t(l){let e,t,r,s,n,m,f;const p=[bt,vt],a=[];function d(i,c){return i[0]?0:1}return t=d(l),r=a[t]=p[t](l),{c(){e=b("button"),r.c(),this.h()},l(i){e=$(i,"BUTTON",{class:!0,title:!0,"aria-label":!0});var c=v(e);r.l(c),c.forEach(_),this.h()},h(){o(e,"class",s=`btn btn-light border- border-2 p-0 px-1 m-1 ${l[2].class}`),o(e,"title",Be),o(e,"aria-label",Be)},m(i,c){C(i,e,c),a[t].m(e,null),n=!0,m||(f=ae(e,"click",l[1]),m=!0)},p(i,[c]){let h=t;t=d(i),t!==h&&(ce(),R(a[h],1,1,()=>{a[h]=null}),ie(),r=a[t],r||(r=a[t]=p[t](i),r.c()),F(r,1),r.m(e,null)),(!n||c&4&&s!==(s=`btn btn-light border- border-2 p-0 px-1 m-1 ${i[2].class}`))&&o(e,"class",s)},i(i){n||(F(r),n=!0)},o(i){R(r),n=!1},d(i){i&&_(e),a[t].d(),m=!1,f()}}}const Et=700,Be="Copy to clipboard";function wt(l,e,t){const r=["onSave"];let s=he(e,r),{onSave:n}=e,m=!1;const f=()=>{t(0,m=!0),setTimeout(()=>{t(0,m=!1)},Et),n()};return l.$$set=p=>{e=oe(oe({},e),de(p)),t(2,s=he(e,r)),"onSave"in p&&t(3,n=p.onSave)},[m,f,s,n]}class kt extends J{constructor(e){super();K(this,e,wt,$t,W,{onSave:3})}}function yt(l){let e,t,r,s,n,m,f;return m=new kt({props:{class:"position-absolute top-0 end-0 m-2",onSave:l[1]}}),{c(){e=b("div"),t=b("pre"),r=b("code"),s=B(l[0]),n=P(),Y(m.$$.fragment),this.h()},l(p){e=$(p,"DIV",{class:!0});var a=v(e);t=$(a,"PRE",{class:!0});var d=v(t);r=$(d,"CODE",{});var i=v(r);s=N(i,l[0]),i.forEach(_),d.forEach(_),n=L(a),Q(m.$$.fragment,a),a.forEach(_),this.h()},h(){o(t,"class","rounded bg-dark m-0 p-3"),o(e,"class","position-relative svelte-1f76hxw")},m(p,a){C(p,e,a),u(e,t),u(t,r),u(r,s),u(e,n),X(m,e,null),f=!0},p(p,[a]){(!f||a&1)&&ue(s,p[0]);const d={};a&1&&(d.onSave=p[1]),m.$set(d)},i(p){f||(F(m.$$.fragment,p),f=!0)},o(p){R(m.$$.fragment,p),f=!1},d(p){p&&_(e),Z(m)}}}function It(l,e,t){let{code:r}=e;const s=()=>{ft(r)};return l.$$set=n=>{"code"in n&&t(0,r=n.code)},[r,s]}class Ne extends J{constructor(e){super();K(this,e,It,yt,W,{code:0})}}function Tt(l){let e,t;return{c(){e=re("svg"),t=re("path"),this.h()},l(r){e=le(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var s=v(e);t=le(s,"path",{d:!0}),v(t).forEach(_),s.forEach(_),this.h()},h(){o(t,"d","M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","16"),o(e,"height","16"),o(e,"fill","currentColor"),o(e,"class","bi bi-pencil"),o(e,"viewBox","0 0 16 16")},m(r,s){C(r,e,s),u(e,t)},p:j,i:j,o:j,d(r){r&&_(e)}}}class St extends J{constructor(e){super();K(this,e,null,Tt,W,{})}}function Fe(l,e,t){const r=l.slice();return r[6]=e[t],r[7]=e,r[8]=t,r}function Oe(l){let e,t,r,s=l[6]+"",n,m,f,p,a,d,i,c,h;function g(){l[4].call(a,l[6])}return{c(){e=b("div"),t=b("label"),r=b("code"),n=B(s),f=P(),p=b("div"),a=b("input"),i=P(),this.h()},l(I){e=$(I,"DIV",{class:!0});var k=v(e);t=$(k,"LABEL",{class:!0,for:!0});var w=v(t);r=$(w,"CODE",{class:!0});var y=v(r);n=N(y,s),y.forEach(_),w.forEach(_),f=L(k),p=$(k,"DIV",{class:!0});var S=v(p);a=$(S,"INPUT",{class:!0,type:!0,role:!0,id:!0}),S.forEach(_),i=L(k),k.forEach(_),this.h()},h(){o(r,"class","bg-dark rounded p-1"),o(t,"class","form-check-label w-50"),o(t,"for",m=`${l[1]}-${l[6]}`),o(a,"class","form-check-input"),o(a,"type","checkbox"),o(a,"role","switch"),o(a,"id",d=`${l[1]}-${l[6]}`),o(p,"class","form-switch"),o(e,"class","mt-2 d-flex")},m(I,k){C(I,e,k),u(e,t),u(t,r),u(r,n),u(e,f),u(e,p),u(p,a),a.checked=l[0][l[6]].value,u(e,i),c||(h=ae(a,"change",g),c=!0)},p(I,k){l=I,k&1&&s!==(s=l[6]+"")&&ue(n,s),k&3&&m!==(m=`${l[1]}-${l[6]}`)&&o(t,"for",m),k&3&&d!==(d=`${l[1]}-${l[6]}`)&&o(a,"id",d),k&1&&(a.checked=l[0][l[6]].value)},d(I){I&&_(e),c=!1,h()}}}function Ce(l){let e,t=l[0][l[6]].type==="boolean"&&Oe(l);return{c(){t&&t.c(),e=me()},l(r){t&&t.l(r),e=me()},m(r,s){t&&t.m(r,s),C(r,e,s)},p(r,s){r[0][r[6]].type==="boolean"?t?t.p(r,s):(t=Oe(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&_(e)}}}function At(l){let e,t,r,s,n,m,f,p,a=l[2].theme+"",d,i,c,h,g,I,k,w,y,S,M,z,x;g=new St({});let q=Object.keys(l[0]),O=[];for(let T=0;T<q.length;T+=1)O[T]=Ce(Fe(l,q,T));return{c(){e=b("div"),t=b("label"),r=b("code"),s=B("theme"),m=P(),f=b("div"),p=b("code"),d=B(a),i=P(),c=b("a"),h=b("span"),Y(g.$$.fragment),I=P(),k=b("span"),w=B("Edit the theme"),y=P();for(let T=0;T<O.length;T+=1)O[T].c();S=me(),this.h()},l(T){e=$(T,"DIV",{class:!0});var H=v(e);t=$(H,"LABEL",{for:!0,class:!0});var U=v(t);r=$(U,"CODE",{class:!0});var D=v(r);s=N(D,"theme"),D.forEach(_),U.forEach(_),m=L(H),f=$(H,"DIV",{class:!0});var E=v(f);p=$(E,"CODE",{class:!0});var A=v(p);d=N(A,a),A.forEach(_),i=L(E),c=$(E,"A",{href:!0,class:!0});var V=v(c);h=$(V,"SPAN",{"aria-hidden":!0});var ee=v(h);Q(g.$$.fragment,ee),ee.forEach(_),I=L(V),k=$(V,"SPAN",{class:!0});var te=v(k);w=N(te,"Edit the theme"),te.forEach(_),V.forEach(_),E.forEach(_),H.forEach(_),y=L(T);for(let G=0;G<O.length;G+=1)O[G].l(T);S=me(),this.h()},h(){o(r,"class","bg-dark rounded p-1"),o(t,"for",n=`${l[1]}-template`),o(t,"class","w-fit-content w-50"),o(p,"class","bg-dark text-primary rounded p-1"),o(h,"aria-hidden","true"),o(k,"class","visually-hidden"),o(c,"href",`#${$e}`),o(c,"class","btn btn-outline-secondary border-2 p-0 px-1 ms-1"),o(f,"class","d-flex"),o(e,"class","mb-3 d-flex")},m(T,H){C(T,e,H),u(e,t),u(t,r),u(r,s),u(e,m),u(e,f),u(f,p),u(p,d),u(f,i),u(f,c),u(c,h),X(g,h,null),u(c,I),u(c,k),u(k,w),C(T,y,H);for(let U=0;U<O.length;U+=1)O[U].m(T,H);C(T,S,H),M=!0,z||(x=ae(c,"click",l[3]),z=!0)},p(T,[H]){if((!M||H&2&&n!==(n=`${T[1]}-template`))&&o(t,"for",n),(!M||H&4)&&a!==(a=T[2].theme+"")&&ue(d,a),H&3){q=Object.keys(T[0]);let U;for(U=0;U<q.length;U+=1){const D=Fe(T,q,U);O[U]?O[U].p(D,H):(O[U]=Ce(D),O[U].c(),O[U].m(S.parentNode,S))}for(;U<O.length;U+=1)O[U].d(1);O.length=q.length}},i(T){M||(F(g.$$.fragment,T),M=!0)},o(T){R(g.$$.fragment,T),M=!1},d(T){T&&_(e),Z(g),T&&_(y),be(O,T),T&&_(S),z=!1,x()}}}const Pt=1e3,De="highlight";function Lt(l,e,t){let r;fe(l,se,a=>t(2,r=a));let{template:s}=e,{settings:n}=e;const m=document.getElementById($e),f=()=>{m.classList.add(De),setTimeout(()=>{m.classList.remove(De)},Pt)};function p(a){n[a].value=this.checked,t(0,n)}return l.$$set=a=>{"template"in a&&t(1,s=a.template),"settings"in a&&t(0,n=a.settings)},[n,s,r,f,p]}class Bt extends J{constructor(e){super();K(this,e,Lt,At,W,{template:1,settings:0})}}function Nt(l){let e,t,r,s,n,m,f,p,a,d,i,c,h,g,I,k,w,y,S,M,z,x,q,O,T,H;function U(E){l[7](E)}let D={template:l[1]};return l[3].templates_settings[l[1]]!==void 0&&(D.settings=l[3].templates_settings[l[1]]),h=new Bt({props:D}),ze.push(()=>qe(h,"settings",U)),M=new Ne({props:{code:l[5]}}),T=new Ne({props:{code:l[4]}}),{c(){e=b("h3"),t=B(l[1]),r=P(),s=b("div"),n=b("img"),p=P(),a=b("div"),d=b("h4"),i=B("Options:"),c=P(),Y(h.$$.fragment),I=P(),k=b("div"),w=b("h4"),y=B("Markdown"),S=P(),Y(M.$$.fragment),z=P(),x=b("h4"),q=B("HTML"),O=P(),Y(T.$$.fragment),this.h()},l(E){e=$(E,"H3",{class:!0});var A=v(e);t=N(A,l[1]),A.forEach(_),r=L(E),s=$(E,"DIV",{class:!0});var V=v(s);n=$(V,"IMG",{src:!0,alt:!0,class:!0}),p=L(V),a=$(V,"DIV",{class:!0});var ee=v(a);d=$(ee,"H4",{class:!0});var te=v(d);i=N(te,"Options:"),te.forEach(_),c=L(ee),Q(h.$$.fragment,ee),ee.forEach(_),I=L(V),k=$(V,"DIV",{class:!0});var G=v(k);w=$(G,"H4",{class:!0});var ne=v(w);y=N(ne,"Markdown"),ne.forEach(_),S=L(G),Q(M.$$.fragment,G),z=L(G),x=$(G,"H4",{class:!0});var Ee=v(x);q=N(Ee,"HTML"),Ee.forEach(_),O=L(G),Q(T.$$.fragment,G),G.forEach(_),V.forEach(_),this.h()},h(){o(e,"class","fw-bold text-primary bg-dark w-fit-content rounded px-2 p-1"),pe(n.src,m=l[2])||o(n,"src",m),o(n,"alt",f=`user ${l[0]} stackoverflow ${l[1]}`),o(n,"class","col-12 col-md-3"),o(d,"class","svelte-xawtla"),o(a,"class","col-8 col-md-3 mt-3 mt-md-0"),o(w,"class","fst-italic fw-bold fs-6 m-0 p-2 bg-dark rounded w-fit-content svelte-xawtla"),o(x,"class","fst-italic fw-bold fs-6 m-0 mt-2 p-2 bg-dark rounded w-fit-content svelte-xawtla"),o(k,"class","codes col-12 col-md-5 mt-3 mt-md-0 svelte-xawtla"),o(s,"class","row")},m(E,A){C(E,e,A),u(e,t),C(E,r,A),C(E,s,A),u(s,n),u(s,p),u(s,a),u(a,d),u(d,i),u(a,c),X(h,a,null),u(s,I),u(s,k),u(k,w),u(w,y),u(k,S),X(M,k,null),u(k,z),u(k,x),u(x,q),u(k,O),X(T,k,null),H=!0},p(E,[A]){(!H||A&2)&&ue(t,E[1]),(!H||A&4&&!pe(n.src,m=E[2]))&&o(n,"src",m),(!H||A&3&&f!==(f=`user ${E[0]} stackoverflow ${E[1]}`))&&o(n,"alt",f);const V={};A&2&&(V.template=E[1]),!g&&A&10&&(g=!0,V.settings=E[3].templates_settings[E[1]],Ye(()=>g=!1)),h.$set(V);const ee={};A&32&&(ee.code=E[5]),M.$set(ee);const te={};A&16&&(te.code=E[4]),T.$set(te)},i(E){H||(F(h.$$.fragment,E),F(M.$$.fragment,E),F(T.$$.fragment,E),H=!0)},o(E){R(h.$$.fragment,E),R(M.$$.fragment,E),R(T.$$.fragment,E),H=!1},d(E){E&&_(e),E&&_(r),E&&_(s),Z(h),Z(M),Z(T)}}}function Ft(l,e,t){let r,s,n,m;fe(l,se,i=>t(3,m=i));let{theme:f}=e,{userId:p}=e,{template:a}=e;function d(i){l.$$.not_equal(m.templates_settings[a],i)&&(m.templates_settings[a]=i,se.set(m))}return l.$$set=i=>{"theme"in i&&t(6,f=i.theme),"userId"in i&&t(0,p=i.userId),"template"in i&&t(1,a=i.template)},l.$$.update=()=>{l.$$.dirty&75&&t(2,r=ht(p,a,f,m.templates_settings[a])),l.$$.dirty&5&&t(5,s=Le(it,p,r)),l.$$.dirty&5&&t(4,n=Le(ut,p,r))},[p,a,r,m,n,s,f,d]}class Ot extends J{constructor(e){super();K(this,e,Ft,Nt,W,{theme:6,userId:0,template:1})}}const Ct="#000",Dt="#FFFEFE",Mt="#000",Rt="#536675",Ht="#FFCC01",Ut="#B4B8BC",xt="#D1A684",Vt="#E6E5E5";var jt={colorText:Ct,colorBg:Dt,colorPrimary:Mt,colorLink:Rt,colorGold:Ht,colorSilver:Ut,colorBronze:xt,colorSoIcon:Vt};const Gt="#EAEAEA",zt="#2D2D2D",qt="#F48024",Yt="#81C4F8",Qt="#525252";var Xt={colorText:Gt,colorBg:zt,colorPrimary:qt,colorLink:Yt,colorSoIcon:Qt};const Zt="#EAEAEA",Jt="#193649",Kt="#DD6386",Wt="#81C4F8",er="#674861";var tr={colorText:Zt,colorBg:Jt,colorPrimary:Kt,colorLink:Wt,colorSoIcon:er};const rr="#272822",lr="#CC215F",sr="#EAEAEA",or="#81C4F8",ar="#592635";var nr={colorBg:rr,colorPrimary:lr,colorText:sr,colorLink:or,colorSoIcon:ar};const cr="#474B4F",ir="#FFF",ur="#474B4F",fr="#536675";var hr={colorText:cr,colorBg:ir,colorPrimary:ur,colorLink:fr};const dr="#FFF",mr="#F61328",_r="#FFFF01",pr="#FFFF01",gr="#FA7526";var vr={colorText:dr,colorBg:mr,colorPrimary:_r,colorLink:pr,colorSoIcon:gr};const Me=["profile","profile-small"],ve={default:jt,dark:Xt,cobalt:tr,monokai:nr,graywhite:hr,hotdog:vr};function Re(l,e,t){const r=l.slice();return r[1]=e[t],r}function He(l){let e,t,r,s;return e=new Ot({props:{userId:l[0].id,template:l[1],theme:l[0].theme}}),{c(){Y(e.$$.fragment),t=P(),r=b("hr"),this.h()},l(n){Q(e.$$.fragment,n),t=L(n),r=$(n,"HR",{class:!0}),this.h()},h(){o(r,"class","rounded my-5 svelte-1tp1wn")},m(n,m){X(e,n,m),C(n,t,m),C(n,r,m),s=!0},p(n,m){const f={};m&1&&(f.userId=n[0].id),m&1&&(f.theme=n[0].theme),e.$set(f)},i(n){s||(F(e.$$.fragment,n),s=!0)},o(n){R(e.$$.fragment,n),s=!1},d(n){Z(e,n),n&&_(t),n&&_(r)}}}function br(l){let e,t,r,s,n,m,f,p=Me,a=[];for(let i=0;i<p.length;i+=1)a[i]=He(Re(l,p,i));const d=i=>R(a[i],1,1,()=>{a[i]=null});return{c(){e=b("section"),t=b("h2"),r=b("span"),s=B("3."),n=B(`
    Select your preferred profile and copy the Markdown/HTML into your README:`),m=P();for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=$(i,"SECTION",{class:!0});var c=v(e);t=$(c,"H2",{class:!0});var h=v(t);r=$(h,"SPAN",{class:!0});var g=v(r);s=N(g,"3."),g.forEach(_),n=N(h,`
    Select your preferred profile and copy the Markdown/HTML into your README:`),h.forEach(_),m=L(c);for(let I=0;I<a.length;I+=1)a[I].l(c);c.forEach(_),this.h()},h(){o(r,"class","fw-bold text-primary"),o(t,"class","fs-3 mb-5"),o(e,"class","mt-6")},m(i,c){C(i,e,c),u(e,t),u(t,r),u(r,s),u(t,n),u(e,m);for(let h=0;h<a.length;h+=1)a[h].m(e,null);f=!0},p(i,[c]){if(c&1){p=Me;let h;for(h=0;h<p.length;h+=1){const g=Re(i,p,h);a[h]?(a[h].p(g,c),F(a[h],1)):(a[h]=He(g),a[h].c(),F(a[h],1),a[h].m(e,null))}for(ce(),h=p.length;h<a.length;h+=1)d(h);ie()}},i(i){if(!f){for(let c=0;c<p.length;c+=1)F(a[c]);f=!0}},o(i){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)R(a[c]);f=!1},d(i){i&&_(e),be(a,i)}}}function $r(l,e,t){let r;return fe(l,se,s=>t(0,r=s)),[r]}class Er extends J{constructor(e){super();K(this,e,$r,br,W,{})}}function wr(l){let e,t;return{c(){e=re("svg"),t=re("path"),this.h()},l(r){e=le(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var s=v(e);t=le(s,"path",{d:!0}),v(t).forEach(_),s.forEach(_),this.h()},h(){o(t,"d","M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","16"),o(e,"height","16"),o(e,"fill","currentColor"),o(e,"class","bi bi-question-circle-fill"),o(e,"viewBox","0 0 16 16")},m(r,s){C(r,e,s),u(e,t)},p:j,i:j,o:j,d(r){r&&_(e)}}}class kr extends J{constructor(e){super();K(this,e,null,wr,W,{})}}function Ue(l){let e,t,r,s,n,m,f,p,a,d;return t=new tt({props:{symbol:"\u26A0\uFE0F"}}),{c(){e=b("p"),Y(t.$$.fragment),r=B(`
      Please enter a valid user id like
      `),s=b("b"),n=B(ge),m=B(` 
      or a valid profile URL like `),f=b("b"),p=B(Ae),a=B("."),this.h()},l(i){e=$(i,"P",{class:!0,role:!0});var c=v(e);Q(t.$$.fragment,c),r=N(c,`
      Please enter a valid user id like
      `),s=$(c,"B",{class:!0});var h=v(s);n=N(h,ge),h.forEach(_),m=N(c,` 
      or a valid profile URL like `),f=$(c,"B",{class:!0});var g=v(f);p=N(g,Ae),g.forEach(_),a=N(c,"."),c.forEach(_),this.h()},h(){o(s,"class","fw-bold"),o(f,"class","fw-bold"),o(e,"class","invalid-feedback d-inline-block alert alert-danger p-1 w-fit-content text-dark"),o(e,"role","alert")},m(i,c){C(i,e,c),X(t,e,null),u(e,r),u(e,s),u(s,n),u(e,m),u(e,f),u(f,p),u(e,a),d=!0},p:j,i(i){d||(F(t.$$.fragment,i),d=!0)},o(i){R(t.$$.fragment,i),d=!1},d(i){i&&_(e),Z(t)}}}function yr(l){let e,t,r,s,n,m,f,p,a,d,i,c,h,g,I,k;a=new kr({});let w=l[1]&&Ue();return{c(){e=b("label"),t=b("h2"),r=b("span"),s=B("1."),n=B(`
    Please enter your Stackoverflow identifier or profile URL`),m=P(),f=b("a"),p=b("span"),Y(a.$$.fragment),d=P(),i=b("div"),c=b("input"),h=P(),w&&w.c(),this.h()},l(y){e=$(y,"LABEL",{for:!0,class:!0});var S=v(e);t=$(S,"H2",{class:!0});var M=v(t);r=$(M,"SPAN",{class:!0});var z=v(r);s=N(z,"1."),z.forEach(_),n=N(M,`
    Please enter your Stackoverflow identifier or profile URL`),M.forEach(_),m=L(S),f=$(S,"A",{href:!0,target:!0,class:!0,title:!0,"aria-label":!0});var x=v(f);p=$(x,"SPAN",{"aria-hidden":!0});var q=v(p);Q(a.$$.fragment,q),q.forEach(_),x.forEach(_),S.forEach(_),d=L(y),i=$(y,"DIV",{});var O=v(i);c=$(O,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,minlength:!0,maxlength:!0,autocomplete:!0}),h=L(O),w&&w.l(O),O.forEach(_),this.h()},h(){o(r,"class","fw-bold text-primary"),o(t,"class","m-0 p-0 fs-3"),o(p,"aria-hidden","true"),o(f,"href","https://meta.stackoverflow.com/questions/281254/how-to-find-my-userid-in-stack-overflow"),o(f,"target","_blank"),o(f,"class","mx-3"),o(f,"title",xe),o(f,"aria-label",xe),o(e,"for","soId"),o(e,"class","form-label d-flex align-items-center w-fit-content"),o(c,"type","text"),o(c,"class","form-control bg-dark text-light svelte-1gaq7ng"),o(c,"id","soId"),o(c,"placeholder",`Example: ${ge.toString()} or https://stackoverflow.com/users/8583669/johannchopin`),o(c,"minlength",2),o(c,"maxlength",100),c.required=!0,o(c,"autocomplete","off")},m(y,S){C(y,e,S),u(e,t),u(t,r),u(r,s),u(t,n),u(e,m),u(e,f),u(f,p),X(a,p,null),C(y,d,S),C(y,i,S),u(i,c),Ie(c,l[0]),u(i,h),w&&w.m(i,null),g=!0,I||(k=ae(c,"input",l[3]),I=!0)},p(y,[S]){S&1&&c.value!==y[0]&&Ie(c,y[0]),y[1]?w?(w.p(y,S),S&2&&F(w,1)):(w=Ue(),w.c(),F(w,1),w.m(i,null)):w&&(ce(),R(w,1,1,()=>{w=null}),ie())},i(y){g||(F(a.$$.fragment,y),F(w),g=!0)},o(y){R(a.$$.fragment,y),R(w),g=!1},d(y){y&&_(e),Z(a),y&&_(d),y&&_(i),w&&w.d(),I=!1,k()}}}const xe="How to find my UserID in Stack Overflow";function Ir(l,e,t){let{userId:r}=e,s="",n=!1;const m=p=>{if(!isNaN(p))t(2,r=Number(p)),t(1,n=!1);else{const d=p.match(ct);d&&t(2,r=dt(p)),t(1,n=!d)}};function f(){s=this.value,t(0,s)}return l.$$set=p=>{"userId"in p&&t(2,r=p.userId)},l.$$.update=()=>{l.$$.dirty&1&&m(s)},[s,n,r,f]}class Tr extends J{constructor(e){super();K(this,e,Ir,yr,W,{userId:2})}}function Sr(l){let e,t,r,s,n,m,f,p,a;return{c(){e=b("div"),t=b("p"),r=B(l[1]),n=P(),m=b("span"),this.h()},l(d){e=$(d,"DIV",{class:!0,style:!0});var i=v(e);t=$(i,"P",{class:!0,style:!0});var c=v(t);r=N(c,l[1]),c.forEach(_),n=L(i),m=$(i,"SPAN",{class:!0,style:!0}),v(m).forEach(_),i.forEach(_),this.h()},h(){o(t,"class","m-1 fw-bold"),o(t,"style",s=`color: ${l[0].colorText}`),o(m,"class","position-absolute bottom-0 end-0 m-2 rounded svelte-1ggyan1"),o(m,"style",f=`background: ${l[0].colorLink};`),o(e,"class",p=Te(`template-preview position-relative border border-2 rounded ${l[2].class}`)+" svelte-1ggyan1"),o(e,"style",a=`border-color: ${l[0].colorPrimary}!important; background: ${l[0].colorBg};`)},m(d,i){C(d,e,i),u(e,t),u(t,r),u(e,n),u(e,m)},p(d,[i]){i&2&&ue(r,d[1]),i&1&&s!==(s=`color: ${d[0].colorText}`)&&o(t,"style",s),i&1&&f!==(f=`background: ${d[0].colorLink};`)&&o(m,"style",f),i&4&&p!==(p=Te(`template-preview position-relative border border-2 rounded ${d[2].class}`)+" svelte-1ggyan1")&&o(e,"class",p),i&1&&a!==(a=`border-color: ${d[0].colorPrimary}!important; background: ${d[0].colorBg};`)&&o(e,"style",a)},i:j,o:j,d(d){d&&_(e)}}}function Ar(l,e,t){let{theme:r}=e,{themeName:s}=e;return l.$$set=n=>{t(2,e=oe(oe({},e),de(n))),"theme"in n&&t(0,r=n.theme),"themeName"in n&&t(1,s=n.themeName)},e=de(e),[r,s,e]}class Pr extends J{constructor(e){super();K(this,e,Ar,Sr,W,{theme:0,themeName:1})}}function Ve(l,e,t){const r=l.slice();return r[3]=e[t],r}function je(l){let e,t,r,s,n,m,f,p,a,d,i,c;return f=new Pr({props:{themeName:l[3],theme:ve[l[3]],class:"cursor-pointer"}}),{c(){e=b("div"),t=b("input"),n=P(),m=b("label"),Y(f.$$.fragment),a=P(),this.h()},l(h){e=$(h,"DIV",{class:!0});var g=v(e);t=$(g,"INPUT",{class:!0,type:!0,name:!0,id:!0}),n=L(g),m=$(g,"LABEL",{class:!0,for:!0});var I=v(m);Q(f.$$.fragment,I),I.forEach(_),a=L(g),g.forEach(_),this.h()},h(){o(t,"class","form-check-input"),o(t,"type","radio"),o(t,"name","theme"),t.__value=r=l[3],t.value=t.__value,o(t,"id",s=`theme-${l[3]}`),l[2][0].push(t),o(m,"class","form-check-label ms-1"),o(m,"for",p=`theme-${l[3]}`),o(e,"class","d-flex align-items-center m-2 cursor-pointer")},m(h,g){C(h,e,g),u(e,t),t.checked=t.__value===l[0].theme,u(e,n),u(e,m),X(f,m,null),u(e,a),d=!0,i||(c=ae(t,"change",l[1]),i=!0)},p(h,g){g&1&&(t.checked=t.__value===h[0].theme)},i(h){d||(F(f.$$.fragment,h),d=!0)},o(h){R(f.$$.fragment,h),d=!1},d(h){h&&_(e),l[2][0].splice(l[2][0].indexOf(t),1),Z(f),i=!1,c()}}}function Lr(l){let e,t,r,s,n,m,f,p,a=Object.keys(ve),d=[];for(let c=0;c<a.length;c+=1)d[c]=je(Ve(l,a,c));const i=c=>R(d[c],1,1,()=>{d[c]=null});return{c(){e=b("section"),t=b("h2"),r=b("span"),s=B("2."),n=B(`
    Select the theme:`),m=P(),f=b("form");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){e=$(c,"SECTION",{id:!0,class:!0});var h=v(e);t=$(h,"H2",{class:!0});var g=v(t);r=$(g,"SPAN",{class:!0});var I=v(r);s=N(I,"2."),I.forEach(_),n=N(g,`
    Select the theme:`),g.forEach(_),m=L(h),f=$(h,"FORM",{class:!0});var k=v(f);for(let w=0;w<d.length;w+=1)d[w].l(k);k.forEach(_),h.forEach(_),this.h()},h(){o(r,"class","fw-bold text-primary"),o(t,"class","fs-3"),o(f,"class","d-flex flex-wrap"),o(e,"id",$e),o(e,"class","mt-6 svelte-1lqndro")},m(c,h){C(c,e,h),u(e,t),u(t,r),u(r,s),u(t,n),u(e,m),u(e,f);for(let g=0;g<d.length;g+=1)d[g].m(f,null);p=!0},p(c,[h]){if(h&1){a=Object.keys(ve);let g;for(g=0;g<a.length;g+=1){const I=Ve(c,a,g);d[g]?(d[g].p(I,h),F(d[g],1)):(d[g]=je(I),d[g].c(),F(d[g],1),d[g].m(f,null))}for(ce(),g=a.length;g<d.length;g+=1)i(g);ie()}},i(c){if(!p){for(let h=0;h<a.length;h+=1)F(d[h]);p=!0}},o(c){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)R(d[h]);p=!1},d(c){c&&_(e),be(d,c)}}}function Br(l,e,t){let r;fe(l,se,m=>t(0,r=m));const s=[[]];function n(){r.theme=this.__value,se.set(r)}return[r,n,s]}class Nr extends J{constructor(e){super();K(this,e,Br,Lr,W,{})}}function Fr(l){let e,t,r,s,n,m,f,p,a,d,i;return{c(){e=b("footer"),t=b("p"),r=B("Build and maintained with \u2764\uFE0F \xA0by "),s=b("a"),n=B("@johannchopin"),m=P(),f=b("p"),p=B("This website is "),a=b("a"),d=B("open source"),i=B("."),this.h()},l(c){e=$(c,"FOOTER",{class:!0});var h=v(e);t=$(h,"P",{class:!0});var g=v(t);r=N(g,"Build and maintained with \u2764\uFE0F \xA0by "),s=$(g,"A",{href:!0,target:!0});var I=v(s);n=N(I,"@johannchopin"),I.forEach(_),g.forEach(_),m=L(h),f=$(h,"P",{class:!0});var k=v(f);p=N(k,"This website is "),a=$(k,"A",{href:!0,target:!0});var w=v(a);d=N(w,"open source"),w.forEach(_),i=N(k,"."),k.forEach(_),h.forEach(_),this.h()},h(){o(s,"href","https://github.com/johannchopin"),o(s,"target","_blank"),o(t,"class","mb-0 ms-2"),o(a,"href","https://github.com/johannchopin/stackoverflow-readme-profile/tree/main/website"),o(a,"target","_blank"),o(f,"class","mt-0 ms-2"),o(e,"class","d-flex flex-column align-items-center mt-5 py-4 px-1 px-md-5 bg-dark")},m(c,h){C(c,e,h),u(e,t),u(t,r),u(t,s),u(s,n),u(e,m),u(e,f),u(f,p),u(f,a),u(a,d),u(f,i)},p:j,i:j,o:j,d(c){c&&_(e)}}}class Or extends J{constructor(e){super();K(this,e,null,Fr,W,{})}}function Cr(l){let e,t;return{c(){e=re("svg"),t=re("path"),this.h()},l(r){e=le(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var s=v(e);t=le(s,"path",{d:!0}),v(t).forEach(_),s.forEach(_),this.h()},h(){o(t,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","16"),o(e,"height","16"),o(e,"fill","currentColor"),o(e,"class","bi bi-github"),o(e,"viewBox","0 0 16 16")},m(r,s){C(r,e,s),u(e,t)},p:j,i:j,o:j,d(r){r&&_(e)}}}class Dr extends J{constructor(e){super();K(this,e,null,Cr,W,{})}}function Mr(l){let e,t,r,s,n,m,f,p,a,d,i,c,h,g;s=new Dr({});let I=[l[0],{class:h=`d-flex justify-content-end align-items-center ${l[0].class}`}],k={};for(let w=0;w<I.length;w+=1)k=oe(k,I[w]);return{c(){e=b("nav"),t=b("a"),r=b("span"),Y(s.$$.fragment),n=B(`
      GitHub`),m=P(),f=b("span"),p=B("Link to GitHub's repository"),a=P(),d=b("a"),i=b("img"),this.h()},l(w){e=$(w,"NAV",{class:!0});var y=v(e);t=$(y,"A",{href:!0,target:!0,class:!0});var S=v(t);r=$(S,"SPAN",{"aria-hidden":!0});var M=v(r);Q(s.$$.fragment,M),n=N(M,`
      GitHub`),M.forEach(_),m=L(S),f=$(S,"SPAN",{class:!0});var z=v(f);p=N(z,"Link to GitHub's repository"),z.forEach(_),S.forEach(_),a=L(y),d=$(y,"A",{class:!0,href:!0,target:!0});var x=v(d);i=$(x,"IMG",{alt:!0,src:!0}),x.forEach(_),y.forEach(_),this.h()},h(){o(r,"aria-hidden","true"),o(f,"class","visually-hidden"),o(t,"href",_e),o(t,"target","_blank"),o(t,"class","me-2 link-light text-decoration-none"),o(i,"alt","GitHub Repo stars"),pe(i.src,c=`https://img.shields.io/github/stars/${Xe}/${Ze}?style=social`)||o(i,"src",c),o(d,"class","p-1"),o(d,"href",`${_e}/stargazers`),o(d,"target","_blank"),Se(e,k)},m(w,y){C(w,e,y),u(e,t),u(t,r),X(s,r,null),u(r,n),u(t,m),u(t,f),u(f,p),u(e,a),u(e,d),u(d,i),g=!0},p(w,[y]){Se(e,k=rt(I,[y&1&&w[0],(!g||y&1&&h!==(h=`d-flex justify-content-end align-items-center ${w[0].class}`))&&{class:h}]))},i(w){g||(F(s.$$.fragment,w),g=!0)},o(w){R(s.$$.fragment,w),g=!1},d(w){w&&_(e),Z(s)}}}function Rr(l,e,t){const r=[];let s=he(e,r);return l.$$set=n=>{e=oe(oe({},e),de(n)),t(0,s=he(e,r))},[s]}class Hr extends J{constructor(e){super();K(this,e,Rr,Mr,W,{})}}function Ge(l){let e,t;return e=new Er({}),{c(){Y(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,s){X(e,r,s),t=!0},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){R(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function Ur(l){let e,t,r,s,n,m,f,p,a,d,i,c,h,g,I,k,w,y,S,M,z,x,q,O,T;t=new Hr({props:{class:"mt-3"}});function H(E){l[3](E)}let U={};l[0]!==void 0&&(U.userId=l[0]),h=new Tr({props:U}),ze.push(()=>qe(h,"userId",H)),k=new Nr({});let D=l[1].id&&Ge();return x=new Or({}),{c(){e=b("main"),Y(t.$$.fragment),r=P(),s=b("h1"),n=B("stackoverflow-readme-profile"),m=P(),f=b("p"),p=b("span"),a=B(">"),d=B(`
    Easily share your Stackoverflow's profile on your README`),i=P(),c=b("form"),Y(h.$$.fragment),I=P(),Y(k.$$.fragment),w=P(),y=b("button"),S=B("Generate your profiles"),M=P(),D&&D.c(),z=P(),Y(x.$$.fragment),this.h()},l(E){e=$(E,"MAIN",{class:!0});var A=v(e);Q(t.$$.fragment,A),r=L(A),s=$(A,"H1",{class:!0});var V=v(s);n=N(V,"stackoverflow-readme-profile"),V.forEach(_),m=L(A),f=$(A,"P",{class:!0});var ee=v(f);p=$(ee,"SPAN",{class:!0});var te=v(p);a=N(te,">"),te.forEach(_),d=N(ee,`
    Easily share your Stackoverflow's profile on your README`),ee.forEach(_),i=L(A),c=$(A,"FORM",{class:!0});var G=v(c);Q(h.$$.fragment,G),I=L(G),Q(k.$$.fragment,G),w=L(G),y=$(G,"BUTTON",{class:!0,type:!0});var ne=v(y);S=N(ne,"Generate your profiles"),ne.forEach(_),G.forEach(_),M=L(A),D&&D.l(A),A.forEach(_),z=L(E),Q(x.$$.fragment,E),this.h()},h(){o(s,"class","mb-0 mt-3 fs-3 fw-bold svelte-1fxtu4e"),o(p,"class","fw-bold text-primary me-1"),o(f,"class","ms-3"),o(y,"class","btn btn-outline-primary mt-6"),o(y,"type","submit"),o(c,"class","mt-6"),o(e,"class","container pt-0 pt-md-5 svelte-1fxtu4e")},m(E,A){C(E,e,A),X(t,e,null),u(e,r),u(e,s),u(s,n),u(e,m),u(e,f),u(f,p),u(p,a),u(f,d),u(e,i),u(e,c),X(h,c,null),u(c,I),X(k,c,null),u(c,w),u(c,y),u(y,S),u(e,M),D&&D.m(e,null),C(E,z,A),X(x,E,A),q=!0,O||(T=ae(c,"submit",lt(l[2])),O=!0)},p(E,[A]){const V={};!g&&A&1&&(g=!0,V.userId=E[0],Ye(()=>g=!1)),h.$set(V),E[1].id?D?A&2&&F(D,1):(D=Ge(),D.c(),F(D,1),D.m(e,null)):D&&(ce(),R(D,1,1,()=>{D=null}),ie())},i(E){q||(F(t.$$.fragment,E),F(h.$$.fragment,E),F(k.$$.fragment,E),F(D),F(x.$$.fragment,E),q=!0)},o(E){R(t.$$.fragment,E),R(h.$$.fragment,E),R(k.$$.fragment,E),R(D),R(x.$$.fragment,E),q=!1},d(E){E&&_(e),Z(t),Z(h),Z(k),D&&D.d(),E&&_(z),Z(x,E),O=!1,T()}}}function xr(l,e,t){let r;fe(l,se,f=>t(1,r=f));let s;const n=()=>{st(se,r.id=s,r)};function m(f){s=f,t(0,s)}return[s,r,n,m]}class Gr extends J{constructor(e){super();K(this,e,xr,Ur,W,{})}}export{Gr as default};
