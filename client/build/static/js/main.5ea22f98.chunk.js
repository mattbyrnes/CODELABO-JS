(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(56)},24:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),l=n.n(c),i=(n(24),n(14)),r=n(15),s=n(17),u=n(16),m=n(18),d=n(2),p=n.n(d),h=(n(45),n(47),n(49),n(51),n(3)),j=function(e){var t=e.list.map(function(t){return console.log(t),o.a.createElement("button",{onClick:function(){return e.clickhandler(t._id)},className:"open-project",id:t._id},t.name,o.a.createElement("button",{className:"del-btn"},"x"))});return o.a.createElement("div",null,t)};n(53),n(54),n(55);var v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateProject=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{name:e}).then(function(e){return console.log(e)})},n.updateHTML=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{html:e}).then(function(e){return console.log(e)})},n.updateCSS=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{css:e}).then(function(e){return console.log(e)})},n.updateJS=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{javascript:e}).then(function(e){return console.log(e)})},n.getProject=function(e){p.a.get("/api/project/".concat(e)).then(function(e){n.setState({selectedProject:e.data})}).catch(function(e){console.log(e)})},n.state={projectList:[],preview:[],html:[],selectedProject:{}},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getAllProjects(),this.getProject(),this.updateProject()}},{key:"getAllProjects",value:function(){var e=this;p.a.get("/api/project").then(function(t){e.setState({projectList:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",null,o.a.createElement("form",null,o.a.createElement("div",{className:"edit-col"},o.a.createElement("div",{className:"title-input"},o.a.createElement(h.UnControlled,{name:"title",value:this.state.selectedProject.name,options:{mode:"text/html",lineNumbers:!1},onChange:function(t,n,a){e.updateProject(a)}})),o.a.createElement("div",{id:"htmlEditor"},o.a.createElement(h.UnControlled,{value:this.state.selectedProject.html,options:{mode:"xml",theme:"monokai",lineNumbers:!0},onChange:function(t,n,a){e.updateHTML(a)}})),o.a.createElement("div",{id:"cssEditor"},o.a.createElement(h.UnControlled,{value:this.state.selectedProject.css,options:{mode:"css",theme:"monokai",lineNumbers:!0},onChange:function(t,n,a){e.updateCSS(a)}})),o.a.createElement("div",{id:"jsEditor"},o.a.createElement(h.UnControlled,{value:this.state.selectedProject.javascript,options:{mode:"javascript",theme:"monokai",lineNumbers:!0},onChange:function(t,n,a){e.updateJS(a)}}))),o.a.createElement("div",{className:"preview-col"},o.a.createElement("label",null,"Preview"),o.a.createElement("div",{className:"device"},o.a.createElement("iframe",{title:"preview",id:"preview"},o.a.createElement("h1",null,"Hello!"),o.a.createElement("p",null,"Will this work?"))))),o.a.createElement("button",{id:"myBtn",className:"projects-btn"},"My Projects"),o.a.createElement("div",{id:"myModal",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("span",{className:"close"},"\xd7"),o.a.createElement("h2",null,"My Projects"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{id:"projectlist"},o.a.createElement(j,{list:this.state.projectList,clickhandler:this.getProject})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.5ea22f98.chunk.js.map