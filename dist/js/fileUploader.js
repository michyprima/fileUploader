!function r(o,l,s){function d(t,e){if(!l[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var a=l[t]={exports:{}};o[t][0].call(a.exports,function(e){return d(o[t][1][e]||e)},a,a.exports,r,o,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(e,t,n){"use strict";var i,C=(i=e("deepmerge"))&&i.__esModule?i:{default:i};function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}window.FileUploader=function(t,e){var m=this,h=this;this._defaults={lang:"en",useFileIcons:!0,debug:!1,debugLogStyle:"color: #9900ff",name:void 0,pluginName:"FileUploader",useLoadingBars:!0,loadingBarsClasses:[],reloadedFilesClass:"reloadedElement",resultContainerClass:"result",resultFileContainerClass:"uploadedFile",resultPrefix:"fileUploader",resultInputNames:["title","extension","value","size"],defaultFileExt:"",defaultMimeType:"",fileMaxSize:50,totalMaxSize:1e3,reloadArray:[],reloadHTML:void 0,linkButtonContent:"L",deleteButtonContent:"X",allowDuplicates:!1,duplicatesWarning:!1,HTMLTemplate:function(){return'<p class="introMsg"></p>\n                    <div>\n                        <div class="inputContainer">\n                            <input class="fileLoader" type="file" multiple />\n                        </div>\n                        <div class="dropZone"></div>\n                        <div class="filesContainer filesContainerEmpty">\n                            <div class="innerFileThumbs"></div>\n                            <div style="clear:both;"></div>\n                        </div>\n                    </div>\n                    <div class="result"></div>'},onload:function(){},onfileloadStart:function(){},onfileloadEnd:function(){},onfileDelete:function(){},filenameTest:function(){},langs:{en:{intro_msg:"(Add attachments...)",dropZone_msg:"Drop your files here",maxSizeExceeded_msg:"File too large",totalMaxSizeExceeded_msg:"Total size exceeded",duplicated_msg:"File duplicated (skipped)",name_placeHolder:"name"}}},this._options=(0,C.default)(this._defaults,e),this.options=function(e){return e?(0,C.default)(m._options,e):m._options},this._round=function(e){return Math.round(100*e)/100},this.get=function(e){switch(e){case"currentTotalSize":return m._round(T);case"currentAvailableSize":return m._round(m._options.totalMaxSize-T)}},this._logger=function(e,t,n){if(m._options.debug){if(t)for(var i=0;i<t;i++)e="➡ "+e;m._options.name&&(e="["+m._options.pluginName+" - "+m._options.name+"] "+e),n?console.log("%c "+e,m._options.debugLogStyle,n):console.log("%c "+e,m._options.debugLogStyle)}},this._fileType=function(e){var t=e.substring(e.lastIndexOf(".")+1,e.length);return 0<=["pdf","jpg","png"].indexOf(t)?t:"unknown-file"},this._fileDelete=function(e,t){var n=t.element,i=e.target.dataset.delete;i||(i=e.target.closest("div[data-delete]").dataset.delete),m._options.useFileIcons&&function(e,t){var n=e.previousElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}(n,"img").remove(),n.remove();var a=y.querySelector('input[name="'.concat(m._options.resultPrefix,"[").concat(i,"][").concat(m._options.resultInputNames[3],']"]')).value;a=m._round(a),T=m._round(T-a);var r=m._options.totalMaxSize-T;r=m._round(r),E.querySelector(":scope > span").innerHTML=r,y.querySelector(':scope > div[data-index="'.concat(i,'"]')).remove(),0===document.querySelector(".innerFileThumbs").children.length&&document.querySelector(".filesContainer").classList.add("filesContainerEmpty"),m._logger("Deleted file N: "+i,2),m._options.onfileDelete(i,T)},this._fileRename=function(e){var t=e.data.element,n=e.target,i=t.querySelector(":scope > .fileExt").innerHTML,a=n.value,r=t.dataset.index,o=y.querySelector('div[data-index="'.concat(r,'"] input')),l=m._options.filenameTest(a,i,M);if(!1===l)return e.preventDefault(),!1;void 0!==l&&!0!==l&&(a=l,n.value=a,o.value=a,n.setSelectionRange(e.data.start,e.data.stop))},this.getData=function(){var e=[];m._logger("RECEIVED SAVE COMMAND:",0);var t=!0,n=!1,i=void 0;try{for(var a,r=y.querySelectorAll(":scope > .".concat(m._options.resultFileContainerClass))[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var o=a.value.querySelectorAll(":scope > input"),l={title:o[0].value,ext:o[1].value,value:o[2].value};e.push(l)}}catch(e){n=!0,i=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}return m._logger("%O",0,e),e},this._createUploaderContainer=function(e,t,n){if(m._options.useFileIcons){var i='<img src="/images/'.concat(m._fileType(n),'.png" class="fileThumb" />');M.insertAdjacentHTML("beforeend",i)}var a=document.createElement("div");a.className="newElement",a.dataset.index=parseInt(e),a.style.position="relative",M.appendChild(a);var r=document.createElement("div");r.className="fileActions",a.appendChild(r);var o='<a target="_blank"><div class="fileSee">'.concat(m._options.linkButtonContent,"</div></a>");r.insertAdjacentHTML("beforeend",o);var l=document.createElement("div");if(l.className="fileDelete",l.dataset.delete=parseInt(e),l.innerHTML=m._options.deleteButtonContent,r.append(l),l.addEventListener("click",function(e){m._fileDelete(e,{element:a})}),m._options.useLoadingBars){var s=m._options.loadingBarsClasses;0<s.length&&(s=s.join(" "));var d=document.createElement("div");d.className="loadBar ".concat(s),d.appendChild(document.createElement("div")),a.prepend(d)}var u=document.createElement("input");u.setAttribute("placeholder","nome"),u.className="fileTitle";var c=document.createElement("div");return c.className="fileExt",a.prepend(c),a.prepend(u),function(e,t,n){t instanceof Array||this._logger("addMultipleListeners requires events to be an array");var i=!0,a=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value;e.addEventListener(s,n)}}catch(e){a=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}}(u,["keypress","keyup","paste"],function(e){e.data={},e.data.element=a,e.data.start=this.selectionStart,e.data.stop=this.selectionEnd,h._fileRename(e)}),u.value=t,c.innerHTML=n,a},this._createResultContainer=function(e){var t=e.index,n=document.createElement("div");n.className=m._options.resultFileContainerClass,n.dataset.index=t,n.insertAdjacentHTML("beforeend","<div>File: ".concat(t,"</div>")),n.insertAdjacentHTML("beforeend",'<input type="text" name="'.concat(m._options.resultPrefix,"[").concat(t,"][").concat(m._options.resultInputNames[0],']" value="').concat(e.name,'" />')),n.insertAdjacentHTML("beforeend",'<input type="text" name="'.concat(m._options.resultPrefix,"[").concat(t,"][").concat(m._options.resultInputNames[1],']" value="').concat(e.type,'" />')),n.insertAdjacentHTML("beforeend",'<input type="text" name="'.concat(m._options.resultPrefix,"[").concat(t,"][").concat(m._options.resultInputNames[2],']" value="').concat(e.result,'" />')),n.insertAdjacentHTML("beforeend",'<input type="text" name="'.concat(m._options.resultPrefix,"[").concat(t,"][").concat(m._options.resultInputNames[3],']" value="').concat(e.size,'" />')),y.appendChild(n)},this._filesRead=function(e){var t,n=e.data.DOM,i=!1,a=0;if(t=e.target.files?(m._logger("files array source: file selector (click event)",1),e.target.files):(m._logger("files array source: dropzone (drag & drop event)",1),e.dataTransfer.files),m._logger("%O",0,t),!m._options.allowDuplicates){var r=[],o=[];for(i=[],$.each(y.children(),function(e,t){r.push($(t).children("input").first().val())}),a=0;a<t.length;a++)o.push(t[a].name);o.forEach(function(e){r.indexOf(e)<0&&i.push(e)})}b.removeClass("filesContainerEmpty"),x.html("upload files");var l=function(o,l,s,e){var d=e.find(".innerFileThumbs").children().filter(function(){return $(this).data("index")===s}),u=m._round(l.size/1e6);if(o.onloadstart=function(){m._options.onfileloadStart(s),m._logger("START read file: "+s+", size: "+u+" MB",2)},o.onprogress=function(e){if(e.lengthComputable){var t=m._round(e.loaded/e.total*100);m._logger("File "+s+" loaded: "+t,3),t<=100&&d.children(".loadBar").children("div").animate({width:"100%"},500)}},o.onloadend=function(){var e=l.type,t=l.name,n=o.result;if(!n)return!1;"data:"===n.substring(0,n.indexOf(";"))&&0<m._options.defaultMimeType.length&&(n="data:"+m._options.defaultMimeType+n.substring(n.indexOf(";"),n.length)),""===e&&(e=m._options.defaultMimeType),t.indexOf(".")<0&&""!==m._options.defaultFileExt&&(t=t+"."+m._options.defaultFileExt);var i={index:s,name:t,type:e,result:n,size:u};m._createResultContainer(i),d.children(".fileActions").children("a").attr("href",n),m._logger("END read file: "+s,4);var a=parseInt($("#debugUploaded").html())+1;$("#debugUploaded").html(a);var r={name:l.name,type:l.type,data:n,size:u};m._options.onfileloadEnd(s,r,m._round(T))},u<=m._options.fileMaxSize&&T+u<=m._options.totalMaxSize){o.readAsDataURL(l),T+=u;var t=m._options.totalMaxSize-T;E.children("span").html(m._round(t))}else{var n=S.totalMaxSizeExceeded_msg;u>m._options.fileMaxSize?(n=S.maxSizeExceeded_msg,m._logger("FILE REJECTED: Max size exceeded - max size: "+m._options.fileMaxSize+" MB - file size: "+u+" MB")):m._logger("FILE REJECTED: Max total size exceeded - max size: "+m._options.totalMaxSizeExceeded_msg+" MB - current total size: "+(T+u)+" MB"),d.addClass("error"),d.children(".loadBar").empty().append('<div class="errorMsg">'+n+"</div>"),setTimeout(function(){d.animate({opacity:0},300,function(){h._options.useFileIcons&&$(this).prev("img").remove(),$(this).remove()})},2e3);var i=parseInt($("#debugRejected").html())+1;$("#debugRejected").html(i)}},s=$("#innerFileThumbs").children().last().attr("id");function d(e){setTimeout(function(){e.animate({opacity:0},300,function(){$(this).remove()})},2e3)}for(s=void 0!==s?parseInt(s.substring(s.indexOf("-")+1,s.length))+1:0,a=0;a<t.length;a++){var u=t[a],c=new FileReader;if(i&&i.indexOf(u.name)<0){if(m._options.duplicatesWarning){var p=$('<div class="errorLabel center"></div>');p.html(S.duplicated_msg),M.append(p),d(p)}m._logger("File duplicated: "+u.name+" -> skipping...",2)}else{var f=void 0,v=void 0;v=0<u.name.lastIndexOf(".")?(f=u.name.substring(0,u.name.lastIndexOf(".")),u.name.substring(u.name.lastIndexOf(".")+1,u.name.length)):(f=u.name,m._options.defaultFileExt);var g=m._options.filenameTest(f,v,M);!1!==g?(void 0!==g&&!0!==g&&(f=g),m._createUploaderContainer(_,f,v),l(c,u,_,n),_++):m._logger("Invalid file name: "+u.name,2)}}},this._options.name&&this._logger("INITIALIZED INSTANCE: "+this._options.name);var n=this._options.HTMLTemplate();t.insertAdjacentHTML("beforeend",n);var _=0,y=t.querySelector("."+this._options.resultContainerClass),i=t.querySelector(".fileLoader"),b=t.querySelector(".filesContainer"),x=t.querySelector(".fileNameContainer"),M=t.querySelector(".innerFileThumbs"),a=t.querySelector(".dropZone"),S=this._options.langs[this._options.lang];this._options.reloadHTML&&(y.innerHTML=this._options.reloadHTML),t.querySelector(".introMsg").innerHTML=S.intro_msg,a.innerHTML=S.dropZone_msg,this._options.debug?(y.insertAdjacentHTML("beforebegin",'<p class="debugMode">Debug mode: on</p>'),y.insertAdjacentHTML("beforebegin",'<div class="debug">Uploaded files: <span id="debugUploaded">0</span> | Rejected files: <span id="debugRejected">0</span></div>'),y.insertAdjacentHTML("beforebegin",'<div class="debug">Current MAX FILE SIZE: '+this._options.fileMaxSize+" MB</div>"),y.insertAdjacentHTML("beforebegin",'<div class="debug">Current MAX TOTAL SIZE: '+this._options.totalMaxSize+" MB</div>"),y.insertAdjacentHTML("beforebegin",'<div class="debug sizeAvailable">Size still available: <span>'+this._options.totalMaxSize+"</span> MB</div>")):y.classList.add("hide");var r,E=t.querySelector(".sizeAvailable"),T=0,o=!0,l=!1,s=void 0;try{for(var d,u=y.querySelectorAll(":scope > .".concat(this._options.resultFileContainerClass)).entries()[Symbol.iterator]();!(o=(d=u.next()).done);o=!0){var c=A(d.value,2),p=(c[0],c[1]);this._logger("found previously uploaded file: index = ".concat(p.dataset.index),2);var f=p.querySelectorAll(":scope > input"),v=f[0].value,g=f[1].value,L=f[3].value;0<v.lastIndexOf(".")&&(v=v.substr(0,v.lastIndexOf("."))),(r=this._createUploaderContainer(_,v,g)).querySelector(":scope > .loadBar > div").style.width="100%",r.classList.add(this._options.reloadedFilesClass),T+=parseFloat(L),_++}}catch(e){l=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(l)throw s}}return 0<this._options.reloadArray.length&&this._options.reloadArray.forEach(function(e,t){(r=m._createUploaderContainer(t,e.name,e.ext)).querySelector(":scope > .loadBar > div").style.width="100%",r.classList.add(m._options.reloadedFilesClass),m._logger("found previously uploaded file: index = "+t,2);var n={index:t,name:e.name,type:e.ext,result:e.data,size:e.size};m._createResultContainer(n),T+=parseFloat(e.size),_++}),T=this._round(T),this._logger("current total size: "+T),E.querySelector(":scope > span").innerHTML=this._options.totalMaxSize-T,this._options.onload(this._options,T),this.handleDragOver=function(e){a.classList.add("highlight"),e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},this.handleDrop=function(e){a.classList.remove("highlight"),e.stopPropagation(),e.preventDefault(),e.data={DOM:t},m._filesRead(e)},a.addEventListener("dragleave",function(){a.classList.remove("highlight")}),a.addEventListener("dragover",this.handleDragOver,!1),a.addEventListener("drop",function(t){return function(e){m.handleDrop(e,t)}},!1),a.addEventListener("click",function(e){i.dispatchEvent(e)}),i.addEventListener("change",function(e){e.data={DOM:t},m._filesRead(e),m.value=null}),{fileUploader:h,elementDOM:t}}},{deepmerge:2}],2:[function(e,t,n){var i,a;i=this,a=function(){"use strict";var a=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(function(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function o(e,t,n){return e.concat(t).map(function(e){return r(e,n)})}function l(t,n,i){var a={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(e){a[e]=r(t[e],i)}),Object.keys(n).forEach(function(e){i.isMergeableObject(n[e])&&t[e]?a[e]=function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}(e,i)(t[e],n[e],i):a[e]=r(n[e],i)}),a}function s(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||a;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):l(e,t,n):r(t,n)}return s.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return s(e,t,n)},{})},s},"object"==typeof n&&void 0!==t?t.exports=a():"function"==typeof define&&define.amd?define(a):i.deepmerge=a()},{}]},{},[1]);
//# sourceMappingURL=fileUploader.js.map
