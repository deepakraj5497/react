(this["webpackJsonpredux-react"]=this["webpackJsonpredux-react"]||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),s=(a(35),a(3)),i=a(21),o=a(18),m=a(13);a(40);function u(){return c.a.createElement("h3",{className:"mt-5 text-info"},"WELCOME TO STUDENT TABLE LIST")}var d=a(8),h=a(9),p=a(11),g=a(10),f=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).totalRank=function(){var t,a,n,c,l,r="",s=e.props,i=s.post.post,o=s.totalrank;i.forEach((function(e){var t=e.english,l=e.tamil,s=e.maths,i=e.science,o=e.social;n=t+l+s+i+o,r="".concat(r).concat(n,","),(a=r.split(",").map(Number)).pop(),c=a.slice().sort((function(e,t){return t-e}))})),t="";var m,u="";for(l=0;l<c.length;l+=1){for(var d=a[l],h=0;h<c.length;h+=1)c[h]===d&&(t=c.indexOf(d)+1);(m=(u="".concat(u+t,",")).split(",").map(Number)).pop()}o(a,m)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.totalRank()}},{key:"getdata",value:function(e){var t=this.props,a=t.post,n=a.post,c=a.currentPage,l=t.getItem;(0,t.redirect)(!0);var r=n[e],s=r.name,i=r.english,o=r.tamil,m=r.maths,u=r.science,d=r.social,h=r.id,p=r.gender,g=r.section,f=c+e;console.log({name:s}),l({name:s,english:i,tamil:o,maths:m,science:u,social:d,id:h,i:f,gender:p,section:g})}},{key:"delete",value:function(e){var t=window.confirm("are you sure you want to delete this item");if(console.log(t),!0===t){var a=this.props,n=a.deleteItem,c=a.post;n(c.duplicate[c.currentPage+e].id)}}},{key:"render",value:function(){var e,t=this,a=this.props.post,n=a.post,l=a.duplicate;return e=""!==l?l:n,n.map((function(a,n){var l=a.name,r=a.english,s=a.tamil,i=a.maths,o=a.science,m=a.social,u=a.img,d=a.gender,h=a.section,p=r+s+i+o+m;return c.a.createElement("tr",{key:n,className:"allRows"},c.a.createElement("td",null,l),c.a.createElement("td",null,r),c.a.createElement("td",null,s),c.a.createElement("td",null,i),c.a.createElement("td",null,o),c.a.createElement("td",null,m),c.a.createElement("td",{className:"total"},p),c.a.createElement(E,{total:p,post:e}),c.a.createElement("td",null,c.a.createElement("img",{src:u,alt:"students img",width:"75px",height:"50px"})),c.a.createElement("td",null,d),c.a.createElement("td",null,h),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-info mr-3 py-0",onClick:t.getdata.bind(t,n)},"edit"),c.a.createElement("button",{type:"button",className:"btn btn-danger py-0",onClick:t.delete.bind(t,n)},"del")))}))}}]),a}(c.a.Component),E=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t,a,n,l="",r=this.props,s=r.post,i=r.total;for(s.forEach((function(e){var n=e.english,c=e.tamil,r=e.maths,s=e.science,i=e.social;l="".concat(l+(n+c+r+s+i),","),(t=l.split(",").map(Number)).pop(),a=t.slice().sort((function(e,t){return t-e}))})),e="",n=0;n<a.length;n+=1){var o=t[n];i===o&&(e=a.indexOf(o)+1)}return c.a.createElement("td",null,e)}}]),a}(c.a.PureComponent),b=Object(s.b)((function(e){return{post:e}}),(function(e){return{deleteItem:function(t){e({type:"DELETE_POST",id:t})},getItem:function(t){e({type:"UPDATE_POST",data:t})},totalrank:function(t,a){e({type:"TOTAL_RANK",total:t,rank:a})},redirect:function(t){e({type:"REDIRECT",data:t})}}}))(f),C=a(17),v=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"sortBynum",value:function(e){var t=this.props,a=t.post.key,n=t.keyItem,c=t.directionValue,l=t.allclass,r=t.icon;switch(n(a),e!==a&&(c("asc"),l()),e){case"name":r("nameClass",!0);break;case"english":r("englishClass",!0);break;case"tamil":r("tamClass",!0);break;case"maths":r("mathClass",!0);break;case"science":r("sciClass",!0);break;case"social":r("socClass",!0);break;case"total":r("totalClass",!0);break;case"rank":r("rankClass",!0)}this.sorting(e)}},{key:"sorting",value:function(e){var t=this.props,a=t.post,n=a.duplicate,c=a.direction,l=a.duplicate2,r=t.sort,s=t.directionValue,i=t.sortOn,o=Object(C.a)(n);"asc"===c?("name"===e?o.sort((function(e,t){return e.name.localeCompare(t.name)})):o.sort((function(t,a){return t[e]-a[e]})),r(o,!0,!1),s("dsc"),i(!0)):"dsc"===c?("name"===e?o.sort((function(e,t){return t.name.localeCompare(e.name)})):o.sort((function(t,a){return a[e]-t[e]})),r(o,!1,!0),s("")):(r(l,!1,!1),s("asc"),i(!0))}},{key:"render",value:function(){var e,t,a,n,l,r,s,i,o,m=this.props.post,u=m.className1,d=m.className2,h=m.nameClass,p=m.englishClass,g=m.tamClass,f=m.mathClass,E=m.sciClass,b=m.socClass,C=m.totalClass,v=m.rankClass;return o=!0===u?"fa fa-caret-down":!0===d?"fa fa-caret-up":"",!0===h?e=o:!0===p?t=o:!0===g?a=o:!0===f?n=o:!0===E?l=o:!0===b?r=o:!0===C?s=o:!0===v&&(i=o),c.a.createElement("thead",{style:{textAlign:"center"}},c.a.createElement("tr",{style:{backgroundColor:"black",color:"white"}},c.a.createElement("th",{style:{width:"120px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"name"),className:"headingButton w-100 text-decoration-none text-white"},"Name",c.a.createElement("i",{className:e,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"80px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"english"),className:"headingButton w-100 text-decoration-none text-white"},"English",c.a.createElement("i",{className:t,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"76px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"tamil"),className:"headingButton w-100 text-decoration-none text-white"},"Tamil",c.a.createElement("i",{className:a,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"83px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"maths"),className:"headingButton w-100 text-decoration-none text-white"},"Maths",c.a.createElement("i",{className:n,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"92px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"science"),className:"headingButton w-100 text-decoration-none text-white"},"Science",c.a.createElement("i",{className:l,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"80px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"social"),className:"headingButton w-100 text-decoration-none text-white"},"Social",c.a.createElement("i",{className:r,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"76px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"total"),className:"headingButton w-100 text-decoration-none text-white"},"Total",c.a.createElement("i",{className:s,style:{marginLeft:"5px"}}))),c.a.createElement("th",{style:{width:"73px",padding:"12px 0px"}},c.a.createElement("button",{type:"button",onClick:this.sortBynum.bind(this,"rank"),className:"headingButton w-100 text-decoration-none text-white"},"Rank",c.a.createElement("i",{className:i,style:{marginLeft:"5px"}}))),c.a.createElement("th",null,"Photo"),c.a.createElement("th",null,"Gender"),c.a.createElement("th",null,"Section"),c.a.createElement("th",null,"Action")))}}]),a}(c.a.Component),y=Object(s.b)((function(e){return{post:e}}),(function(e){return{directionValue:function(t){e({type:"SORT_DIRECTION",data:t})},sort:function(t,a,n){e({type:"SORTING",data:t,className1:a,className2:n})},icon:function(t){e({type:"ICON",data:t})},allclass:function(){e({type:"ALL_CLASS"})},keyItem:function(t){e({type:"KEY",data:t})},sortOn:function(t){e({type:"SORT_ON",data:t})}}}))(v),k=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).duplicate=function(){var t=e.props,a=t.post.post;(0,t.duplicateItem)(a)},e.show=function(t){var a,n=e.props,c=n.post,l=c.post,r=c.duplicate,s=c.pageSize,i=n.showItem;if(a=Object(C.a)(l).splice(0,s),t){var o=parseInt(t,10);a=Object(C.a)(r).splice(o,s)}i(a)},e.current=function(t,a){(0,e.props.currentPage)(parseInt(t,10)),e.show(t),e.active(a)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.duplicate(),this.show()}},{key:"componentDidUpdate",value:function(e){var t=this.props.post,a=t.post,n=t.currentPage,c=t.pageSize;(a.length!==e.post.post.length||c!==e.post.pageSize)&&this.show(n)}},{key:"active",value:function(e){(0,this.props.activePage)(e)}},{key:"render",value:function(){var e,t,a=this,n=this.props.post,l=n.duplicate,r=n.pageSize,s=n.active;e=Math.ceil(l.length/r);for(var i=[],o=0,m=function(e){s===e?t="page-item active":s!==e&&(t="page-item"),i.push(c.a.createElement("li",{className:t,key:1+e},c.a.createElement("button",{type:"button",id:o,onClick:function(t){return a.current(t.target.id,e)},className:"page-link"},1+e))),o+=r},u=0;u<e;u+=1)m(u);return i}}]),a}(c.a.Component),N=Object(s.b)((function(e){return{post:e}}),(function(e){return{showItem:function(t){e({type:"SHOW_POST",data:t})},duplicateItem:function(t){e({type:"DUPLICATE_POST",data:t})},currentPage:function(t){e({type:"CURRENT_PAGE",data:t})},activePage:function(t){e({type:"ACTIVE_PAGE",data:t})}}}))(k),O=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).dropdown=function(t){var a=e.props,n=a.post.duplicate;(0,a.pageSize)(parseInt(t.target.value,10),n)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.redirect,a=e.redirectadd;t(""),a("")}},{key:"render",value:function(){return c.a.createElement("div",{className:"text-center w-75 mx-auto mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mt-5"},c.a.createElement("table",{className:"table table-bordered table-hover"},c.a.createElement(y,null),c.a.createElement("tbody",null,c.a.createElement(b,null))),c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement(N,null)),c.a.createElement("form",{className:"text-center"},c.a.createElement("select",{onChange:this.dropdown},c.a.createElement("option",{value:"5"},"5"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"15"},"15"))))))}}]),a}(c.a.Component),x=Object(s.b)((function(e){return{post:e}}),(function(e){return{redirect:function(t){e({type:"REDIRECT",data:t})},redirectadd:function(t){e({type:"REDIRECT_ADD",data:t})},pageSize:function(t,a){e({type:"PAGE_SIZE",data:t,newData:a})}}}))(O),j=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.redirect)("")}},{key:"handleUpdate",value:function(){var e=this.props,t=e.post,a=t.name,n=t.english,c=t.tamil,l=t.maths,r=t.science,s=t.social,i=t.id,o=t.gender,m=t.section,u=e.errorclass,d=e.noerror,h=e.updateData,p=e.redirect,g={name:a,english:parseInt(n,10),tamil:parseInt(c,10),maths:parseInt(l,10),science:parseInt(r,10),social:parseInt(s,10),id:i,gender:o,section:m};""!==a&&""!==n&&""!==c&&""!==l&&""!==r&&""!==s?(d("form-control"),h(g),window.alert("Updated successfully"),p(!1)):""===a?u("nameCheck","form-control error"):""===n?u("englishCheck","form-control error"):""===c?u("tamilCheck","form-control error"):""===l?u("mathsCheck","form-control error"):""===r?u("scienceCheck","form-control error"):""===s&&u("socialCheck","form-control error")}},{key:"handleClick",value:function(){var e=this.props,t=e.post,a=t.name,n=t.english,c=t.tamil,l=t.maths,r=t.science,s=t.social,i=t.duplicate,o=t.gender,m=t.section,u=e.errorclass,d=e.noerror,h=e.addData,p=e.redirectadd,g=i.length+1,f={name:a,english:parseInt(n,10),tamil:parseInt(c,10),maths:parseInt(l,10),science:parseInt(r,10),social:parseInt(s,10),id:g,gender:o,section:m};""!==a&&""!==n&&""!==c&&""!==l&&""!==r&&""!==s?(d("form-control"),h(i.concat(f),f),window.alert("Added successfully"),p(!0)):""===a?u("nameCheck","form-control error"):""===n?u("englishCheck","form-control error"):""===c?u("tamilCheck","form-control error"):""===l?u("mathsCheck","form-control error"):""===r?u("scienceCheck","form-control error"):""===s&&u("socialCheck","form-control error")}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;console.log(t),console.log(a);var n=this.props,c=n.errorclass,l=n.inputChange;if("english"===t||"tamil"===t||"maths"===t||"science"===t||"social"===t){if(a>100)return;a=a<100?e.target.value.substr(0,3):e.target.value.replace(/[^0-9.]/g,"")}""!==t&&("name"===t?c("nameCheck","form-control"):"english"===t?c("englishCheck","form-control"):"tamil"===t?c("tamilCheck","form-control"):"maths"===t?c("mathsCheck","form-control"):"science"===t?c("scienceCheck","form-control"):"social"===t&&c("socialCheck","form-control")),l(t,a)}},{key:"render",value:function(){var e,t=this.props.post,a=t.add,n=t.name,l=t.nameCheck,r=t.english,s=t.englishCheck,i=t.tamil,o=t.tamilCheck,m=t.maths,u=t.mathsCheck,d=t.social,h=t.socialCheck,p=t.science,g=t.scienceCheck,f=t.success,E=t.gender,b=t.section;return!0===a?e=c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.handleClick.bind(this)},"Add Member"):!1===a&&(e=c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.handleUpdate.bind(this)},"update Member")),c.a.createElement("div",{className:"w-25 mx-auto"},c.a.createElement("h4",{className:"mt-3 text-info"},"STUDENT TABLE LIST UPDATER"),c.a.createElement("p",{className:"text-success font-weight-bold"},f),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name",className:"font-weight-bold"},"Name:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange.bind(this),className:l})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"english",className:"font-weight-bold"},"English:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"english",value:r,onChange:this.handleChange.bind(this),className:s})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"tamil",className:"font-weight-bold"},"Tamil:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"tamil",value:i,onChange:this.handleChange.bind(this),className:o})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"maths",className:"font-weight-bold"},"Maths:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"maths",value:m,onChange:this.handleChange.bind(this),className:u})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"science",className:"font-weight-bold"},"Science:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"science",value:p,onChange:this.handleChange.bind(this),className:g})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"social",className:"font-weight-bold"},"Social:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"social",value:d,onChange:this.handleChange.bind(this),className:h})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"file",className:"form-control-file border",name:"file",onChange:this.handleImage}),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"male"},c.a.createElement("input",{type:"radio",name:"gender",onChange:this.handleChange.bind(this),checked:"male"===E,value:"male"}),"Male"),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"female"},c.a.createElement("input",{type:"radio",name:"gender",onChange:this.handleChange.bind(this),checked:"female"===E,value:"female"}),"Female"),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"department",className:"font-weight-bold"},"Department:",c.a.createElement("br",null),c.a.createElement("select",{onChange:this.handleChange.bind(this),name:"section"},c.a.createElement("option",{selected:"A"===b,value:"A"},"A"),c.a.createElement("option",{selected:"B"===b,value:"B"},"B"),c.a.createElement("option",{selected:"C"===b,value:"C"},"C")))),e)}}]),a}(c.a.Component),w=Object(s.b)((function(e){return{post:e}}),(function(e){return{inputChange:function(t,a){e({type:"INPUT_CHANGE",name:t,value:a})},addData:function(t,a){e({type:"ADD_DATA",data:t,newData:a})},updateData:function(t){e({type:"UPDATE_DATA",data:t})},errorclass:function(t,a){e({type:"ERROR",name:t,data:a})},success:function(t){e({type:"SUCCESS",data:t})},noerror:function(t){e({type:"NOERROR",data:t})},redirect:function(t){e({type:"REDIRECT",data:t})},redirectadd:function(t){e({type:"REDIRECT_ADD",data:t})}}}))(j);var T=Object(s.b)((function(e){return{post:e}}))((function(e){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"text-center"},c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light justify-content-center"},c.a.createElement("ul",{className:"list-unstyled navbar-nav font-weight-bolder"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:"/react"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:"/react/form"},"Form")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{className:"nav-link",to:"/react/studentlist"},"Student List")))),c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/react/form",render:function(){return!1===e.post.edit||!0===e.post.addRedirect?c.a.createElement(m.a,{to:"/react/studentlist"}):c.a.createElement(w,null)}}),c.a.createElement(m.b,{path:"/react/studentlist",render:function(){return!0===e.post.edit?c.a.createElement(m.a,{to:"/react/form"}):c.a.createElement(x,null)}}),c.a.createElement(m.b,{path:"/react"},c.a.createElement(u,null)))))})),A=a(15),I=a(2),R=a(7),D=a.n(R),S={post:[{name:"Deepak",english:98,tamil:95,maths:99,science:100,social:100,id:1,img:D.a,gender:"male",section:"A"},{name:"Raji",english:90,tamil:95,maths:78,science:93,social:100,id:2,img:D.a,gender:"female",section:"B"},{name:"Raj",english:90,tamil:65,maths:65,science:90,social:80,id:3,img:D.a,gender:"male",section:"A"},{name:"Geetha",english:87,tamil:81,maths:85,science:90,social:86,id:4,img:D.a,gender:"female",section:"C"},{name:"Prasath",english:87,tamil:88,maths:85,science:75,social:86,id:5,img:D.a,gender:"male",section:"A"},{name:"Bharathi",english:72,tamil:85,maths:85,science:90,social:80,id:6,img:D.a,gender:"female",section:"C"},{name:"Ajith",english:68,tamil:81,maths:80,science:60,social:75,id:7,img:D.a,gender:"male",section:"B"},{name:"Gayathri",english:80,tamil:74,maths:66,science:95,social:55,id:8,img:D.a,gender:"female",section:"B"},{name:"Kishore",english:87,tamil:51,maths:45,science:88,social:86,id:9,img:D.a,gender:"male",section:"C"},{name:"Ajay",english:87,tamil:51,maths:85,science:60,social:86,id:10,img:D.a,gender:"male",section:"C"},{name:"Sujatha",english:87,tamil:51,maths:95,science:90,social:86,id:11,img:D.a,gender:"female",section:"A"}],add:!0,name:"",english:"",tamil:"",maths:"",science:"",social:"",id:"",index:"",pageSize:5,duplicate:"",duplicate2:"",currentPage:0,active:0,sortOn:!1,direction:"asc",className1:!1,className2:!1,nameClass:!1,englishClass:!1,tamClass:!1,mathClass:!1,sciClass:!1,socClass:!1,totalClass:!1,rankClass:!1,key:"",nameCheck:"form-control",englishCheck:"form-control",tamilCheck:"form-control",mathsCheck:"form-control",scienceCheck:"form-control",socialCheck:"form-control",success:"",edit:"",addRedirect:"",gender:"male",department:"A"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_POST":var a=e.duplicate.filter((function(e){return t.id!==e.id})),n=e.duplicate2.filter((function(e){return t.id!==e.id}));return Object(I.a)({},e,{post:a,duplicate:a,duplicate2:n});case"INPUT_CHANGE":return Object(I.a)({},e,Object(A.a)({},t.name,t.value));case"ADD_DATA":return Object(I.a)({},e,{post:t.data,duplicate:t.data,duplicate2:e.duplicate2.concat(t.newData),name:"",english:"",tamil:"",maths:"",science:"",social:"",gender:"male"});case"UPDATE_POST":return console.log(t.data.section),Object(I.a)({},e,{name:t.data.name,english:t.data.english,tamil:t.data.tamil,maths:t.data.maths,science:t.data.science,social:t.data.social,id:t.data.id,gender:t.data.gender,section:t.data.section,add:!1,index:t.data.i});case"UPDATE_DATA":var c=e.duplicate.filter((function(){return e.duplicate.splice(e.index,1,t.data)}));return console.log(e.duplicate2),Object(I.a)({},e,{post:c,duplicate:c,duplicate2:e.duplicate2.map((function(e){return t.data.id===e.id?Object(I.a)({},e,{content:t.data}):e})),add:!0,name:"",english:"",tamil:"",maths:"",science:"",social:""});case"SHOW_POST":return Object(I.a)({},e,{post:t.data});case"DUPLICATE_POST":return Object(I.a)({},e,{duplicate:t.data,duplicate2:t.data});case"CURRENT_PAGE":return Object(I.a)({},e,{currentPage:t.data});case"ACTIVE_PAGE":return Object(I.a)({},e,{active:t.data});case"PAGE_SIZE":return Object(I.a)({},e,{post:t.newData,pageSize:t.data});case"SORT_DIRECTION":return Object(I.a)({},e,{direction:t.data});case"SORTING":return Object(I.a)({},e,{post:t.data,duplicate:t.data,className1:t.className1,className2:t.className2});case"ICON":return Object(I.a)({},e,Object(A.a)({},t.data,!0));case"ALL_CLASS":return Object(I.a)({},e,{nameClass:!1,englishClass:!1,tamClass:!1,mathClass:!1,sciClass:!1,socClass:!1,totalClass:!1,rankClass:!1});case"KEY":return Object(I.a)({},e,{key:t.data});case"SORT_ON":return Object(I.a)({},e,{sortOn:t.data});case"TOTAL_RANK":return Object(I.a)({},e,{post:e.post.forEach((function(e,a){var n=e;n.total=t.total[a],n.rank=t.rank[a]}))});case"ERROR":return Object(I.a)({},e,Object(A.a)({},t.name,t.data));case"NOERROR":return Object(I.a)({},e,{nameCheck:t.data,englishCheck:t.data,tamilCheck:t.data,mathsCheck:t.data,scienceCheck:t.data,socialCheck:t.data});case"SUCCESS":return Object(I.a)({},e,{success:t.data});case"REDIRECT":return console.log(t.data),Object(I.a)({},e,{edit:t.data});case"REDIRECT_ADD":return console.log(t.data),Object(I.a)({},e,{addRedirect:t.data});default:return e}},_=Object(i.b)(P);r.a.render(c.a.createElement(s.a,{store:_},c.a.createElement(T,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/pic.5276712a.jpg"}},[[30,1,2]]]);
//# sourceMappingURL=main.1e9f32cd.chunk.js.map