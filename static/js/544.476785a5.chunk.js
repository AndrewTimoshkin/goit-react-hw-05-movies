"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{5943:function(n,r,t){t.d(r,{Z:function(){return i}});var e,a=t(501),u=t(6871),c=t(168),s=t(6444).ZP.li(e||(e=(0,c.Z)(["\n  a {\n    margin: 5px;\n    padding: 10px;\n    background-color: #eee;\n    border-radius: 5px;\n    cursor: pointer;\n    color: #000;\n    &:hover {\n      background-color: #ddd;\n    }\n  }\n"]))),o=t(184);function i(n){var r=n.movies,t=(0,u.TH)();return(0,o.jsx)("ul",{children:r.map((function(n){var r=n.id,e=n.title;return(0,o.jsx)(s,{children:(0,o.jsx)(a.rU,{state:{from:t},to:"/movies/".concat(r),children:e})},r)}))})}},9544:function(n,r,t){t.r(r),t.d(r,{default:function(){return p}});var e=t(5861),a=t(885),u=t(7757),c=t.n(u),s=t(2791),o=t(2690),i=t(5943),f=t(184);function p(){var n=(0,s.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Hg)();case 3:r=n.sent,u(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,7,10,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending now"}),0!==t.length&&(0,f.jsx)(i.Z,{movies:t})]})}},2690:function(n,r,t){t.d(r,{Hg:function(){return o},TP:function(){return f},qF:function(){return i},tx:function(){return v},zv:function(){return p}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b28dcafbfbdc99f3059a27aaeb93fed6"}}),o=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/week");case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("search/movie",{params:{query:r}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(r,"/reviews"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.476785a5.chunk.js.map