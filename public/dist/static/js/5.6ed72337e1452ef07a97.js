webpackJsonp([5],{KnhD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("NYxO"),r={data:function(){return{list:[],pageNum:parseInt(this.$route.query.page)||1,num:0,pageSize:5,spinShow:!0}},methods:n()({},Object(a.b)(["getArticle"]),{pageChange:function(t){this.$router.push({path:"/",query:{page:t}}),this.initList("/news",t)},initList:function(t,e){var s=this;this.spinShow=!0,this.$api.article.getArticleList(t,e).then(function(t){s.num=t.data.result.count,s.list=t.data.result.rows,s.spinShow=!1})},setArticle:function(t){var e=this;this.getArticle(t).then(function(s){e.$router.push({name:"articleById",params:{id:t}})})}}),mounted:function(){var t=this.$route;this.initList("/news",t.query.page)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("div",{staticClass:"newsTitle"},[t._v("NewsList")]),t._v(" "),s("div",{staticClass:"newsMain"},t._l(t.list,function(e,i){return s("Card",{key:i},[s("div",{staticClass:"card"},[s("div",{staticClass:"left"},[s("Icon",{attrs:{type:"ios-images"}})],1),t._v(" "),s("div",{staticClass:"right"},[s("a",[s("span",{staticClass:"title",on:{click:function(s){t.setArticle(e.id)}}},[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"down"},[s("span",[t._v(t._s(e.time))]),t._v(" "),s("span",[s("Icon",{attrs:{type:"md-eye"}}),t._v("浏览量："+t._s(e.click_num))],1),t._v(" "),s("span",[t._v("#作者："+t._s(e.user_name))])])])])])})),t._v(" "),s("Page",{attrs:{total:t.num,current:t.pageNum,"page-size":t.pageSize},on:{"on-change":t.pageChange}}),t._v(" "),t.spinShow?s("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]};var u=s("VU/8")(r,c,!1,function(t){s("nLkg")},"data-v-d86b42ec",null);e.default=u.exports},nLkg:function(t,e){}});