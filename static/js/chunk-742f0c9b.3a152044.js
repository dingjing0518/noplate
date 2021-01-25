(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-742f0c9b"],{"4ea4":function(e,t,a){},"6c48":function(e,t,a){"use strict";var r=a("4ea4"),i=a.n(r);i.a},ef00:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 收费设置")])],1)],1),a("el-button",{staticClass:"sousuo",staticStyle:{margin:"15px 0px 15px 15px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")]),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[e._v("请选择收费类型")]),a("el-menu-item",{attrs:{index:"11"}},[e._v("小型车")]),a("el-menu-item",{attrs:{index:"12"}},[e._v("中型车(黄牌)")]),a("el-menu-item",{attrs:{index:"13"}},[e._v("大型车(黄牌)")]),a("el-menu-item",{attrs:{index:"14"}},[e._v("新能源车")]),a("el-menu-item",{attrs:{index:"15"}},[e._v("特种车")])],2)],1),a("div",{staticClass:"line"}),a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"180px",rules:e.carFormRules}},[a("div",[e._v(e._s(e.titleName))]),a("el-form-item",{attrs:{label:"免费时间(分钟)：",prop:"freeTime"}},[a("el-input",{attrs:{placeholder:"请输入免费时间"},model:{value:e.form.freeTime,callback:function(t){e.$set(e.form,"freeTime",t)},expression:"form.freeTime"}})],1),a("el-form-item",{attrs:{label:"首段时间(分钟)：",prop:"firstTime"}},[a("el-input",{attrs:{placeholder:"请输入首段时间"},model:{value:e.form.firstTime,callback:function(t){e.$set(e.form,"firstTime",t)},expression:"form.firstTime"}})],1),a("el-form-item",{attrs:{label:"首段收费(元):",prop:"firstCharge"}},[a("el-input",{attrs:{placeholder:"请输入首段收费"},model:{value:e.form.firstCharge,callback:function(t){e.$set(e.form,"firstCharge",t)},expression:"form.firstCharge"}})],1),a("el-form-item",{attrs:{label:"后续时间(分钟)：",prop:"followTime"}},[a("el-input",{attrs:{placeholder:"请输入后续时间"},model:{value:e.form.followTime,callback:function(t){e.$set(e.form,"followTime",t)},expression:"form.followTime"}})],1),a("el-form-item",{attrs:{label:"后续收费(元): ",prop:"followCharge"}},[a("el-input",{attrs:{placeholder:"请输入后续收费"},model:{value:e.form.followCharge,callback:function(t){e.$set(e.form,"followCharge",t)},expression:"form.followCharge"}})],1),a("el-form-item",{attrs:{label:"24小时收费上限(元):",prop:"allDayLimit"}},[a("el-input",{attrs:{placeholder:"请输入24小时收费上限"},model:{value:e.form.allDayLimit,callback:function(t){e.$set(e.form,"allDayLimit",t)},expression:"form.allDayLimit"}})],1),a("el-form-item",{attrs:{label:"预付款后出场时间(分钟):",prop:"payAdvanceOutTime"}},[a("el-input",{attrs:{placeholder:"预付款后出场时间"},model:{value:e.form.payAdvanceOutTime,callback:function(t){e.$set(e.form,"payAdvanceOutTime",t)},expression:"form.payAdvanceOutTime"}})],1),a("div",{staticStyle:{"text-align":"center","margin-bottom":"10px",color:"red","letter-spacing":"3px"}},[e._v("此页面修改完后需重启系统方可生效")]),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),a("el-button",[e._v("取消")])],1)],1)],1)])],1)},i=[],o={name:"baseform",data:function(){return{form:{freeTime:"",firstTime:"",firstCharge:"",followTime:"",followCharge:"",allDayLimit:"",payAdvanceOutTime:""},activeIndex:"11",titleName:"小型车",carFormRules:{freeTime:[{message:"请输入免费时长",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],firstTime:[{message:"请输入首段时间",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],firstCharge:[{message:"请输入首段收费",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],followTime:[{message:"请输入后续时长",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],followCharge:[{message:"请输入后续收费",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],allDayLimit:[{message:"请输入收费上限",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}],payAdvanceOutTime:[{message:"请输入出场时间",required:!0,trigger:"blur"},{pattern:/^[0-9]+$/,message:"只允许输入数字"}]}}},created:function(){var e=this;this.titleName="小型车",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:"11",parkId:String(localStorage.getItem("parkId"))}}).then(function(t){t.status<=200&&(e.form=t.data,console.log(t.data,"获取所有的"))}).catch(function(t){e.$message.error(t),console.log(t)})},methods:{refresh:function(){var e=this;this.titleName="小型车",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:"11"}}).then(function(t){e.form={},t.status<=200&&(e.form=t.data,console.log(t.data,"获取所有的"))}).catch(function(t){e.$message.error(t),console.log(t)}),this.form={}},onSubmit:function(){var e=this;console.log(e.activeIndex),this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/updateJinshiParkSetting",method:"post",data:{carType:String(e.activeIndex),freeTime:String(e.form.freeTime),firstTime:String(e.form.firstTime),firstCharge:String(e.form.firstCharge),followTime:String(e.form.followTime),followCharge:String(e.form.followCharge),allDayLimit:String(e.form.allDayLimit),payAdvanceOutTime:String(e.form.payAdvanceOutTime),parkId:String(localStorage.getItem("parkId")),agentId:String(localStorage.getItem("agentId"))}}).then(function(t){t.status<=200&&(console.log(e.activeIndex,"提交"),e.$message.success("修改成功！"))}).catch(function(t){e.$message.error("修改失败： "+t),console.log(t)})},handleSelect:function(e,t){var a=this;11==e?(this.activeIndex="11",this.titleName="小型车",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:e,parkId:String(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(a.form=e.data,console.log(e.data,"小型车"))}).catch(function(e){a.$message.error(e),console.log(e)})):12==e?(this.activeIndex="12",this.titleName="中型车(黄牌)",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:e,parkId:String(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(a.form=e.data,console.log(e.data,"中型车"))}).catch(function(e){a.$message.error(e),console.log(e)})):13==e?(this.activeIndex="13",this.titleName="大型车(黄牌)",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:e,parkId:String(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(a.form=e.data,console.log(e.data,"大型车"))}).catch(function(e){a.$message.error(e),console.log(e)})):14==e?(this.activeIndex="14",this.titleName="新能源车",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:e,parkId:String(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(a.form=e.data,console.log(e.data,"新能源车"))}).catch(function(e){a.$message.error(e),console.log(e)})):15==e&&(this.activeIndex="15",this.titleName="特种车",this.$axios({url:"http://123.207.168.102:8089/carmanager-TEST/JinshiParkSetting/getGlobalVariable",method:"post",data:{carType:e,parkId:String(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(a.form=e.data,console.log(e.data,"特种车"))}).catch(function(e){a.$message.error(e),console.log(e)}))}}},l=o,s=(a("6c48"),a("2877")),n=Object(s["a"])(l,r,i,!1,null,"0d966505",null);t["default"]=n.exports}}]);