(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{24:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(18),i=n.n(c),l=n(39),o=(n(24),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))}),s=n(40),u=n(19),d=n(38),b=n(13),h=n(17),m=n(5),j=n(6),f=n(9),v=n(8),p=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var g=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var O=n(7),x=n.n(O),y=n(0),k=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChange,c=Math.ceil(t/n);if(1===c)return null;var i=x.a.range(1,c+1);return Object(y.jsx)("nav",{"aria-label":"Page navigation example",children:Object(y.jsx)("ul",{className:"pagination",children:i.map((function(e){return Object(y.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(y.jsx)("a",{className:"page-link",onClick:function(){return r(e)},children:e})},e)}))})})};function C(e,t,n){var a=(t-1)*n;return x()(e).slice(a).take(n).value()}var S=function(e){var t=e.items,n=e.textProperty,a=e.valueProperty,r=e.selectedItem,c=e.onItemSelect,i="list-group-item";return Object(y.jsx)("ul",{className:"clickable list-group",children:t.map((function(e){return Object(y.jsx)("li",{onClick:function(){return c(e)},className:e===r?i+" active":i,children:e[n]},e[a])}))})};S.defaultProps={textProperty:"name",valueProperty:"_id"};var N=S,_=n(16),R=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(y.jsx)("i",{className:t,style:{cursor:"pointer"},onClick:e.onClick,"aria-hidden":"true"})},P=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):x.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return Object(y.jsx)("tbody",{children:n.map((function(t){return Object(y.jsx)("tr",{children:a.map((function(n){return Object(y.jsx)("td",{children:e.renderCell(t,n)},e.createKey(t,n))}))},t._id)}))})}}]),n}(a.Component),I=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).raiseSort=function(t){var n=Object(b.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(y.jsx)("i",{className:"fa fa-sort-asc"}):Object(y.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsx)("thead",{children:Object(y.jsx)("tr",{children:this.props.columns.map((function(t){return Object(y.jsxs)("th",{onClick:function(){return e.raiseSort(t.path)},className:"clickable",children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.Component),T=function(e){var t=e.data,n=e.columns,a=e.sortColumn,r=e.onSort;return Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)(I,{columns:n,sortColumn:a,onSort:r}),Object(y.jsx)(P,{data:t,columns:n})]})},A=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).columns=[{path:"title",label:"Title",content:function(e){return Object(y.jsx)(_.a,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(y.jsx)(R,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}},{key:"delete",content:function(t){return Object(y.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}}],e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onSort,a=e.sortColumn;return Object(y.jsx)(T,{data:t,onSort:n,sortColumn:a,columns:this.columns})}}]),n}(a.Component),D=function(e){var t=e.value,n=e.onChange;return Object(y.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},G=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],pageSize:4,currentPage:1,searchQuery:"",sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.handleLike=function(t){var n=Object(h.a)(e.state.movies),a=n.indexOf(t);n[a]=Object(b.a)({},n[a]),n[a].liked=!n[a].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,n=t.pageSize,a=t.currentPage,r=t.selectedGenre,c=t.searchQuery,i=t.movies,l=t.sortColumn,o=i;c?o=i.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):r&&r._id&&(o=i.filter((function(e){return e.genre._id===r._id})));var s=C(x.a.orderBy(o,[l.path],[l.order]),a,n);return{totalCount:o.length,data:s}},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Genres"}].concat(Object(h.a)(p.filter((function(e){return e}))));this.setState({movies:g,genres:e})}},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,n=t.pageSize,a=t.currentPage,r=t.sortColumn,c=t.searchQuery;if(0===e)return Object(y.jsx)("p",{children:"There are no movies in the database."});var i=this.getPagedData(),l=i.totalCount,o=i.data;return Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-3",children:Object(y.jsx)(N,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})}),Object(y.jsxs)("div",{className:"col",children:[Object(y.jsxs)("p",{children:["Showing ",l," movies in the database."]}),Object(y.jsx)(D,{value:c,onChange:this.handleSearch}),Object(y.jsx)(A,{movies:o,sortColumn:r,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),Object(y.jsx)(k,{itemsCount:l,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})]})]})}}]),n}(a.Component),w=n(37),L=function(){return Object(y.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(y.jsx)(_.a,{className:"navbar-brand",to:"/",children:"Movies"}),Object(y.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(y.jsx)("span",{className:"navbar-toggler-icon"})}),Object(y.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(y.jsxs)("div",{className:"navbar-nav",children:[Object(y.jsx)(w.a,{className:"nav-item nav-link",to:"/movies",children:"Movies"}),Object(y.jsx)(w.a,{className:"nav-item nav-link",to:"/customers",children:"Customers"}),Object(y.jsx)(w.a,{className:"nav-item nav-link",to:"/rentals",children:"Rentals"}),Object(y.jsx)(w.a,{className:"nav-item nav-link",to:"/login",children:"Login"}),Object(y.jsx)(w.a,{className:"nav-item nav-link",to:"/register",children:"Register"})]})})]})},M=function(){return Object(y.jsx)("h1",{children:"Not Found"})};n(31);var F=function(){return Object(y.jsxs)(r.a.Fragment,{children:[Object(y.jsx)(L,{}),Object(y.jsx)("main",{className:"container",children:Object(y.jsxs)(s.a,{children:[Object(y.jsx)(u.a,{path:"/movies",component:G}),Object(y.jsx)(u.a,{path:"/not-found",component:M}),Object(y.jsx)(d.a,{from:"/",to:"/movies"}),Object(y.jsx)(d.a,{to:"/not-found"})]})})]})};n(32),n(33),n(34);i.a.render(Object(y.jsx)(l.a,{basename:"/",children:Object(y.jsx)(F,{})}),document.getElementById("root")),o()}},[[35,1,2]]]);
//# sourceMappingURL=main.e7b87b17.chunk.js.map