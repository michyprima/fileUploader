!function r(o,l,s){function d(t,e){if(!l[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var a=l[t]={exports:{}};o[t][0].call(a.exports,function(e){return d(o[t][1][e]||e)},a,a.exports,r,o,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(e,t,n){"use strict";var i,A=(i=e("deepmerge"))&&i.__esModule?i:{default:i};function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}window.FileUploader=function(t,e){var h=this,m=this;console.log(m),this._defaults={lang:"en",useFileIcons:!0,debug:!1,debugLogStyle:"color: #9900ff",name:void 0,pluginName:"FileUploader",useLoadingBars:!0,loadingBarsClasses:[],reloadedFilesClass:"reloadedElement",resultContainerClass:"result",resultFileContainerClass:"uploadedFile",resultPrefix:"fileUploader",resultInputNames:["title","extension","value","size"],defaultFileExt:"",defaultMimeType:"",fileMaxSize:50,totalMaxSize:1e3,reloadArray:[],reloadHTML:void 0,linkButtonContent:"L",deleteButtonContent:"X",allowDuplicates:!1,duplicatesWarning:!1,HTMLTemplate:function(){return'<p class="introMsg"></p>\n                    <div>\n                        <div class="inputContainer">\n                            <input class="fileLoader" type="file" multiple />\n                        </div>\n                        <div class="dropZone"></div>\n                        <div class="filesContainer filesContainerEmpty">\n                            <div class="innerFileThumbs"></div>\n                            <div style="clear:both;"></div>\n                        </div>\n                    </div>\n                    <div class="result"></div>'},onload:function(){},onfileloadStart:function(){},onfileloadEnd:function(){},onfileDelete:function(){},filenameTest:function(){},langs:{en:{intro_msg:"(Add attachments...)",dropZone_msg:"Drop your files here",maxSizeExceeded_msg:"File too large",totalMaxSizeExceeded_msg:"Total size exceeded",duplicated_msg:"File duplicated (skipped)",name_placeHolder:"name"}}},this._options=(0,A.default)(this._defaults,e),this.options=function(e){return e?(0,A.default)(h._options,e):h._options},this._round=function(e){return Math.round(100*e)/100},this.get=function(e){switch(e){case"currentTotalSize":return h._round(T);case"currentAvailableSize":return h._round(h._options.totalMaxSize-T)}},this._logger=function(e,t,n){if(h._options.debug){if(t)for(var i=0;i<t;i++)e="➡ "+e;h._options.name&&(e="["+h._options.pluginName+" - "+h._options.name+"] "+e),n?console.log("%c "+e,h._options.debugLogStyle,n):console.log("%c "+e,h._options.debugLogStyle)}},this._fileType=function(e){var t=e.substring(e.lastIndexOf(".")+1,e.length);return 0<=["pdf","jpg","png"].indexOf(t)?t:"unknown-file"},this._fileDelete=function(e,t){var n=t.element,i=e.target.dataset.delete;i||(i=e.target.closest("div[data-delete]").dataset.delete),h._options.useFileIcons&&n.prev("img").remove(),n.remove();var a=y.find('input[name="'+h._options.resultPrefix+"["+i+"]["+h._options.resultInputNames[3]+']"]').val();a=h._round(a),T=h._round(T-a);var r=h._options.totalMaxSize-T;r=h._round(r),C.children("span").html(r),y.children('div[data-index="'+i+'"]').remove(),0===$(".innerFileThumbs").children().length&&$(".filesContainer").addClass("filesContainerEmpty"),h._logger("Deleted file N: "+i,2),h._options.onfileDelete(i,T)},this._fileRename=function(e){var t=e.data.element,n=$(e.target),i=t.children(".fileExt").html(),a=n.val(),r=t.data("index"),o=y.find('div[data-index="'+r+'"] input:first'),l=h._options.filenameTest(a,i,M);if(!1===l)return e.preventDefault(),!1;void 0!==l&&!0!==l&&(a=l,n.val(a),0<i.length&&(a=a+"."+i),o.val(a),n[0].setSelectionRange(e.data.start,e.data.stop))},this.getData=function(){var i=[];return h._logger("RECEIVED SAVE COMMAND:",0),$.each(y.children("."+h._options.resultFileContainerClass),function(e,t){var n={title:$($(t).children("input")[0]).val(),ext:$($(t).children("input")[1]).val(),value:$($(t).children("input")[2]).val()};i.push(n)}),h._logger("%O",0,i),i},this._createUploaderContainer=function(e,t,n){if(h._options.useFileIcons){var i='<img src="/images/'.concat(h._fileType(n),'.png" class="fileThumb" />');M.insertAdjacentHTML("beforeend",i)}var a=document.createElement("div");a.className="newElement",a.dataset.index=parseInt(e),a.style.position="relative",M.appendChild(a);var r=document.createElement("div");r.className="fileActions",a.appendChild(r);var o='<a target="_blank"><div class="fileSee">'.concat(h._options.linkButtonContent,"</div></a>");r.insertAdjacentHTML("beforeend",o);var l=document.createElement("div");if(l.className="fileDelete",l.dataset.delete=parseInt(e),l.innerHTML=h._options.deleteButtonContent,r.append(l),l.addEventListener("click",function(e){h._fileDelete(e,{element:a})}),h._options.useLoadingBars){var s=h._options.loadingBarsClasses;0<s.length&&(s=s.join(" "));var d=document.createElement("div");d.className="loadBar ".concat(s),d.appendChild(document.createElement("div")),a.prepend(d)}var u=document.createElement("input");u.setAttribute("placeholder","nome"),u.className="fileTitle";var c=document.createElement("div");return c.className="fileExt",a.prepend(c),a.prepend(u),u.on("keypress keyup paste",function(e){e.data={},e.data.element=a,e.data.start=this.selectionStart,e.data.stop=this.selectionEnd,this._fileRename(e)}),u.val(t),c.html(n),a},this._createResultContainer=function(e){var t=e.index,n=$('<div data-index="'+t+'" class="'+h._options.resultFileContainerClass+'"></div>');n.append($("<div>File: "+t+"</div>")),n.append($("<input/>").attr({type:"text",name:h._options.resultPrefix+"["+t+"]["+h._options.resultInputNames[0]+"]",value:e.name})),n.append($("<input/>").attr({type:"text",name:h._options.resultPrefix+"["+t+"]["+h._options.resultInputNames[1]+"]",value:e.type})),n.append($("<input/>").attr({type:"text",name:h._options.resultPrefix+"["+t+"]["+h._options.resultInputNames[2]+"]",value:e.result})),n.append($("<input/>").attr({type:"text",name:h._options.resultPrefix+"["+t+"]["+h._options.resultInputNames[3]+"]",value:e.size})),y.append(n)},this._filesRead=function(e){var t,n=e.data.DOM,i=!1,a=0;if(t=e.target.files?(h._logger("files array source: file selector (click event)",1),e.target.files):(h._logger("files array source: dropzone (drag & drop event)",1),e.dataTransfer.files),h._logger("%O",0,t),!h._options.allowDuplicates){var r=[],o=[];for(i=[],$.each(y.children(),function(e,t){r.push($(t).children("input").first().val())}),a=0;a<t.length;a++)o.push(t[a].name);o.forEach(function(e){r.indexOf(e)<0&&i.push(e)})}x.removeClass("filesContainerEmpty"),b.html("upload files");var l=function(o,l,s,e){var d=e.find(".innerFileThumbs").children().filter(function(){return $(this).data("index")===s}),u=h._round(l.size/1e6);if(o.onloadstart=function(){h._options.onfileloadStart(s),h._logger("START read file: "+s+", size: "+u+" MB",2)},o.onprogress=function(e){if(e.lengthComputable){var t=h._round(e.loaded/e.total*100);h._logger("File "+s+" loaded: "+t,3),t<=100&&d.children(".loadBar").children("div").animate({width:"100%"},500)}},o.onloadend=function(){var e=l.type,t=l.name,n=o.result;if(!n)return!1;"data:"===n.substring(0,n.indexOf(";"))&&0<h._options.defaultMimeType.length&&(n="data:"+h._options.defaultMimeType+n.substring(n.indexOf(";"),n.length)),""===e&&(e=h._options.defaultMimeType),t.indexOf(".")<0&&""!==h._options.defaultFileExt&&(t=t+"."+h._options.defaultFileExt);var i={index:s,name:t,type:e,result:n,size:u};h._createResultContainer(i),d.children(".fileActions").children("a").attr("href",n),h._logger("END read file: "+s,4);var a=parseInt($("#debugUploaded").html())+1;$("#debugUploaded").html(a);var r={name:l.name,type:l.type,data:n,size:u};h._options.onfileloadEnd(s,r,h._round(T))},u<=h._options.fileMaxSize&&T+u<=h._options.totalMaxSize){o.readAsDataURL(l),T+=u;var t=h._options.totalMaxSize-T;C.children("span").html(h._round(t))}else{var n=E.totalMaxSizeExceeded_msg;u>h._options.fileMaxSize?(n=E.maxSizeExceeded_msg,h._logger("FILE REJECTED: Max size exceeded - max size: "+h._options.fileMaxSize+" MB - file size: "+u+" MB")):h._logger("FILE REJECTED: Max total size exceeded - max size: "+h._options.totalMaxSizeExceeded_msg+" MB - current total size: "+(T+u)+" MB"),d.addClass("error"),d.children(".loadBar").empty().append('<div class="errorMsg">'+n+"</div>"),setTimeout(function(){d.animate({opacity:0},300,function(){m._options.useFileIcons&&$(this).prev("img").remove(),$(this).remove()})},2e3);var i=parseInt($("#debugRejected").html())+1;$("#debugRejected").html(i)}},s=$("#innerFileThumbs").children().last().attr("id");function d(e){setTimeout(function(){e.animate({opacity:0},300,function(){$(this).remove()})},2e3)}for(s=void 0!==s?parseInt(s.substring(s.indexOf("-")+1,s.length))+1:0,a=0;a<t.length;a++){var u=t[a],c=new FileReader;if(i&&i.indexOf(u.name)<0){if(h._options.duplicatesWarning){var p=$('<div class="errorLabel center"></div>');p.html(E.duplicated_msg),M.append(p),d(p)}h._logger("File duplicated: "+u.name+" -> skipping...",2)}else{var f,g;g=0<u.name.lastIndexOf(".")?(f=u.name.substring(0,u.name.lastIndexOf(".")),u.name.substring(u.name.lastIndexOf(".")+1,u.name.length)):(f=u.name,h._options.defaultFileExt);var v=h._options.filenameTest(f,g,M);!1!==v?(void 0!==v&&!0!==v&&(f=v),h._createUploaderContainer(_,f,g),l(c,u,_,n),_++):h._logger("Invalid file name: "+u.name,2)}}},this._options.name&&this._logger("INITIALIZED INSTANCE: "+this._options.name);var n=this._options.HTMLTemplate();t.insertAdjacentHTML("beforeend",n);var _=0,y=t.querySelector("."+this._options.resultContainerClass),i=t.querySelector(".fileLoader"),x=t.querySelector(".filesContainer"),b=t.querySelector(".fileNameContainer"),M=t.querySelector(".innerFileThumbs"),a=t.querySelector(".dropZone"),E=this._options.langs[this._options.lang];this._options.reloadHTML&&y.html(this._options.reloadHTML),t.querySelector(".introMsg").innerHTML=E.intro_msg,a.innerHTML=E.dropZone_msg,this._options.debug?(y.insertAdjacentHTML("beforebegin",'<p class="debugMode">Debug mode: on</p>'),y.insertAdjacentHTML("beforebegin",'<div class="debug">Uploaded files: <span id="debugUploaded">0</span> | Rejected files: <span id="debugRejected">0</span></div>'),y.insertAdjacentHTML("beforebegin",'<div class="debug">Current MAX FILE SIZE: '+this._options.fileMaxSize+" MB</div>"),y.insertAdjacentHTML("beforebegin",'<div class="debug">Current MAX TOTAL SIZE: '+this._options.totalMaxSize+" MB</div>"),y.insertAdjacentHTML("beforebegin",'<div class="debug sizeAvailable">Size still available: <span>'+this._options.totalMaxSize+"</span> MB</div>")):y.classList.add("hide");var r,o,C=t.querySelector(".sizeAvailable"),T=0,l=!0,s=!1,d=void 0;try{for(var u,c=y.querySelectorAll(":scope > .".concat(this._options.resultFileContainerClass))[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var p=L(u.value,2),f=(p[0],p[1]);this._logger("found previously uploaded file: index = ".concat(f.dataset.index),2);var g=$(f).children("input"),v=$(g[0]).val(),S=$(g[1]).val(),z=$(g[3]).val();0<v.lastIndexOf(".")&&(v=v.substr(0,v.lastIndexOf("."))),(r=this._createUploaderContainer(_,v,S)).children(".loadBar").children("div").css({width:"100%"}),r.addClass(this._options.reloadedFilesClass),T+=parseFloat(z),_++}}catch(e){s=!0,d=e}finally{try{l||null==c.return||c.return()}finally{if(s)throw d}}0<this._options.reloadArray.length&&this._options.reloadArray.forEach(function(e,t){(r=h._createUploaderContainer(t,e.name,e.ext)).children(".loadBar").children("div").css({width:"100%"}),r.addClass(h._options.reloadedFilesClass),h._logger("found previously uploaded file: index = "+t,2);var n={index:t,name:e.name,type:e.ext,result:e.data,size:e.size};h._createResultContainer(n),T+=parseFloat(e.size),_++}),T=this._round(T),this._logger("current total size: "+T),C.children("span").html(this._options.totalMaxSize-T),this._options.onload(this._options,T),this.handleDragOver=function(e){$(a).addClass("highlight"),e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},this.handleDrop=function(e){$(a).removeClass("highlight"),e.stopPropagation(),e.preventDefault(),e.data={DOM:t},h._filesRead(e)},a.addEventListener("dragleave",function(){$(a).removeClass("highlight")}),a.addEventListener("dragover",this.handleDragOver,!1),a.addEventListener("drop",(o=this,function(e){h.handleDrop(e,o)}),!1),$(a).click(function(){i.trigger("click")}),i.change({DOM:t},function(e){h._filesRead(e),h.value=null})}},{deepmerge:2}],2:[function(e,t,n){var i,a;i=this,a=function(){"use strict";var a=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s(function(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function o(e,t,n){return e.concat(t).map(function(e){return r(e,n)})}function l(t,n,i){var a={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(e){a[e]=r(t[e],i)}),Object.keys(n).forEach(function(e){i.isMergeableObject(n[e])&&t[e]?a[e]=function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}(e,i)(t[e],n[e],i):a[e]=r(n[e],i)}),a}function s(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||a;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):l(e,t,n):r(t,n)}return s.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return s(e,t,n)},{})},s},"object"==typeof n&&void 0!==t?t.exports=a():"function"==typeof define&&define.amd?define(a):i.deepmerge=a()},{}]},{},[1]);
//# sourceMappingURL=fileUploader.js.map
