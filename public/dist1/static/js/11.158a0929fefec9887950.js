webpackJsonp([11],{Qt8M:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),o={data:function(){return{list:[],pageSize:5,pageNum:parseInt(this.$route.query.page)||1,num:0,nowPage:0,caogao:0}},computed:n()({},Object(a.c)(["getUserName"])),methods:n()({},Object(a.b)(["getArticle","autoLogin","deleteArt","setIsUpdate"]),{pageChange:function(t){this.initList(t)},initList:function(t){var e=this;this.nowPage=t;var i=this.getUserName,s=this.caogao;this.$api.article.getArticleByUser(i,t,s).then(function(t){e.num=t.data.result.count,e.list=t.data.result.rows})},setArticle:function(t){var e=this;this.caogao?this.$Modal.info({title:"提示",content:"<p>草稿不能还没发布暂时不能查看</p>"}):this.getArticle(t).then(function(i){e.$router.push({name:"articleById",params:{id:t}})})},showDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"<p>你确定要删除此文章吗？？</p>",onOk:function(){e.deleteArt(t).then(function(t){t.data.success&&(e.$Message.info("删除成功"),e.initList(e.nowPage))})}})},toEditor:function(t){var e=this;this.setIsUpdate(!0),this.getArticle(t).then(function(t){e.$router.push({name:"editor"})})},getArticleList:function(){this.caogao=0,this.initList(1)},getCaogao:function(){this.caogao=1,this.initList(1)}}),mounted:function(){var t=this,e=window.localStorage.getItem("token");""===this.getUserName?e&&this.autoLogin(e).then(function(e){t.initList(1)}):this.initList(1)}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shangchuan"},[i("div",{staticClass:"nav"},[i("Button",{on:{click:t.getArticleList}},[t._v("我的文章")]),t._v(" "),i("Button",{on:{click:t.getCaogao}},[t._v("我的草稿")])],1),t._v(" "),i("div",{staticClass:"main"},[t.list.length?i("div",{staticClass:"a"},[t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"wenzhang"},[i("div",{staticClass:"wenzahngLeft"},[i("div",{staticClass:"top"},[i("h2",[i("a",{on:{click:function(i){t.setArticle(e.id)}}},[t._v(t._s(e.title))])])]),t._v(" "),i("p",{staticClass:"down"},[i("ButtonGroup",{attrs:{size:"small"}},[i("Button",[i("Icon",{attrs:{type:"ios-pricetags-outline",size:"20"}}),t._v(t._s(e.label))],1),t._v(" "),i("Button",[i("Icon",{attrs:{type:"ios-eye",size:"20"}}),t._v(t._s(e.click_num||0))],1),t._v(" "),i("Button",[i("Icon",{attrs:{type:"ios-text-outline",size:"20"}}),t._v(t._s(e.comment||0))],1),t._v(" "),i("Button",[i("Icon",{attrs:{type:"ios-heart-outline",size:"20"}}),t._v(t._s(e.like_num||0))],1)],1),t._v(" "),i("span",[t._v("发表于："+t._s(e.time))]),t._v(" "),i("Poptip",{attrs:{placement:"bottom"}},[i("a",[i("Icon",{attrs:{type:"ios-more",size:"30",color:"#ff9900"}})],1),t._v(" "),i("div",{staticClass:"handle",attrs:{slot:"content"},slot:"content"},[i("a",{on:{click:function(i){t.toEditor(e.id)}}},[i("Icon",{attrs:{type:"md-color-wand",size:"25"}})],1),t._v(" "),i("a",[i("Icon",{attrs:{type:"ios-trash-outline",size:"25"},on:{click:function(i){t.showDelete(e.id)}}})],1)])])],1)])])}),t._v(" "),i("Page",{staticClass:"page",attrs:{total:t.num,current:t.pageNum,"page-size":t.pageSize},on:{"on-change":t.pageChange}})],2):i("div",{staticClass:"empty"},[i("div",{staticClass:"kong"},[i("div",{staticClass:"tu"}),t._v(" "),i("p",[t._v("还没有文章，开始  "),i("router-link",{staticStyle:{color:"green"},attrs:{to:"/e"}},[t._v("写一篇文章")])],1)])])])])},staticRenderFns:[]};var r=i("VU/8")(o,c,!1,function(t){i("vlbe")},"data-v-28628cfa",null);e.default=r.exports},vlbe:function(t,e){}});