var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}function o(e){e.preventDefault();let t=document.getElementById("name").value;console.log("dfsfd"),Client.validateURL(t)?(console.log("::: Form Submitted :::"),fetch("http://localhost:8081/api",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})}).then((e=>e.json())).then((function(e){document.getElementById("text").innerHTML=`Text: ${e.sentence_list[0].text}`,document.getElementById("agreement").innerHTML=`Agreement: ${e.agreement}`,document.getElementById("subjectivity").innerHTML=`Subjectivity: ${e.subjectivity}`,document.getElementById("confidence").innerHTML=`Confidence: ${e.confidence}`,document.getElementById("irony").innerHTML=`Irony: ${e.irony}`,document.getElementById("score_tag").innerHTML=`Score_Tag: ${e.score_tag}`})).catch((()=>console.log("Error!!")))):alert("Invalid URL!!! ,Try again")}n.r(t),n.d(t,"validateURL",(function(){return r})),n.d(t,"handleSubmit",(function(){return o}))}]);