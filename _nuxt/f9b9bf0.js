(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{512:function(t,r,n){"use strict";n.d(r,"a",(function(){return l}));n(32),n(16),n(54),n(46),n(122),n(513),n(123),n(47),n(121);var e=n(4),o=n.n(e),f="‎",c=/[0-9]+(?!.*[0-9])/,l={getLastNumber:function(t){var r;return null===(r=t.match(c))||void 0===r?void 0:r[0]},incrementLastNumber:function(t){return t.replace(c,(function(t){var r="".concat(parseInt(t,10)+1);return o.a.padStart(r,t.length,"0")}))},hasNumber:function(t){return/\d/.test(t)},addLtrToString:function(t){return"".concat(f).concat(t)},isValidHttpUrl:function(t){try{var r=new URL(t);return"http:"===r.protocol||"https:"===r.protocol}catch(t){return!1}}}},513:function(t,r,n){"use strict";var e=n(8),o=n(514).start;e({target:"String",proto:!0,forced:n(515)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},514:function(t,r,n){var e=n(20),o=n(315),f=n(23),c=Math.ceil,l=function(t){return function(r,n,l){var v,h,y=String(f(r)),d=y.length,m=void 0===l?" ":String(l),w=e(n);return w<=d||""==m?y:(v=w-d,(h=o.call(m,c(v/m.length))).length>v&&(h=h.slice(0,v)),t?y+h:h+y)}};t.exports={start:l(!1),end:l(!0)}},515:function(t,r,n){var e=n(100);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(e)},534:function(t,r,n){var e="undefined"!=typeof JSON?JSON:n(535);t.exports=function(t,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var n=r.space||"";"number"==typeof n&&(n=Array(n+1).join(" "));var c,l="boolean"==typeof r.cycles&&r.cycles,v=r.replacer||function(t,r){return r},h=r.cmp&&(c=r.cmp,function(t){return function(a,b){var r={key:a,value:t[a]},n={key:b,value:t[b]};return c(r,n)}}),y=[];return function t(r,c,d,m){var w=n?"\n"+new Array(m+1).join(n):"",k=n?": ":":";if(d&&d.toJSON&&"function"==typeof d.toJSON&&(d=d.toJSON()),void 0!==(d=v.call(r,c,d))){if("object"!=typeof d||null===d)return e.stringify(d);if(o(d)){for(var S=[],i=0;i<d.length;i++){var _=t(d,i,d[i],m+1)||e.stringify(null);S.push(w+n+_)}return"["+S.join(",")+w+"]"}if(-1!==y.indexOf(d)){if(l)return e.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}y.push(d);var j=f(d).sort(h&&h(d));for(S=[],i=0;i<j.length;i++){var L=t(d,c=j[i],d[c],m+1);if(L){var O=e.stringify(c)+k+L;S.push(w+n+O)}}return y.splice(y.indexOf(d),1),"{"+S.join(",")+w+"}"}}({"":t},"",t,0)};var o=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},f=Object.keys||function(t){var r=Object.prototype.hasOwnProperty||function(){return!0},n=[];for(var e in t)r.call(t,e)&&n.push(e);return n}},535:function(t,r,n){r.parse=n(536),r.stringify=n(537)},536:function(t,r){var n,e,text,o,f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c=function(t){throw{name:"SyntaxError",message:t,at:n,text:text}},l=function(t){return t&&t!==e&&c("Expected '"+t+"' instead of '"+e+"'"),e=text.charAt(n),n+=1,e},v=function(){var t,r="";for("-"===e&&(r="-",l("-"));e>="0"&&e<="9";)r+=e,l();if("."===e)for(r+=".";l()&&e>="0"&&e<="9";)r+=e;if("e"===e||"E"===e)for(r+=e,l(),"-"!==e&&"+"!==e||(r+=e,l());e>="0"&&e<="9";)r+=e,l();if(t=+r,isFinite(t))return t;c("Bad number")},h=function(){var t,i,r,n="";if('"'===e)for(;l();){if('"'===e)return l(),n;if("\\"===e)if(l(),"u"===e){for(r=0,i=0;i<4&&(t=parseInt(l(),16),isFinite(t));i+=1)r=16*r+t;n+=String.fromCharCode(r)}else{if("string"!=typeof f[e])break;n+=f[e]}else n+=e}c("Bad string")},y=function(){for(;e&&e<=" ";)l()};o=function(){switch(y(),e){case"{":return function(){var t,object={};if("{"===e){if(l("{"),y(),"}"===e)return l("}"),object;for(;e;){if(t=h(),y(),l(":"),Object.hasOwnProperty.call(object,t)&&c('Duplicate key "'+t+'"'),object[t]=o(),y(),"}"===e)return l("}"),object;l(","),y()}}c("Bad object")}();case"[":return function(){var t=[];if("["===e){if(l("["),y(),"]"===e)return l("]"),t;for(;e;){if(t.push(o()),y(),"]"===e)return l("]"),t;l(","),y()}}c("Bad array")}();case'"':return h();case"-":return v();default:return e>="0"&&e<="9"?v():function(){switch(e){case"t":return l("t"),l("r"),l("u"),l("e"),!0;case"f":return l("f"),l("a"),l("l"),l("s"),l("e"),!1;case"n":return l("n"),l("u"),l("l"),l("l"),null}c("Unexpected '"+e+"'")}()}},t.exports=function(source,t){var r;return text=source,n=0,e=" ",r=o(),y(),e&&c("Syntax error"),"function"==typeof t?function r(n,e){var o,f,c=n[e];if(c&&"object"==typeof c)for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(void 0!==(f=r(c,o))?c[o]=f:delete c[o]);return t.call(n,e,c)}({"":r},""):r}},537:function(t,r){var n,e,o,f=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function c(t){return f.lastIndex=0,f.test(t)?'"'+t.replace(f,(function(a){var t=meta[a];return"string"==typeof t?t:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+t+'"'}t.exports=function(t,r,f){var i;if(n="",e="","number"==typeof f)for(i=0;i<f;i+=1)e+=" ";else"string"==typeof f&&(e=f);if(o=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return function t(r,f){var i,l,v,h,y,d=n,m=f[r];switch(m&&"object"==typeof m&&"function"==typeof m.toJSON&&(m=m.toJSON(r)),"function"==typeof o&&(m=o.call(f,r,m)),typeof m){case"string":return c(m);case"number":return isFinite(m)?String(m):"null";case"boolean":case"null":return String(m);case"object":if(!m)return"null";if(n+=e,y=[],"[object Array]"===Object.prototype.toString.apply(m)){for(h=m.length,i=0;i<h;i+=1)y[i]=t(i,m)||"null";return v=0===y.length?"[]":n?"[\n"+n+y.join(",\n"+n)+"\n"+d+"]":"["+y.join(",")+"]",n=d,v}if(o&&"object"==typeof o)for(h=o.length,i=0;i<h;i+=1)"string"==typeof(l=o[i])&&(v=t(l,m))&&y.push(c(l)+(n?": ":":")+v);else for(l in m)Object.prototype.hasOwnProperty.call(m,l)&&(v=t(l,m))&&y.push(c(l)+(n?": ":":")+v);return v=0===y.length?"{}":n?"{\n"+n+y.join(",\n"+n)+"\n"+d+"}":"{"+y.join(",")+"}",n=d,v}}("",{"":t})}},589:function(t,r,n){"use strict";n.r(r);n(19),n(124);var e=n(195),o=n(314),f=n(512),c=n(4),l=n.n(c),v=n(534),h=n.n(v);function y(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return d(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,f=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return f=t.done,t},e:function(t){c=!0,o=t},f:function(){try{f||null==n.return||n.return()}finally{if(c)throw o}}}}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=t[i];return n}var m={data:function(){return{title:"Convert WiseRead link to config file",wrLink:new e.c,initialLink:"",firstNumber:1}},head:function(){return{title:this.title}},computed:{wrLinkToConfig:function(){if(0===this.wrLink._chapterLinks.length)return"";var t={wiseread_settings:{},chapters:{}};t.wiseread_settings.title_template=o.b;var r,n=l.a.isString(this.firstNumber)?1:this.firstNumber,e=y(this.wrLink._chapterLinks);try{for(e.s();!(r=e.n()).done;){var f=r.value;t.chapters[n]={title:f.name,wiseread:{direct:f.link}},n=Math.floor(n+1)}}catch(t){e.e(t)}finally{e.f()}return h()(t,{space:2,cmp:function(a,b){return"wiseread_settings"===b.key||a.key>b.key?1:-1}})}},watch:{initialLink:{handler:function(t){var r,n;this.wrLink=new e.c(t);var o=f.a.getLastNumber(null!==(r=null===(n=this.wrLink._chapterLinks[0])||void 0===n?void 0:n.name)&&void 0!==r?r:""),c=l.a.toNumber(o);c&&(this.firstNumber=c)}}}},w=n(37),component=Object(w.a)(m,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"page"},[n("h2",[t._v(t._s(t.title))]),t._v("\n  Enter WiseRead link with chapters:\n  "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.initialLink,expression:"initialLink",modifiers:{trim:!0}}],staticClass:"link-input",staticStyle:{"margin-top":"0.2rem"},attrs:{type:"text",placeholder:"WiseRead link"},domProps:{value:t.initialLink},on:{input:function(r){r.target.composing||(t.initialLink=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}}),t._v(" "),t.wrLink._chapterLinks.length>0?n("div",{staticClass:"mt-8"},[t._v("\n    What is the number of the first chapter in the list?\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.firstNumber,expression:"firstNumber",modifiers:{number:!0}}],staticClass:"input w-16 block",staticStyle:{"margin-top":"0.2rem"},attrs:{type:"number",min:"0"},domProps:{value:t.firstNumber},on:{input:function(r){r.target.composing||(t.firstNumber=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}})]):t._e(),t._v(" "),n("div",{staticClass:"mt-8"},[t._v("\n    Config:\n    "),n("div",{staticClass:"highlight mt-2"},[n("pre",[t._v(t._s(t.wrLinkToConfig||"Empty"))])])]),t._v(" "),t.wrLink._chapterLinks.length>0?n("div",[t._v("\n    * Of course, you may want to edit the result.\n  ")]):t._e()])}),[],!1,null,null,null);r.default=component.exports}}]);