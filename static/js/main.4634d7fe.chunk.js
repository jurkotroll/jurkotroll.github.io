(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a(182),i=a(181),o=a(183);function u(e){var t=e.title,a=void 0===t?[]:t,n=e.content,r=void 0===n?{}:n;return console.log(a[0]),l.a.createElement("div",null,l.a.createElement("h1",null,a[0]),l.a.createElement("p",null,r.keyll),l.a.createElement("hr",null))}var s=function(e){console.log(e)},m=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"),l.a.createElement("hr",null),l.a.createElement(u,{title:"Tytu\u0142 1"}),l.a.createElement(u,{title:3}),l.a.createElement(u,{title:"Keyll",content:{keyll:"LOL"},onClick:s}),l.a.createElement(u,{title:"Tytu\u0142 2",content:{keyll:"Tre\u015b\u0107"}}),l.a.createElement(u,{title:["Tytu\u0142 2","Tytul 3"],content:{keyll:"Tre\u015b\u0107"}}),l.a.createElement(u,{title:[l.a.createElement("div",null,"LOL2LOL")],content:{keyll:"Tre\u015b\u0107"}}))},p=a(10),d=a(11),h=a(16),E=a(15),b=a(17),v=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,[{key:"validateEmail",value:function(e){return new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?").test(String(e).trim().toLowerCase())}}]),e}(),f=a(67),O=a.n(f),k=a(8),j=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).increment=a.increment.bind(Object(k.a)(Object(k.a)(a))),a.decrease=a.decrease.bind(Object(k.a)(Object(k.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"increment",value:function(){this.props.onIncrement()}},{key:"decrease",value:function(){this.props.onDecrease()}},{key:"render",value:function(){return l.a.createElement("dir",null,l.a.createElement("output",null,this.props.numValue),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.increment},"+"),l.a.createElement("button",{onClick:this.decrease},"-"))}}]),t}(l.a.Component),g=(l.a.Component,function(e){var t=e.users;return t.length>0?l.a.createElement("ul",null,t.map(function(e,t){return l.a.createElement("li",{key:e+t},e)})):l.a.createElement("p",null,"No results")}),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={filteredUsers:a.props.allUsers},a.handelOnInput=a.handelOnInput.bind(Object(k.a)(Object(k.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"getFilteredUsersForText",value:function(e){var t=this;return new Promise(function(a){var n=1250*(Math.random()+1);setTimeout(function(){var n=t.props.allUsers.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())});a({filteredUsers:n})},n)})}},{key:"handelOnInput",value:function(e){var t=this,a=e.currentTarget.value;this.getFilteredUsersForText(a).then(function(e){t.setState({filteredUsers:e.filteredUsers})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{onInput:this.handelOnInput}),l.a.createElement(g,{users:this.state.filteredUsers}))}}]),t}(l.a.Component),C=function(){return l.a.createElement("header",{className:"ui fixed menu"},l.a.createElement("nav",{className:"ui container"},l.a.createElement("a",{href:"#",className:"header item"},l.a.createElement("img",{className:"logo",alt:"Logo",src:"https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"}),"Lista kontakt\xf3w"),l.a.createElement("div",{className:"header item"},l.a.createElement("button",{className:"ui button"},"Dodaj"))))},w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.login,t=((new v).validateEmail(e)&&O()(e),"http://api.adorable.io/avatars/55/".concat(e,".png"));return l.a.createElement("img",{src:t,alt:"Avatar",className:"ui mini rounded image"})}}]),t}(l.a.Component),N=function(e){var t=e.monitorName,a=e.monitorValue;return l.a.createElement("div",null,l.a.createElement("h3",null,t),l.a.createElement("output",null," ",a))},T=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(E.a)(t).call(this))).state={counter:0,gCounter:0,doubleClicks:0},e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"counter",onDoubleClick:this.countDoubleCliks.bind(this)},l.a.createElement("button",{onClick:this.increment.bind(this)},"+"),l.a.createElement("output",null," ",this.state.counter," "),l.a.createElement("button",{onClick:this.decrease.bind(this)},"-"),l.a.createElement("hr",null),l.a.createElement(N,{monitorName:"Suma",monitorValue:this.state.gCounter}),l.a.createElement("br",null),l.a.createElement(N,{monitorName:"Podwojne",monitorValue:this.state.doubleClicks}))}},{key:"countDoubleCliks",value:function(){this.setState({doubleClicks:this.state.doubleClicks+1})}},{key:"increment",value:function(){this.setState({counter:this.state.counter+1,gCounter:this.state.gCounter+1})}},{key:"decrease",value:function(){this.setState({counter:this.state.counter-1,gCounter:this.state.gCounter+1})}}]),t}(l.a.Component),L=(l.a.Component,function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={date:new Date},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date.toTimeString();return l.a.createElement("time",null,e)}}]),t}(l.a.Component)),I=(l.a.Component,l.a.Component,["Michal","Kasia","Sofia","Kasia","Jacek","Marta","Tomek","Ania"]),z=function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("main",{className:"ui main text container"},l.a.createElement(y,{allUsers:I})))},S=a(74),U=a(68),x=a.n(U),D=a(70),A=a.n(D),M=a(73),F=a.n(M),P=a(72),R=a.n(P),V=a(71),J=a.n(V),K=a(35),_=a.n(K),B=a(44),W=a.n(B);var $=Object(S.withStyles)({card:{maxWidth:1900},media:{height:140}})(function(e){var t=e.classes;return l.a.createElement(x.a,{className:t.card},l.a.createElement(A.a,null,l.a.createElement(J.a,{className:t.media,image:"/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),l.a.createElement(R.a,null,l.a.createElement(W.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Lizard"),l.a.createElement(W.a,{component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),l.a.createElement(F.a,null,l.a.createElement(_.a,{size:"small",color:"primary"},"Share"),l.a.createElement(_.a,{size:"small",color:"primary"},"Learn More")))}),q=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null,t.params.topicId))},H=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{to:"".concat(t.url,"/rendering")},"Rendering with React")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"".concat(t.url,"/components")},"Components")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),l.a.createElement($,null),l.a.createElement(o.a,{path:"".concat(t.url,"/:topicId"),component:q}),l.a.createElement(o.a,{exact:!0,path:t.url,render:function(){return l.a.createElement("h3",null,"Please select a topic.")}}))};Object(r.render)(l.a.createElement(function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/topics"},"Topics"))),l.a.createElement("hr",null),l.a.createElement(o.a,{exact:!0,path:"/",component:z}),l.a.createElement(o.a,{path:"/about",component:m}),l.a.createElement(o.a,{path:"/topics",component:H})))},null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(180)}},[[77,2,1]]]);
//# sourceMappingURL=main.4634d7fe.chunk.js.map