"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{4776:function(n,t,e){e.d(t,{Df:function(){return i},TP:function(){return p},XT:function(){return h},q5:function(){return l},yo:function(){return f}});var r=e(5861),c=e(4687),a=e.n(c),u=e(1243),o="292fb79ad255ff04db0087dc349cbd4a",s="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/trending/all/day?api_key=").concat(o)).catch((function(n){return new Error(n)}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/search/movie?query=").concat(t,"&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,c,a,u,o,s=e(5861),i=e(9439),p=e(4687),f=e.n(p),l=e(7689),h=e(2791),d=e(4776),v=e(168),x=e(5706),w=x.Z.div(r||(r=(0,v.Z)(["\n  display: block;\n"]))),Z=x.Z.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 30px;\n  list-style: none;\n"]))),m=x.Z.li(a||(a=(0,v.Z)(["\n  padding: 15px;\n\n\n"]))),y=x.Z.p(u||(u=(0,v.Z)(["\n  font-weight: 700;\n  & > span {\n    color: rebeccapurple;\n  }\n"]))),g=x.Z.p(o||(o=(0,v.Z)(["\n  font-weight: 700;\n  & > span {\n    font-weight: 400;\n    font-style: oblique;\n    line-height: 1.5;\n  }\n"]))),k=e(5067),b=e(184),j=function(){var n=(0,l.UO)().movieId,t=(0,h.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1],a=(0,h.useState)(!1),u=(0,i.Z)(a,2),o=u[0],p=u[1],v=(0,h.useState)(null),x=(0,i.Z)(v,2),j=x[0],_=x[1];(0,h.useEffect)((function(){(0,s.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(!0),t.next=4,(0,d.q5)(n);case 4:e=t.sent,c(e.data),console.log(e.data.results),0===e.data.results.length&&_("Sorry, we do not found review for this movie"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:return t.prev=13,p(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}),[n]);var S=r.results;return(0,b.jsx)(w,{children:o?(0,b.jsx)(k.a,{}):j?(0,b.jsx)("p",{style:{color:"red",fontSize:"20px",fontWeight:"700",marginTop:"50px"},children:j}):(0,b.jsx)(Z,{children:S&&S.map((function(n){return(0,b.jsxs)(m,{children:[(0,b.jsxs)(y,{children:["Author: ",(0,b.jsxs)("span",{children:[" ",n.author]})]}),(0,b.jsxs)(g,{children:["Review:",(0,b.jsxs)("span",{children:[" ",n.content]})]})]},n.id)}))})})}}}]);
//# sourceMappingURL=779.058960d5.chunk.js.map