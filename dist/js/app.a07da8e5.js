(function(e){function s(s){for(var n,i,o=s[0],u=s[1],l=s[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(s);while(m.length)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],n=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(n=!1)}n&&(r.splice(s--,1),e=i(i.s=t[0]))}return e}var n={},a={app:0},r=[];function i(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)i.d(t,n,function(s){return e[s]}.bind(null,n));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var c=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var n=t("85ec"),a=t.n(n);a.a},"0c02":function(e,s,t){},1:function(e,s){},"1fff":function(e,s,t){"use strict";var n=t("beae"),a=t.n(n);a.a},"2ca7":function(e,s,t){"use strict";var n=t("31bf"),a=t.n(n);a.a},"31bf":function(e,s,t){},"324d":function(e,s,t){"use strict";var n=t("0c02"),a=t.n(n);a.a},"3ec7":function(e,s,t){"use strict";var n=t("cd13"),a=t.n(n);a.a},4678:function(e,s,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=r(e);return t(s)}function r(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("app-header"),t("router-view")],1)},r=[],i=(t("b0c0"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",[t("ul",[t("li",[t("router-link",{attrs:{to:"/",exact:""}},[e._v("Pocetna")])],1),t("li",[t("router-link",{attrs:{to:"/schedulingclient"}},[e._v("Zakazite termin")])],1),t("li",[t("router-link",{attrs:{to:"/adduser"}},[e._v("Novi korisnik")])],1),t("li",[t("router-link",{attrs:{to:"/addbusiness"}},[e._v("Novi salon")])],1)])])}),o=[],u={},l=u,c=(t("1fff"),t("2877")),d=Object(c["a"])(l,i,o,!1,null,"1972ee02",null),m=d.exports,b={components:{"app-header":m},data:function(){return{msg:"welcome ",usrnm:"",wlc:"",por:"",user:{name:"",password:""}}},methods:{welcome:function(){return this.por="Zdravo "+this.user.name,this.msg+this.usrnm},submit:function(){console.log("USER",this.user)}},computed:{}},f=b,p=(t("034f"),Object(c["a"])(f,a,r,!1,null,null,null)),v=p.exports,j=t("8c4f"),h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"add-user"}},[e.submitted?e._e():t("form",[t("h2",[e._v(" Unesite svoje podatke: ")]),t("label",{attrs:{for:"username"}},[e._v(" Korisnicko ime:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("label",[e._v(" Lozinka:")]),t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.user.psw,expression:"user.psw",modifiers:{lazy:!0}}],attrs:{type:"password"},domProps:{value:e.user.psw},on:{change:[function(s){return e.$set(e.user,"psw",s.target.value)},e.pswrds]}}),t("label",[e._v(" Potvrdi lozinku:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.repsw,expression:"user.repsw"}],attrs:{type:"password"},domProps:{value:e.user.repsw},on:{input:function(s){s.target.composing||e.$set(e.user,"repsw",s.target.value)}}}),t("label",[e._v(" Ime:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(s){s.target.composing||e.$set(e.user,"name",s.target.value)}}}),t("label",[e._v(" Prezime:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surname,expression:"user.surname"}],attrs:{type:"text"},domProps:{value:e.user.surname},on:{input:function(s){s.target.composing||e.$set(e.user,"surname",s.target.value)}}}),t("label",[e._v(" telefon:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel,expression:"user.tel"}],attrs:{type:"text"},domProps:{value:e.user.tel},on:{input:function(s){s.target.composing||e.$set(e.user,"tel",s.target.value)}}}),t("label",[e._v(" e-mail:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.mail,expression:"user.mail"}],attrs:{type:"text"},domProps:{value:e.user.mail},on:{input:function(s){s.target.composing||e.$set(e.user,"mail",s.target.value)}}}),t("button",{on:{click:function(s){return s.preventDefault(),e.post(s)}}},[e._v("Kreiraj korisnika")])]),e.submitted?t("div",{attrs:{id:"preview"}},[e._m(0),t("p",[e._v(" Korisnicko ime: "+e._s(e.user.username))]),t("p",[e._v(" Ime: "+e._s(e.user.name))]),t("p",[e._v(" Prezime: "+e._s(e.user.surname))]),t("p",[e._v(" Telefon: "+e._s(e.user.tel))]),t("p",[e._v(" E-mail: "+e._s(e.user.mail))]),t("button",{on:{click:function(s){e.to,e.home}}},[e._v("Na pocetnu")])]):e._e()])},g=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h3",[e._v("Kreirali ste korisnika")])])}],_={data:function(){return{user:{username:"",psw:"",repsw:"",name:"",surname:"",tel:"",mail:""},submitted:!1}},methods:{post:function(){this.$http.post("https://scheduling-nwt.firebaseio.com//users.json",this.user).then((function(e){console.log(e),this.submitted=!0}))},pswrds:function(){this.business.bpsw!=this.business.brepsw&&alert("Lozinke se ne slazu, pokusajte ponovo!")}}},w=_,y=(t("324d"),Object(c["a"])(w,h,g,!1,null,"18647fa4",null)),k=y.exports,z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"add-business"}},[e.submitted?e._e():t("form",[t("h2",[e._v("Unesite svoje podatke:")]),t("label",[e._v("Korisnicko ime:")]),t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.business.busername,expression:"business.busername",modifiers:{lazy:!0}}],attrs:{type:"text",name:"busername"},domProps:{value:e.business.busername},on:{change:[function(s){return e.$set(e.business,"busername",s.target.value)},e.checkbsrnm]}}),t("label",[e._v("Lozinka:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bpsw,expression:"business.bpsw"}],attrs:{name:"bpassword",type:"password"},domProps:{value:e.business.bpsw},on:{input:function(s){s.target.composing||e.$set(e.business,"bpsw",s.target.value)}}}),t("label",[e._v("Ponovite lozinku:")]),t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.business.brepsw,expression:"business.brepsw",modifiers:{lazy:!0}}],attrs:{name:"brepassword",type:"password"},domProps:{value:e.business.brepsw},on:{change:[function(s){return e.$set(e.business,"brepsw",s.target.value)},e.pswrds]}}),t("label",[e._v("Ime firme:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bname,expression:"business.bname"}],attrs:{type:"text"},domProps:{value:e.business.bname},on:{input:function(s){s.target.composing||e.$set(e.business,"bname",s.target.value)}}}),t("label",[e._v("Delatnost:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.business.activity,expression:"business.activity"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.$set(e.business,"activity",s.target.multiple?t:t[0])}}},e._l(e.delatnosti,(function(s){return t("option",{key:s},[e._v(e._s(s))])})),0),t("label",[e._v("Telefon:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business.btel,expression:"business.btel"}],attrs:{type:"text"},domProps:{value:e.business.btel},on:{input:function(s){s.target.composing||e.$set(e.business,"btel",s.target.value)}}}),t("label",[e._v("Elektronska posta:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bmail,expression:"business.bmail"}],attrs:{type:"text"},domProps:{value:e.business.bmail},on:{input:function(s){s.target.composing||e.$set(e.business,"bmail",s.target.value)}}}),t("label",[e._v("Web sajt:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.business.site,expression:"business.site"}],attrs:{type:"text"},domProps:{value:e.business.site},on:{input:function(s){s.target.composing||e.$set(e.business,"site",s.target.value)}}}),t("button",{on:{click:function(s){return s.preventDefault(),e.post(s)}}},[e._v("Napravi nalog")]),t("p",[e._v(e._s(e.nanaslovnu))])]),e.submitted?t("div",{attrs:{id:"preview"}},[e._m(0),t("p",[e._v("Korisnicko ime: "+e._s(e.business.busername))]),t("p",[e._v("Naziv: "+e._s(e.business.bname))]),t("p",[e._v("Delatnost: "+e._s(e.business.activity))]),t("p",[e._v("Address: "+e._s(e.business.baddress))]),t("p",[e._v("Telefon: "+e._s(e.business.btel))]),t("p",[e._v("Elektronska posta: "+e._s(e.business.bmail))]),t("router-link",{attrs:{to:"/schedulingclient"}},[t("p",[e._v("Na pocetnu")])])],1):e._e()])},x=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h3",[e._v("Kreirali ste vas nalog!")])])}],D=t("f837"),P={directives:{focus:D["focus"]},data:function(){return{activities:{busername:"",bpsw:"",brepsw:"",activity:"",bname:"",baddress:"",btel:"",bmail:"",site:""},business:{busername:"",bpsw:"",brepsw:"",activity:"",bname:"",baddress:"",btel:"",bmail:"",site:""},delatnosti:["Frizerski salon","Fitnes","Zubar"],submitted:!1,nanaslovnu:"",act:[]}},methods:{post:function(){this.$http.post("https://scheduling-nwt.firebaseio.com//business.json",this.business).then((function(e){console.log(e),this.submitted=!0}))},pswrds:function(){this.business.bpsw!=this.business.brepsw&&alert("Lozinke se ne slazu, pokusajte ponovo!")}},created:function(){this.$http.get("https://scheduling-nwt.firebaseio.com//business.json").then((function(e){console.log(e),this.act=e.body,console.log(this.act)}))}},$=P,O=(t("2ca7"),Object(c["a"])($,z,x,!1,null,"0dd29afa",null)),N=O.exports,E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"scheduling-client"}},[t("h3",[e._v("Izaberite salon:")]),e.submitted?e._e():t("form",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.activity,expression:"activity"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.activity=s.target.multiple?t:t[0]}}},e._l(e.act,(function(s){return t("option",{key:s.bname,staticClass:"scheduling-client"},[e._v(e._s(s.bname))])})),0)]),t("div",[t("h3",[e._v("Odaberite datum")]),t("p",[t("date-picker",{attrs:{value:e.date,lang:"sr","first-day-of-week":1,"not-before":new Date,format:e.dateFormat},on:{change:e.updateDate}})],1),""!=e.date?t("h2",[e._v("Datum "+e._s(e._f("formattingDate")(e.date)))]):e._e()]),t("br"),t("form",[e.isOpenDate?t("div",{attrs:{id:"satnice"}},[t("ul",e._l(e.hours,(function(s){return t("li",{key:s.hour,on:{click:e.doBooking}},[t("h2",[e._v(e._s(s.hour)+":"+e._s(s.minutes))])])})),0)]):t("div",[t("br"),t("br"),t("h1",{staticClass:"notOpenDay"},[e._v("Zao nam je, "+e._s(e._f("formattingDate")(e.date))+" je neradni. Pokusajte neki drugi dan")])])]),t("button",{staticClass:"call"},[e._v("Say Hello")])])},M=[],S=(t("caad"),t("2532"),t("ec45")),Y=(t("411c"),t("da72"),{components:{DatePicker:S["default"]},data:function(){return{hours:[{hour:9,minutes:"00"},{hour:9,minutes:"30"},{hour:10,minutes:"00"},{hour:10,minutes:"30"},{hour:11,minutes:"00"},{hour:11,minutes:"30"},{hour:12,minutes:"00"},{hour:12,minutes:"30"},{hour:13,minutes:"00"},{hour:13,minutes:"30"},{hour:16,minutes:"30"},{hour:17,minutes:"00"},{hour:17,minutes:"30"},{hour:18,minutes:"00"},{hour:18,minutes:"30"},{hour:19,minutes:"00"}],openDays:[1,2,3,4,5],dateFormat:"DD-MM-YYYY",lang:{formatLocale:{firstDayOfWeek:1},monthBeforeYear:!1},date:new Date,business:{},activities:[],act:[],newBooking:{name:"",phone:"",fixture:{}},isBooking:!1,showBookingModal:!1,submitted:!1}},methods:{updateDate:function(e){var s=new Date(e);s.setHours(12),this.date=s,console.log(e)},doBooking:function(){}},computed:{isOpenDate:function(){return console.log("dan u nedelji "+new Date(this.date).getDay()),this.openDays.includes(new Date(this.date).getDay())}},created:function(){this.$http.get("https://scheduling-nwt.firebaseio.com//business.json").then((function(e){console.log(e),this.activities=e.body,this.act=e.body,console.log(this.act)}))}}),K=Y,B=(t("3ec7"),Object(c["a"])(K,E,M,!1,null,"5b652d00",null)),L=B.exports,T=[{path:"/",component:L},{path:"/adduser",component:k},{path:"/addbusiness",component:N},{path:"/schedulingclient",component:L}],F=t("28dd"),U=t("2f62");n["default"].use(U["a"]);var C=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=t("0ff26"),Z=t("c1df"),A=t.n(Z);n["default"].use(F["a"]),n["default"].use(j["a"]),n["default"].use(I["a"]);var q=new j["a"]({mode:"history",routes:T});n["default"].filter("formattingDate",(function(e){if(e)return A()(String(e)).format("DD-MM-YYYY ")})),new n["default"]({el:"#app",render:function(e){return e(v)},router:q,store:C})},"85ec":function(e,s,t){},beae:function(e,s,t){},cd13:function(e,s,t){}});
//# sourceMappingURL=app.a07da8e5.js.map