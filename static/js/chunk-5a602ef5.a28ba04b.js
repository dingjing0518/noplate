(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a602ef5"],{"008b":function(e,a,t){},"20a9":function(e,a,t){"use strict";var r=t("008b"),s=t.n(r);s.a},8047:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"carManager"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 商户管理\n      ")])],1)],1),t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(a){e.addVisible=!0}}},[e._v("添加")]),t("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),t("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"50",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号","class-name":"table"}}),t("el-table-column",{attrs:{label:"操作",width:"180",align:"center","class-name":"table"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])}),t("el-table-column",{attrs:{prop:"bcUsername",label:"登录名","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcName",label:"商户名","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcPhone",label:"手机号","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcWechat",label:"微信","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcContactsName",label:"联系人","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcParkingName",label:"停车场","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcAreaName",label:"区域","class-name":"table"}}),t("el-table-column",{attrs:{prop:"bcRemarks",label:"备注","class-name":"table"}})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,total:e.totalRecords,"page-sizes":[5,10,20,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),t("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"30%"},on:{"update:visible":function(a){e.addVisible=a}}},[t("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.carFormRules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"商户名",prop:"bcName"}},[t("el-input",{attrs:{placeholder:"请填写商户名,此为必填项"},model:{value:e.addForm.bcName,callback:function(a){e.$set(e.addForm,"bcName",a)},expression:"addForm.bcName "}})],1),t("el-form-item",{attrs:{label:"登录名",prop:"bcUsername"}},[t("el-input",{attrs:{placeholder:"请填写登录名，用户商户登陆时的登录名"},model:{value:e.addForm.bcUsername,callback:function(a){e.$set(e.addForm,"bcUsername",a)},expression:"addForm.bcUsername"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"bcPhone"}},[t("el-input",{attrs:{placeholder:"请填写手机号"},model:{value:e.addForm.bcPhone,callback:function(a){e.$set(e.addForm,"bcPhone",a)},expression:"addForm.bcPhone"}})],1),t("el-form-item",{attrs:{label:"微信",prop:"bcWechat"}},[t("el-input",{attrs:{placeholder:"请输入微信号，如微信号为手机号可不填写"},model:{value:e.addForm.bcWechat,callback:function(a){e.$set(e.addForm,"bcWechat",a)},expression:"addForm.bcWechat"}})],1),t("el-form-item",{attrs:{label:"联系人姓名",prop:"bcContactsName"}},[t("el-input",{attrs:{placeholder:"请填写联系人姓名"},model:{value:e.addForm.bcContactsName,callback:function(a){e.$set(e.addForm,"bcContactsName",a)},expression:"addForm.bcContactsName"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"bcRemarks"}},[t("el-input",{attrs:{placeholder:"请填写备注"},model:{value:e.addForm.bcRemarks,callback:function(a){e.$set(e.addForm,"bcRemarks",a)},expression:"addForm.bcRemarks"}})],1),t("el-form-item",{attrs:{label:"停车场",prop:"bcParkingName"}},[t("el-select",{attrs:{disabled:""},model:{value:e.addForm.bcParkingName,callback:function(a){e.$set(e.addForm,"bcParkingName",a)},expression:"addForm.bcParkingName"}},e._l(e.parking,function(e){return t("el-option",{key:e.bcParkingName,attrs:{label:e.bcParkingName,value:e.bcParkingName}})}),1)],1),t("el-form-item",{attrs:{label:"区域",prop:"bcAreaId"}},[t("el-select",{attrs:{placeholder:"区域"},model:{value:e.addForm.bcAreaName,callback:function(a){e.$set(e.addForm,"bcAreaName",a)},expression:"addForm.bcAreaName"}},e._l(e.area,function(e){return t("el-option",{key:e.bcAreaName,attrs:{label:e.bcAreaName,value:e.bcAreaName}})}),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.addVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改用户权限",visible:e.editVisible,width:"30%"},on:{"update:visible":function(a){e.editVisible=a}}},[t("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"商户名",prop:"bcName ",disabled:""}},[t("el-input",{attrs:{placeholder:"请输入商户名"},model:{value:e.editForm.bcName,callback:function(a){e.$set(e.editForm,"bcName",a)},expression:"editForm.bcName"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"bcPhone"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.editForm.bcPhone,callback:function(a){e.$set(e.editForm,"bcPhone",a)},expression:"editForm.bcPhone"}})],1),t("el-form-item",{attrs:{label:"微信",prop:"bcWechat"}},[t("el-input",{attrs:{placeholder:"请输入微信"},model:{value:e.editForm.bcWechat,callback:function(a){e.$set(e.editForm,"bcWechat",a)},expression:"editForm.bcWechat"}})],1),t("el-form-item",{attrs:{label:"联系人",prop:"bcContactsName "}},[t("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.editForm.bcContactsName,callback:function(a){e.$set(e.editForm,"bcContactsName",a)},expression:"editForm.bcContactsName"}})],1),t("el-form-item",{attrs:{label:"登录名",prop:"bcUsername"}},[t("el-input",{attrs:{disabled:"",placeholder:"请输入用户名"},model:{value:e.editForm.bcUsername,callback:function(a){e.$set(e.editForm,"bcUsername",a)},expression:"editForm.bcUsername"}})],1),t("el-form-item",{attrs:{label:"备注",prop:"bcRemarks"}},[t("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.editForm.bcRemarks,callback:function(a){e.$set(e.editForm,"bcRemarks",a)},expression:"editForm.bcRemarks"}})],1),t("el-form-item",{attrs:{label:"停车场",prop:"bcParkingName"}},[t("el-select",{attrs:{disabled:"",placeholder:"请选择停车场"},model:{value:e.editForm.bcParkingName,callback:function(a){e.$set(e.editForm,"bcParkingName",a)},expression:"editForm.bcParkingName"}},e._l(e.parking,function(e){return t("el-option",{key:e.bcParkingName,attrs:{label:e.bcParkingName,value:e.bcParkingName}})}),1)],1),t("el-form-item",{attrs:{label:"区域",prop:"bcAreaName"}},[t("el-select",{attrs:{placeholder:"请选择区域"},model:{value:e.editForm.bcAreaName,callback:function(a){e.$set(e.editForm,"bcAreaName",a)},expression:"editForm.bcAreaName"}},e._l(e.area,function(e){return t("el-option",{key:e.bcAreaName,attrs:{label:e.bcAreaName,value:e.bcAreaName}})}),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.editVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(a){e.delVisible=a}}},[t("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.delVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},s=[],l=(t("c5f6"),t("7f7f"),t("a15e"),{name:"carManager",data:function(){return{agent:[],area:[],parking:[],tableData:[],cur_page:1,pagesize:20,totalRecords:0,totalPages:0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,addForm:{bcId:"",bcName:"",bcPhone:"",bcWechat:"",bcTel:"",bcQq:"",bcContactsName:"",bcUsername:"",bcPassword:"",bcRemarks:"",passwordsure:"",bcAgentName:"",bcParkingName:"",bcAreaName:""},editForm:{bcId:"",bcName:"",bcPhone:"",bcWechat:"",bcTel:"",bcQq:"",bcContactsName:"",bcUsername:"",bcPassword:"",bcRemarks:"",passwordsure:"",bcAgentName:"",bcParkingName:"",bcAreaName:""},options:[],value:"",carFormRules:{bcName:[{message:"商户名不能为空",required:!0,trigger:"blur"},{min:1,max:10,message:"长度应在1到10个字之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],bcUsername:[{message:"请填写登录名",required:!0,trigger:"blur"},{min:1,max:10,message:"长度应在1到10个字之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],bcPhone:[{min:11,max:11,message:"请输入11位手机号",trigger:"blur"},{pattern:/^[0-9]+$/,message:"请输入正确的手机号"}],bcTel:[{min:5,max:10,message:"请输入正确的座机号",trigger:"blur"}],bcQq:[{min:3,max:12,message:"请输入正确qq号",trigger:"blur"},{pattern:/^[0-9]+$/,message:"请输入正确的qq号"}],bcContactsName:[{min:2,max:5,message:"联系人长度在2-5个字符之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],bcRemarks:[{min:0,max:10,message:"备注长度在0-10个字符之间",trigger:"blur"}]},idx:-1,id:-1}},created:function(){this.getData(),this.getAgent(),this.getArea(),this.getParking()},computed:{data:function(){var e=this;return this.tableData.filter(function(a){for(var t=!1,r=0;r<e.del_list.length;r++)if(a.name===e.del_list[r].name){t=!0;break}if(!t&&a.address.indexOf(e.select_cate)>-1&&(a.name.indexOf(e.select_word)>-1||a.address.indexOf(e.select_word)>-1))return a})}},methods:{refresh:function(){this.getData(),this.getAgent(),this.getArea(),this.getParking(),this.editForm={},this.select_word="",this.addForm={}},dateFormatterexpirationTime:function(e,a){var t=e.expirationTime;if(t){t=new Date(t);var r=t.getFullYear()+"-",s=t.getMonth()+1+"-",l=t.getDate();return r+s+l}return""},dateFormatter:function(e,a){var t=e.joinTime;if(t){t=new Date(t);var r=t.getFullYear()+"-",s=t.getMonth()+1+"-",l=t.getDate();return r+s+l}return""},handleSizeChange:function(e){this.pagesize=e,this.getData()},handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios({url:"JinshiBusinessAccount/selectBusinessAccountAll",method:"post",data:{pageNum:e.cur_page,pageSize:e.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(a){a.status<=200&&(e.tableData=[],e.tableData=a.data.BusinessAccountData,console.log(a.data),e.totalRecords=a.data.BusinessAccountRecords)}).catch(function(a){e.$message.error("查询失败: "+a),console.log(a)})},getAgent:function(){this.agent.length=0;var e=this;this.$axios({url:"parkingJinshi/selectAllAgent",method:"post",data:{}}).then(function(a){e.agent=[];for(var t=0;t<a.data.agentNameData.length;t++)e.agent.push({bcAgentName:a.data.agentNameData[t].username})}).catch(function(a){e.$message.error("查询失败: "+a)})},getArea:function(){this.area.length=0;var e=this;this.$axios({url:"jinshiArea/selectAreaNameAll?parkId="+String(localStorage.getItem("parkId")),method:"get"}).then(function(a){e.area=[],console.log(a.data.areaNameData,"11111111111111111111111111111");for(var t=0;t<a.data.areaNameData.length;t++)e.area.push({bcAreaName:a.data.areaNameData[t].areaName})}).catch(function(a){e.$message.error("查询失败: "+a)})},getParking:function(){this.parking.length=0;var e=this;this.$axios({url:"parkingJinshi/selectAllParkingName?parkId="+String(localStorage.getItem("parkId")),method:"post",data:{}}).then(function(a){console.log(a.data),e.parking=[];for(var t=0;t<a.data.parkingNameData.length;t++)e.parking.push({bcParkingName:a.data.parkingNameData[t].jpName}),e.addForm.bcParkingName=a.data.parkingNameData[t].jpName}).catch(function(a){e.$message.error("查询失败: "+a)})},formatter:function(e,a){return e.address},filterTag:function(e,a){return a.tag===e},handleEdit:function(e,a){this.idx=e,this.id=a.bcId,console.log(this.id),this.editForm={bcId:a.bcId,bcName:a.bcName,bcPhone:a.bcPhone,bcWechat:a.bcWechat,bcTel:a.bcTel,bcQq:a.bcQq,bcContactsName:a.bcContactsName,bcUsername:a.bcUsername,bcPassword:a.bcPassword,bcRemarks:a.bcRemarks,passwordsure:a.passwordsure,bcAgentName:a.bcAgentName,bcParkingName:a.bcParkingName,bcAreaName:a.bcAreaName},this.editVisible=!0},saveEdit:function(){var e=this,a=this,t=this.editForm;this.$refs.editForm.validate(function(r){r?e.$axios({url:"JinshiBusinessAccount/updateByPrimaryKey",method:"post",data:t}).then(function(e){if(e.status<=200){if(a.getData(),a.editVisible=!1,a.$message.success("修改成功"),a.$message.success("修改第 ".concat(a.idx+1," 行成功")),a.tableData[a.idx].id===a.id)a.$set(a.tableData,a.idx,a.editForm);else for(var t=0;t<a.tableData.length;t++)if(a.tableData[t].id===a.id)return void a.$set(a.tableData,t,a.editForm);a.getData()}}).catch(function(e){a.$message.success("修改失败！"),console.log(e)}):a.$message.success("格式不正确")})},handleDelete:function(e,a){this.idx=e,this.id=a.bcId,console.log(this.id),this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,a="";this.del_list=this.del_list.concat(this.multipleSelection);for(var t=0;t<e;t++)a+=this.multipleSelection[t].name+" ";this.$message.success("删除了"+a),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveAdd:function(){var e=this,a=this;a.addForm.rolename=a.value,a.addForm.bcAgentName=localStorage.getItem("agentId"),a.addForm.parkId=Number(localStorage.getItem("parkId"));var t=this.addForm;console.log(t),this.$refs.addForm.validate(function(r){r?e.$axios({url:"JinshiBusinessAccount/insert",method:"post",data:t}).then(function(e){console.log(e,"999999999999999999999999999999999"),e.status<=200&&(500==e.data?a.$message.error("用户名已存在"):(a.addVisible=!1,a.$message.success("添加成功"),a.getData()))}).catch(function(e){a.$message.error("添加失败！"),console.log(e)}):a.$message.success("格式不正确")})},deleteRow:function(){var e=this;this.$axios({url:"JinshiBusinessAccount/deleteByPrimaryKey?id="+e.id,method:"post",data:{id:e.id}}).then(function(a){if(a.status<=200)if(e.$message.success("删除成功"),e.getData(),e.delVisible=!1,e.tableData[e.idx].id===e.id)e.tableData.splice(e.idx,1);else for(var t=0;t<e.tableData.length;t++)if(e.tableData[t].id===e.id)return void e.tableData.splice(t,1)}).catch(function(a){e.$message.success("删除失败！"),console.log(a)})}}}),i=l,n=(t("92ff"),t("20a9"),t("2877")),c=Object(n["a"])(i,r,s,!1,null,"12341258",null);a["default"]=c.exports},"92ff":function(e,a,t){"use strict";var r=t("ed48"),s=t.n(r);s.a},ed48:function(e,a,t){}}]);