(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f21898"],{"01d4":function(e,a,t){"use strict";var n=t("112d"),r=t.n(n);r.a},"112d":function(e,a,t){},"4bb9":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"carManager"},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 在场轨迹表\n      ")])],1)],1),t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(a){e.select_word=a},expression:"select_word"}}),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.valueA,callback:function(a){e.valueA=a},expression:"valueA"}}),t("el-date-picker",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.valueB,callback:function(a){e.valueB=a},expression:"valueB"}}),t("el-button",{staticClass:"icon-search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(a){return e.onsearch(1)}}},[e._v("查询")]),t("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),t("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"index",align:"center",label:"序号",width:"100px","class-name":"table"}}),t("el-table-column",{attrs:{prop:"ptCreatTime",label:"时间",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"ptLincensePlateId",label:"车牌号",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"jcName",label:"摄像机",align:"center","class-name":"table"}}),t("el-table-column",{attrs:{prop:"ptStatus",label:"轨迹信息",align:"center","class-name":"table"}})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,"page-sizes":[50,100],total:e.totalRecords,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},r=[],s=(t("386d"),t("a15e"),{name:"carManager",data:function(){return{cur_page:1,pagesize:50,tableData:[],select_word:"",valueA:"",valueB:"",totalRecords:0,numberer:0,condition:0}},created:function(){this.getData()},methods:{refresh:function(){this.getData(),this.select_word=""},handleSizeChange:function(e){0==this.numberer?(this.pagesize=e,console.log(e),this.getData(1)):1==this.numberer?(this.pagesize=e,this.search(1)):(this.pagesize=e,this.onsearch(1))},handleCurrentChange:function(e){0==this.numberer?(this.cur_page=e,this.getData()):1==this.numberer?(this.cur_page=e,this.search(2)):(this.cur_page=e,this.onsearch(2))},handleSelectionChange:function(){},getData:function(e){1==e&&(this.cur_page=1),this.numberer=0;var a=new Date,t=a.getFullYear(),n=a.getMonth()+1,r=a.getDate();n<10&&(n="0"+n),r<10&&(r="0"+r);var s=t+"-"+n+"-"+r;this.valueA=s,this.valueB=s,console.log(window.localStorage.getItem("parkId"));var c=this;c.tableData.length=0,this.$axios({url:"http://58.210.33.107:8080/carmanager_war/jinshiPresenceTrack/selectPresenceTrackAll",method:"post",data:{pageNum:c.cur_page,pageSize:c.pagesize,parkId:window.localStorage.getItem("parkId")}}).then(function(e){c.tableData=[];for(var a=0;a<e.data.PresenceTrackData.length;a++){var t=new Date(e.data.PresenceTrackData[a].ptCreatTime),n=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",s=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",l=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",o=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),u=n+r+s+l+o+i;e.data.PresenceTrackData[a].ptCreatTime=u}c.tableData=e.data.PresenceTrackData,c.totalRecords=e.data.PresenceTrackRecords}).catch(function(e){console.log(e)})},onsearch:function(e){1==e&&(this.cur_page=1),this.numberer=2;var a=this;console.log(window.localStorage.getItem("parkId")),this.$axios({url:"http://58.210.33.107:8080/carmanager_war/jinshiPresenceTrack/selectPresenceTrackByTime",method:"post",data:{keyWord:a.select_word,pageNum:a.cur_page,pageSize:a.pagesize,startTime:a.valueA,endTime:a.valueB,parkId:window.localStorage.getItem("parkId")}}).then(function(e){if(e.status<=200){a.tableData=[],console.log(e,"78789");for(var t=0;t<e.data.PresenceTrackData.length;t++){var n=new Date(e.data.PresenceTrackData[t].ptCreatTime),r=n.getFullYear()+"-",s=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",c=(n.getDate()<10?"0"+n.getDate():n.getDate())+" ",l=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",o=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",i=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds(),u=r+s+c+l+o+i;e.data.PresenceTrackData[t].ptCreatTime=u}a.tableData=e.data.PresenceTrackData,a.totalRecords=e.data.PresenceTrackRecords}}).catch(function(e){a.$message.error("查询失败: "+e),console.log(e)})}}}),c=s,l=(t("aee7"),t("01d4"),t("2877")),o=Object(l["a"])(c,n,r,!1,null,"304e515e",null);a["default"]=o.exports},"4d33":function(e,a,t){},aee7:function(e,a,t){"use strict";var n=t("4d33"),r=t.n(n);r.a}}]);