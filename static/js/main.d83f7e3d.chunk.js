(this["webpackJsonpredux-react"]=this["webpackJsonpredux-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=(a(36),a(5)),o=a(20),i=a(17),m=a(14);a(41);function u(){return c.a.createElement("h3",{className:"mt-5 text-info"},"WELCOME TO STUDENT TABLE LIST")}var d=a(9),h=a(10),p=a(12),g=a(11),E=a(46),f=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).totalRank=function(){var t,a,n,c,l,r="",s=e.props,o=s.post.post,i=s.totalrank;o.forEach((function(e){var t=e.english,l=e.tamil,s=e.maths,o=e.science,i=e.social;n=t+l+s+o+i,r="".concat(r).concat(n,","),(a=r.split(",").map(Number)).pop(),c=a.slice().sort((function(e,t){return t-e}))})),t="";var m,u="";for(l=0;l<c.length;l+=1){for(var d=a[l],h=0;h<c.length;h+=1)c[h]===d&&(t=c.indexOf(d)+1);(m=(u="".concat(u+t,",")).split(",").map(Number)).pop()}i(a,m)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.totalRank()}},{key:"getdata",value:function(e){var t=this.props,a=t.post,n=a.post,c=a.currentPage,l=t.getItem;(0,t.redirect)(!0),console.log(n);var r=n[e+5*(c-1)],s=r.name,o=r.english,i=r.tamil,m=r.maths,u=r.science,d=r.social,h=r.id,p=r.gender,g=r.section;console.log(e);var E=c+e;console.log({name:s}),l({name:s,english:o,tamil:i,maths:m,science:u,social:d,id:h,i:E,gender:p,section:g})}},{key:"delete",value:function(e){var t=window.confirm("are you sure you want to delete this item");if(console.log(t),!0===t){var a=this.props,n=a.deleteItem,c=a.post,l=c.post,r=c.currentPage;console.log(e);var s=l[r+e].id;console.log(s),n(e)}}},{key:"render",value:function(){var e=this,t=this.props.post,a=t.post,n=t.pageSize,l=t.currentPage*n,r=l-n;return a.slice(r,l).map((function(t,n){var l=t.name,r=t.english,s=t.tamil,o=t.maths,i=t.science,m=t.social,u=t.img,d=t.gender,h=t.section,p=t.id,g=r+s+o+i+m;return c.a.createElement("tr",{key:p,className:"allRows"},c.a.createElement("td",null,l),c.a.createElement("td",null,r),c.a.createElement("td",null,s),c.a.createElement("td",null,o),c.a.createElement("td",null,i),c.a.createElement("td",null,m),c.a.createElement("td",{className:"total"},g),c.a.createElement(b,{total:g,post:a}),c.a.createElement("td",null,c.a.createElement("img",{src:u,alt:"students img",width:"75px",height:"50px"})),c.a.createElement("td",null,d),c.a.createElement("td",null,h),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-info mr-3 py-0",onClick:e.getdata.bind(e,n)},"edit"),c.a.createElement("button",{type:"button",className:"btn btn-danger py-0",onClick:e.delete.bind(e,p)},"del")))}))}}]),a}(c.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t,a,n,l="",r=this.props,s=r.post,o=r.total;for(s.forEach((function(e){var n=e.english,c=e.tamil,r=e.maths,s=e.science,o=e.social;l="".concat(l+(n+c+r+s+o),","),(t=l.split(",").map(Number)).pop(),a=t.slice().sort((function(e,t){return t-e}))})),e="",n=0;n<a.length;n+=1){var i=t[n];o===i&&(e=a.indexOf(i)+1)}return c.a.createElement("td",null,e)}}]),a}(c.a.PureComponent),C=Object(s.b)((function(e){return{post:e}}),(function(e){return{deleteItem:function(t){e({type:"DELETE_POST",id:t})},getItem:function(t){e({type:"UPDATE_POST",data:t})},totalrank:function(t,a){e({type:"TOTAL_RANK",total:t,rank:a})},redirect:function(t){e({type:"REDIRECT",data:t})}}}))(f),y=a(21),v=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"sortBynum",value:function(e){var t=this.props,a=t.post.key,n=t.keyItem,c=t.directionValue,l=t.allclass,r=t.icon;switch(n(e),e!==a&&(console.log(e),console.log(a),c("asc"),l()),e){case"name":r("nameClass",!0);break;case"english":r("englishClass",!0);break;case"tamil":r("tamClass",!0);break;case"maths":r("mathClass",!0);break;case"science":r("sciClass",!0);break;case"social":r("socClass",!0);break;case"total":r("totalClass",!0);break;case"rank":r("rankClass",!0)}this.sorting(e)}},{key:"sorting",value:function(e){var t=this.props,a=t.post,n=a.post,c=a.direction,l=t.sort,r=t.directionValue,s=t.sortOn,o=Object(y.a)(n);"asc"===c?("name"===e?o.sort((function(e,t){return e.name.localeCompare(t.name)})):o.sort((function(t,a){return t[e]-a[e]})),console.log(o),l(o,!0,!1),r("dsc"),s(!0)):"dsc"===c&&("name"===e?o.sort((function(e,t){return t.name.localeCompare(e.name)})):o.sort((function(t,a){return a[e]-t[e]})),l(o,!1,!0),r("asc"))}},{key:"render",value:function(){var e,t,a,n,l,r,s,o,i,m=this.props.post,u=m.className1,d=m.className2,h=m.nameClass,p=m.englishClass,g=m.tamClass,E=m.mathClass,f=m.sciClass,b=m.socClass,C=m.totalClass,y=m.rankClass;return i=!0===u?"fa fa-caret-down":!0===d?"fa fa-caret-up":"",!0===h?e=i:!0===p?t=i:!0===g?a=i:!0===E?n=i:!0===f?l=i:!0===b?r=i:!0===C?s=i:!0===y&&(o=i),c.a.createElement("thead",{style:{textAlign:"center"}},c.a.createElement("tr",{style:{backgroundColor:"black",color:"white"}},c.a.createElement("th",{style:{width:"120px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"name"),className:"headingButton w-100 text-decoration-none text-white"},"Name",c.a.createElement("i",{className:e,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"80px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"english"),className:"headingButton w-100 text-decoration-none text-white"},"English",c.a.createElement("i",{className:t,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"76px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"tamil"),className:"headingButton w-100 text-decoration-none text-white"},"Tamil",c.a.createElement("i",{className:a,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"83px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"maths"),className:"headingButton w-100 text-decoration-none text-white"},"Maths",c.a.createElement("i",{className:n,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"92px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"science"),className:"headingButton w-100 text-decoration-none text-white"},"Science",c.a.createElement("i",{className:l,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"80px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"social"),className:"headingButton w-100 text-decoration-none text-white"},"Social",c.a.createElement("i",{className:r,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"76px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"total"),className:"headingButton w-100 text-decoration-none text-white"},"Total",c.a.createElement("i",{className:s,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"73px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"rank"),className:"headingButton w-100 text-decoration-none text-white"},"Rank",c.a.createElement("i",{className:o,style:{marginLeft:"5px"}}))),c.a.createElement("th",null,"Photo"),c.a.createElement("th",null,"Gender"),c.a.createElement("th",null,"Section"),c.a.createElement("th",null,"Action")))}}]),a}(c.a.Component),k=Object(s.b)((function(e){return{post:e}}),(function(e){return{directionValue:function(t){e({type:"SORT_DIRECTION",data:t})},sort:function(t,a,n){e({type:"SORTING",data:t,className1:a,className2:n})},icon:function(t){e({type:"ICON",data:t})},allclass:function(){e({type:"ALL_CLASS"})},keyItem:function(t){e({type:"KEY",data:t})},sortOn:function(t){e({type:"SORT_ON",data:t})},duplicateItem:function(t){e({type:"DUPLICATE_POST",data:t})}}}))(v),N=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).current=function(t){(0,e.props.currentPage)(parseInt(t,10))},e}return Object(h.a)(a,[{key:"render",value:function(){var e,t,a=this,n=this.props.post,l=n.post,r=n.pageSize,s=n.currentPage;e=Math.ceil(l.length/r);for(var o=[],i=1;i<=e;i+=1)s===i?t="page-item active":s!==i&&(t="page-item"),o.push(c.a.createElement("li",{className:t,key:i},c.a.createElement("button",{type:"button",id:i,className:"page-link",onClick:function(e){return a.current(e.target.id)}},i)));return o}}]),a}(c.a.Component),O=Object(s.b)((function(e){return{post:e}}),(function(e){return{currentPage:function(t){e({type:"CURRENT_PAGE",data:t})}}}))(N),x=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).dropdown=function(t){var a=e.props,n=a.post.duplicate;(0,a.pageSize)(parseInt(t.target.value,10),n)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.redirect,a=e.redirectadd;t(""),a("")}},{key:"render",value:function(){return c.a.createElement("div",{className:"text-center w-75 mx-auto mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mt-5"},c.a.createElement(E.a,{striped:!0},c.a.createElement(k,null),c.a.createElement("tbody",null,c.a.createElement(C,null))),c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement(O,null)),c.a.createElement("form",{className:"text-center"},c.a.createElement("select",{onChange:this.dropdown},c.a.createElement("option",{value:"5"},"5"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"15"},"15"))))))}}]),a}(c.a.Component),j=Object(s.b)((function(e){return{post:e}}),(function(e){return{redirect:function(t){e({type:"REDIRECT",data:t})},redirectadd:function(t){e({type:"REDIRECT_ADD",data:t})},pageSize:function(t,a){e({type:"PAGE_SIZE",data:t,newData:a})}}}))(x),w=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.redirect)("")}},{key:"handleUpdate",value:function(){var e=this.props,t=e.post,a=t.name,n=t.english,c=t.tamil,l=t.maths,r=t.science,s=t.social,o=t.id,i=t.gender,m=t.section,u=e.errorclass,d=e.noerror,h=e.updateData,p=e.redirect,g={name:a,english:parseInt(n,10),tamil:parseInt(c,10),maths:parseInt(l,10),science:parseInt(r,10),social:parseInt(s,10),id:o,gender:i,section:m};""!==a&&""!==n&&""!==c&&""!==l&&""!==r&&""!==s?(d("form-control"),h(g),window.alert("Updated successfully"),p(!1)):""===a?u("nameCheck","form-control error"):""===n?u("englishCheck","form-control error"):""===c?u("tamilCheck","form-control error"):""===l?u("mathsCheck","form-control error"):""===r?u("scienceCheck","form-control error"):""===s&&u("socialCheck","form-control error")}},{key:"handleClick",value:function(){var e=this.props,t=e.post,a=t.post,n=t.name,c=t.english,l=t.tamil,r=t.maths,s=t.science,o=t.social,i=t.gender,m=t.section,u=e.errorclass,d=e.noerror,h=e.addData,p=e.redirectadd;console.log(this.props.post.post);var g=a.length+1,E={name:n,english:parseInt(c,10),tamil:parseInt(l,10),maths:parseInt(r,10),science:parseInt(s,10),social:parseInt(o,10),id:g,gender:i,section:m};if(""!==n&&""!==c&&""!==l&&""!==r&&""!==s&&""!==o){d("form-control");var f=a.concat(E);console.log(E),console.log(f),h(f,E),window.alert("Added successfully"),p(!0)}else""===n?u("nameCheck","form-control error"):""===c?u("englishCheck","form-control error"):""===l?u("tamilCheck","form-control error"):""===r?u("mathsCheck","form-control error"):""===s?u("scienceCheck","form-control error"):""===o&&u("socialCheck","form-control error")}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;console.log(t),console.log(a);var n=this.props,c=n.errorclass,l=n.inputChange;if("english"===t||"tamil"===t||"maths"===t||"science"===t||"social"===t){if(a>100)return;a=a<100?e.target.value.substr(0,3):e.target.value.replace(/[^0-9.]/g,"")}""!==t&&("name"===t?c("nameCheck","form-control"):"english"===t?c("englishCheck","form-control"):"tamil"===t?c("tamilCheck","form-control"):"maths"===t?c("mathsCheck","form-control"):"science"===t?c("scienceCheck","form-control"):"social"===t&&c("socialCheck","form-control")),l(t,a)}},{key:"render",value:function(){var e,t=this.props.post,a=t.add,n=t.name,l=t.nameCheck,r=t.english,s=t.englishCheck,o=t.tamil,i=t.tamilCheck,m=t.maths,u=t.mathsCheck,d=t.social,h=t.socialCheck,p=t.science,g=t.scienceCheck,E=t.success,f=t.gender,b=t.section;return!0===a?e=c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.handleClick.bind(this)},"Add Member"):!1===a&&(e=c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.handleUpdate.bind(this)},"update Member")),c.a.createElement("div",{className:"w-25 mx-auto"},c.a.createElement("h4",{className:"mt-3 text-info"},"STUDENT TABLE LIST UPDATER"),c.a.createElement("p",{className:"text-success font-weight-bold"},E),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name",className:"font-weight-bold"},"Name:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange.bind(this),className:l})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"english",className:"font-weight-bold"},"English:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"english",value:r,onChange:this.handleChange.bind(this),className:s})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"tamil",className:"font-weight-bold"},"Tamil:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"tamil",value:o,onChange:this.handleChange.bind(this),className:i})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"maths",className:"font-weight-bold"},"Maths:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"maths",value:m,onChange:this.handleChange.bind(this),className:u})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"science",className:"font-weight-bold"},"Science:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"science",value:p,onChange:this.handleChange.bind(this),className:g})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"social",className:"font-weight-bold"},"Social:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"social",value:d,onChange:this.handleChange.bind(this),className:h})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"file",className:"form-control-file border",name:"file",onChange:this.handleImage}),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"male"},c.a.createElement("input",{type:"radio",name:"gender",onChange:this.handleChange.bind(this),checked:"male"===f,value:"male"}),"Male"),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"female"},c.a.createElement("input",{type:"radio",name:"gender",onChange:this.handleChange.bind(this),checked:"female"===f,value:"female"}),"Female"),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"department",className:"font-weight-bold"},"Department:",c.a.createElement("br",null),c.a.createElement("select",{value:b,onChange:this.handleChange.bind(this),name:"section"},c.a.createElement("option",{value:"A"},"A"),c.a.createElement("option",{value:"B"},"B"),c.a.createElement("option",{value:"C"},"C")))),e)}}]),a}(c.a.Component),T=Object(s.b)((function(e){return{post:e}}),(function(e){return{inputChange:function(t,a){e({type:"INPUT_CHANGE",name:t,value:a})},addData:function(t,a){e({type:"ADD_DATA",data:t,newData:a})},updateData:function(t){e({type:"UPDATE_DATA",data:t})},errorclass:function(t,a){e({type:"ERROR",name:t,data:a})},success:function(t){e({type:"SUCCESS",data:t})},noerror:function(t){e({type:"NOERROR",data:t})},redirect:function(t){e({type:"REDIRECT",data:t})},redirectadd:function(t){e({type:"REDIRECT_ADD",data:t})}}}))(w);var A=Object(s.b)((function(e){return{post:e}}))((function(e){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"text-center"},c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light justify-content-center"},c.a.createElement("ul",{className:"list-unstyled navbar-nav font-weight-bolder"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/react"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/react/form"},"Form")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/react/studentlist"},"Student List")))),c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/react/form",render:function(){return!1===e.post.edit||!0===e.post.addRedirect?c.a.createElement(m.a,{to:"/react/studentlist"}):c.a.createElement(T,null)}}),c.a.createElement(m.b,{path:"/react/studentlist",render:function(){return!0===e.post.edit?c.a.createElement(m.a,{to:"/react/form"}):c.a.createElement(j,null)}}),c.a.createElement(m.b,{path:"/react"},c.a.createElement(u,null)))))})),R=a(15),D=a(3),I=a(8),S=a.n(I),P={post:[{name:"Deepak",english:98,tamil:95,maths:99,science:100,social:100,id:1,img:S.a,gender:"male",section:"A"},{name:"Raji",english:90,tamil:95,maths:78,science:93,social:100,id:2,img:S.a,gender:"female",section:"B"},{name:"Raj",english:90,tamil:65,maths:65,science:90,social:80,id:3,img:S.a,gender:"male",section:"A"},{name:"Geetha",english:87,tamil:81,maths:85,science:90,social:86,id:4,img:S.a,gender:"female",section:"C"},{name:"Prasath",english:87,tamil:88,maths:85,science:75,social:86,id:5,img:S.a,gender:"male",section:"A"},{name:"Bharathi",english:72,tamil:85,maths:85,science:90,social:80,id:6,img:S.a,gender:"female",section:"C"},{name:"Ajith",english:68,tamil:81,maths:80,science:60,social:75,id:7,img:S.a,gender:"male",section:"B"},{name:"Gayathri",english:80,tamil:74,maths:66,science:95,social:55,id:8,img:S.a,gender:"female",section:"B"},{name:"Kishore",english:87,tamil:51,maths:45,science:88,social:86,id:9,img:S.a,gender:"male",section:"C"},{name:"Ajay",english:87,tamil:51,maths:85,science:60,social:86,id:10,img:S.a,gender:"male",section:"C"},{name:"Sujatha",english:87,tamil:51,maths:95,science:90,social:86,id:11,img:S.a,gender:"female",section:"A"}],add:!0,name:"",english:"",tamil:"",maths:"",science:"",social:"",id:"",index:"",pageSize:5,currentPage:1,sortOn:!1,direction:"asc",className1:!1,className2:!1,nameClass:!1,englishClass:!1,tamClass:!1,mathClass:!1,sciClass:!1,socClass:!1,totalClass:!1,rankClass:!1,key:"",nameCheck:"form-control",englishCheck:"form-control",tamilCheck:"form-control",mathsCheck:"form-control",scienceCheck:"form-control",socialCheck:"form-control",success:"",edit:"",addRedirect:"",gender:"male",department:"A",copy:function(){return Object(y.a)(this.post)}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_POST":var a=e.post.filter((function(e){return t.id!==e.id}));return Object(D.a)({},e,{post:a});case"INPUT_CHANGE":return Object(D.a)({},e,Object(R.a)({},t.name,t.value));case"ADD_DATA":return console.log(t.data),Object(D.a)({},e,{post:t.data,name:"",english:"",tamil:"",maths:"",science:"",social:"",gender:"male"});case"UPDATE_POST":return Object(D.a)({},e,{name:t.data.name,english:t.data.english,tamil:t.data.tamil,maths:t.data.maths,science:t.data.science,social:t.data.social,id:t.data.id,gender:t.data.gender,section:t.data.section,add:!1,index:t.data.i});case"UPDATE_DATA":console.log(t.data);var n=e.post.filter((function(){return e.post.splice(t.data.id-1,1,t.data)}));return console.log(n),Object(D.a)({},e,{post:n,add:!0,name:"",english:"",tamil:"",maths:"",science:"",social:""});case"CURRENT_PAGE":return Object(D.a)({},e,{currentPage:t.data});case"PAGE_SIZE":return Object(D.a)({},e,{post:t.newData,pageSize:t.data});case"SORT_DIRECTION":return Object(D.a)({},e,{direction:t.data});case"SORTING":return console.log(t.data),Object(D.a)({},e,{post:t.data,className1:t.className1,className2:t.className2});case"ICON":return Object(D.a)({},e,Object(R.a)({},t.data,!0));case"ALL_CLASS":return Object(D.a)({},e,{nameClass:!1,englishClass:!1,tamClass:!1,mathClass:!1,sciClass:!1,socClass:!1,totalClass:!1,rankClass:!1});case"KEY":return Object(D.a)({},e,{key:t.data});case"SORT_ON":return Object(D.a)({},e,{sortOn:t.data});case"TOTAL_RANK":var c=[];return e.post.forEach((function(e,a){var n=e;n.total=t.total[a],n.rank=t.rank[a],c.push(n)})),Object(D.a)({},e,{post:c});case"ERROR":return Object(D.a)({},e,Object(R.a)({},t.name,t.data));case"NOERROR":return Object(D.a)({},e,{nameCheck:t.data,englishCheck:t.data,tamilCheck:t.data,mathsCheck:t.data,scienceCheck:t.data,socialCheck:t.data});case"SUCCESS":return Object(D.a)({},e,{success:t.data});case"REDIRECT":return Object(D.a)({},e,{edit:t.data});case"REDIRECT_ADD":return Object(D.a)({},e,{addRedirect:t.data});case"DUPLICATE_POST":return Object(D.a)({},e,{duplicate:t.data});default:return e}},B=(a(43),Object(o.b)(_));r.a.render(c.a.createElement(s.a,{store:B},c.a.createElement(A,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/pic.5276712a.jpg"}},[[31,1,2]]]);
//# sourceMappingURL=main.d83f7e3d.chunk.js.map