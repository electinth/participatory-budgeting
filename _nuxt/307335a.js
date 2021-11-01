(window.webpackJsonp=window.webpackJsonp||[]).push([[1,17],{362:function(e,t,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("24304fc0",content,!0,{sourceMap:!1})},398:function(e,t,n){"use strict";n(362)},399:function(e,t,n){var d=n(49)(!1);d.push([e.i,".stack[data-v-f0aca56a]{display:flex;padding-left:10px;transform:translateY(-2px)}",""]),e.exports=d},495:function(e,t,n){"use strict";n.r(t);var d=n(20),r=(n(56),n(13),n(1),n(9),n(18),n(78),n(79),n(14),n(2),n(126),n(80),n(25),n(612)),l=n(397),c=n(493),o=n(494),h=n(492),v={scaleLinear:r.a,scaleOrdinal:l.a,hierarchy:c.a,treemap:o.a,group:h.b,rollup:h.c,sum:h.d,csv:h.a},x={name:"Treemap",data:function(){return{url:"https://raw.githubusercontent.com/electinth/participatory-budgeting/main/assets/data/budget.csv",rawData:null,nestedData:null,outerSum:null,innerSum:null,windowWidth:0,windowHeight:0,maxWidth:1250,breakWidth:799,labelWidth:345,rootNode:{},margin:{top:20,right:0,bottom:0,left:0},selected:null,selectedInner:null,selectedYear:[],selectedStrategy:[],colorMap:{"มหานครปลอดภัย":"#538DFF","มหานครสีเขียวสะดวกสบาย":"#6ADC7B","มหานครสำหรับทุกคน":"#FF583E","มหานครกระชับ":"#FF9FDF","มหานครประชาธิปไตย":"#FF8310","มหานครแห่งเศรษฐกิจและเรียนรู้":"#C3DA14","การบริหารจัดการเมืองมหานคร":"#D170FF"}}},watch:{selectedNode:function(e,t){},selectedYearCompute:function(){0===this.selectedYear.length&&(this.selectedYear=["2561","2562","2563","2564"]),this.updateData()},selectedStrategyCompute:function(){0===this.selectedStrategy.length&&(this.selectedStrategy=["มหานครปลอดภัย","มหานครสีเขียวสะดวกสบาย","มหานครสำหรับทุกคน","มหานครกระชับ","มหานครประชาธิปไตย","มหานครแห่งเศรษฐกิจและเรียนรู้","การบริหารจัดการเมืองมหานคร"]),this.updateData()}},mounted:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n,d,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e).$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),n.getWindowWidth(),n.getWindowHeight()})),t.next=4,v.csv(n.url);case 4:d=t.sent,r=d.filter((function(e){return""!=e.year})).map((function(data){return{strategy:data.strategy,type:data.type,year:data.year,received:parseFloat(data["งบประมาณข้อบัญญัติ(ล้านบาท)"].replace(",","")),expected:parseFloat(data["งบประมาณตามแผน(ล้านบาท)"].replace(",",""))}})),e.rawData=r,n.updateData();case 8:case"end":return t.stop()}}),t)})))()},computed:{parentId:function(){return void 0===this.selectedNode.parent||null===this.selectedNode.parent?this.selectedNode.id:this.selectedNode.parent.id},x:function(){return v.scaleLinear().domain([0,this.windowWidth]).range([0,this.windowWidth])},y:function(){return v.scaleLinear().domain([0,this.windowHeight-this.margin.top-this.margin.bottom]).range([0,this.windowHeight-this.margin.top-this.margin.bottom])},treemap:function(){return v.treemap().size([this.windowWidth,this.windowHeight]).round(!1).paddingInner(0)},selectedNode:function(){var e=null;if(this.selected){var t=this.getNodeById(this.rootNode,this.selected,this);e=t._children?t:t.parent}else e=this.rootNode;return this.x.domain([e.x0,e.x0+(e.x1-e.x0)]),this.y.domain([e.y0,e.y0+(e.y1-e.y0)]),e},selectedYearCompute:function(){return this.selectedYear},selectedStrategyCompute:function(){return this.selectedStrategy}},methods:{updateData:function(){var e=this,t=this;if(this.rawData){var n=this.rawData.filter((function(t){var n=t.year,d=t.strategy;return e.selectedYear.includes(n)&&e.selectedStrategy.includes(d)})),d=[],r=[],l=[],c=this.selectedYear.join(".");n.forEach((function(e){d.includes(e.strategy)?r.includes(e.type)?l.find((function(element,t){element.strategy===e.strategy&&element.type===e.type&&(l[t]={strategy:e.strategy,type:e.type,expected:l[t].expected+=e.expected,received:l[t].received+=e.received,year:c})})):(r.push(e.type),l.push({strategy:e.strategy,type:e.type,expected:e.expected,received:e.received,year:c})):(d.push(e.strategy),r.includes(e.type)||(r.push(e.type),l.push({strategy:e.strategy,type:e.type,expected:e.expected,received:e.received,year:c})))}));var o=v.group(l,(function(data){return data.strategy}),(function(data){return data.type}));t.outerSum=v.rollup(l,(function(e){return v.sum(e,(function(e){return e.expected}))}),(function(e){return e.strategy})),t.innerSum=v.rollup(l,(function(e){return v.sum(e,(function(e){return e.expected}))}),(function(e){return e.type})),t.nestedData=o,t.initialize(),t.accumulate(t.rootNode,t),t.treemap(t.rootNode)}},initialize:function(){var e=this;e.nestedData&&(e.rootNode=v.hierarchy(e.nestedData).eachBefore((function(e){e.id=(e.parent?e.parent.id+"/ ":"")+(e.data[0]||e.data.type||"ทั้งหมด")})).sum((function(e){return e.received})).sort((function(a,b){return b.height-a.height||b.value-a.value})),e.rootNode.x=e.rootNode.y=0,e.rootNode.x1=e.windowWidth,e.rootNode.y1=e.windowHeight,e.rootNode.depth=0)},accumulate:function(e,t){return e._children=e.children,e._children?(e.value=e._children.reduce((function(p,e){return p+t.accumulate(e,t)}),0),e.value):e.value},getNodeById:function(e,t,n){if(e.id===t)return e;if(e._children)for(var i=0;i<e._children.length;i++){var d=n.getNodeById(e._children[i],t,n);if(d)return d}},selectNode:function(e){this.selected=e.target.id,this.selectedInner=e.target.id.split("/ ")[1]},navigateBack:function(){this.selected=this.selectedNode.parent?this.selectedNode.parent.id:this.selected,"ทั้งหมด"===this.selected&&(this.selectedInner=null)},getWindowWidth:function(e){var t=document.documentElement.clientWidth;t>=this.maxWidth?this.windowWidth=this.maxWidth-this.labelWidth:t>this.breakWidth&&t<this.maxWidth?this.windowWidth=t-this.labelWidth:this.windowWidth=t-38},getWindowHeight:function(e){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;n<=780&&t>=this.breakWidth?this.windowHeight=550:(this.breakWidth,this.windowHeight=n-.3*n)}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}},y=(n(591),n(67)),component=Object(y.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"treemap"},[e._m(0),e._v(" "),n("div",{staticClass:"navigate-small",attrs:{id:e.parentId},on:{click:e.navigateBack}},[n("div",{staticClass:"navigate-text"},[n("p",[e._v(e._s(e.selectedNode.id))]),e._v(" "),n("div",[e._v("\n        "+e._s("ทั้งหมด"===e.selectedNode.id?"":"[")+"\n        "),n("strong",[e._v("\n          "+e._s("ทั้งหมด"===e.selectedNode.id?"":"฿"+(e.selectedNode.value?e.selectedNode.value.toLocaleString():""))+"\n        ")]),e._v("\n        "+e._s("ทั้งหมด"===e.selectedNode.id?"":"/ ฿"+(e.selectedNode.id?2==e.selectedNode.id.split("/ ").length?e.outerSum.get(e.selectedNode.id.split("/ ")[1]).toLocaleString():e.innerSum.get(e.selectedNode.id.split("/ ")[2]).toLocaleString():"")+" ]")+"\n      ")])]),e._v(" "),n("div",[n("svg",{attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"8.49142",cy:"8.49142",r:"8.49142",fill:"black"}}),e._v(" "),n("path",{attrs:{d:"M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("div",{staticClass:"wrapper"},[n("div",[n("div",{staticClass:"navigate",attrs:{id:e.parentId},on:{click:e.navigateBack}},[n("div",{staticClass:"navigate-text"},[n("p",[e._v(e._s(e.selectedNode.id))]),e._v(" "),n("div",[e._v("\n            "+e._s("ทั้งหมด"===e.selectedNode.id?"":"[")+"\n            "),n("strong",[e._v("\n              "+e._s("ทั้งหมด"===e.selectedNode.id?"":"฿"+(e.selectedNode.value?e.selectedNode.value.toLocaleString():""))+"\n            ")]),e._v("\n            "+e._s("ทั้งหมด"===e.selectedNode.id?"":"/ ฿"+(e.selectedNode.id?2==e.selectedNode.id.split("/ ").length?e.outerSum.get(e.selectedNode.id.split("/ ")[1]).toLocaleString():e.innerSum.get(e.selectedNode.id.split("/ ")[2]).toLocaleString():"")+" ]")+"\n          ")])]),e._v(" "),n("div",[n("svg",{attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"8.49142",cy:"8.49142",r:"8.49142",fill:"black"}}),e._v(" "),n("path",{attrs:{d:"M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("svg",{staticClass:"svg-class",staticStyle:{"margin-left":"0px"},attrs:{height:e.windowHeight,width:e.windowWidth}},[n("g",{staticStyle:{"shape-rendering":"crispEdges"},attrs:{transform:"translate(0,20)"}},[n("transition-group",{staticClass:"depth",attrs:{name:"list",tag:"g"}},e._l(e.selectedNode._children,(function(t){return n("g",{key:"c_"+t.id,staticClass:"children"},[e._l(t._children,(function(t){return n("rect",{key:t.id,staticClass:"child",attrs:{id:t.id,height:e.y(t.y1)-e.y(t.y0),width:e.x(t.x1)-e.x(t.x0),x:e.x(t.x0),y:e.y(t.y0)}})})),e._v(" "),n("rect",{key:t.id,staticClass:"parent",style:{fill:e.colorMap[t.id.split("/ ")[1]]},attrs:{id:t.id,x:e.x(t.x0),y:e.y(t.y0),width:e.x(t.x1-t.x0+t.parent.x0),height:e.y(t.y1-t.y0+t.parent.y0)},on:{click:e.selectNode}}),e._v(" "),n("text",{key:"t_"+t.id+(t.data[0]||t.data.type),style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82&&2!==t.id.split(" > ").length?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=73&&e.x(t.x1-t.x0+t.parent.x0)>=50&&2!==t.id.split(" > ").length?"1":"0","font-size":e.windowWidth>=e.breakWidth?"14px":"12px"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-70,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                "+e._s(t.data[0]||t.data.type)+"\n              ")]),e._v(" "),n("text",{key:"t_"+t.id+t.value,style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=62&&e.x(t.x1-t.x0+t.parent.x0)>=50?"1":"0","font-size":e.windowWidth>=e.breakWidth?"21px":"16px","font-weight":"bold"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-45,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                ฿"+e._s(t.value.toLocaleString())+"\n              ")]),e._v(" "),n("text",{key:"t_"+t.id,style:{"fill-opacity":e.windowWidth>=e.breakWidth?e.y(t.y1-t.y0+t.parent.y0)>=70&&e.x(t.x1-t.x0+t.parent.x0)>=82?"1":"0":e.y(t.y1-t.y0+t.parent.y0)>=62&&e.x(t.x1-t.x0+t.parent.x0)>=50?"1":"0","font-size":e.windowWidth>=e.breakWidth?"16px":"12px"},attrs:{dy:e.y(t.y1)-e.y(t.y0)-25,x:e.x(t.x0)+10,y:e.y(t.y0)+6}},[e._v("\n                ฿"+e._s(e.outerSum.get(t.data[0])?e.outerSum.get(t.data[0]).toLocaleString():e.innerSum.get(t.data.type)?e.innerSum.get(t.data.type).toLocaleString():e.innerSum.get(t.data[0])?e.innerSum.get(t.data[0]).toLocaleString():"")+"\n              ")])],2)})),0)],1)])]),e._v(" "),n("client-only",[n("div",{staticClass:"checkbox-legend text-explain"},[n("div",{staticClass:"symbol-explain"},[n("ul",[n("li",[n("span",{staticClass:"bold-baht"},[e._v("฿")]),e._v(" | งบที่หน่วยงานขอได้ (ล้านบาท)\n            ")]),e._v(" "),n("li",[n("span",{staticClass:"regular-baht"},[e._v("฿")]),e._v(" | งบที่กรุงเทพตั้งไว้ในแผนฯ\n            ")])])]),e._v(" "),n("div",{staticClass:"checkbox-area"},[n("div",[n("ul",[n("div",{staticClass:"legendTitle"},[e._v("เลือกปี")]),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2561",color:"#FFFFFF",size:18,checked:"",disabled:1===this.selectedYear.length&&"2561"===this.selectedYear[0]},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2561\n                    "),n("div",{staticStyle:{"padding-left":"1.5px"}},[e.rawData?n("StackedBar",{attrs:{year:"2561",data:e.rawData}}):e._e()],1)])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2562",color:"#FFFFFF",size:18,checked:"",disabled:1===this.selectedYear.length&&"2562"===this.selectedYear[0]},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2562\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2562",data:e.rawData}}):e._e()],1)])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2563",color:"#FFFFFF",size:18,checked:"",disabled:1===this.selectedYear.length&&"2563"===this.selectedYear[0]},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2563\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2563",data:e.rawData}}):e._e()],1)])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"2564",color:"#FFFFFF",size:18,checked:"",disabled:1===this.selectedYear.length&&"2564"===this.selectedYear[0]},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[n("div",{staticClass:"label"},[e._v("\n                    2564\n                    "),e.rawData?n("StackedBar",{attrs:{year:"2564",data:e.rawData}}):e._e()],1)])],1)])]),e._v(" "),n("ul",[n("div",{staticClass:"legendTitle"},[e._v("เลือกด้าน")]),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครปลอดภัย",color:"#538DFF",size:18,checked:"",disabled:"มหานครปลอดภัย"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครปลอดภัย"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครปลอดภัย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครสีเขียวสะดวกสบาย",color:"#6ADC7B",size:18,checked:"",disabled:"มหานครสีเขียวสะดวกสบาย"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครสีเขียวสะดวกสบาย"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครสีเขียวสะดวกสบาย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครสำหรับทุกคน",color:"#FF583E",size:18,checked:"",disabled:"มหานครสำหรับทุกคน"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครสำหรับทุกคน"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("\n                  มหานครสำหรับทุกคน\n                ")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครกระชับ",color:"#FF9FDF",size:18,checked:"",disabled:"มหานครกระชับ"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครกระชับ"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครกระชับ")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครประชาธิปไตย",color:"#FF8310",size:18,checked:"",disabled:"มหานครประชาธิปไตย"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครประชาธิปไตย"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครประชาธิปไตย")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"มหานครแห่งเศรษฐกิจและเรียนรู้",color:"#C3DA14",size:18,checked:"",disabled:"มหานครแห่งเศรษฐกิจและเรียนรู้"===e.selectedInner||1===this.selectedStrategy.length&&"มหานครแห่งเศรษฐกิจและเรียนรู้"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("มหานครแห่งเศรษฐกิจและเรียนรู้")])])],1),e._v(" "),n("li",[n("Checkbox",{attrs:{value:"การบริหารจัดการเมืองมหานคร",color:"#D170FF",size:18,checked:"",disabled:"การบริหารจัดการเมืองมหานคร"===e.selectedInner||1===this.selectedStrategy.length&&"การบริหารจัดการเมืองมหานคร"===this.selectedStrategy[0]},model:{value:e.selectedStrategy,callback:function(t){e.selectedStrategy=t},expression:"selectedStrategy"}},[n("div",{staticClass:"label"},[e._v("การบริหารจัดการเมืองมหานคร")])])],1)])])])])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox-legend-small text-explain"},[n("div",[n("span",{staticClass:"bold-baht"},[e._v("฿")]),e._v(" | งบที่หน่วยงานขอได้\n      "),n("span",{staticClass:"regular-baht"},[e._v("฿")]),e._v(" | งบที่กรุงเทพตั้งไว้ในแผนฯ\n    ")]),e._v(" "),n("div",[e._v("\n      (หน่วยล้านบาท)\n    ")])])}],!1,null,"40868be6",null);t.default=component.exports;installComponents(component,{StackedBar:n(511).default})},505:function(e,t,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("2109498a",content,!0,{sourceMap:!1})},511:function(e,t,n){"use strict";n.r(t);n(1),n(16),n(45),n(2);var d=n(612),r=n(492),l={scaleLinear:d.a,rollup:r.c,sum:r.d},c={name:"App",props:{year:String,data:[]},components:{},data:function(){return{values:null,total:0,scale:null,maxRange:150,currentWidth:0,colorMap:{"มหานครปลอดภัย":"#538DFF","มหานครสีเขียวสะดวกสบาย":"#6ADC7B","มหานครสำหรับทุกคน":"#FF583E","มหานครกระชับ":"#FF9FDF","มหานครประชาธิปไตย":"#FF8310","มหานครแห่งเศรษฐกิจและเรียนรู้":"#C3DA14","การบริหารจัดการเมืองมหานคร":"#D170FF"}}},watch:{maxRange:function(){this.scale=l.scaleLinear().domain([0,this.total]).range([0,this.maxRange])}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}));var t=this.data.filter((function(t){return t.year==e.year}));this.values=l.rollup(t,(function(e){return l.sum(e,(function(e){return e.received}))}),(function(e){return e.strategy})),this.values.forEach((function(element){e.total+=element})),this.scale=l.scaleLinear().domain([0,this.total]).range([0,this.maxRange])},methods:{getWindowWidth:function(e){this.currentWidth=document.documentElement.clientWidth,this.currentWidth<400?this.maxRange=55:this.currentWidth<600?this.maxRange=80:this.maxRange=150}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},o=(n(398),n(67)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stack"},e._l(e.values,(function(t){return n("div",{key:t[0]},[n("div",{style:{"background-color":e.colorMap[t[0]],height:"16px",width:e.scale(t[1])+"px"}})])})),0)}),[],!1,null,"f0aca56a",null);t.default=component.exports},591:function(e,t,n){"use strict";n(505)},592:function(e,t,n){var d=n(49)(!1);d.push([e.i,'.svg-class[data-v-40868be6]{position:relative;z-index:1;margin-top:-18px}.wrapper[data-v-40868be6]{display:flex;justify-content:center;padding-left:20px}@media (max-width:799px){.wrapper[data-v-40868be6]{flex-wrap:wrap;padding-left:0}}text[data-v-40868be6]{font-family:"KondolarThai",serif;pointer-events:none}.checkbox-legend-small[data-v-40868be6]{display:none}@media (max-width:799px){.checkbox-legend-small[data-v-40868be6]{display:flex;flex-direction:column;max-width:799px;margin:.5em 1.6em 1.5em;background:#fff;border:1px solid rgba(0,0,0,.5);justify-content:center;flex-wrap:nowrap;align-items:center;padding:5px 10px}}.checkbox-legend[data-v-40868be6]{display:flex;align-self:flex-start;margin:0 1.4em 1.4em;padding:20px;background:#eee;font-family:"KondolarThai",serif;font-size:14px;max-width:270px;flex-flow:column;align-items:top}@media (max-width:799px){.checkbox-legend[data-v-40868be6]{max-width:799px;width:800px;flex-wrap:nowrap;align-items:center;margin:1.4em 1.6em;padding:10px}}.checkbox-area[data-v-40868be6]{display:flex;flex-wrap:wrap;line-height:0;justify-content:left}@media (max-width:799px){.checkbox-area[data-v-40868be6]{max-width:599px;flex-wrap:nowrap;justify-content:center}}.symbol-explain[data-v-40868be6]{background-color:#fff;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:0 5px 0 10px;text-align:left}@media (max-width:799px){.symbol-explain[data-v-40868be6]{display:none}}.bold-baht[data-v-40868be6]{font-size:21px;font-weight:700}@media (max-width:799px){.bold-baht[data-v-40868be6]{font-size:16px}}.regular-baht[data-v-40868be6]{font-size:16px;padding:0 1.5px}@media (max-width:799px){.regular-baht[data-v-40868be6]{font-size:12px}}.grandparent text[data-v-40868be6],.text-explain[data-v-40868be6]{font-family:"KondolarThai",serif;font-size:14px}@media (max-width:600px){.grandparent text[data-v-40868be6],.text-explain[data-v-40868be6]{font-size:12px}}.navigate[data-v-40868be6]{display:flex;width:100%;position:relative;z-index:5;padding:10px;cursor:pointer;background:#eee;justify-content:space-between}@media (max-width:799px){.navigate[data-v-40868be6]{display:none}}.navigate-small[data-v-40868be6]{display:none}@media (max-width:799px){.navigate-small[data-v-40868be6]{display:flex;width:100%;position:relative;z-index:5;padding:10px;cursor:pointer;background:#eee;justify-content:space-between;border-left:20px solid #fff;border-right:20px solid #fff}}.navigate[data-v-40868be6]:hover{background-color:#e2e2e2}.navigate-text[data-v-40868be6],.navigate-text p[data-v-40868be6]{display:flex;flex-direction:column;font-family:"KondolarThai",serif;font-size:14px;text-align:left;padding-right:3px;margin:0}@media (max-width:600px){.navigate-text[data-v-40868be6],.navigate-text p[data-v-40868be6]{font-size:12px}}.legendTitle[data-v-40868be6]{font-weight:700;text-align:left;font-family:"KondolarThai",serif;font-size:16px;padding:10px 0 10px 5px}@media (max-width:600px){.legendTitle[data-v-40868be6]{font-size:14px}}ul[data-v-40868be6]{list-style-type:none;margin:0;padding:10px 10px 10px 0}.m-chckbox--container[data-v-40868be6]{line-height:0;margin:3px}@media (max-width:600px){.m-chckbox--container[data-v-40868be6]{margin:1px}}[data-v-40868be6] .m-chckbox--label{position:relative;padding-left:0;cursor:pointer;flex-shrink:10!important}[data-v-40868be6] .m-chckbox--group>div>svg{fill:#000;stroke:#000;stroke-width:1}.label[data-v-40868be6]{display:flex;line-height:1;transform:translateY(6px);text-align:left;padding-left:10px}rect[data-v-40868be6]{fill:none;stroke:#fff}.grandparent rect[data-v-40868be6],rect.parent[data-v-40868be6]{stroke-width:3px}.grandparent rect[data-v-40868be6]{fill:#eee}.grandparent:hover rect[data-v-40868be6]{fill:#e5e5e5}.children rect.parent[data-v-40868be6],.grandparent rect[data-v-40868be6]{cursor:pointer}.children rect.parent[data-v-40868be6]{fill:#bbb;fill-opacity:.98}.children:hover rect.child[data-v-40868be6]{fill:#000;fill-opacity:1}.children text[data-v-40868be6]{font-size:.8em}.list-enter-active[data-v-40868be6],.list-leave-active[data-v-40868be6]{transition:all .5s}.list-enter[data-v-40868be6],.list-leave-to[data-v-40868be6]{opacity:0}',""]),e.exports=d}}]);