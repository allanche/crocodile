(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a5f3186"],{4246:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"d",(function(){return s})),r.d(e,"a",(function(){return i}));var a=r("b775");function o(){return Object(a["a"])({url:"/api/v1/host/select",method:"get"})}function n(t){return Object(a["a"])({url:"/api/v1/host",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/api/v1/host/stop",method:"put",data:t})}function i(t){return Object(a["a"])({url:"/api/v1/host",method:"delete",data:t})}},"54ca":function(t,e,r){"use strict";var a=r("df0f"),o=r.n(a);o.a},c8cc:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return n})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return u}));var a=r("b775");function o(t){return Object(a["a"])({url:"/api/v1/hostgroup",method:"get",params:t})}function n(){return Object(a["a"])({url:"/api/v1/hostgroup/select",method:"get"})}function s(t){return Object(a["a"])({url:"/api/v1/hostgroup",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/api/v1/hostgroup",method:"delete",data:t})}function l(t){return Object(a["a"])({url:"/api/v1/hostgroup",method:"put",data:t})}function u(t){return Object(a["a"])({url:"/api/v1/hostgroup/hosts",method:"get",params:t})}},df0f:function(t,e,r){},fab9:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[t.is_change||t.is_create?r("div",{staticStyle:{"margin-left":"25px","margin-right":"80px；height:80px"}},[r("el-form",{ref:"hostgroup",attrs:{model:t.hostgroup,rules:t.rules,"label-position":"right","label-width":"120px",size:"mini"}},[r("el-form-item",{attrs:{label:"主机组名称",prop:"name"}},[r("el-input",{staticStyle:{width:"500px"},attrs:{disabled:t.is_change,placeholder:"请输入主机组名称",clearable:"",maxlength:"30","show-word-limit":""},model:{value:t.hostgroup.name,callback:function(e){t.$set(t.hostgroup,"name",e)},expression:"hostgroup.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Worker",prop:"task_type",placeholder:"请选择主机"}},[r("el-select",{staticStyle:{width:"500px"},attrs:{multiple:"",filterable:""},model:{value:t.hostgroup.addrs,callback:function(e){t.$set(t.hostgroup,"addrs",e)},expression:"hostgroup.addrs"}},t._l(t.hostselect,(function(e){return r("el-option",{key:e.label,attrs:{label:e.label,value:e.value}},[r("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px","margin-right":"30px"}},[1===e.online?r("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("Online")]):t._e(),t._v(" "),-1===e.online?r("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("Offline")]):t._e()],1)])})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"请输入任务备注",clearable:"",maxlength:"100","show-word-limit":""},model:{value:t.hostgroup.remark,callback:function(e){t.$set(t.hostgroup,"remark",e)},expression:"hostgroup.remark"}})],1)],1),t._v(" "),r("div",{staticStyle:{"margin-left":"120px"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submithostgroup("hostgroup")}}},[t._v("确 定")]),t._v(" "),r("el-button",{attrs:{size:"small"},on:{click:function(e){t.is_create=!1,t.is_change=!1}}},[t._v("取 消")])],1)],1):r("div",[r("div",{staticStyle:{float:"right"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新建主机组",placement:"top-start"}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.createhostgrouppre}},[t._v("New")])],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.data,stripe:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",fixed:"left",label:"名称","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"主机","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{attrs:{placement:"right",width:"700",trigger:"click"},on:{show:function(r){return t.gethostdetail(e.row)}}},[r("el-table",{attrs:{border:"",data:t.hghosts}},[r("el-table-column",{attrs:{property:"addr",label:"IP",width:"150"}}),t._v(" "),r("el-table-column",{attrs:{property:"hostname",label:"主机名","min-width":"100"}}),t._v(" "),r("el-table-column",{attrs:{property:"weight",label:"权重",width:"60"}}),t._v(" "),r("el-table-column",{attrs:{property:"version",label:"版本",width:"60"}}),t._v(" "),r("el-table-column",{attrs:{label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.online?r("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("Online")]):r("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v("Offline")])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"暂停",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.stop?r("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("Stop")]):r("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("Normal")])]}}],null,!0)})],1),t._v(" "),r("el-button",{attrs:{slot:"reference",disabled:0===e.row.addrs.length,type:"success",size:"small",round:""},slot:"reference"},[r("strong",[t._v(t._s(e.row.addrs.length))])])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"创建人","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.create_by))])]}}])}),t._v(" "),r("el-table-column",{attrs:{property:"create_time",label:"创建时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{property:"update_time",label:"修改时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"备注","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.remark))])]}}])}),t._v(" "),r("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button-group",[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return t.changehostgrouppre(e.row)}}},[t._v("修改")]),t._v(" "),r("el-popconfirm",{attrs:{hideIcon:!0,title:"确定删除主机组?"},on:{onConfirm:function(r){return t.deletehostgrouppre(e.row)}}},[r("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[t._v("删除")])],1)],1)]}}])})],1),t._v(" "),r("div",{staticStyle:{"margin-top":"10px",float:"right",height:"70px"}},[r("el-pagination",{attrs:{"page-size":t.hostgroupquery.limit,background:"",layout:"total,prev, pager, next",total:t.pagecount},on:{"current-change":t.handleCurrentChangerun}})],1)],1)])},o=[],n=(r("7f7f"),r("c8cc")),s=r("4246"),i=r("5c96"),l={data:function(){return{listLoading:!1,data:[],pagecount:0,executeips:[],createactuatordialog:!1,updateactuatordialog:!1,rules:{name:[{required:!0,message:"请输入执行器名称",trigger:"blur"}]},addips:[],arronline:[],hostgroupquery:{offset:0,limit:15},hostgroup:{id:"",name:"",addrs:[],remark:""},hghosts:[],is_change:!1,is_create:!1,hostselect:[]}},created:function(){this.getallhostgroup()},methods:{getallhostgroup:function(){var t=this;Object(n["d"])(this.hostgroupquery).then((function(e){t.data=e.data,t.pagecount=e.count}))},createhostgrouppre:function(){this.startgetselecthost(),void 0===this.hostgroup.name?this.hostgroup["name"]="":this.hostgroup.name="",this.hostgroup.addrs="",this.hostgroup.remark="",this.is_create=!0},gethostdetail:function(t){var e=this,r={id:t.id};Object(n["e"])(r).then((function(t){e.hghosts=t.data}))},changehostgrouppre:function(t){this.startgetselecthost(),void 0===this.hostgroup.id?this.hostgroup["id"]=t.id:this.hostgroup.id=t.id,this.hostgroup.name=t.name,this.hostgroup.addrs=t.addrs,this.hostgroup.remark=t.remark,this.is_change=!0},deletehostgrouppre:function(t){var e=this,r={id:t.id};Object(n["c"])(r).then((function(r){0===r.code?(i["Message"].success("删除主机组 ".concat(t.name," 成功")),e.getallhostgroup(),e.is_create=!1):i["Message"].error("删除主机组 ".concat(t.name," 失败: ").concat(r.msg))}))},startgetselecthost:function(){var t=this;Object(s["c"])().then((function(e){t.hostselect=e.data}))},submithostgroup:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var r=e.hostgroup.name;!0===e.is_create&&(delete e.hostgroup.id,Object(n["b"])(e.hostgroup).then((function(t){0===t.code?(i["Message"].success("创建主机组 ".concat(r," 成功")),e.getallhostgroup(),e.is_create=!1):i["Message"].error("创建主机组 ".concat(r," 失败: ").concat(t.msg))}))),!0===e.is_change&&(delete e.hostgroup.name,Object(n["a"])(e.hostgroup).then((function(t){0===t.code?(i["Message"].success("修改主机组 ".concat(r," 成功")),e.getallhostgroup(),e.is_change=!1):i["Message"].error("修改主机组 ".concat(r," 失败: ").concat(t.msg))})))}}))},handleCurrentChangerun:function(t){this.hostgroupquery.offset=(t-1)*this.hostgroupquery.limit,this.getallhostgroup()}}},u=l,c=(r("54ca"),r("2877")),h=Object(c["a"])(u,a,o,!1,null,"d3a48cba",null);e["default"]=h.exports}}]);