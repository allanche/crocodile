(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784d5146"],{"4c1e":function(e,t,s){},e382:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[e.is_change||e.is_create?s("div",{staticStyle:{"margin-left":"25px","margin-right":"80px；height:80px"}},[s("el-form",{ref:"user",attrs:{model:e.user,rules:e.rules,"label-position":"right","label-width":"120px",size:"mini"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{disabled:e.is_change,placeholder:"请输入用户名",clearable:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户类型",prop:"role"}},[s("el-select",{model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},e._l(e.roleoptions,(function(e){return s("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-tooltip",{attrs:{content:"修改密码",placement:"top"}},[e.is_create?e._e():s("el-switch",{model:{value:e.changepasswd,callback:function(t){e.changepasswd=t},expression:"changepasswd"}})],1),e._v(" "),e.changepasswd?s("span",[s("br")]):e._e(),e._v(" "),e.changepasswd||e.is_create?s("el-input",{staticStyle:{width:"500px"},attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:e.password1,callback:function(t){e.password1=t},expression:"password1"}}):e._e(),e._v(" "),e.changepasswd||e.is_create?s("span",[s("br")]):e._e(),e._v(" "),e.changepasswd||e.is_create?s("el-input",{staticStyle:{width:"500px"},attrs:{type:"password",placeholder:"请再次输入密码",clearable:""},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}):e._e()],1),e._v(" "),e.is_change?s("el-form-item",{attrs:{label:"状态",prop:"forbid"}},[s("el-select",{model:{value:e.user.forbid,callback:function(t){e.$set(e.user,"forbid",t)},expression:"user.forbid"}},e._l(e.forbidoptions,(function(e){return s("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e._v(" "),s("el-form-item",{attrs:{label:"备注",prop:"remark"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"请输入任务备注",clearable:""},model:{value:e.user.remark,callback:function(t){e.$set(e.user,"remark",t)},expression:"user.remark"}})],1)],1),e._v(" "),s("div",{staticStyle:{"margin-left":"120px"}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submituser("user")}}},[e._v("确 定")]),e._v(" "),s("el-button",{attrs:{size:"small"},on:{click:function(t){e.is_create=!1,e.is_change=!1}}},[e._v("取 消")])],1)],1):s("div",[s("div",{staticStyle:{float:"right"}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"创建用户",placement:"top-start"}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.createuserpre}},[e._v("New")])],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",fixed:"left",label:"用户名","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"用户类型","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.role?s("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v(e._s(t.row.rolestr))]):e._e(),e._v(" "),2===t.row.role?s("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(t.row.rolestr))]):e._e(),e._v(" "),3===t.row.role?s("el-tag",{attrs:{type:"info",size:"mini"}},[e._v(e._s(t.row.rolestr))]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"状态","min-width":"70"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{value:!e.row.forbid,"active-color":"#13ce66","inactive-color":"#ff4949"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{property:"create_time",label:"创建时间",width:"160"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"备注","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.remark))])]}}])}),e._v(" "),s("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button-group",[s("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(s){return e.changeuserpre(t.row)}}},[e._v("修改")])],1)]}}])})],1),e._v(" "),s("div",{staticStyle:{"margin-top":"10px",float:"right",height:"70px"}},[s("el-pagination",{attrs:{"page-size":e.userquery.limit,background:"",layout:"total,prev, pager, next",total:e.pagecount},on:{"current-change":e.handleCurrentChangerun}})],1)],1)])},a=[],i=(s("7f7f"),s("bd86")),l=s("c24f"),n=s("5c96"),o={data:function(){var e;return e={listLoading:!1,data:[],pagecount:0,rules:{name:[{required:!0,message:"请输入执行器名称",trigger:"blur"}],role:[{required:!0,message:"请选择用户类型",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"}],forbid:[{required:!0,message:"请输入用户密码",trigger:"blur"}]},addips:[]},Object(i["a"])(e,"pagecount",0),Object(i["a"])(e,"userquery",{offset:0,limit:15}),Object(i["a"])(e,"user",{id:"",name:"",role:0,forbid:1,password:"",remark:""}),Object(i["a"])(e,"createuser",{name:"",password:"",role:0,remark:""}),Object(i["a"])(e,"roleoptions",[{label:"普通用户",value:1},{label:"管理员",value:2},{label:"访客",value:3}]),Object(i["a"])(e,"forbidoptions",[{label:"禁止登陆",value:!0},{label:"正常登陆",value:!1}]),Object(i["a"])(e,"hghosts",[]),Object(i["a"])(e,"is_change",!1),Object(i["a"])(e,"is_create",!1),Object(i["a"])(e,"hostselect",[]),Object(i["a"])(e,"changepasswd",!1),Object(i["a"])(e,"password1",""),Object(i["a"])(e,"password2",""),e},created:function(){this.startgetallusers()},methods:{startgetallusers:function(){var e=this;Object(l["f"])(this.userquery).then((function(t){e.data=t.data,e.pagecount=t.count}))},createuserpre:function(){void 0==this.user.name&&(this.user["name"]=""),this.user.name="",this.user.password="",this.user.role=1,this.user.remark="",this.is_create=!0,this.password1,this.password2},changeuserpre:function(e){void 0==this.user.id&&(this.user["id"]=""),void 0==this.user.forbid&&(this.user["forbid"]=1),1===e.forbid?this.forbid=!0:2===e.forbid&&(this.forbid=!1),this.changepasswd=!1,this.user.id=e.id,this.user.name=e.name,this.user.role=e.role,this.user.forbid=e.forbid,this.user.remark=e.remark,this.user.password="",this.is_change=!0,this.password1,this.password2},submituser:function(e){var t=this;if(!0===this.is_change){var s=this.user.name;if(delete this.user.name,!1===this.changepasswd)this.user.password="";else{if(""===this.password1||""===this.password2)return void n["Message"].warning("密码不能为空，请重新输入");if(this.password1!==this.password2)return void n["Message"].warning("两次输入密码不一致，请重新输入");try{window.btoa("".concat(this.password1))}catch(r){return void n["Message"].warning("密码只能使用字母、数字、符号")}}Object(l["a"])(this.user).then((function(e){0===e.code?(n["Message"].success("修改用户 ".concat(s," 成功")),t.startgetallusers(),t.is_change=!1):n["Message"].error("修改用户 ".concat(s," 失败: ").concat(e.msg))}))}else this.$refs[e].validate((function(e){if(e&&!0===t.is_create){if(""===t.password1||""===t.password2)return void n["Message"].error("密码不能为空，请重新输入");if(t.password1!==t.password2)return void n["Message"].error("两次输入密码不一致，请重新输入");try{window.btoa("".concat(t.user.name,":").concat(t.password1))}catch(r){return void n["Message"].error("用户名和密码只能使用字母、数字、符号")}t.user.password=t.password1,delete t.user.id,delete t.user.forbid,Object(l["c"])(t.user).then((function(e){0===e.code?(n["Message"].success("创建用户 ".concat(t.user.name," 成功")),t.startgetallusers(),t.is_create=!1):n["Message"].error("创建用户 ".concat(s," 失败: ").concat(e.msg))}))}}))},handleCurrentChangerun:function(e){this.userquery.offset=(e-1)*this.userquery.limit,this.startgetallusers()}}},c=o,u=(s("e64a"),s("2877")),d=Object(u["a"])(c,r,a,!1,null,"7a5a0057",null);t["default"]=d.exports},e64a:function(e,t,s){"use strict";var r=s("4c1e"),a=s.n(r);a.a}}]);