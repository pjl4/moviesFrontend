(this.webpackJsonpmoviefrontend=this.webpackJsonpmoviefrontend||[]).push([[0],{35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=(a(40),a(9)),i=a(7),m=function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"nav-bar"},l.a.createElement("h3",null,"cinopsis"),l.a.createElement(i.b,{to:"/"},l.a.createElement("h3",null,"Home")),localStorage.id&&l.a.createElement(i.b,{to:"/new"},l.a.createElement("h3",null,"Submit")),!localStorage.id&&l.a.createElement(i.b,{to:"/login"},l.a.createElement("h3",null,"Log in")),localStorage.username&&l.a.createElement("div",null,l.a.createElement("h3",null,"Signed in as: ",localStorage.username),l.a.createElement(c.a,{href:"/moviesFrontend",onClick:function(){localStorage.clear()}},"Logout"))))},u=a(6),s=a(15),E=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){s.get("https://cinopsis.herokuapp.com/api/movies").then((function(e){return o(e.data)}))}),[]);var c=function(e){var t=r.filter((function(t){return t.genre===e})).sort((function(e,t){return e.avgRating>t.avgRating?-1:1}));t.splice(5,t.length-1);var a=t.map((function(e){return l.a.createElement(i.b,{to:"movie/"+e._id},l.a.createElement("li",null,e.title," ",e.ratings.length>0&&l.a.createElement("span",{style:{color:"black"}},"Average Rating:",e.avgRating)))}));if(a.length>=5){var n=m(e);a.push(n)}return a},m=function(e){return l.a.createElement(i.b,{to:"genre/".concat(e)},"View All")};return l.a.createElement("div",null,l.a.createElement("h1",null,"Home"),l.a.createElement("main",{className:"homeMain"},l.a.createElement("div",{className:"homeList"},l.a.createElement("h2",null,"Submissions"),l.a.createElement("h3",null,"Comedy"),l.a.createElement("ul",null,r&&(c("Comedy").length?c("Comedy"):l.a.createElement("li",null,"No Comedies At This Time"))),l.a.createElement("h3",null,"Romance"),l.a.createElement("ul",null,r&&(c("Romance").length?c("Romance"):l.a.createElement("li",null,"No Romance At This Time"))),l.a.createElement("h3",null,"Action"),l.a.createElement("ul",null,r&&(c("Action").length?c("Action"):l.a.createElement("li",null,"No Actions At This Time"))),l.a.createElement("h3",null,"Horror"),l.a.createElement("ul",null,r&&(c("Horror").length?c("Horror"):l.a.createElement("li",null,"No Horrors At This Time"))),l.a.createElement("h3",null,"Drama"),l.a.createElement("ul",null,r&&(c("Drama").length?c("Drama"):l.a.createElement("li",null,"No Dramas At This Time")))),l.a.createElement("div",null,l.a.createElement("h2",null,"Aside"))))},p=a(2),d=a(14),h=a(15),g=Object(d.f)((function(e){var t="https://cinopsis.herokuapp.com/api/movies/".concat(e.match.params.id),a=Object(n.useState)(),r=Object(u.a)(a,2),o=r[0],m=r[1],s=Object(n.useState)(0),E=Object(u.a)(s,2),d=E[0],g=E[1],f=Object(n.useState)(),v=Object(u.a)(f,2),b=v[0],S=v[1],j=Object(n.useState)(),O=Object(u.a)(j,2),y=O[0],C=O[1];Object(n.useEffect)((function(){h.get(t).then((function(e){m(e.data);var t=e.data.movie.ratings.find((function(e){return localStorage.id===e.createdBy})),a=localStorage.id&&!b;C(a),S(t)}))}),[t,b]);return l.a.createElement("div",null,o&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Title : ",l.a.createElement("em",null,o.movie.title)),l.a.createElement("h4",null,"Author:",l.a.createElement(i.b,{to:"/user/".concat(o._id)}," ",o.userName)),l.a.createElement("h3",null,"Average Rating:"," ",o.movie.ratings.length>0&&Math.abs(o.movie.avgRating),!o.movie.ratings.length>0&&"No ratings yet!"),l.a.createElement("h4",null,"Synopsis"),l.a.createElement("p",null,o.movie.synopsis),l.a.createElement(p.a,null,y&&l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,null,"Rate Movie"),l.a.createElement(p.a.Control,{onChange:function(e){return g(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"))),b&&l.a.createElement("div",null,l.a.createElement("span",null,"You've already rated this film:"),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Control,{defaultValue:b.rating,onChange:function(e){return g(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"))),l.a.createElement(c.a,{onClick:function(e){!function(){var e={rating:d,createdBy:localStorage.id};h.put("https://cinopsis.herokuapp.com/api/rating/".concat(b._id),e)}()},variant:"primary",type:"submit"},"Edit Rating")),y&&l.a.createElement(c.a,{onClick:function(e){!function(){var e={rating:d,createdBy:localStorage.id};h.post(t+"/rating",e)}()},variant:"primary",type:"submit"},"Submit Rating"),!y&&l.a.createElement("p",null,"Log in to rate this movie."),localStorage.id===o.movie.createdBy&&l.a.createElement(c.a,{onClick:function(a){a.preventDefault(),h.delete(t).then((function(t){return e.history.push("/")}))},variant:"danger",type:"submit"},"Delete Movie"))))})),f=a(15),v=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],o=a[1],c="https://cinopsis.herokuapp.com/api/user/".concat(e.match.match.params.id);return Object(n.useEffect)((function(){f.get(c).then((function(e){o(e.data)}))}),[c]),l.a.createElement("div",null,r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,r.user.userName),l.a.createElement("ul",null,r.movies.map((function(e){return l.a.createElement("li",null,l.a.createElement(i.b,{to:"/movie/".concat(e._id)}," ",e.title))})))))},b=a(15),S=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],E=m[1],d=Object(n.useState)("Horror"),h=Object(u.a)(d,2),g=h[0],f=h[1];return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(p.a.Group,{onChange:function(e){return o(e.target.value)},className:"title-submit",controlId:"formBasicText"},l.a.createElement(p.a.Label,null,"Title"),l.a.createElement(p.a.Text,{className:"text-muted"}),l.a.createElement(p.a.Control,{type:"text",placeholder:"Title"})),l.a.createElement(p.a.Group,{onChange:function(e){return E(e.target.value)},className:"synopsis-submit",controlId:"exampleForm.ControlTextarea1"},l.a.createElement(p.a.Label,null,"Synopsis"),l.a.createElement(p.a.Text,{className:"text-muted"}),l.a.createElement(p.a.Control,{placeholder:"Plot",as:"textarea",rows:"15"})),l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Label,null,"Genre"),l.a.createElement(p.a.Control,{onChange:function(e){return f(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"Horror"),l.a.createElement("option",null,"Comedy"),l.a.createElement("option",null,"Action"),l.a.createElement("option",null,"Drama"),l.a.createElement("option",null,"Romance"))),l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={title:r,synopsis:s,genre:g,createdBy:localStorage.id};b.post("https://cinopsis.herokuapp.com/api/movies",t).then((function(t){e.history.push("/")})).catch((function(e){return console.log(e)}))}()},className:"submission-button",variant:"primary",type:"submit"},"Submit")))},j=a(15),O=Object(d.f)((function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=(a[0],a[1]),o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],s=i[1],E=Object(n.useState)(""),d=Object(u.a)(E,2),h=d[0],g=d[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),b=v[0],S=v[1],O=Object(n.useState)(""),y=Object(u.a)(O,2),C=y[0],x=y[1];return l.a.createElement("div",null,l.a.createElement(p.a,{className:"login-form"},l.a.createElement(p.a.Group,{onChange:function(e){return S(e.target.value)},controlId:"formBasicText"},l.a.createElement(p.a.Label,null,"Username"),l.a.createElement(p.a.Control,{type:"text",placeholder:"Enter username"}),l.a.createElement(p.a.Text,{className:"text-muted"})),l.a.createElement(p.a.Group,{onChange:function(e){return s(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(p.a.Label,null,"Email address"),l.a.createElement(p.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(p.a.Text,{className:"text-muted"})),l.a.createElement(p.a.Group,{onChange:function(e){return g(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(p.a.Label,null,"Password"),l.a.createElement(p.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={email:m,password:h,userName:b};r(t),j.post("https://cinopsis.herokuapp.com/api/user",t).then((function(t){t.data.error?x(t.data.error):(localStorage.setItem("id",t.data._id),localStorage.setItem("username",t.data.userName),e.history.push("/"),window.location.reload())})).catch((function(e){return console.log(e)}))}()},variant:"primary",type:"submit"},"Sign up"),C&&l.a.createElement("h3",{style:{color:"red"}},C)))})),y=a(34),C=a(15),x=Object(d.f)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),s=m[0],E=m[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),g=h[0],f=h[1];return l.a.createElement("div",null,l.a.createElement(p.a,{className:"login-form"},l.a.createElement(p.a.Group,{onChange:function(e){return o(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(p.a.Label,null,"Email address"),l.a.createElement(p.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(p.a.Text,{className:"text-muted"})),l.a.createElement(p.a.Group,{onChange:function(e){return E(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(p.a.Label,null,"Password"),l.a.createElement(p.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(y.a,null,l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={email:r,password:s};C.post("https://cinopsis.herokuapp.com/api/user/login",t).then((function(t){t.data.error?f(t.data.error):(localStorage.setItem("id",t.data._id),localStorage.setItem("username",t.data.userName),e.history.push("/"),window.location.reload())})).catch((function(e){return console.log(e)}))}()},variant:"primary",type:"submit"},"Submit"),l.a.createElement(c.a,{variant:"dark",href:"/moviesFrontend/signup"},"Sign Up"),g&&l.a.createElement("h3",{style:{color:"red"}},g))))})),N=a(15),w=function(e){var t="https://cinopsis.herokuapp.com/api/movies/?genre=".concat(e.match.params.genre),a=Object(n.useState)([]),r=Object(u.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){N.get(t).then((function(e){return c(e.data)}))}),[t]),l.a.createElement("div",null,l.a.createElement("ul",null,o.map((function(e){return l.a.createElement(i.b,{to:"/movie/".concat(e._id)},l.a.createElement("li",null,e.title))}))))},k=(a(65),a(66),function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(m,null)),l.a.createElement("main",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:E}),l.a.createElement(d.a,{exact:!0,path:"/new",component:S}),l.a.createElement(d.a,{exact:!0,path:"/movie/:id",component:g}),l.a.createElement(d.a,{exact:!0,path:"/login",component:x}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:O}),l.a.createElement(d.a,{exact:!0,path:"/genre/:genre",component:w}),l.a.createElement(d.a,{exact:!0,path:"/user/:id",render:function(e){return l.a.createElement(v,{match:e})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,{basename:"/moviesFrontend"},l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2e243dea.chunk.js.map