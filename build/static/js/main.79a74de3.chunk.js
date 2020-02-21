(this.webpackJsonpmoviefrontend=this.webpackJsonpmoviefrontend||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/logo.563dbecd.svg"},41:function(e,t,a){e.exports=a(80)},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),c=(a(46),a(10)),i=a(7),m=a(36),s=a.n(m),u=a(40),E=a(17),p=(a(47),function(e){return l.a.createElement("div",null,l.a.createElement(u.a,{className:"nav-bar"},l.a.createElement("img",{className:"logo",src:s.a,alt:"logo"}),l.a.createElement(E.a,null),l.a.createElement(E.a,null,l.a.createElement("div",{className:"headRow"}),l.a.createElement(i.b,{to:"/"},l.a.createElement("h3",{className:"homeHead"},"Home ")),localStorage.id&&l.a.createElement(i.b,{to:"/new"},l.a.createElement("h3",{className:"submitHead"},"Submit")),!localStorage.id&&l.a.createElement(i.b,{to:"/login"},l.a.createElement("h3",{className:"loginHead"},"Log in")),localStorage.id&&l.a.createElement("h3",{className:"hiHead"},"Hi,"," ",l.a.createElement(i.b,{to:"/user/".concat(localStorage.id)},localStorage.username),"!"),!localStorage.id&&l.a.createElement("div",null),localStorage.username&&l.a.createElement(c.a,{href:"/moviesFrontend",onClick:function(){localStorage.clear()},variant:"warning"},l.a.createElement("span",{className:"logout"},"LOGOUT")))))}),d=a(6),h=(a(52),a(53)),g=a(16),f=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(),m=Object(d.a)(c,2),s=m[0],u=m[1];Object(n.useEffect)((function(){g.get("https://cinopsis.herokuapp.com/api/movies").then((function(e){console.log(e.data),u(h.sample(e.data)),o(e.data)}))}),[]);var E=function(e){var t=r.filter((function(t){return t.genre===e})).sort((function(e,t){return e.avgRating>t.avgRating?-1:1}));t.splice(5,t.length-1);var a=t.map((function(e,t){return l.a.createElement(i.b,{key:t,to:"movie/"+e._id},l.a.createElement("li",null,e.title))}));if(a.length>=5){var n=p(e);a.push(n)}return a},p=function(e){return l.a.createElement(i.b,{key:e,className:"viewAll",to:"genre/".concat(e)},"View All")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"homeMain"},l.a.createElement("div",null,l.a.createElement("h1",{className:"topHead"},"Top Submissions"),l.a.createElement("div",{className:"homeList"},l.a.createElement("div",{className:"comedy"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Comedy"),r&&(E("Comedy").length?E("Comedy"):l.a.createElement("li",null,"No Comedies At This Time")))),l.a.createElement("div",{className:"romance"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Romance"),r&&(E("Romance").length?E("Romance"):l.a.createElement("li",null,"No Romance At This Time")))),l.a.createElement("div",{className:"action"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Action"),r&&(E("Action").length?E("Action"):l.a.createElement("li",null,"No Actions At This Time")))),l.a.createElement("div",{className:"horror"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Horror"),r&&(E("Horror").length?E("Horror"):l.a.createElement("li",null,"No Horrors At This Time")))),l.a.createElement("div",{className:"drama"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Drama"),r&&(E("Drama").length?E("Drama"):l.a.createElement("li",null,"No Dramas At This Time"))))),l.a.createElement("section",{className:"ofTheDay"},l.a.createElement("h2",{className:"ofTheDayHead"},"Random Cinopsis:"),s&&l.a.createElement("div",{className:"randomSyn"},l.a.createElement("h3",null,l.a.createElement("em",null,s.title)),l.a.createElement("span",null,s.synopsis.substr(0,250)+" . . . "),l.a.createElement("span",null,l.a.createElement(i.b,{className:"randomLink",to:"/movie/".concat(s._id)},"READ MORE"))))),l.a.createElement("div",{className:"sideNote"},l.a.createElement("h1",{className:"asideAbout"},"About"),l.a.createElement("article",null,l.a.createElement("p",null,"Cinopsis is a community-driven website where anybody can write and submit their own film idea for feedback."),l.a.createElement("p",null,"To submit your work, please create an account. Once you finish, a submit button will appear on the navigation bar at the top of the screen. Each submission requires a title, synopsis, and genre, and will be eligible to receive user rating immediately after submission. Submissions can be deleted by their creator at will."),l.a.createElement("p",null,"Each user is allowed one rating, which they may edit at any time. The highest rated film ideas from each genre will appear on the home page above a link to view all movies from that genre. Each title will bring you to a page dedicated to that movie where you may submit your rating upon login. Please feel free to browse all works by a user by clicking on their username to visit their personal user page. ")))))},b=a(3),v=(a(72),a(16)),y=function(e){var t="https://cinopsis.herokuapp.com/api/movies/".concat(e.match.params.id),a=Object(n.useState)(),r=Object(d.a)(a,2),o=r[0],m=r[1],s=Object(n.useState)(0),u=Object(d.a)(s,2),E=u[0],p=u[1],h=Object(n.useState)(),g=Object(d.a)(h,2),f=g[0],y=g[1],N=Object(n.useState)(),S=Object(d.a)(N,2),w=S[0],O=S[1];Object(n.useEffect)((function(){v.get(t).then((function(e){m(e.data);var t=e.data.movie.ratings.find((function(e){return localStorage.id===e.createdBy})),a=localStorage.id&&!f;O(a),y(t)}))}),[o]);return l.a.createElement("div",{className:"movieInfo"},o&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null," ",o.movie.title),l.a.createElement("h6",null,"author:",l.a.createElement(i.b,{to:"/user/".concat(o._id)}," ",o.userName)),l.a.createElement("h6",null,"Average Rating:"," ",o.movie.ratings.length>0&&Math.abs(o.movie.avgRating),!o.movie.ratings.length>0&&"No ratings yet!"),l.a.createElement("h6",null,"Synopsis"),l.a.createElement("p",null,o.movie.synopsis),l.a.createElement(b.a,null,w&&l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Rate Movie:")),l.a.createElement(b.a.Control,{onChange:function(e){return p(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"))),f&&l.a.createElement("div",null,l.a.createElement("span",null,"You've already rated this film:"),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(b.a.Control,{defaultValue:f.rating,onChange:function(e){return p(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"0"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10")),l.a.createElement(c.a,{onClick:function(e){e.preventDefault(),function(){var e={rating:E,createdBy:localStorage.id};v.put("https://cinopsis.herokuapp.com/api/rating/".concat(f._id),e)}()},variant:"warning",type:"submit"},l.a.createElement("span",null,"EDIT RATING")))),w&&l.a.createElement(c.a,{onClick:function(e){e.preventDefault(),function(){var e={rating:E,createdBy:localStorage.id};v.post(t+"/rating",e)}()},variant:"warning",className:"submitRating",type:"submit"},l.a.createElement("span",null,"SUBMIT RATING")),!localStorage.id&&l.a.createElement("p",{className:"notification"},"Log in to rate this movie."),localStorage.id===o.movie.createdBy&&l.a.createElement(c.a,{onClick:function(a){a.preventDefault(),v.delete(t).then((function(t){return e.history.push("/")}))},variant:"danger",type:"submit"},l.a.createElement("span",null,"DELETE MOVIE")))))},N=(a(75),a(16)),S=function(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),r=a[0],o=a[1],c="https://cinopsis.herokuapp.com/api/user/".concat(e.match.match.params.id);return Object(n.useEffect)((function(){N.get(c).then((function(e){o(e.data)}))}),[c]),l.a.createElement("div",{className:"userInfo"},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("h2",null,r.user.userName),r.movies.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(i.b,{to:"/movie/".concat(e._id)}," ",e.title))})))))},w=(a(76),a(16)),O=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),s=m[0],u=m[1],E=Object(n.useState)("Horror"),p=Object(d.a)(E,2),h=p[0],g=p[1];return l.a.createElement("div",null,l.a.createElement(b.a,{className:"submitForm"},l.a.createElement(b.a.Group,{onChange:function(e){return o(e.target.value)},className:"title-submit",controlId:"formBasicText"},l.a.createElement(b.a.Label,null,"Title"),l.a.createElement(b.a.Text,{className:"text-muted"}),l.a.createElement(b.a.Control,{type:"text",placeholder:"Title"})),l.a.createElement(b.a.Group,{onChange:function(e){return u(e.target.value)},className:"synopsis-submit",controlId:"exampleForm.ControlTextarea1"},l.a.createElement(b.a.Label,null,"Synopsis"),l.a.createElement(b.a.Text,{className:"text-muted"}),l.a.createElement(b.a.Control,{placeholder:"Plot",as:"textarea",rows:"15"})),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(b.a.Label,null,"Genre"),l.a.createElement(b.a.Control,{onChange:function(e){return g(e.target.value)},className:"genre-submit",as:"select"},l.a.createElement("option",null,"Horror"),l.a.createElement("option",null,"Comedy"),l.a.createElement("option",null,"Action"),l.a.createElement("option",null,"Drama"),l.a.createElement("option",null,"Romance")),l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={title:r,synopsis:s,genre:h,createdBy:localStorage.id};w.post("https://cinopsis.herokuapp.com/api/movies",t).then((function(t){e.history.push("/")})).catch((function(e){return console.log(e)}))}()},className:"submission-button",variant:"warning",type:"submit"},"Submit"))))},j=a(16),C=function(e){var t=Object(n.useState)({}),a=Object(d.a)(t,2),r=(a[0],a[1]),o=Object(n.useState)(""),i=Object(d.a)(o,2),m=i[0],s=i[1],u=Object(n.useState)(""),E=Object(d.a)(u,2),p=E[0],h=E[1],g=Object(n.useState)(""),f=Object(d.a)(g,2),v=f[0],y=f[1],N=Object(n.useState)(""),S=Object(d.a)(N,2),w=S[0],O=S[1];return l.a.createElement("div",null,l.a.createElement(b.a,{className:"login-form"},l.a.createElement(b.a.Group,{onChange:function(e){return y(e.target.value)},controlId:"formBasicText"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Username:")),l.a.createElement(b.a.Control,{type:"text",placeholder:"Choose a username"}),l.a.createElement(b.a.Text,{className:"text-muted"})),l.a.createElement(b.a.Group,{onChange:function(e){return s(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Email:")),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(b.a.Text,{className:"text-muted"})),l.a.createElement(b.a.Group,{onChange:function(e){return h(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Password")),l.a.createElement(b.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={email:m,password:p,userName:v};r(t),j.post("https://cinopsis.herokuapp.com/api/user",t).then((function(t){t.data.error?O(t.data.error):(localStorage.setItem("id",t.data._id),localStorage.setItem("username",t.data.userName),e.history.push("/"),window.location.reload())})).catch((function(e){return console.log(e)}))}()},variant:"secondary",type:"submit"},l.a.createElement("span",null,"SIGN UP")),w&&l.a.createElement("h3",{style:{color:"red"}},w)))},T=a(16),x=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),s=m[0],u=m[1],E=Object(n.useState)(""),p=Object(d.a)(E,2),h=p[0],g=p[1];return l.a.createElement("div",null,l.a.createElement(b.a,{className:"login-form"},l.a.createElement(b.a.Group,{onChange:function(e){return o(e.target.value)},controlId:"formBasicEmail"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Email:")),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(b.a.Text,{className:"text-muted"})),l.a.createElement(b.a.Group,{onChange:function(e){return u(e.target.value)},controlId:"formBasicPassword"},l.a.createElement(b.a.Label,null,l.a.createElement("span",null,"Password:")),l.a.createElement(b.a.Control,{type:"password",placeholder:"Enter password"})),l.a.createElement("div",{className:"loginButtons"},l.a.createElement(c.a,{onClick:function(t){t.preventDefault(),function(){var t={email:r,password:s};T.post("https://cinopsis.herokuapp.com/api/user/login",t).then((function(t){t.data.error?g(t.data.error):(localStorage.setItem("id",t.data._id),localStorage.setItem("username",t.data.userName),e.history.push("/"),window.location.reload())})).catch((function(e){return console.log(e)}))}()},variant:"warning",type:"submit"},"LOGIN"),l.a.createElement("a",{href:"/signup"},l.a.createElement(c.a,{className:"signButton",variant:"secondary"},"SIGN UP")),h&&l.a.createElement("h3",{style:{color:"red"}},h))))},k=(a(77),a(16)),I=function(e){var t="https://cinopsis.herokuapp.com/api/movies/?genre=".concat(e.match.params.genre),a=Object(n.useState)([]),r=Object(d.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){k.get(t).then((function(e){return c(e.data)}))}),[t]),l.a.createElement("div",null,l.a.createElement("ul",{className:"allMovies"},l.a.createElement("h2",null,e.match.params.genre),o.map((function(e){return l.a.createElement(i.b,{to:"/movie/".concat(e._id)},l.a.createElement("li",null,e.title))}))))},A=a(14),G=(a(78),a(79),function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(p,null)),l.a.createElement("main",{className:"appMain"},l.a.createElement(A.c,null,l.a.createElement(A.a,{exact:!0,path:"/",component:f}),l.a.createElement(A.a,{exact:!0,path:"/new",component:O}),l.a.createElement(A.a,{exact:!0,path:"/movie/:id",component:y}),l.a.createElement(A.a,{exact:!0,path:"/login",component:x}),l.a.createElement(A.a,{exact:!0,path:"/signup",component:C}),l.a.createElement(A.a,{exact:!0,path:"/genre/:genre",component:I}),l.a.createElement(A.a,{exact:!0,path:"/user/:id",render:function(e){return l.a.createElement(S,{match:e})}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,{basename:"/moviesFrontend"},l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.79a74de3.chunk.js.map