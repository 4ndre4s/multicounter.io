(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{409:function(t,n,e){var map={"./af":234,"./af.js":234,"./ar":235,"./ar-dz":236,"./ar-dz.js":236,"./ar-kw":237,"./ar-kw.js":237,"./ar-ly":238,"./ar-ly.js":238,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":240,"./ar-sa.js":240,"./ar-tn":241,"./ar-tn.js":241,"./ar.js":235,"./az":242,"./az.js":242,"./be":243,"./be.js":243,"./bg":244,"./bg.js":244,"./bm":245,"./bm.js":245,"./bn":246,"./bn.js":246,"./bo":247,"./bo.js":247,"./br":248,"./br.js":248,"./bs":249,"./bs.js":249,"./ca":250,"./ca.js":250,"./cs":251,"./cs.js":251,"./cv":252,"./cv.js":252,"./cy":253,"./cy.js":253,"./da":254,"./da.js":254,"./de":255,"./de-at":256,"./de-at.js":256,"./de-ch":257,"./de-ch.js":257,"./de.js":255,"./dv":258,"./dv.js":258,"./el":259,"./el.js":259,"./en-SG":260,"./en-SG.js":260,"./en-au":261,"./en-au.js":261,"./en-ca":262,"./en-ca.js":262,"./en-gb":263,"./en-gb.js":263,"./en-ie":264,"./en-ie.js":264,"./en-il":265,"./en-il.js":265,"./en-nz":266,"./en-nz.js":266,"./eo":267,"./eo.js":267,"./es":268,"./es-do":269,"./es-do.js":269,"./es-us":270,"./es-us.js":270,"./es.js":268,"./et":271,"./et.js":271,"./eu":272,"./eu.js":272,"./fa":273,"./fa.js":273,"./fi":274,"./fi.js":274,"./fo":275,"./fo.js":275,"./fr":276,"./fr-ca":277,"./fr-ca.js":277,"./fr-ch":278,"./fr-ch.js":278,"./fr.js":276,"./fy":279,"./fy.js":279,"./ga":280,"./ga.js":280,"./gd":281,"./gd.js":281,"./gl":282,"./gl.js":282,"./gom-latn":283,"./gom-latn.js":283,"./gu":284,"./gu.js":284,"./he":285,"./he.js":285,"./hi":286,"./hi.js":286,"./hr":287,"./hr.js":287,"./hu":288,"./hu.js":288,"./hy-am":289,"./hy-am.js":289,"./id":290,"./id.js":290,"./is":291,"./is.js":291,"./it":292,"./it-ch":293,"./it-ch.js":293,"./it.js":292,"./ja":294,"./ja.js":294,"./jv":295,"./jv.js":295,"./ka":296,"./ka.js":296,"./kk":297,"./kk.js":297,"./km":298,"./km.js":298,"./kn":299,"./kn.js":299,"./ko":300,"./ko.js":300,"./ku":301,"./ku.js":301,"./ky":302,"./ky.js":302,"./lb":303,"./lb.js":303,"./lo":304,"./lo.js":304,"./lt":305,"./lt.js":305,"./lv":306,"./lv.js":306,"./me":307,"./me.js":307,"./mi":308,"./mi.js":308,"./mk":309,"./mk.js":309,"./ml":310,"./ml.js":310,"./mn":311,"./mn.js":311,"./mr":312,"./mr.js":312,"./ms":313,"./ms-my":314,"./ms-my.js":314,"./ms.js":313,"./mt":315,"./mt.js":315,"./my":316,"./my.js":316,"./nb":317,"./nb.js":317,"./ne":318,"./ne.js":318,"./nl":319,"./nl-be":320,"./nl-be.js":320,"./nl.js":319,"./nn":321,"./nn.js":321,"./pa-in":322,"./pa-in.js":322,"./pl":323,"./pl.js":323,"./pt":324,"./pt-br":325,"./pt-br.js":325,"./pt.js":324,"./ro":326,"./ro.js":326,"./ru":327,"./ru.js":327,"./sd":328,"./sd.js":328,"./se":329,"./se.js":329,"./si":330,"./si.js":330,"./sk":331,"./sk.js":331,"./sl":332,"./sl.js":332,"./sq":333,"./sq.js":333,"./sr":334,"./sr-cyrl":335,"./sr-cyrl.js":335,"./sr.js":334,"./ss":336,"./ss.js":336,"./sv":337,"./sv.js":337,"./sw":338,"./sw.js":338,"./ta":339,"./ta.js":339,"./te":340,"./te.js":340,"./tet":341,"./tet.js":341,"./tg":342,"./tg.js":342,"./th":343,"./th.js":343,"./tl-ph":344,"./tl-ph.js":344,"./tlh":345,"./tlh.js":345,"./tr":346,"./tr.js":346,"./tzl":347,"./tzl.js":347,"./tzm":348,"./tzm-latn":349,"./tzm-latn.js":349,"./tzm.js":348,"./ug-cn":350,"./ug-cn.js":350,"./uk":351,"./uk.js":351,"./ur":352,"./ur.js":352,"./uz":353,"./uz-latn":354,"./uz-latn.js":354,"./uz.js":353,"./vi":355,"./vi.js":355,"./x-pseudo":356,"./x-pseudo.js":356,"./yo":357,"./yo.js":357,"./zh-cn":358,"./zh-cn.js":358,"./zh-hk":359,"./zh-hk.js":359,"./zh-tw":360,"./zh-tw.js":360};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=409},421:function(t,n,e){"use strict";e.r(n);e(23),e(54),e(55),e(2);var r={name:"CounterCard",props:{name:{required:!0},count:{required:!0},identifier:{required:!0}},data:function(){return{stepRange:1,nameGettingChanged:!1,nameModel:this.name,countModel:this.count,overlayVisible:!1,setColor:null}},created:function(){this.$emit("color-changed",{color:this.color,id:this.identifier})},computed:{backgroundColorIsTooDark:function(){return this.color.charAt(1)<=9},color:{get:function(){return this.setColor?this.setColor:this.getRandomColor()},set:function(t){this.setColor=t}}},methods:{getRandomColor:function(){return"#"+(16777215*Math.random()<<0).toString(16)}},watch:{nameModel:function(){this.$emit("name-changed",this.nameModel)},countModel:function(){this.$emit("count-changed",this.countModel)},color:function(){this.$emit("color-changed",{color:this.color,id:this.identifier})},nameGettingChanged:function(t,n){var e=this;t&&this.$nextTick((function(){e.$refs.name.$refs.input.select()}))},overlayVisible:function(){var t=this;this.overlayVisible&&this.$nextTick((function(){t.$refs.colorPicker.$el.focus()}))}}},o=e(40),c=e(59),l=e.n(c),d=e(364),j=e(231),h=e(217),m=e(422),f=e(233),v=e(416),C=e(423),component=Object(o.a)(r,(function(){var t=this,n=this,e=n.$createElement,r=n._self._c||e;return r("div",[r("v-card",{attrs:{height:"250",color:n.color}},[r("v-card-title",{staticClass:"headline d-flex justify-space-around"},[r("div",[r("v-btn",{attrs:{icon:"",color:"warning",dark:n.backgroundColorIsTooDark},on:{click:function(t){n.countModel=0}}},[r("v-icon",[n._v("mdi-refresh")])],1),n._v(" "),r("v-btn",{attrs:{icon:"",dark:n.backgroundColorIsTooDark},on:{click:function(t){n.overlayVisible=!0}}},[r("v-icon",[n._v("mdi-format-color-fill")])],1)],1),n._v(" "),r("div",{staticClass:"d-flex justify-center"},[n.nameGettingChanged?[r("v-text-field",{ref:"name",staticStyle:{"max-width":"50%"},attrs:{dark:n.backgroundColorIsTooDark,autofocus:!0,clearable:"",label:"Name"},on:{keyup:function(t){if(!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.nameGettingChanged=!1},blur:function(t){n.nameGettingChanged=!1}},model:{value:n.nameModel,callback:function(t){n.nameModel=t},expression:"nameModel"}})]:[r("v-icon",{attrs:{dark:n.backgroundColorIsTooDark}},[n._v(n._s(n.nameModel))])],n._v(" "),r("v-btn",{attrs:{icon:"",dark:n.backgroundColorIsTooDark},on:{click:function(t){n.nameGettingChanged=!n.nameGettingChanged}}},[r("v-icon",{attrs:{small:!n.nameGettingChanged}},[n._v("\n                        "+n._s(n.nameGettingChanged?"mdi-check-circle-outline":"mdi-lead-pencil")+"\n                    ")])],1)],2),n._v(" "),r("v-btn",{attrs:{icon:"",color:"error",rounded:""},on:{click:function(){return t.$emit("remove-card",{identifier:n.identifier})}}},[r("v-icon",[n._v("mdi-close-circle-outline")])],1)],1),n._v(" "),r("v-card-text",{staticClass:"text-center display-1",class:{"white--text":n.backgroundColorIsTooDark}},[n._v("\n            "+n._s(n.countModel)+"\n        ")]),n._v(" "),r("v-card-actions",{staticClass:"d-flex justify-center justify-sm-space-around"},[r("v-btn",{staticStyle:{"font-size":"200%"},attrs:{fab:"",color:"primary","x-large":""},on:{click:function(t){n.countModel-=n.stepRange}}},[n._v("\n                -\n            ")]),n._v(" "),r("v-btn",{staticStyle:{"font-size":"200%"},attrs:{fab:"",color:"primary","x-large":""},on:{click:function(t){n.countModel+=n.stepRange}}},[n._v("\n                +\n            ")])],1)],1),n._v(" "),r("v-overlay",{attrs:{value:n.overlayVisible}},[r("v-color-picker",{ref:"colorPicker",attrs:{mode:"hexa"},on:{click:function(t){if(t.target!==t.currentTarget)return null}},model:{value:n.color,callback:function(t){n.color=t},expression:"color"}}),n._v(" "),r("v-btn",{attrs:{raised:"",color:"primary mt-2 mr-n4",right:!0,absolute:!0},on:{click:function(t){n.overlayVisible=!1}}},[n._v("\n            Close\n        ")])],1)],1)}),[],!1,null,"8020f392",null),k=component.exports;l()(component,{VBtn:d.a,VCard:j.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VColorPicker:m.a,VIcon:f.a,VOverlay:v.a,VTextField:C.a});var y={name:"AddNewCounterCard"},x=e(417),_=e(418),w=Object(o.a)(y,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-card",{attrs:{height:"250",hover:""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[n("v-card-actions",[n("v-flex",[n("v-icon",{attrs:{large:""}},[this._v("mdi-plus-circle-outline")])],1)],1)],1)],1)}),[],!1,null,"14de5cde",null),z=w.exports;l()(w,{VCard:j.a,VCardActions:h.a,VFlex:x.a,VIcon:f.a,VLayout:_.a});var V=e(412),M=V.b.reactiveProp,T={name:"ChartBar",extends:V.a,mixins:[M],props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},$={components:{CounterCard:k,AddNewCounterCard:z,ChartBar:Object(o.a)(T,void 0,void 0,!1,null,"596985f3",null).exports},data:function(){return{counterCards:[],counterNumber:1}},created:function(){this.addCounterCard()},computed:{labels:function(){return this.counterCards?this.counterCards.map((function(t){return t.name})):[]},counts:function(){return this.counterCards?this.counterCards.map((function(t){return t.count})):[]},colors:function(){return this.counterCards?this.counterCards.map((function(t){return t.color})):[]},dataCollection:function(){return{labels:this.labels,datasets:[{label:"Count",backgroundColor:this.colors,pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"#e6fffd",data:this.counts}]}}},methods:{addCounterCard:function(){this.counterCards.push({name:"Counter #"+this.getAndIncrementCounterNumber(),count:0,color:"#e6fffd",id:Date.now()})},changeColor:function(t){var n=this;this.counterCards.forEach((function(e,r){e.id===t.id&&(n.counterCards[r].color=t.color)}))},getAndIncrementCounterNumber:function(){return this.counterNumber++},removeCard:function(t){var n=t.identifier;this.counterCards=this.counterCards.filter((function(t){return t.id!==n}))}},watch:{counterCards:function(){0===this.counterCards.length&&(this.counterNumber=1)}}},D=e(419),A=e(212),G=e(420),I=Object(o.a)($,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-row",[t._l(t.counterCards,(function(n,r){return e("v-col",{key:n.id,attrs:{cols:12,lg:3,md:4,sm:6,xs:8}},[e("counter-card",{attrs:{name:n.name,count:n.count,identifier:n.id},on:{"remove-card":t.removeCard,"color-changed":t.changeColor,"count-changed":function(n){return t.counterCards[r].count=n},"name-changed":function(n){return t.counterCards[r].name=n}}})],1)})),t._v(" "),e("v-col",{attrs:{cols:12,lg:3,md:4,sm:6,xs:8}},[e("add-new-counter-card",{nativeOn:{click:function(n){return t.addCounterCard(n)}}})],1)],2),t._v(" "),e("v-row",[e("v-col",[e("chart-bar",{attrs:{chartData:t.dataCollection}})],1)],1)],1)}),[],!1,null,null,null);n.default=I.exports;l()(I,{VCol:D.a,VContainer:A.a,VRow:G.a})}}]);