tpl={};function $id(e){return document.getElementById(e)}function dumpObj(e){var t="";for(var n in e)t=t+"\n "+n+": "+e[n];return t}function testEmail(e){var t=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return t.test(e)?!0:!1}function aryMatchItem(e,t,n){var r=e.length;for(var i=0;i<r;i++)if(n==e[i][t])return e[i];return null}function aryUnique(e){var t={},n=[];for(var r=0;r<e.length;r++)t[e[r]]||(t[e[r]]=!0,n.push(e[r]));return n}function ScollPostion(){var e,t,n,r,i,s,o=document.documentElement,u=document.body;o&&o.scrollTop?(e=o.scrollTop,t=o.scrollLeft,n=o.scrollWidth,r=o.scrollHeight):u&&(e=u.scrollTop,t=u.scrollLeft,n=u.scrollWidth,r=u.scrollHeight);var a=window.innerWidth,f=window.innerHeight,l=u.clientWidth,c=u.clientHeight,h=o.clientWidth,p=o.clientHeight;return a?i=a:u&&l&&(i=l),f?s=f:u&&c&&(s=c),o&&p&&h&&(s=p,i=h),{top:e,left:t,width:n,height:r,clientWidth:i,clientHeight:s}}typeof json!="object"&&(json={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof json.stringify!="function"&&(json.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("json.stringify")}),typeof json.parse!="function"&&(json.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("{"+text+"}"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("json.parse")})}(),window.cookie=function(){var e={};return e.set=function(e,t,n,r){r=r||"/";var i=new Date;i.setTime(i.getTime()+n*1e3),document.cookie=e+"="+t+";expires="+i.toGMTString()+"; path="+r},e.get=function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return t!=null?t[2]:null},e.del=function(e,t){t=t||"/";var n=new Date;n.setTime(n.getTime()-1e4),document.cookie=e+"=; expires="+n.toGMTString()+"; path="+t},e}(),$.fn.hiddenScroll=function(e){e=e||50;var t=$(this),n=t.children(".paper");t.css({overflow:"hidden"}),n.css({position:"relative",top:0}),t.mousewheel(function(r,i){var s=t.height(),o=n.height(),u=o-s;if(u>0){var a=i<0?-1:1,f=parseInt(n.css("top"))+e*a;f=f>0?0:f,f=-f>u?-u:f}else f=0;n.css({top:f})})},$.fn.posTo=function(e,t,n,r,i){e=e||0,t=t||0;var s=$(this),o=s.offset().top;r=="bottom"&&(o-=document.documentElement.clientHeight,o+=s.innerHeight()),i=i||$("html, body"),i.animate({scrollTop:o+t+i.scrollTop()},e,function(){n&&s.point()})},$.fn.swapActext=function(e){var t=$(this),n=t.attr("actext"),r="";e?(r=t.attr(e),t.attr(e,n)):(r=t.html(),t.html(n)),t.attr("actext",r)},$.fn.point=function(){function n(n){var r="rgba(255,255,"+(155+n*10)+",1)",i=n>0?1e3:0;setTimeout(function(){e.css(t,r)},n*360+i)}var e=$(this),t="backgroundColor";for(var r=0;r<=10;r++)n(r)},$.fn.attention=function(e){function s(e){setTimeout(function(){t.css(n,i[e%2])},e*120)}e=e?e:"#fcf9b3";var t=$(this),n="backgroundColor",r=t.css(n),i=[e,r];for(var o=0;o<6;o++)s(o)},$.fn.autoTextarea=function(e){var t=$(this),n={max:null,min:t.height(),evn:""},r=$.extend({},n,e);t.css({resize:"none"}),t.bind("paste cut keyup focus blur"+r.evn,function(){var e,t=this.style,n=$(this);this.style.height=r.min+"px";if(this.scrollHeight>r.min){r.max&&this.scrollHeight>r.max?(e=r.max,t.overflowY="scroll"):(t.overflowY="hidden",e=this.scrollHeight);var i=n.innerHeight()-n.height();t.height=e-i+"px"}})},function(e){function t(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var r=n.length;r;)e.event.fixHooks[n[--r]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}($),window.tmpl=function(e,t){var n="$"+ +(new Date),r=function(e){var t,i=[n],s=[[]];for(t in e)i.push(t),s.push(e[t]);return(new Function(i,r.$)).apply(e,s).join("")};return r.$=r.$||n+".push('"+e.replace(/\\/g,"\\\\").replace(/'/g,"").replace(/[\r\t\n]/g," ").split("[#").join("	").replace(/((^|#])[^\t]*)'/g,"$1\r").replace(/\t=(.*?)#]/g,"',$1,'").split("	").join("');").split("#]").join(n+".push('").split("\r").join("\\'")+"');return "+n,t?r(t):r},window.pro=function(json,cookie){function dealBackData(DATA,callback,url,errorback){return eval(" var JsonOb = "+DATA+";"),JsonOb.code==200?callback(JsonOb.data):(debug&&$("body").prepend(JsonOb.msg+"，请求："+url+"<br/>"),errorback&&errorback(JsonOb)),JsonOb.msg}function GetRequest(e,t){var n=[],r=0;if(e.indexOf(t)!=-1){var i=e.substr(1);strs=i.split("&");for(var s=0;s<strs.length;s++){var o=strs[s].split("=")[0],u=strs[s].split("=")[1];u&&(r++,n[o]=unescape(u))}}return r>0?n:e.replace(t,"")}var PO={},urlBase="/api/",debug=!1;return PO.api=function(e,t,n,r,i){e=urlBase+e;var s=(new Date).getTime(),o={v_u_p:s};t!=null&&(o=$.extend(o,t));if(n!=null){var u="";for(var a in o)u+=a+"="+o[a]+"&";e+="?"+u.substring(0,u.length-1),$.post(e,n,function(t){dealBackData(t,r,e,i)},"html")}else $.get(e,o,function(t){dealBackData(t,r,e,i)},"html")},PO.ds=function(e){return e.replace(/\\'/g,"'").replace(/\\"/g,'"')},PO.gets=GetRequest(location.search,"?"),PO.hash=GetRequest(location.hash,"#"),PO}(json,cookie)