import{i as O,f as A,s as T,o as q,h as K,n as z,j}from"../chunks/scheduler.933cbe4a.js";import{S as I,i as P,g as _,h as d,j as k,f as m,k as y,a as p,d as v,p as U,t as $,b as G,s as x,y as g,c as C,x as L,z as h,r as W,u as B,v as F,w as J}from"../chunks/index.56f53791.js";function N(f){const t=f-1;return t*t*t+1}function E(f,{delay:t=0,duration:n=400,easing:s=O}={}){const a=+getComputedStyle(f).opacity;return{delay:t,duration:n,easing:s,css:o=>`opacity: ${o*a}`}}function H(f,{delay:t=0,duration:n=400,easing:s=N,x:a=0,y:o=0,opacity:c=0}={}){const l=getComputedStyle(f),i=+l.opacity,u=l.transform==="none"?"":l.transform,e=i*(1-c),[r,V]=A(a),[w,D]=A(o);return{delay:t,duration:n,easing:s,css:(b,M)=>`
			transform: ${u} translate(${(1-b)*r}${V}, ${(1-b)*w}${D});
			opacity: ${i-e*M}`}}function S(f){let t,n="I'M A TEST CODE HAHAHAHAH LOOK AT ME",s,a,o,c,l,i,u;return{c(){t=_("p"),t.textContent=n,a=x(),o=_("div"),c=_("img"),this.h()},l(e){t=d(e,"P",{"data-svelte-h":!0}),g(t)!=="svelte-bxu2jh"&&(t.textContent=n),a=C(e),o=d(e,"DIV",{});var r=k(o);c=d(r,"IMG",{src:!0,alt:!0}),r.forEach(m),this.h()},h(){K(c.src,l=R)||y(c,"src",l),y(c,"alt","Screenshot of game Katazuke")},m(e,r){p(e,t,r),p(e,a,r),p(e,o,r),L(o,c),u=!0},p:z,i(e){u||(e&&j(()=>{u&&(s||(s=h(t,H,{y:200,duration:2e3},!0)),s.run(1))}),e&&j(()=>{u&&(i||(i=h(o,E,{},!0)),i.run(1))}),u=!0)},o(e){e&&(s||(s=h(t,H,{y:200,duration:2e3},!1)),s.run(0)),e&&(i||(i=h(o,E,{},!1)),i.run(0)),u=!1},d(e){e&&(m(t),m(a),m(o)),e&&s&&s.end(),e&&i&&i.end()}}}function Q(f){let t,n=f[0]&&S();return{c(){t=_("div"),n&&n.c(),this.h()},l(s){t=d(s,"DIV",{class:!0});var a=k(t);n&&n.l(a),a.forEach(m),this.h()},h(){y(t,"class","always-visible")},m(s,a){p(s,t,a),n&&n.m(t,null)},p(s,[a]){s[0]?n?(n.p(s,a),a&1&&v(n,1)):(n=S(),n.c(),v(n,1),n.m(t,null)):n&&(U(),$(n,1,1,()=>{n=null}),G())},i(s){v(n)},o(s){$(n)},d(s){s&&m(t),n&&n.d()}}}let R="/images/katazuke.jpeg";function X(f,t,n){let s=!1;return q(()=>n(0,s=!0)),[s]}class Y extends I{constructor(t){super(),P(this,t,X,Q,T,{})}}function Z(f){let t,n="Thiago Amendola Page",s,a,o="This is Thiago Amendola's Webpageeee",c,l,i,u;return i=new Y({}),{c(){t=_("h1"),t.textContent=n,s=x(),a=_("p"),a.textContent=o,c=x(),l=_("div"),W(i.$$.fragment),this.h()},l(e){t=d(e,"H1",{"data-svelte-h":!0}),g(t)!=="svelte-158m1ym"&&(t.textContent=n),s=C(e),a=d(e,"P",{"data-svelte-h":!0}),g(a)!=="svelte-7x43jz"&&(a.textContent=o),c=C(e),l=d(e,"DIV",{class:!0});var r=k(l);B(i.$$.fragment,r),r.forEach(m),this.h()},h(){y(l,"class","wrapper-content")},m(e,r){p(e,t,r),p(e,s,r),p(e,a,r),p(e,c,r),p(e,l,r),F(i,l,null),u=!0},p:z,i(e){u||(v(i.$$.fragment,e),u=!0)},o(e){$(i.$$.fragment,e),u=!1},d(e){e&&(m(t),m(s),m(a),m(c),m(l)),J(i)}}}class nt extends I{constructor(t){super(),P(this,t,null,Z,T,{})}}export{nt as component};
