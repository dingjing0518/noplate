(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e3c62fc"],{"368c":function(e,t,a){},5636:function(e,t,a){"use strict";var r=a("bf05"),l=a.n(r);l.a},"922a":function(e,t,a){"use strict";var r=a("368c"),l=a.n(r);l.a},bf05:function(e,t,a){},cab9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carManager"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 用户管理\n      ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.delAll}},[e._v("批量删除")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.addVisible=!0}}},[e._v("添加")]),a("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号","class-name":"table"}}),a("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"100","class-name":"table"}}),a("el-table-column",{attrs:{prop:"roleName",label:"权限名","class-name":"table"}}),a("el-table-column",{attrs:{prop:"province",label:"省","class-name":"table"}}),a("el-table-column",{attrs:{prop:"city",label:"市","class-name":"table"}}),a("el-table-column",{attrs:{prop:"district",label:"区县","class-name":"table"}}),a("el-table-column",{attrs:{prop:"parkName",label:"所属车场","class-name":"table"}}),a("el-table-column",{attrs:{prop:"phoneNumber",label:"手机号","class-name":"table"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center","class-name":"table"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,total:e.totalRecords,"page-sizes":[5,10,20,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"30%"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.carFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.addForm.userName,callback:function(t){e.$set(e.addForm,"userName",t)},expression:"addForm.userName"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"realName"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.addForm.realName,callback:function(t){e.$set(e.addForm,"realName",t)},expression:"addForm.realName"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"passWord"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.addForm.passWord,callback:function(t){e.$set(e.addForm,"passWord",t)},expression:"addForm.passWord"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"passwordsure"}},[a("el-input",{attrs:{placeholder:"请再次输入密码"},model:{value:e.addForm.passwordsure,callback:function(t){e.$set(e.addForm,"passwordsure",t)},expression:"addForm.passwordsure"}})],1),a("el-form-item",{attrs:{label:"代理商"}},[a("el-select",{attrs:{placeholder:"请选择代理商"},model:{value:e.addForm.agentId,callback:function(t){e.$set(e.addForm,"agentId",t)},expression:"addForm.agentId"}},e._l(e.optionsA,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"权限名",prop:"roleName"}},[a("el-select",{attrs:{placeholder:"请选择权限名"},model:{value:e.addForm.roleName,callback:function(t){e.$set(e.addForm,"roleName",t)},expression:"addForm.roleName"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"省",prop:"province"}},[a("el-select",{attrs:{placeholder:"请选择省份",disabled:!0},on:{change:e.handleCommand},model:{value:e.addForm.province,callback:function(t){e.$set(e.addForm,"province",t)},expression:"addForm.province"}},e._l(e.getProvince,function(e){return a("el-option",{key:e.id,attrs:{label:e.province,value:e.province}})}),1)],1),a("el-form-item",{attrs:{label:"市",prop:"city"}},[a("el-select",{attrs:{placeholder:"请选择城市",disabled:!0},on:{change:e.handgetDes},model:{value:e.addForm.city,callback:function(t){e.$set(e.addForm,"city",t)},expression:"addForm.city"}},e._l(e.getCity,function(e){return a("el-option",{key:e.city,attrs:{label:e.city,value:e.city}})}),1)],1),a("el-form-item",{attrs:{label:"区县",prop:"district"}},[a("el-select",{attrs:{placeholder:"请选择区县",disabled:!0},model:{value:e.addForm.district,callback:function(t){e.$set(e.addForm,"district",t)},expression:"addForm.district"}},e._l(e.getdistrict,function(e){return a("el-option",{key:e.district,attrs:{label:e.district,value:e.district}})}),1)],1),a("el-form-item",{attrs:{label:"停车场"}},[a("el-select",{attrs:{placeholder:"请选择停车场"},model:{value:e.addForm.parkId,callback:function(t){e.$set(e.addForm,"parkId",t)},expression:"addForm.parkId"}},e._l(e.optionsB,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"手机号",prop:"phoneNumber"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.addForm.phoneNumber,callback:function(t){e.$set(e.addForm,"phoneNumber",t)},expression:"addForm.phoneNumber"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改用户权限",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,rules:e.carFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.editForm.userName,callback:function(t){e.$set(e.editForm,"userName",t)},expression:"editForm.userName"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"realName"}},[a("el-input",{model:{value:e.editForm.realName,callback:function(t){e.$set(e.editForm,"realName",t)},expression:"editForm.realName"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"passWord"}},[a("el-input",{model:{value:e.editForm.passWord,callback:function(t){e.$set(e.editForm,"passWord",t)},expression:"editForm.passWord"}})],1),a("el-form-item",{attrs:{label:"代理商"}},[a("el-select",{attrs:{placeholder:"请选择代理商"},model:{value:e.editForm.agentId,callback:function(t){e.$set(e.editForm,"agentId",t)},expression:"editForm.agentId"}},e._l(e.optionsA,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"权限名",prop:"roleName"}},[a("el-select",{attrs:{placeholder:"重新选择权限"},model:{value:e.editForm.roleName,callback:function(t){e.$set(e.editForm,"roleName",t)},expression:"editForm.roleName"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"省",prop:"province"}},[a("el-select",{attrs:{placeholder:"请选择省份",disabled:!0},on:{change:e.handleCommandA},model:{value:e.editForm.province,callback:function(t){e.$set(e.editForm,"province",t)},expression:"editForm.province"}},e._l(e.getProvince,function(e){return a("el-option",{key:e.id,attrs:{label:e.province,value:e.province}})}),1)],1),a("el-form-item",{attrs:{label:"市",prop:"city"}},[a("el-select",{attrs:{placeholder:"请选择城市",disabled:!0},on:{change:e.handgetDesA},model:{value:e.editForm.city,callback:function(t){e.$set(e.editForm,"city",t)},expression:"editForm.city"}},e._l(e.getCity,function(e){return a("el-option",{key:e.city,attrs:{label:e.city,value:e.city}})}),1)],1),a("el-form-item",{attrs:{label:"区县",prop:"district"}},[a("el-select",{attrs:{placeholder:"请选择区县",disabled:!0},model:{value:e.editForm.district,callback:function(t){e.$set(e.editForm,"district",t)},expression:"editForm.district"}},e._l(e.getdistrict,function(e){return a("el-option",{key:e.district,attrs:{label:e.district,value:e.district}})}),1)],1),a("el-form-item",{attrs:{label:"停车场"}},[a("el-select",{attrs:{placeholder:"请选择停车场"},model:{value:e.editForm.parkId,callback:function(t){e.$set(e.editForm,"parkId",t)},expression:"editForm.parkId"}},e._l(e.optionsB,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"手机号",prop:"phoneNumber"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.editForm.phoneNumber,callback:function(t){e.$set(e.editForm,"phoneNumber",t)},expression:"editForm.phoneNumber"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},l=[],o=(a("c5f6"),a("7f7f"),a("a15e"),{name:"carManager",data:function(){return{getCity:[],getdistrict:[],getProvince:[],tableData:[],cur_page:1,pagesize:20,totalRecords:0,totalPages:0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,addForm:{id:"",userName:"",passWord:"",passwordsure:"",agentId:"",parkId:"",roleName:"",realName:"",province:"",city:"",district:"",phoneNumber:""},editForm:{id:"",userName:"",passWord:"",passwordsure:"",roleName:"",realName:"",province:"",city:"",district:"",phoneNumber:"",agentId:"",parkId:""},options:[],optionsA:[],optionsB:[],value:"",idx:-1,id:-1,carFormRules:{roleName:[{message:"权限名不能为空",required:!0,trigger:"blur"}],userName:[{message:"用户名不能为空",required:!0,trigger:"blur"},{min:1,max:10,message:"长度应该在1-10个字符之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],realName:[{message:"姓名名不能为空",required:!0,trigger:"blur"},{min:2,max:10,message:"长度应该在2-10个字符之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],passWord:[{message:"密码不能为空",required:!0,trigger:"blur"},{min:6,max:10,message:"长度应该在6-10个字符之间",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"不允许输入中文"}],passwordsure:[{message:"密码不能为空",required:!0,trigger:"blur"},{min:6,max:10,message:"长度应该在6-10个字符之间",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]+$/,message:"不允许输入中文"}]}}},created:function(){this.getData(),this.getJur(),this.getJurA(),this.shopNameA(),this.shopNameB(),this.handgetYard()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,r=0;r<e.del_list.length;r++)if(t.name===e.del_list[r].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handleCommand:function(){var e=this;e.getCity=[],this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/sharea/selectcity",method:"post",data:{name:e.addForm.province}}).then(function(t){if(console.log(t,"市"),t.status<=200){for(var a=0;a<t.data.shareaData[0].length;a++)e.getCity.push({city:t.data.shareaData[0][a].name});console.log(e.getCity,"市")}}).catch(function(e){console.log(e)})},handgetDes:function(){var e=this;e.getdistrict=[],this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/sharea/selectDistrict",method:"post",data:{name:e.addForm.city}}).then(function(t){if(console.log(t,"区"),t.status<=200)for(var a=0;a<t.data.shareaData[0].length;a++)e.getdistrict.push({district:t.data.shareaData[0][a].name})}).catch(function(e){console.log(e)})},handleCommandA:function(){var e=this;e.getCity=[],this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/sharea/selectcity",method:"post",data:{name:e.editForm.province}}).then(function(t){if(console.log(t,"市"),t.status<=200){for(var a=0;a<t.data.shareaData[0].length;a++)e.getCity.push({city:t.data.shareaData[0][a].name});console.log(e.getCity,"市")}}).catch(function(e){console.log(e)})},handgetDesA:function(){var e=this;e.getdistrict=[],this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/sharea/selectDistrict",method:"post",data:{name:e.editForm.city}}).then(function(t){if(console.log(t,"区"),t.status<=200)for(var a=0;a<t.data.shareaData[0].length;a++)e.getdistrict.push({district:t.data.shareaData[0][a].name})}).catch(function(e){console.log(e)})},handgetYard:function(){var e=this;e.optionsB=[],this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/parkingJinshi/selectParkByParkId",method:"post",data:{parkId:localStorage.getItem("parkId")}}).then(function(t){console.log("添加停车场信息：",t),e.optionsB.push(t.data[0].jpName),e.addForm.province=t.data[0].jpProvince,e.addForm.city=t.data[0].jpCity,e.addForm.district=t.data[0].jpDistrict}).catch(function(e){console.log(e)})},refresh:function(){this.getData(),this.getJur(),this.getJurA(),this.handgetYard(),this.shopNameB(),this.select_word="",this.addForm={},this.editForm={}},dateFormatterexpirationTime:function(e,t){var a=e.expirationTime;if(a){a=new Date(a);var r=a.getFullYear()+"-",l=a.getMonth()+1+"-",o=a.getDate();return r+l+o}return""},dateFormatter:function(e,t){var a=e.joinTime;if(a){a=new Date(a);var r=a.getFullYear()+"-",l=a.getMonth()+1+"-",o=a.getDate();return r+l+o}return""},handleSizeChange:function(e){this.pagesize=e,this.getData()},handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/testBoot/selectUserAll",method:"post",data:{pageNum:e.cur_page,pageSize:e.pagesize,parkId:String(localStorage.getItem("parkId")),agentId:String(localStorage.getItem("agentId")),roleName:String(localStorage.getItem("roleName"))}}).then(function(t){t.status<=200&&(e.tableData=[],e.tableData=t.data.user,console.log(t.data,"874485555555555555"),e.totalRecords=t.data.userTotalRecords)}).catch(function(t){e.$message.error("查询失败: "+t),console.log(t)})},shopNameB:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/parkingJinshi/selectParkingAll ",method:"post",data:{pageNum:e.cur_page,pageSize:e.pagesize,agentId:String(localStorage.getItem("agentId")),roleName:localStorage.getItem("roleName")}}).then(function(t){if(t.status<=200){console.log(t,"车场"),e.optionsB=[];for(var a=0;a<t.data.parkingData.length;a++)e.optionsB.push({value:t.data.parkingData[a].jpName,label:t.data.parkingData[a].jpName});console.log("停车场：",e.optionsB)}}).catch(function(t){e.$message.error("查询失败: "+t),console.log(t)})},shopNameA:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/agent/selectAgentAll ",method:"post",data:{pageNum:e.cur_page,pageSize:e.pagesize,agentId:String(localStorage.getItem("agentId")),roleName:localStorage.getItem("roleName")}}).then(function(t){if(t.status<=200){console.log(t,"123456"),e.optionsA=[];for(var a=0;a<t.data.AgentData.length;a++)e.optionsA.push({value:t.data.AgentData[a].id,label:t.data.AgentData[a].username})}}).catch(function(t){e.$message.error("查询失败: "+t),console.log(t)})},getJur:function(){console.log("4165546");var e=this;e.userlogin=localStorage.getItem("userId"),this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/jinshiRole/selectRoleAll",method:"post",data:{pageNum:e.cur_page,pageSize:e.pagesize,id:JSON.parse(e.userlogin),roleName:localStorage.getItem("roleName"),parkId:localStorage.getItem("parkId")}}).then(function(t){if(console.log(t,"代理商"),t.status<=200){e.options=[];for(var a=0;a<t.data.roleData.length;a++)e.options.push({value:t.data.roleData[a].jsRolename,label:t.data.roleData[a].jsRolename})}}).catch(function(t){e.$message.error("查询失败: "+t),console.log(t)})},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){console.log(t,"我是编辑"),this.idx=e,this.id=t.id,console.log(this.id),this.editForm={id:t.id,userName:t.userName,roleName:t.roleName,realName:t.realName,province:t.province,city:t.city,district:t.district,phoneNumber:t.phoneNumber,parkId:t.parkName,agentId:t.agentid},console.log(this.editForm),this.editVisible=!0},saveEdit:function(){var e=this,t=this,a=this.editForm;this.$refs.editForm.validate(function(r){r?e.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/testBoot/updateUser",method:"post",data:{setData:a,parkIdUser:Number(localStorage.getItem("parkId"))}}).then(function(e){if(e.status<=200){if(t.editVisible=!1,t.$message.success("修改成功"),t.$message.success("修改第 ".concat(t.idx+1," 行成功")),t.tableData[t.idx].id===t.id)t.$set(t.tableData,t.idx,t.editForm);else for(var a=0;a<t.tableData.length;a++)if(t.tableData[a].id===t.id)return void t.$set(t.tableData,a,t.editForm);t.getData()}}).catch(function(e){t.$message.success("修改失败！"),console.log(e)}):t.$message.success("格式不正确")})},handleDelete:function(e,t){this.idx=e,this.id=t.id,console.log(this.id),this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.success("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveAdd:function(){var e=this;if(console.log(this.addForm.passWord,this.addForm.passwordsure),this.addForm.passWord==this.addForm.passwordsure){var t=this;t.addForm.rolename=t.value;var a=this.addForm;this.$refs.addForm.validate(function(r){r?e.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/testBoot/insert",method:"post",data:{setData:a,parkIdUser:Number(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(1==e.data.code?t.$message.error("用户名已存在"):(t.addVisible=!1,t.$message.success("添加成功"),t.getData()))}).catch(function(e){t.$message.error("添加失败！"),console.log(e)}):t.$message.success("格式不正确")})}else alert("两次密码不一致")},deleteRow:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/testBoot/deleteByPrimaryKey?id="+e.id,method:"post",data:{id:e.id}}).then(function(t){if(t.status<=200)if(e.$message.success("删除成功"),e.delVisible=!1,e.tableData[e.idx].id===e.id)e.tableData.splice(e.idx,1);else for(var a=0;a<e.tableData.length;a++)if(e.tableData[a].id===e.id)return void e.tableData.splice(a,1)}).catch(function(t){e.$message.success("删除失败！"),console.log(t)})},getJurA:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/sharea/selects",method:"post",data:{}}).then(function(t){if(t.status<=200){e.getProvince=[];for(var a=0;a<t.data.shareaData.length;a++)e.getProvince.push({id:t.data.shareaData[a].id,province:t.data.shareaData[a].name})}}).catch(function(t){e.$message.error("查询失败: "+t),console.log(t)})}}}),s=o,i=(a("922a"),a("5636"),a("2877")),n=Object(i["a"])(s,r,l,!1,null,"635a8466",null);t["default"]=n.exports}}]);