(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(56)},24:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),l=n.n(o),i=(n(24),n(14)),r=n(15),s=n(17),u=n(16),d=n(18),m=n(2),p=n.n(m),h=(n(45),n(47),n(49),n(51),n(3)),j=function(e){var t=e.list.map(function(t){return console.log(t),c.a.createElement("div",{className:"project-item"},c.a.createElement("button",{onClick:function(){return e.clickhandler(t._id)},className:"open-btn",id:t._id},t.name),c.a.createElement("button",{onClick:function(){return e.clickhandler2(t._id)},className:"del-btn",id:t._id}," X "))});return c.a.createElement("div",null,t)};n(53),n(54),n(55);var v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).updatePreview=function(e){var t=document.getElementById("preview"),a=t.contentDocument||t.contentWindow.document;a.open(),a.write(n.state.selectedProject.html),a.write(n.state.selectedProject.css),a.write(n.state.selectedProject.javascript),a.close()},n.deleteProject=function(e){console.log("Delete Button Click"),p.a.get("/api/project/".concat(e)).then(function(e){p.a.delete({selectedProject:e.data})}).catch(function(e){console.log(e)})},n.updateProject=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{name:e}).then(function(e){return console.log(e)})},n.updateHTML=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{html:e}).then(function(e){return console.log(e)})},n.updateCSS=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{css:e}).then(function(e){return console.log(e)})},n.updateJS=function(e){p.a.put("/api/project/".concat(n.state.selectedProject._id),{javascript:e}).then(function(e){return console.log(e)})},n.getProject=function(e){p.a.get("/api/project/".concat(e)).then(function(e){n.setState({selectedProject:e.data})}).catch(function(e){console.log(e)})},n.state={projectList:[],html:{},css:{},javascript:{},selectedProject:{}},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getAllProjects(),this.getProject(),this.updatePreview(),this.updateProject()}},{key:"getAllProjects",value:function(){var e=this;p.a.get("/api/project").then(function(t){e.setState({projectList:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement("section",null,c.a.createElement("form",null,c.a.createElement("div",{className:"edit-col"},c.a.createElement("div",{className:"title-input"},c.a.createElement(h.UnControlled,{name:"title",value:this.state.selectedProject.name,options:{mode:"text/html",lineNumbers:!1},onChange:function(t,n,a){e.updateProject(a)}})),c.a.createElement("div",{id:"htmlEditor"},c.a.createElement(h.UnControlled,{value:this.state.selectedProject.html,options:{mode:"xml",theme:"monokai",lineNumbers:!0,autoCloseTags:!0,lineWrapping:!0,foldGutter:!0},onChange:function(t,n,a,c){e.updateHTML(a),e.updatePreview(c)}})),c.a.createElement("div",{id:"cssEditor"},c.a.createElement(h.UnControlled,{value:this.state.selectedProject.css,options:{mode:"css",theme:"monokai",lineNumbers:!0,autoCloseTags:!0,lineWrapping:!0,foldGutter:!0},onChange:function(t,n,a){e.updateCSS(a)}})),c.a.createElement("div",{id:"jsEditor"},c.a.createElement(h.UnControlled,{value:this.state.selectedProject.javascript,options:{mode:"javascript",theme:"monokai",lineNumbers:!0,autoCloseTags:!0,lineWrapping:!0,foldGutter:!0},onChange:function(t,n,a){e.updateJS(a)}}))),c.a.createElement("div",{className:"preview-col"},c.a.createElement("label",null,"Preview"),c.a.createElement("div",{className:"device"},c.a.createElement("iframe",{title:"preview",id:"preview"})))),c.a.createElement("button",{id:"myBtn",className:"projects-btn"},"My Projects"),c.a.createElement("div",{id:"myModal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("span",{className:"close"},"\xd7"),c.a.createElement("h2",null,"My Projects"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{id:"projectlist"},c.a.createElement(j,{list:this.state.projectList,clickhandler:this.getProject,clickhandler2:this.deleteProject})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.cc95a724.chunk.js.map