(function(e){function t(t){for(var n,i,r=t[0],u=t[1],l=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var u=s[r];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var c=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"0c02":function(e,t,s){},1:function(e,t){},"265a":function(e,t,s){"use strict";var n=s("5874"),a=s.n(n);a.a},"324d":function(e,t,s){"use strict";var n=s("0c02"),a=s.n(n);a.a},"3d03":function(e,t,s){"use strict";var n=s("6d57"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("4de4"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("app-header"),s("router-view")],1)},o=[],i=(s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("ul",[s("li",[s("router-link",{attrs:{to:"/",exact:""}},[e._v("Pocetna")])],1),s("li",[s("router-link",{attrs:{to:"/schedulingclient"}},[e._v("Zakazite termin")])],1),s("li",[s("router-link",{attrs:{to:"/unschedulingclient"}},[e._v("Otkazite termin")])],1),s("li",[s("router-link",{attrs:{to:"/adduser"}},[e._v("Novi korisnik")])],1),s("li",[s("router-link",{attrs:{to:"/addbusiness"}},[e._v("Novi salon")])],1)])])}),r=[],u={},l=u,c=(s("92a9"),s("2877")),d=Object(c["a"])(l,i,r,!1,null,"a0ec8a62",null),m=d.exports,p={components:{"app-header":m},data:function(){return{msg:"welcome ",usrnm:"",wlc:"",por:"",user:{name:"",password:""}}},methods:{welcome:function(){return this.por="Zdravo "+this.user.name,this.msg+this.usrnm},submit:function(){console.log("USER",this.user)}},computed:{}},f=p,b=(s("034f"),Object(c["a"])(f,a,o,!1,null,null,null)),v=b.exports,h=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"add-user"}},[e.submitted?e._e():s("form",[s("h2",[e._v(" Unesite svoje podatke: ")]),s("label",{attrs:{for:"username"}},[e._v(" Korisnicko ime:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("label",[e._v(" Lozinka:")]),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.user.psw,expression:"user.psw",modifiers:{lazy:!0}}],attrs:{type:"password"},domProps:{value:e.user.psw},on:{change:[function(t){return e.$set(e.user,"psw",t.target.value)},e.pswrds]}}),s("label",[e._v(" Potvrdi lozinku:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.repsw,expression:"user.repsw"}],attrs:{type:"password"},domProps:{value:e.user.repsw},on:{input:function(t){t.target.composing||e.$set(e.user,"repsw",t.target.value)}}}),s("label",[e._v(" Ime:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),s("label",[e._v(" Prezime:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surname,expression:"user.surname"}],attrs:{type:"text"},domProps:{value:e.user.surname},on:{input:function(t){t.target.composing||e.$set(e.user,"surname",t.target.value)}}}),s("label",[e._v(" telefon:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel,expression:"user.tel"}],attrs:{type:"text"},domProps:{value:e.user.tel},on:{input:function(t){t.target.composing||e.$set(e.user,"tel",t.target.value)}}}),s("label",[e._v(" e-mail:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.mail,expression:"user.mail"}],attrs:{type:"text"},domProps:{value:e.user.mail},on:{input:function(t){t.target.composing||e.$set(e.user,"mail",t.target.value)}}}),s("button",{on:{click:function(t){return t.preventDefault(),e.post(t)}}},[e._v("Kreiraj korisnika")])]),e.submitted?s("div",{attrs:{id:"preview"}},[e._m(0),s("p",[e._v(" Korisnicko ime: "+e._s(e.user.username))]),s("p",[e._v(" Ime: "+e._s(e.user.name))]),s("p",[e._v(" Prezime: "+e._s(e.user.surname))]),s("p",[e._v(" Telefon: "+e._s(e.user.tel))]),s("p",[e._v(" E-mail: "+e._s(e.user.mail))]),s("button",{on:{click:function(t){e.to,e.home}}},[e._v("Na pocetnu")])]):e._e()])},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Kreirali ste korisnika")])])}],k={data:function(){return{user:{username:"",psw:"",repsw:"",name:"",surname:"",tel:"",mail:""},submitted:!1}},methods:{post:function(){this.$http.post("https://scheduling-nwt.firebaseio.com//users.json",this.user).then((function(e){console.log(e),this.submitted=!0}))},pswrds:function(){this.business.bpsw!=this.business.brepsw&&alert("Lozinke se ne slazu, pokusajte ponovo!")}}},w=k,_=(s("324d"),Object(c["a"])(w,g,j,!1,null,"18647fa4",null)),y=_.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"add-business"}},[e.submitted?e._e():s("form",[s("h2",[e._v("Unesite svoje podatke:")]),s("label",[e._v("Korisnicko ime:")]),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.business.busername,expression:"business.busername",modifiers:{lazy:!0}}],attrs:{type:"text",name:"busername"},domProps:{value:e.business.busername},on:{change:[function(t){return e.$set(e.business,"busername",t.target.value)},e.checkbsrnm]}}),s("label",[e._v("Lozinka:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bpsw,expression:"business.bpsw"}],attrs:{name:"bpassword",type:"password"},domProps:{value:e.business.bpsw},on:{input:function(t){t.target.composing||e.$set(e.business,"bpsw",t.target.value)}}}),s("label",[e._v("Ponovite lozinku:")]),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.business.brepsw,expression:"business.brepsw",modifiers:{lazy:!0}}],attrs:{name:"brepassword",type:"password"},domProps:{value:e.business.brepsw},on:{change:[function(t){return e.$set(e.business,"brepsw",t.target.value)},e.pswrds]}}),s("label",[e._v("Ime firme:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bname,expression:"business.bname"}],attrs:{type:"text"},domProps:{value:e.business.bname},on:{input:function(t){t.target.composing||e.$set(e.business,"bname",t.target.value)}}}),s("label",[e._v("Delatnost:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.business.activity,expression:"business.activity"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.business,"activity",t.target.multiple?s:s[0])}}},e._l(e.delatnosti,(function(t){return s("option",{key:t},[e._v(e._s(t))])})),0),s("label",[e._v("Telefon:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.business.btel,expression:"business.btel"}],attrs:{type:"text"},domProps:{value:e.business.btel},on:{input:function(t){t.target.composing||e.$set(e.business,"btel",t.target.value)}}}),s("label",[e._v("Elektronska posta:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.business.bmail,expression:"business.bmail"}],attrs:{type:"text"},domProps:{value:e.business.bmail},on:{input:function(t){t.target.composing||e.$set(e.business,"bmail",t.target.value)}}}),s("label",[e._v("Web sajt:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.business.site,expression:"business.site"}],attrs:{type:"text"},domProps:{value:e.business.site},on:{input:function(t){t.target.composing||e.$set(e.business,"site",t.target.value)}}}),s("button",{on:{click:function(t){return t.preventDefault(),e.post(t)}}},[e._v("Napravi nalog")]),s("p",[e._v(e._s(e.nanaslovnu))])]),e.submitted?s("div",{attrs:{id:"preview"}},[e._m(0),s("p",[e._v("Korisnicko ime: "+e._s(e.business.busername))]),s("p",[e._v("Naziv: "+e._s(e.business.bname))]),s("p",[e._v("Delatnost: "+e._s(e.business.activity))]),s("p",[e._v("Address: "+e._s(e.business.baddress))]),s("p",[e._v("Telefon: "+e._s(e.business.btel))]),s("p",[e._v("Elektronska posta: "+e._s(e.business.bmail))]),s("router-link",{attrs:{to:"/schedulingclient"}},[s("p",[e._v("Na pocetnu")])])],1):e._e()])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Kreirali ste vas nalog!")])])}],D=s("f837"),P={directives:{focus:D["focus"]},data:function(){return{activities:{busername:"",bpsw:"",brepsw:"",activity:"",bname:"",baddress:"",btel:"",bmail:"",site:""},business:{busername:"",bpsw:"",brepsw:"",activity:"",bname:"",baddress:"",btel:"",bmail:"",site:""},delatnosti:["Frizerski salon","Fitnes","Zubar"],submitted:!1,nanaslovnu:"",act:[]}},methods:{post:function(){this.$http.post("https://scheduling-nwt.firebaseio.com//business.json",this.business).then((function(e){console.log(e),this.submitted=!0}))},pswrds:function(){this.business.bpsw!=this.business.brepsw&&alert("Lozinke se ne slazu, pokusajte ponovo!")}},created:function(){this.$http.get("https://scheduling-nwt.firebaseio.com//business.json").then((function(e){console.log(e),this.act=e.body,console.log(this.act)}))}},B=P,N=(s("3d03"),Object(c["a"])(B,z,x,!1,null,"675bbb6c",null)),$=N.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"scheduling-client"}},[e.submitted?e._e():s("form",[s("h3",[e._v("Izaberite delatnost")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.delatnost,expression:"delatnost"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.delatnost=t.target.multiple?s:s[0]},function(t){return e.onChangeD(t)}]}},e._l(e.delatnosti,(function(t){return s("option",{key:t},[e._v(e._s(t))])})),0),s("h3",[e._v("Izaberite salon:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.act,expression:"act"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.act=t.target.multiple?s:s[0]},function(t){return e.onChange(t)}]}},e._l(e.selectActivity,(function(t){return s("option",{key:t.index,staticClass:"scheduling-client"},[e._v(e._s(t.bname))])})),0)]),s("div",[s("h3",[e._v("Odaberite datum")]),s("p",[s("date-picker",{attrs:{value:e.date,lang:"sr","first-day-of-week":1,"not-before":new Date,format:e.dateFormat},on:{change:e.updateDate}})],1),""!=e.date?s("h2",[e._v("Datum "+e._s(e._f("formattingDate")(e.date)))]):e._e()]),s("br"),s("form",[e.isOpenDate?s("div",{attrs:{id:"satnice"}},[s("ul",e._l(e.hours,(function(t){return s("li",{key:t.index,class:{isBooked:t.booked,free:!t.booked},on:{click:function(s){return s.preventDefault(),e.makeModalForm(t)}}},[s("h2",[e._v(e._s(t.hour))])])})),0)]):s("div",[s("br"),s("br"),s("h1",{staticClass:"notOpenDay"},[e._v("Zao nam je, "+e._s(e._f("formattingDate")(e.date))+" je neradni. Pokusajte neki drugi dan")])])]),e.showBookingModal?s("form",{staticClass:"modal-form"},[s("div",[s("h2",[e._v(" Unesite svoje podatke")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newBooking.name,expression:"newBooking.name"}],attrs:{type:"text",name:"username",placeholder:"Ime"},domProps:{value:e.newBooking.name},on:{input:function(t){t.target.composing||e.$set(e.newBooking,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newBooking.surname,expression:"newBooking.surname"}],attrs:{type:"text",placeholder:"Prezime"},domProps:{value:e.newBooking.surname},on:{input:function(t){t.target.composing||e.$set(e.newBooking,"surname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newBooking.tel,expression:"newBooking.tel"}],attrs:{type:"text",placeholder:"broj telefona"},domProps:{value:e.newBooking.tel},on:{input:function(t){t.target.composing||e.$set(e.newBooking,"tel",t.target.value)}}}),s("button",{on:{click:function(t){return t.preventDefault(),e.doBooking(e.selectedHour)}}},[e._v("Zakazi termin")]),e.booked?s("h2",[e._v(" Zakazali ste za "+e._s(e._f("formattingDate")(e.date))+" u "+e._s(this.selectedHour.hour))]):e._e(),s("button",{on:{click:function(t){e.showBookingModal=!1}}},[e._v("Zatvori")])])]):e._e()])},E=[],M=(s("4160"),s("caad"),s("fb6a"),s("07ac"),s("2532"),s("159b"),s("ec45")),I=(s("411c"),s("da72"),s("59ca")),S=s.n(I);s("ea7b"),s("e71f");s("e71f");var F={apiKey:"AIzaSyArN43w0EpIRfedtFETJjXHxi01CLIo-OA",authDomain:"scheduling-nwt.firebaseapp.com",databaseURL:"https://scheduling-nwt.firebaseio.com",projectId:"scheduling-nwt",storageBucket:"scheduling-nwt.appspot.com",messagingSenderId:"635937544798",appId:"1:635937544798:web:643efb8d9041c624d1b2cf",measurementId:"G-N0G8W7XQPH"},A=S.a.initializeApp(F),C=A.firestore(),T={components:{DatePicker:M["default"]},data:function(){return{delatnosti:["Frizerski salon","Fitnes","Zubar"],delatnost:"",hours:[{hour:"9:00",booked:!1},{hour:"9:30",booked:!1},{hour:"10:00",booked:!1},{hour:"10:30",booked:!1},{hour:"11:00",booked:!1},{hour:"11:30",booked:!1},{hour:"12:00",booked:!1},{hour:"12:30",booked:!1},{hour:"13:00",booked:!1},{hour:"13:30",booked:!1},{hour:"14:00",booked:!1},{hour:"14:30",booked:!1},{hour:"16:30",booked:!1},{hour:"17:00",booked:!1},{hour:"17:30",booked:!1},{hour:"18:00",booked:!1}],openDays:[1,2,3,4,5],schedulings:[],sced:[],selectedBusiness:"",booked:!1,selectedHour:"",dateFormat:"MMM DD  YYYY",lang:{formatLocale:{firstDayOfWeek:1},monthBeforeYear:!1},date:new Date,bussines:{},activities:[],act:[],newBooking:{name:"",nickname:"",psw:"",repsw:"",phone:""},isBooking:!1,showBookingModal:!1,submitted:!1}},methods:{updateDate:function(e){var t=new Date(e);this.date=t,this.hours.forEach((function(e){e.booked=!1})),console.log(this.date),this.byDate()},byDate:function(){var e=this,t=C.collection("scheduling").where("date","==",this.date.toDateString().slice(4));t.get().then((function(t){t.forEach((function(t){e.hours.forEach((function(s){s.hour==t.data().time&&t.data().business==e.selectedBusiness&&(s.booked=!0)}))}))}))},makeModalForm:function(e){e.booked?alert("Zao nam je, termin je zakazan!"):(this.showBookingModal=!0,this.selectedHour=e,console.log("selected hour",this.selectedHour.hour))},doBooking:function(e){if(!e.booked){console.log("showBooking",this.showBookingModal,"selected hour",e.hour);var t=this.date.toDateString().slice(4);return console.log(e.hour,t,this.booked,this.selectedBusiness),C.collection("scheduling").add({date:t,time:e.hour,name:this.newBooking.name,surname:this.newBooking.surname,tel:this.newBooking.tel,business:this.selectedBusiness}).then(console.log(this.date,e.hour,this.newBooking.name,this.newBooking.surname,this.selectedBusiness)).catch((function(e){console.log(e)})),e.booked=!0}alert("Zao nam je, termin je zakazan!")},onChange:function(e){this.selectedBusiness=e.target.value,console.log("izabrana firma je",this.selectedBusiness)},onChangeD:function(e){this.delatnost=e.target.value,console.log("delatnost je ",this.delatnost)},getFromFirestore:function(){var e=C.collection("scheduling").where("date","==",this.date.toDateString().slice(4));e.get().then((function(e){e.forEach((function(e){console.log(e)}))}))}},computed:{isOpenDate:function(){return console.log("dan u nedelji "+new Date(this.date).getDay()),this.openDays.includes(new Date(this.date).getDay())},selectActivity:function(){var e=this;return console.log("delatnost=",this.delatnost),""!=this.delatnost?(console.log(Object.values(this.activities)),Object.values(this.activities).filter((function(t){return t.activity===e.delatnost}))):this.activities}},created:function(){var e=this;this.$http.get("https://scheduling-nwt.firebaseio.com//business.json").then((function(e){console.log(e),this.activities=e.body,this.act=e.body,console.log(this.act)})),C.collection("scheduling").get().then((function(t){t.forEach((function(t){e.sced.push(t.data()),console.log(t.data(),t.id)})),console.log(e.sced)})),this.byDate()}},Z=T,Y=(s("265a"),Object(c["a"])(Z,O,E,!1,null,"a2807588",null)),K=Y.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"user-form"}},[s("form",{staticClass:"user-form"},[s("div",[s("h2",[e._v(" Unesite svoje podatke")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",name:"name",placeholder:"Ime"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surname,expression:"user.surname"}],attrs:{type:"text",placeholder:"Prezime"},domProps:{value:e.user.surname},on:{input:function(t){t.target.composing||e.$set(e.user,"surname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel,expression:"user.tel"}],attrs:{type:"text",placeholder:"broj telefona"},domProps:{value:e.user.tel},on:{input:function(t){t.target.composing||e.$set(e.user,"tel",t.target.value)}}}),s("button",{on:{click:e.zovni}},[e._v("Prikazi termine")])])])])},U=[],H={data:function(){return{user:{name:"",surname:"",tel:""},appointment:{date:"",time:"",business:""},appts:[]}},methods:{zovni:function(){console.log("pocelo ")},findTerms:function(e){var t=this;console.log("pocela findTerms"),console.log(this.usr.name,this.usr.tel,this.appts);var s=C.collection("scheduling");s.get().then((function(s){s.forEach((function(s){s.name==e.name&&s.surname==e.surname&&s.tel==e.tel&&t.appts.push(s)}))})),console.log(this.usr.name,this.usr.tel,this.appts)}}},J=H,R=(s("71fe"),Object(c["a"])(J,L,U,!1,null,"46a4ddfe",null)),W=R.exports,q=[{path:"/",component:K},{path:"/adduser",component:y},{path:"/addbusiness",component:$},{path:"/schedulingclient",component:K},{path:"/unschedulingclient",component:W}],G=s("28dd"),X=s("2f62");n["default"].use(X["a"]);var Q=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),V=s("0ff26"),ee=s("c1df"),te=s.n(ee);n["default"].config.productionTip=!1,n["default"].use(G["a"]),n["default"].use(h["a"]),n["default"].use(V["a"]);var se=new h["a"]({mode:"history",routes:q});n["default"].filter("formattingDate",(function(e){if(e)return te()(String(e)).format("MMM DD YYYY")})),new n["default"]({el:"#app",render:function(e){return e(v)},router:se,store:Q})},5874:function(e,t,s){},"6d57":function(e,t,s){},"71fe":function(e,t,s){"use strict";var n=s("9077"),a=s.n(n);a.a},"85ec":function(e,t,s){},9077:function(e,t,s){},"92a9":function(e,t,s){"use strict";var n=s("b9e0"),a=s.n(n);a.a},b9e0:function(e,t,s){}});
//# sourceMappingURL=app.5a5bfaa8.js.map