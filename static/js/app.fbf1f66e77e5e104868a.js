webpackJsonp([1],{10:function(t,e,a){"use strict";var s=(a(33),a(34));a.n(s);e.a={name:"app",data:function(){return{}}}},11:function(t,e,a){"use strict";var s=a(40),i=a.n(s),r=a(68),o=(a.n(r),a(72)),n=(a.n(o),a(74)),l=a.n(n),c=a(91),u=a(94);e.a={name:"Home",data:function(){return{dianzan:!1,addressList:[{value:"1",label:"上海xx店"},{value:"2",label:"杭州xx店"},{value:"3",label:"北京xx店"},{value:"4",label:"成都xx店"}],swiperOption:{loop:!0,speed:900,notNextTick:!0,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}},checkOptions:[{value:"1",label:"员工"},{value:"2",label:"门店"}],formData:{userName:"",mobile:"",address:"",city:"",suggest:"",questionDesc:"",complaintType:[],pictureUrl:"",staffName:""},filename:"",fileLoading:!1,rules:{userName:!1,mobile:!1,address:!1,city:!1,suggest:!1,questionDesc:!1,complaintType:!1,file:!1},imageList:["../../../static/image/0.jpg","../../../static/image/1.jpg","../../../static/image/4.jpg","../../../static/image/3.jpg"]}},components:{Title:c.a,Error:u.a,swiper:o.swiper,swiperSlide:o.swiperSlide},computed:{},methods:{checkRules:function(t){return this.formData[t].length?(this.rules[t]=!1,!1):(this.rules[t]=!0,!0)},changeInitData:function(){this.formData.address="",this.formData.staffName=""},submit:function(){if(this.checkRules("complaintType"))return void this.$refs.complaintType.scrollIntoView(!0);if(this.checkRules("questionDesc"))return void this.$refs.question.scrollIntoView(!0);if(!("2"==this.formData.complaintType&&this.checkRules("address")||this.checkRules("city")||this.checkRules("userName")||this.checkRules("mobile"))){var t=this,e=(this.formData.complaintType,i()({},this.formData));l.a.post("/api/back/add",e,{headers:{"Content-Type":"application/json"},timeout:5e3}).then(function(e){e&&200===e.status&&e.data&&0===e.data.code&&(Object(r.Toast)({message:"提交成功",iconClass:"icon icon-success"}),t.formData=i()({},t.$options.data().formData))}).catch(function(t){console.log(t)})}},uploadFile:function(){var t=this.$refs.file.files[0];if(this.rules.file=!1,t.size>209715200)return void(this.rules.file=!0);var e=this,a=new FormData;a.append("file",t),l.a.post("/api/common/upload",a).then(function(t){t&&200===t.status&&t.data&&0===t.data.code&&(e.formData.pictureUrl=t.data.url,e.filename=t.data.fileName)}).catch(function(t){console.log(t)})},cancelFile:function(){this.formData.pictureUrl=""}}}},25:function(t,e,a){"use strict";e.a={props:["title","req","tips"]}},26:function(t,e,a){"use strict";e.a={props:["rule","content"]}},27:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=a(30),r=a(36),o=a(98),n=(a.n(o),a(99));a.n(n);s.default.config.productionTip=!1,new s.default({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},30:function(t,e,a){"use strict";function s(t){a(31)}var i=a(10),r=a(35),o=a(1),n=s,l=o(i.a,r.a,!1,n,null,null);e.a=l.exports},31:function(t,e){},33:function(t,e,a){"use strict"},34:function(t,e){!function(t,e){function a(){var t=s.clientWidth/10;s.style.fontSize=t+"px"}var s=e.documentElement,i=t.devicePixelRatio||1;if(a(),t.addEventListener("resize",a),t.addEventListener("pageshow",function(t){t.persisted&&a()}),i>=2){var r=e.createElement("body"),o=e.createElement("div");o.style.border=".5px solid transparent",r.appendChild(o),s.appendChild(r),1===o.offsetHeight&&s.classList.add("hairlines"),s.removeChild(r)}}(window,document)},35:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},36:function(t,e,a){"use strict";var s=a(3),i=a(37),r=a(38);s.default.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a}]})},38:function(t,e,a){"use strict";function s(t){a(39)}var i=a(11),r=a(97),o=a(1),n=s,l=o(i.a,r.a,!1,n,"data-v-4d19c15a",null);e.a=l.exports},39:function(t,e){},91:function(t,e,a){"use strict";function s(t){a(92)}var i=a(25),r=a(93),o=a(1),n=s,l=o(i.a,r.a,!1,n,"data-v-07387286",null);e.a=l.exports},92:function(t,e){},93:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"h-title"},[a("h3",[t._v(t._s(t.title))]),t._v(" "),t.req?a("label",[t._v("*")]):t._e()]),t._v(" "),t.tips?a("p",{staticClass:"tips"},[t._v(t._s(t.tips))]):t._e()])},i=[],r={render:s,staticRenderFns:i};e.a=r},94:function(t,e,a){"use strict";function s(t){a(95)}var i=a(26),r=a(96),o=a(1),n=s,l=o(i.a,r.a,!1,n,"data-v-f5977220",null);e.a=l.exports},95:function(t,e){},96:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rule?a("label",{staticClass:"error"},[a("svg",{staticClass:"icon",attrs:{t:"1584318208442",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2930",width:"15",height:"15"}},[a("path",{attrs:{d:"M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m44.245333-469.333333l159.914667-159.914667a31.274667 31.274667 0 1 0-44.245333-44.245333L512 467.754667 352.085333 307.84a31.274667 31.274667 0 1 0-44.245333 44.245333L467.754667 512l-159.914667 159.914667a31.274667 31.274667 0 1 0 44.245333 44.245333L512 556.245333l159.914667 159.914667a31.274667 31.274667 0 1 0 44.245333-44.245333L556.245333 512z",fill:"#F5222D","p-id":"2931"}})]),t._v(t._s(t.content||"请填写此项")+"\n")]):t._e()},i=[],r={render:s,staticRenderFns:i};e.a=r},97:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-wrap"},[a("div",{staticClass:"banner-box"},[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.imageList,function(t,e){return a("swiper-slide",{key:e},[a("img",{attrs:{src:t,width:"100%",height:"150"}})])}),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),a("section",[t._m(0),t._v(" "),a("div",{staticClass:"form"},[a("div",{ref:"complaintType",staticClass:"form-box"},[a("Title",{attrs:{title:"投诉类别",req:"true"}}),t._v(" "),a("div",{staticClass:"input-box"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.complaintType,expression:"formData.complaintType"}],staticClass:"check-box",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"complaintType",e.target.multiple?a:a[0])},t.changeInitData]}},t._l(t.checkOptions,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}),0),t._v(" "),a("Error",{attrs:{rule:t.rules.complaintType}})],1)],1),t._v(" "),a("div",{ref:"question",staticClass:"form-box"},[a("Title",{attrs:{title:"问题描述",req:"true",tips:"对于提升九田家菜品/服务/环境等方面，您有什么好的建议或意见？或您在就餐过程中遇到的问题."}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.questionDesc,expression:"formData.questionDesc"}],staticClass:"input-box",domProps:{value:t.formData.questionDesc},on:{blur:function(e){return t.checkRules("questionDesc")},input:function(e){e.target.composing||t.$set(t.formData,"questionDesc",e.target.value)}}}),t._v(" "),a("Error",{attrs:{rule:t.rules.questionDesc}})],1),t._v(" "),a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"改进措施"}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.suggest,expression:"formData.suggest"}],staticClass:"input-box",domProps:{value:t.formData.suggest},on:{input:function(e){e.target.composing||t.$set(t.formData,"suggest",e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"门店所属城市",req:"true",tips:"请输入您就餐门店所属省市"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.city,expression:"formData.city"}],staticClass:"input-box",domProps:{value:t.formData.city},on:{blur:function(e){return t.checkRules("city")},input:function(e){e.target.composing||t.$set(t.formData,"city",e.target.value)}}}),t._v(" "),a("Error",{attrs:{rule:t.rules.city}})],1),t._v(" "),"2"==t.formData.complaintType?a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"门店具体地址",req:"true",tips:"请输入门店具体街道或商超名称"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.address,expression:"formData.address"}],staticClass:"check-box",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"address",e.target.multiple?a:a[0])}}},t._l(t.addressList,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])}),0),t._v(" "),a("Error",{attrs:{rule:t.rules.address}})],1):t._e(),t._v(" "),"1"==t.formData.complaintType?a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"员工姓名",tips:"请输入员工姓名"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.staffName,expression:"formData.staffName"}],staticClass:"input-box",domProps:{value:t.formData.staffName},on:{input:function(e){e.target.composing||t.$set(t.formData,"staffName",e.target.value)}}})],1):t._e(),t._v(" "),a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"上传附件",tips:"(文件、图片、视频、音频等)"}}),t._v(" "),a("div",{staticClass:"upload"},[t.formData.pictureUrl?t._e():a("div",[t._m(1),t._v(" "),a("input",{ref:"file",staticClass:"input-box",attrs:{type:"file"},on:{change:t.uploadFile}})]),t._v(" "),t.formData.pictureUrl?a("div",[a("p",{staticClass:"finish-file"},[a("a",{attrs:{href:t.formData.pictureUrl}},[t._v(t._s(t.filename))]),t._v(" "),a("svg",{staticClass:"icon",attrs:{t:"1584318208442",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2930",width:"15",height:"15"},on:{click:t.cancelFile}},[a("path",{attrs:{d:"M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m44.245333-469.333333l159.914667-159.914667a31.274667 31.274667 0 1 0-44.245333-44.245333L512 467.754667 352.085333 307.84a31.274667 31.274667 0 1 0-44.245333 44.245333L467.754667 512l-159.914667 159.914667a31.274667 31.274667 0 1 0 44.245333 44.245333L512 556.245333l159.914667 159.914667a31.274667 31.274667 0 1 0 44.245333-44.245333L556.245333 512z",fill:"#F5222D","p-id":"2931"}})])])]):t._e()]),t._v(" "),a("Error",{attrs:{rule:t.rules.file,content:"文件大小限制每个200.0MB以内"}})],1),t._v(" "),a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"姓名",req:"true"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.userName,expression:"formData.userName"}],staticClass:"input-box",domProps:{value:t.formData.userName},on:{blur:function(e){return t.checkRules("userName")},input:function(e){e.target.composing||t.$set(t.formData,"userName",e.target.value)}}}),t._v(" "),a("Error",{attrs:{rule:t.rules.userName}})],1),t._v(" "),a("div",{staticClass:"form-box"},[a("Title",{attrs:{title:"电话",req:"true"}}),t._v(" "),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.mobile,expression:"formData.mobile"}],staticClass:"input-box",domProps:{value:t.formData.mobile},on:{blur:function(e){return t.checkRules("mobile")},input:function(e){e.target.composing||t.$set(t.formData,"mobile",e.target.value)}}}),t._v(" "),a("svg",{staticClass:"icon",attrs:{t:"1584315906615",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2004",width:"20",height:"20"}},[a("path",{attrs:{d:"M772.654545 900.654545l-13.963636-4.654545C165.236364 714.472727 128 265.309091 125.672727 260.654545V232.727273l155.927273-116.363637 160.581818 209.454546-81.454545 90.763636c27.927273 95.418182 174.545455 200.145455 242.036363 242.036364l109.381819-74.472727 190.836363 169.890909-130.327273 146.618181zM172.218182 258.327273c2.327273 25.6 44.218182 416.581818 586.472727 588.8l83.781818-88.436364-128-114.036364-104.727272 69.818182-11.636364-6.981818c-9.309091-6.981818-249.018182-146.618182-279.272727-290.909091l-2.327273-11.636363 72.145454-79.127273L279.272727 183.854545l-107.054545 74.472728z","p-id":"2005"}})])]),t._v(" "),a("Error",{attrs:{rule:t.rules.mobile}})],1),t._v(" "),a("div",{staticClass:"submit-boxx"},[a("div",{staticClass:"buttom",on:{click:t.submit}},[t._v("提交")])])])]),t._v(" "),a("footer",[t._v("零吆工作室提供技术支持")])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("XX家—投诉建议")]),t._v(" "),a("p",[t._v("打造极致产品丨成就百年企业！")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("i",[t._v("+")]),t._v(" 点此选择上传文件、限制每个200.0MB以内。\n            ")])}],r={render:s,staticRenderFns:i};e.a=r},98:function(t,e){},99:function(t,e){}},[27]);
//# sourceMappingURL=app.fbf1f66e77e5e104868a.js.map