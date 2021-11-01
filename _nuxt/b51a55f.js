/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27,18],{346:function(t,e,r){"use strict";var n=r(352);function o(t){new n(t.target).share()}t.exports={bind:function(t){(t=t||this.el).addEventListener("click",o,!1)},unbind:function(t){(t=t||this.el).removeEventListener("click",o,!1)}}},352:function(t,e){var r=function(t){this.elem=t};r.prototype={getValue:function(t){var e=this.elem.getAttribute("data-"+t);return null!=e&&e},share:function(){var t=this.getValue("sharer").toLowerCase(),s={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url")}},googleplus:{shareUrl:"https://plus.google.com/share",params:{url:this.getValue("url")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to"),params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:!0},whatsapp:{shareUrl:"whatsapp://send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},telegram:{shareUrl:"tg://msg_url",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},viber:{shareUrl:"viber://forward",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},line:{shareUrl:"http://line.me/R/msg/text/?"+encodeURIComponent(this.getValue("title")+" "+this.getValue("url")),isLink:!0},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url")}},tumblr:{shareUrl:"http://tumblr.com/widgets/share/tool",params:{canonicalUrl:this.getValue("url"),content:this.getValue("url"),posttype:"link",title:this.getValue("title"),caption:this.getValue("caption"),tags:this.getValue("tags")}},hackernews:{shareUrl:"https://news.ycombinator.com/submitlink",params:{u:this.getValue("url"),t:this.getValue("title")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},xing:{shareUrl:"https://www.xing.com/app/user",params:{op:"share",url:this.getValue("url"),title:this.getValue("title")}},buffer:{shareUrl:"https://buffer.com/add",params:{url:this.getValue("url"),title:this.getValue("title"),via:this.getValue("via"),picture:this.getValue("picture")}},instapaper:{shareUrl:"http://www.instapaper.com/edit",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("description")}},pocket:{shareUrl:"https://getpocket.com/save",params:{url:this.getValue("url")}},digg:{shareUrl:"http://www.digg.com/submit",params:{url:this.getValue("url")}},stumbleupon:{shareUrl:"http://www.stumbleupon.com/submit",params:{url:this.getValue("url"),title:this.getValue("title")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},weibo:{shareUrl:"http://service.weibo.com/share/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),language:"zh_cn"}},renren:{shareUrl:"http://share.renren.com/share/buttonshare",params:{link:this.getValue("url")}},myspace:{shareUrl:"https://myspace.com/post",params:{u:this.getValue("url"),t:this.getValue("title"),c:this.getValue("description")}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},baidu:{shareUrl:"http://cang.baidu.com/do/add",params:{it:this.getValue("title"),iu:this.getValue("url")}},hatenabookmark:{shareUrl:"http://b.hatena.ne.jp/entry/"+this.getValue("url")}}[t];return s&&(s.width=this.getValue("width"),s.height=this.getValue("height")),void 0!==s&&this.urlSharer(s)},urlSharer:function(t){var i,p=t.params||{},e=Object.keys(p),r=e.length>0?"?":"";for(i=0;i<e.length;i++)"?"!==r&&(r+="&"),p[e[i]]&&(r+=e[i]+"="+encodeURIComponent(p[e[i]]));if(t.shareUrl+=r,t.isLink)window.location.href=t.shareUrl;else{var n=t.width||600,o=t.height||480,l=window.innerWidth/2-n/2+window.screenX,h="scrollbars=no, width="+n+", height="+o+", top="+(window.innerHeight/2-o/2+window.screenY)+", left="+l,c=window.open(t.shareUrl,"",h);window.focus&&c.focus()}}},t.exports=r},397:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(361);const o=Symbol("implicit");function l(){var t=new Map,e=[],r=[],h=o;function c(n){var l=n+"",i=t.get(l);if(!i){if(h!==o)return h;t.set(l,i=e.push(n))}return r[(i-1)%r.length]}return c.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new Map;for(const n of r){const r=n+"";t.has(r)||t.set(r,e.push(n))}return c},c.range=function(t){return arguments.length?(r=Array.from(t),c):r.slice()},c.unknown=function(t){return arguments.length?(h=t,c):h},c.copy=function(){return l(e,r).unknown(h)},n.a.apply(c,arguments),c}},493:function(t,e,r){"use strict";function n(t){var e=0,r=t.children,i=r&&r.length;if(i)for(;--i>=0;)e+=r[i].value;else e=1;t.value=e}r.d(e,"a",(function(){return o}));function o(data,t){data instanceof Map?(data=[void 0,data],void 0===t&&(t=h)):void 0===t&&(t=l);for(var e,r,n,i,o,c=new d(data),v=[c];e=v.pop();)if((n=t(e.data))&&(o=(n=Array.from(n)).length))for(e.children=n,i=o-1;i>=0;--i)v.push(r=n[i]=new d(n[i])),r.parent=e,r.depth=e.depth+1;return c.eachBefore(f)}function l(t){return t.children}function h(t){return Array.isArray(t)?t[1]:null}function c(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function f(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function d(data){this.data=data,this.depth=this.height=0,this.parent=null}d.prototype=o.prototype={constructor:d,count:function(){return this.eachAfter(n)},each:function(t,e){let r=-1;for(const n of this)t.call(e,n,++r,this);return this},eachAfter:function(t,e){for(var r,i,n,o=this,l=[o],h=[],c=-1;o=l.pop();)if(h.push(o),r=o.children)for(i=0,n=r.length;i<n;++i)l.push(r[i]);for(;o=h.pop();)t.call(e,o,++c,this);return this},eachBefore:function(t,e){for(var r,i,n=this,o=[n],l=-1;n=o.pop();)if(t.call(e,n,++l,this),r=n.children)for(i=r.length-1;i>=0;--i)o.push(r[i]);return this},find:function(t,e){let r=-1;for(const n of this)if(t.call(e,n,++r,this))return n},sum:function(t){return this.eachAfter((function(e){for(var r=+t(e.data)||0,n=e.children,i=n&&n.length;--i>=0;)r+=n[i].value;e.value=r}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,r=function(a,b){if(a===b)return a;var t=a.ancestors(),e=b.ancestors(),r=null;a=t.pop(),b=e.pop();for(;a===b;)r=a,a=t.pop(),b=e.pop();return r}(e,t),n=[e];e!==r;)e=e.parent,n.push(e);for(var o=n.length;t!==r;)n.splice(o,0,t),t=t.parent;return n},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(r){r!==t&&e.push({source:r.parent,target:r})})),e},copy:function(){return o(this).eachBefore(c)},[Symbol.iterator]:function*(){var t,e,i,r,n=this,o=[n];do{for(t=o.reverse(),o=[];n=t.pop();)if(yield n,e=n.children)for(i=0,r=e.length;i<r;++i)o.push(e[i])}while(o.length)}}},494:function(t,e,r){"use strict";var n=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},o=function(t,e,r,n,o){for(var l,h=t.children,i=-1,c=h.length,f=t.value&&(n-e)/t.value;++i<c;)(l=h[i]).y0=r,l.y1=o,l.x0=e,l.x1=e+=l.value*f},l=function(t,e,r,n,o){for(var l,h=t.children,i=-1,c=h.length,f=t.value&&(o-r)/t.value;++i<c;)(l=h[i]).x0=e,l.x1=n,l.y0=r,l.y1=r+=l.value*f};var h=function t(e){function r(t,r,n,h,c){!function(t,e,r,n,h,c){for(var f,d,v,m,w,y,V,U,k,A,x,I=[],M=e.children,C=0,R=0,L=M.length,B=e.value;C<L;){v=h-r,m=c-n;do{w=M[R++].value}while(!w&&R<L);for(y=V=w,x=w*w*(A=Math.max(m/v,v/m)/(B*t)),k=Math.max(V/x,x/y);R<L;++R){if(w+=d=M[R].value,d<y&&(y=d),d>V&&(V=d),x=w*w*A,(U=Math.max(V/x,x/y))>k){w-=d;break}k=U}I.push(f={value:w,dice:v<m,children:M.slice(C,R)}),f.dice?o(f,r,n,h,B?n+=m*w/B:c):l(f,r,n,B?r+=v*w/B:h,c),B-=w,C=R}}(e,t,r,n,h,c)}return r.ratio=function(e){return t((e=+e)>1?e:1)},r}((1+Math.sqrt(5))/2);function c(t){if("function"!=typeof t)throw new Error;return t}function f(){return 0}var d=function(t){return function(){return t}};e.a=function(){var t=h,e=!1,r=1,o=1,l=[0],v=f,m=f,w=f,y=f,V=f;function U(t){return t.x0=t.y0=0,t.x1=r,t.y1=o,t.eachBefore(k),l=[0],e&&t.eachBefore(n),t}function k(e){var p=l[e.depth],r=e.x0+p,n=e.y0+p,o=e.x1-p,h=e.y1-p;o<r&&(r=o=(r+o)/2),h<n&&(n=h=(n+h)/2),e.x0=r,e.y0=n,e.x1=o,e.y1=h,e.children&&(p=l[e.depth+1]=v(e)/2,r+=V(e)-p,n+=m(e)-p,(o-=w(e)-p)<r&&(r=o=(r+o)/2),(h-=y(e)-p)<n&&(n=h=(n+h)/2),t(e,r,n,o,h))}return U.round=function(t){return arguments.length?(e=!!t,U):e},U.size=function(t){return arguments.length?(r=+t[0],o=+t[1],U):[r,o]},U.tile=function(e){return arguments.length?(t=c(e),U):t},U.padding=function(t){return arguments.length?U.paddingInner(t).paddingOuter(t):U.paddingInner()},U.paddingInner=function(t){return arguments.length?(v="function"==typeof t?t:d(+t),U):v},U.paddingOuter=function(t){return arguments.length?U.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):U.paddingTop()},U.paddingTop=function(t){return arguments.length?(m="function"==typeof t?t:d(+t),U):m},U.paddingRight=function(t){return arguments.length?(w="function"==typeof t?t:d(+t),U):w},U.paddingBottom=function(t){return arguments.length?(y="function"==typeof t?t:d(+t),U):y},U.paddingLeft=function(t){return arguments.length?(V="function"==typeof t?t:d(+t),U):V},U}},607:function(t,e,r){"use strict";var n;r.d(e,"a",(function(){return S}));var o=new Uint8Array(16);function l(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"==typeof t&&h.test(t)},f=[],d=0;d<256;++d)f.push((d+256).toString(16).substr(1));var v,m,w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r},y=0,V=0;var U=function(t){if(!c(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};var k=function(t,e,r){function n(t,n,o,l){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof n&&(n=U(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var h=new Uint8Array(16+t.length);if(h.set(n),h.set(t,n.length),(h=r(h))[6]=15&h[6]|e,h[8]=63&h[8]|128,o){l=l||0;for(var i=0;i<16;++i)o[l+i]=h[i];return o}return w(h)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n};function A(t){return 14+(t+64>>>9<<4)+1}function x(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function I(q,a,b,t,s,e){return x((r=x(x(a,q),x(t,e)))<<(n=s)|r>>>32-n,b);var r,n}function M(a,b,t,e,r,s,n){return I(b&t|~b&e,a,b,r,s,n)}function C(a,b,t,e,r,s,n){return I(b&e|t&~e,a,b,r,s,n)}function R(a,b,t,e,r,s,n){return I(b^t^e,a,b,r,s,n)}function L(a,b,t,e,r,s,n){return I(t^(b|~e),a,b,r,s,n)}function B(s,t,e,r){switch(s){case 0:return t&e^~t&r;case 1:case 3:return t^e^r;case 2:return t&e^t&r^e&r}}function E(t,e){return t<<e|t>>>32-e}var S={v1:function(t,e,r){var i=e&&r||0,b=e||new Array(16),n=(t=t||{}).node||v,o=void 0!==t.clockseq?t.clockseq:m;if(null==n||null==o){var h=t.random||(t.rng||l)();null==n&&(n=v=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==o&&(o=m=16383&(h[6]<<8|h[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),f=void 0!==t.nsecs?t.nsecs:V+1,dt=c-y+(f-V)/1e4;if(dt<0&&void 0===t.clockseq&&(o=o+1&16383),(dt<0||c>y)&&void 0===t.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=c,V=f,m=o;var d=(1e4*(268435455&(c+=122192928e5))+f)%4294967296;b[i++]=d>>>24&255,b[i++]=d>>>16&255,b[i++]=d>>>8&255,b[i++]=255&d;var U=c/4294967296*1e4&268435455;b[i++]=U>>>8&255,b[i++]=255&U,b[i++]=U>>>24&15|16,b[i++]=U>>>16&255,b[i++]=o>>>8|128,b[i++]=255&o;for(var k=0;k<6;++k)b[i+k]=n[k];return e||w(b)},v3:k("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(input){for(var output=[],t=32*input.length,e="0123456789abcdef",i=0;i<t;i+=8){var r=input[i>>5]>>>i%32&255,n=parseInt(e.charAt(r>>>4&15)+e.charAt(15&r),16);output.push(n)}return output}(function(t,e){t[e>>5]|=128<<e%32,t[A(e)-1]=e;for(var a=1732584193,b=-271733879,r=-1732584194,n=271733878,i=0;i<t.length;i+=16){var o=a,l=b,h=r,c=n;a=M(a,b,r,n,t[i],7,-680876936),n=M(n,a,b,r,t[i+1],12,-389564586),r=M(r,n,a,b,t[i+2],17,606105819),b=M(b,r,n,a,t[i+3],22,-1044525330),a=M(a,b,r,n,t[i+4],7,-176418897),n=M(n,a,b,r,t[i+5],12,1200080426),r=M(r,n,a,b,t[i+6],17,-1473231341),b=M(b,r,n,a,t[i+7],22,-45705983),a=M(a,b,r,n,t[i+8],7,1770035416),n=M(n,a,b,r,t[i+9],12,-1958414417),r=M(r,n,a,b,t[i+10],17,-42063),b=M(b,r,n,a,t[i+11],22,-1990404162),a=M(a,b,r,n,t[i+12],7,1804603682),n=M(n,a,b,r,t[i+13],12,-40341101),r=M(r,n,a,b,t[i+14],17,-1502002290),a=C(a,b=M(b,r,n,a,t[i+15],22,1236535329),r,n,t[i+1],5,-165796510),n=C(n,a,b,r,t[i+6],9,-1069501632),r=C(r,n,a,b,t[i+11],14,643717713),b=C(b,r,n,a,t[i],20,-373897302),a=C(a,b,r,n,t[i+5],5,-701558691),n=C(n,a,b,r,t[i+10],9,38016083),r=C(r,n,a,b,t[i+15],14,-660478335),b=C(b,r,n,a,t[i+4],20,-405537848),a=C(a,b,r,n,t[i+9],5,568446438),n=C(n,a,b,r,t[i+14],9,-1019803690),r=C(r,n,a,b,t[i+3],14,-187363961),b=C(b,r,n,a,t[i+8],20,1163531501),a=C(a,b,r,n,t[i+13],5,-1444681467),n=C(n,a,b,r,t[i+2],9,-51403784),r=C(r,n,a,b,t[i+7],14,1735328473),a=R(a,b=C(b,r,n,a,t[i+12],20,-1926607734),r,n,t[i+5],4,-378558),n=R(n,a,b,r,t[i+8],11,-2022574463),r=R(r,n,a,b,t[i+11],16,1839030562),b=R(b,r,n,a,t[i+14],23,-35309556),a=R(a,b,r,n,t[i+1],4,-1530992060),n=R(n,a,b,r,t[i+4],11,1272893353),r=R(r,n,a,b,t[i+7],16,-155497632),b=R(b,r,n,a,t[i+10],23,-1094730640),a=R(a,b,r,n,t[i+13],4,681279174),n=R(n,a,b,r,t[i],11,-358537222),r=R(r,n,a,b,t[i+3],16,-722521979),b=R(b,r,n,a,t[i+6],23,76029189),a=R(a,b,r,n,t[i+9],4,-640364487),n=R(n,a,b,r,t[i+12],11,-421815835),r=R(r,n,a,b,t[i+15],16,530742520),a=L(a,b=R(b,r,n,a,t[i+2],23,-995338651),r,n,t[i],6,-198630844),n=L(n,a,b,r,t[i+7],10,1126891415),r=L(r,n,a,b,t[i+14],15,-1416354905),b=L(b,r,n,a,t[i+5],21,-57434055),a=L(a,b,r,n,t[i+12],6,1700485571),n=L(n,a,b,r,t[i+3],10,-1894986606),r=L(r,n,a,b,t[i+10],15,-1051523),b=L(b,r,n,a,t[i+1],21,-2054922799),a=L(a,b,r,n,t[i+8],6,1873313359),n=L(n,a,b,r,t[i+15],10,-30611744),r=L(r,n,a,b,t[i+6],15,-1560198380),b=L(b,r,n,a,t[i+13],21,1309151649),a=L(a,b,r,n,t[i+4],6,-145523070),n=L(n,a,b,r,t[i+11],10,-1120210379),r=L(r,n,a,b,t[i+2],15,718787259),b=L(b,r,n,a,t[i+9],21,-343485551),a=x(a,o),b=x(b,l),r=x(r,h),n=x(n,c)}return[a,b,r,n]}(function(input){if(0===input.length)return[];for(var t=8*input.length,output=new Uint32Array(A(t)),i=0;i<t;i+=8)output[i>>5]|=(255&input[i/8])<<i%32;return output}(t),8*t.length))})),v4:function(t,e,r){var n=(t=t||{}).random||(t.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return w(n)},v5:k("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var i=0;i<n.length;++i)t.push(n.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,l=Math.ceil(o/16),h=new Array(l),c=0;c<l;++c){for(var f=new Uint32Array(16),d=0;d<16;++d)f[d]=t[64*c+4*d]<<24|t[64*c+4*d+1]<<16|t[64*c+4*d+2]<<8|t[64*c+4*d+3];h[c]=f}h[l-1][14]=8*(t.length-1)/Math.pow(2,32),h[l-1][14]=Math.floor(h[l-1][14]),h[l-1][15]=8*(t.length-1)&4294967295;for(var v=0;v<l;++v){for(var m=new Uint32Array(80),w=0;w<16;++w)m[w]=h[v][w];for(var y=16;y<80;++y)m[y]=E(m[y-3]^m[y-8]^m[y-14]^m[y-16],1);for(var a=r[0],b=r[1],V=r[2],U=r[3],k=r[4],A=0;A<80;++A){var s=Math.floor(A/20),x=E(a,5)+B(s,b,V,U)+k+e[s]+m[A]>>>0;k=U,U=V,V=E(b,30)>>>0,b=a,a=x}r[0]=r[0]+a>>>0,r[1]=r[1]+b>>>0,r[2]=r[2]+V>>>0,r[3]=r[3]+U>>>0,r[4]=r[4]+k>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}))}}}]);