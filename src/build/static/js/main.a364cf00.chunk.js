(this["webpackJsonpwebscrap-react"]=this["webpackJsonpwebscrap-react"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(32),r=a.n(s),o=a(10),i=a.n(o),l=a(17),b=a(9),j=a(13),p=a(1);var d=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(p.jsx)("span",{className:"navbar-brand",children:"Shopcart"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mynavbar",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"mynavbar",children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto mr-md-4",children:[Object(p.jsx)("li",{className:"Nav-item",children:Object(p.jsx)(j.b,{className:"nav-link text-bold mr-md-3",to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("form",{className:"form-inline mt-md-0 mt-3",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"laptop brands",id:"demo",name:"search",onChange:function(e){var t;t=e.target.value,n(t),console.log(t)}}),Object(p.jsx)("div",{className:"input-group-append",children:Object(p.jsx)(j.b,{className:" btn btn-success",to:"/".concat(a),children:Object(p.jsx)("i",{className:"fas fa-search"})})})]})})})]})})]})})},m=a(14),u=a.n(m),h=a(2),x=a(19),g=n.a.createContext();var O=function(e){var t=e.match,a=Object(c.useContext)(g),n=Object(c.useState)([]),s=Object(b.a)(n,2),r=s[0],o=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===a.state.length&&"/:id"!==t.path){e.next=15;break}if("/:id"!==t.path){e.next=11;break}return e.next=4,u.a.get("https://webscrap437.herokuapp.com/products/".concat(t.params.id));case 4:c=e.sent,n=c.data,console.log("search"),console.log(n),o(n),e.next=13;break;case 11:console.log("home"),m(a.state);case 13:e.next=20;break;case 15:return e.next=17,u.a.get("https://webscrap437.herokuapp.com/products");case 17:s=e.sent,r=s.data,m(r);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){j()}),[]),Object(c.useEffect)((function(){j()}),[t.params.id]);var d=[],m=function(e){d=Object(x.a)(e),console.log(d),h()},h=function(){0===d.length&&(d=Object(x.a)(a.state));for(var e=[],t=a.pageno,c=a.pageno-10,n=c;n<t;n++)e.push(d[n]);o(e),a.pageno=c,a.pageno<=0&&(a.pageno=10)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"container-fluid mt-4 cardgrid",children:r.map((function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card-img-top cardimg",alt:"laptops",style:{width:"100%"},src:e.image}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("p",{className:"title",children:e.title}),Object(p.jsxs)("p",{className:"rating",children:["Rating:",e.rating]}),Object(p.jsx)("p",{className:"offerprice",children:e.offerprice}),Object(p.jsx)("p",{className:"price",children:e.price})]})]},e._id)}))}),t.params.id?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",className:"btn btn-dark mr-md-2 mb-4",onClick:h,children:"Prev"}),Object(p.jsx)("button",{type:"button",className:"btn btn-dark mb-4",onClick:function(){0===d.length&&(d=Object(x.a)(a.state),console.log(d));for(var e=[],t=a.pageno,c=a.pageno+10,n=t;n<c;n++)e.push(d[n]);o(e),a.pageno=c,a.pageno>=d.length&&(a.pageno=d.length-10)},children:"Next"})]})]})};a(64);var f=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://webscrap437.herokuapp.com/products");case 2:t=e.sent,a=t.data,console.log(a),n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g.Provider,{value:{state:a,setState:n,pageno:10},children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(d,{}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"/",component:O}),Object(p.jsx)(h.a,{path:"/:id",component:O})]})]})})})};r.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a364cf00.chunk.js.map