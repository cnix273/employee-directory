(this.webpackJsonpemployeedirect=this.webpackJsonpemployeedirect||[]).push([[0],{47:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){},60:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(17),a=r.n(s),c=r(22),o=r(18),l=r(19),i=r(24),d=r(23),h=r(20),j=r.n(h),m=function(){return j.a.get("https://randomuser.me/api/?results=50&nat=us")},u=(r(47),r(1));var b=function(e){return Object(u.jsx)("form",{className:"search",children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("h1",{className:"text-center",children:"Search By Employee Name!"}),Object(u.jsx)("label",{htmlFor:"name",children:Object(u.jsx)("h3",{children:"Employee Name:"})}),Object(u.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"name",list:"name",type:"text",className:"form-control",placeholder:"Type in employee name to begin",id:"name"}),Object(u.jsx)("button",{type:"submit",onClick:e.handleSort,className:"btn searchButton",children:"Sort By Name"})]})})};var f=function(e){return Object(u.jsx)("div",{className:"container",style:e.style,children:e.children})};r(49);var p=function(e){return Object(u.jsx)(f,{style:{minHeight:"80%"},className:"container",children:Object(u.jsx)("div",{className:"searchResults",children:Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:"header",children:"Picture"}),Object(u.jsx)("th",{scope:"col",className:"header",children:"Name"}),Object(u.jsx)("th",{scope:"col",className:"header",children:"Email"}),Object(u.jsx)("th",{scope:"col",className:"header",children:"Phone Number"}),Object(u.jsx)("th",{scope:"col",className:"header",children:"DOB"})]})}),Object(u.jsx)("tbody",{children:e.employees.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture.medium})}),Object(u.jsxs)("td",{className:"name",children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.dob.date})]})}))})]})})})},O=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],filteredEmployees:[],sorted:!1},e.handleInputChange=function(t){var r=t.target.value.toLowerCase(),n=e.state.employees,s=[];n.filter((function(e){-1===e.name.first.toLowerCase().search(r)&&-1===e.name.last.toLowerCase().search(r)||s.push(e)})),e.setState({filteredEmployees:s})},e.handleSort=function(t){t.preventDefault();var r=e.state.filteredEmployees,n=e.state.sorted;0==e.state.sorted&&r.sort((function(t,r){var n=t.name.first.toLowerCase(),s=r.name.first.toLowerCase(),a=t.name.last.toLowerCase(),c=r.name.last.toLowerCase();if(e.setState({sorted:!0}),n<s)return-1;if(n>s)return 1;if(n=s){if(a<c)return-1;if(a>c)return 1}return 0})),1==n&&r.sort((function(t,r){var n=t.name.first.toLowerCase(),s=r.name.first.toLowerCase(),a=t.name.last.toLowerCase(),c=r.name.last.toLowerCase();if(e.setState({sorted:!1}),n<s)return 1;if(n>s)return-1;if(n=s){if(a<c)return 1;if(a>c)return-1}return 0})),e.setState({filteredEmployees:r})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){var r=t.data.results;r.map((function(e){e.dob.date=e.dob.date.split("T")[0],e.dob.date=e.dob.date.split("-").reverse().join("-")})),e.setState({employees:r,filteredEmployees:r})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{handleInputChange:this.handleInputChange,handleSort:this.handleSort,search:this.state.search}),Object(u.jsx)(p,{employees:this.state.filteredEmployees})]})}}]),r}(n.Component);r(50);var x=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("span",{children:"Nix Employee Directory 2021"})})};r(51);var y=function(e){return Object(u.jsx)("main",{className:"wrapper",children:e.children})};var v=function(){return Object(u.jsx)(c.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{children:Object(u.jsx)(O,{})}),Object(u.jsx)(x,{})]})})};r(60),r(61);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c1fcb7b5.chunk.js.map