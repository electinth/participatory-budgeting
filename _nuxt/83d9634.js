(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{306:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("4238d294",content,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";n(306)},312:function(t,e,n){var r=n(48)(!1);r.push([t.i,".stack[data-v-1e3bedf9]{display:flex;padding-left:10px;transform:translateY(-2px)}",""]),t.exports=r},317:function(t,e,n){"use strict";n.r(e);n(1),n(19),n(43),n(2);var r=n(551),o=n(314),c={scaleLinear:r.a,rollup:o.c,sum:o.d},l={name:"App",props:{year:String,data:[]},components:{},data:function(){return{values:null,total:0,scale:null,maxRange:150,currentWidth:0,colorMap:{"มหานครปลอดภัย":"#538DFF","มหานครสีเขียวสะดวกสบาย":"#6ADC7B","มหานครสำหรับทุกคน":"#FF583E","มหานครกระชับ":"#FF9FDF","มหานครประชาธิปไตย":"#FF8310","มหานครแห่งเศรษฐกิจและเรียนรู้":"#C3DA14","การบริหารจัดการเมืองมหานคร":"#D170FF"}}},watch:{maxRange:function(){console.log("changed"),this.scale=c.scaleLinear().domain([0,this.total]).range([0,this.maxRange])}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}));var e=this.data.filter((function(e){return e.year==t.year}));this.values=c.rollup(e,(function(t){return c.sum(t,(function(t){return t.received}))}),(function(t){return t.strategy})),this.values.forEach((function(element){t.total+=element})),this.scale=c.scaleLinear().domain([0,this.total]).range([0,this.maxRange])},methods:{getWindowWidth:function(t){this.currentWidth=document.documentElement.clientWidth,this.currentWidth<400?this.maxRange=55:this.currentWidth<600?this.maxRange=80:this.maxRange=150}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},d=(n(311),n(64)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stack"},t._l(t.values,(function(e){return n("div",{key:e[0]},[n("div",{style:{"background-color":t.colorMap[e[0]],height:"16px",width:t.scale(e[1])+"px"}})])})),0)}),[],!1,null,"1e3bedf9",null);e.default=component.exports}}]);