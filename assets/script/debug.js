!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.debug=e()}}(function(){return function e(n,r,t){function o(i,a){if(!r[i]){if(!n[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[i]={exports:{}};n[i][0].call(f.exports,function(e){var r=n[i][1][e];return o(r?r:e)},f,f.exports,e,n,r,t)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,n,r){function t(){}var o=n.exports={};o.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.MutationObserver,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var t=[];if(n){var o=document.createElement("div"),s=new MutationObserver(function(){var e=t.slice();t.length=0,e.forEach(function(e){e()})});return s.observe(o,{attributes:!0}),function(e){t.length||o.setAttribute("yes","no"),t.push(e)}}return r?(window.addEventListener("message",function(e){var n=e.source;if((n===window||null===n)&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),o.title="browser",o.browser=!0,o.env={},o.argv=[],o.on=t,o.addListener=t,o.once=t,o.off=t,o.removeListener=t,o.removeAllListeners=t,o.emit=t,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],2:[function(e,n,r){function t(e){if(e=String(e),!(e.length>1e4)){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(n){var r=parseFloat(n[1]),t=(n[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return r*d;case"days":case"day":case"d":return r*f;case"hours":case"hour":case"hrs":case"hr":case"h":return r*u;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function s(e){return i(e,f,"day")||i(e,u,"hour")||i(e,c,"minute")||i(e,a,"second")||e+" ms"}function i(e,n,r){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+r:Math.ceil(e/n)+" "+r+"s"}var a=1e3,c=60*a,u=60*c,f=24*u,d=365.25*f;n.exports=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return t(e);if("number"===r&&isNaN(e)===!1)return n["long"]?s(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],3:[function(e,n,r){function t(e){var n,t=0;for(n in e)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function o(e){function n(){if(n.enabled){var e=n,t=+new Date,o=t-(u||t);e.diff=o,e.prev=u,e.curr=t,u=t;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=r.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,t){if("%%"===n)return n;a++;var o=r.formatters[t];if("function"==typeof o){var i=s[a];n=o.call(e,i),s.splice(a,1),a--}return n}),r.formatArgs.call(e,s);var c=n.log||r.log||console.log.bind(console);c.apply(e,s)}}return n.namespace=e,n.enabled=r.enabled(e),n.useColors=r.useColors(),n.color=t(e),"function"==typeof r.init&&r.init(n),n}function s(e){r.save(e);for(var n=(e||"").split(/[\s,]+/),t=n.length,o=0;o<t;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function i(){r.enable("")}function a(e){var n,t;for(n=0,t=r.skips.length;n<t;n++)if(r.skips[n].test(e))return!1;for(n=0,t=r.names.length;n<t;n++)if(r.names[n].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=n.exports=o.debug=o["default"]=o,r.coerce=c,r.disable=i,r.enable=s,r.enabled=a,r.humanize=e("ms"),r.names=[],r.skips=[],r.formatters={};var u},{ms:2}],4:[function(e,n,r){(function(t){function o(){return"undefined"!=typeof window&&"undefined"!=typeof window.process&&"renderer"===window.process.type||("undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window.console&&(console.firebug||console.exception&&console.table)||navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function s(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+r.humanize(this.diff),n){var t="color: "+this.color;e.splice(1,0,t,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,t)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(n){}}function c(){try{return r.storage.debug}catch(e){}if("undefined"!=typeof t&&"env"in t)return t.env.DEBUG}function u(){try{return window.localStorage}catch(e){}}r=n.exports=e("./debug"),r.log=i,r.formatArgs=s,r.save=a,r.load=c,r.useColors=o,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}},r.enable(c()),window&&(window._debug=r)}).call(this,e("_process"))},{"./debug":3,_process:1}]},{},[4])(4)});