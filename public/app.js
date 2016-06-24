!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},i={}.hasOwnProperty,a=/^\.\.?(\/|$)/,s=function(e,t){for(var r,n=[],i=(a.test(t)?e+"/"+t:t).split("/"),s=0,o=i.length;o>s;s++)r=i[s],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(r){var n=s(o(t),r);return e.require(n,t)}},c=function(e,t){var n={id:e,exports:{}};return r[e]=n,t(n.exports,u(e),n),n.exports},l=function(e){return n[e]?l(n[e]):e},d=function(e,n){null==n&&(n="/");var a=l(e);if(i.call(r,a))return r[a].exports;if(i.call(t,a))return c(a,t[a]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,t){n[t]=e},d.reset=function(){t={},r={},n={}};var f=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,p=function(e){if(f.test(e)){var t=e.replace(f,"");i.call(n,t)&&n[t].replace(f,"")!==t+"/index"||(n[t]=e)}if(h.test(e)){var r=e.replace(h,"");i.call(n,r)||(n[r]=e)}};d.register=d.define=function(e,n){if("object"==typeof e)for(var a in e)i.call(e,a)&&d.register(a,e[a]);else t[e]=n,delete r[e],p(e)},d.list=function(){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e},d.brunch=!0,d._cache=r,e.require=d}}(),require.register("actions.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setFontSize=function(e){return{type:"SET_FONT_SIZE",size:e}},e.setContrast=function(e){return{type:"SET_CONTRAST",contrast:e}},e.selectImage=function(e){return{type:"SELECT_IMAGE",image:e}},e.setSize=function(e){return{type:"SET_SIZE",size:e}},e.cacheDrawing=function(e){return{type:"CACHE_DRAWING",drawing:e}}}),require.register("components/Card.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i);e["default"]=function(e){var t=e.title,r=e.children;return a["default"].createElement("div",{className:"Card"},a["default"].createElement("div",{className:"Card-header"},a["default"].createElement("h4",null,t)),r)}}),require.register("components/DownloadButton.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i);e["default"]=a["default"].createClass({displayName:"DownloadButton",propTypes:{drawing:a["default"].PropTypes.string},handleDownload:function(e){var t=this.props.drawing,r=e.target;r.href=t,r.click()},render:function(){return a["default"].createElement("div",null,a["default"].createElement("a",{className:"Button",download:"pabla.jpg",target:"_blank",onClick:this.handleDownload},"Download"))}})}),require.register("components/FiltersPicker.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i);e["default"]=a["default"].createClass({displayName:"FiltersPicker",propTypes:{contrast:a["default"].PropTypes.bool.isRequired,onContrastChange:a["default"].PropTypes.func.isRequired},updateContrast:function(){var e=this.refs.contrast.checked;this.props.onContrastChange(e)},render:function(){return a["default"].createElement("div",null,a["default"].createElement("label",null,a["default"].createElement("input",{ref:"contrast",checked:this.props.contrast,type:"checkbox",onChange:this.updateContrast})," Contrast"))}})}),require.register("components/ImageCanvas.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{!n&&o["return"]&&o["return"]()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=t("react"),o=n(s),u={8:"backspace",27:"escape",37:"arr_left",39:"arr_right"},c=[500,750],l=[500,500],d=[500,250],f=500,h=f-40-10,p=function(e,t){var r=t.getBoundingClientRect(),n={x:e.clientX-r.left,y:e.clientY-r.top};return n},m=function(e,t){return e.x>=t[0]&&e.x<=t[0]+t[2]&&e.y>=t[1]&&e.y<=t[1]+t[3]},v=function(e,t,r){var n=e.getContext("2d");window.devicePixelRatio&&(e.width=t*window.devicePixelRatio,e.height=r*window.devicePixelRatio,window.c=e,e.style.width=t+"px",e.style.height=r+"px",n.scale(window.devicePixelRatio,window.devicePixelRatio))},g=function(e,t,r){e.fillStyle="rgba(45, 45, 45, 0.45)",e.fillRect(0,0,t,r)},y=function(e,t,r,n){var i=n.naturalWidth,a=n.naturalHeight,s=i/a,o=t/r,u=void 0,c=void 0;o>=s?(u=i,c=i/o):(u=a*o,c=a);var l=(i-u)/2,d=(a-c)/2;e.drawImage(n,l,d,u,c,0,0,t,r)},w=function(e,t,r){var n=r.split(" "),i=[""],a=[[]],s=0;return n.forEach(function(r,n){var o=i.length-1,u=i[o],c=0===u.length?r:u+" "+r;if(e.measureText(c).width<=t||0===u.length){i[o]=c;0===u.length;a[o]=a[o].concat(r.split("").map(function(e,t){return s+1+t}))}else a.push(r.split("").map(function(e,t){return s+1+t})),i.push(r);a[i.length-1].push(s+1+r.length),s=s+1+r.length}),[i,a]},S=function(e,t,r,n,i){e.font=n+"px Georgia",e.fillStyle="white";var s=h,o=w(e,s,i),u=a(o,2),c=u[0],l=(u[1],1.3*n),d=void 0;return c.forEach(function(a,s){var o=t[0]+10,u=t[1]+n+s*l;r&&r.y<=u&&r.y>=u-l&&a.split("").forEach(function(t,n){var s=e.measureText(a.slice(0,n)).width,u=e.measureText(a.slice(0,n+1)).width,c=r.x-o;c>=s&&u>=c&&(d=i.indexOf(a)+n)})}),d},x=function(e,t){return[e[0]-t.x,e[1]-t.y,e[2],e[3]]},E=function(e,t,r){var n=1.3*t;return{x:e[0]+10,y:e[1]+t+r*n}},C=function(e,t,r){var n=h,i=w(e,n,r),s=a(i,2),o=(s[0],s[1]),u=o.find(function(e){return-1!==e.indexOf(t+1)}),c=void 0;if(u){var l=o.indexOf(u),d=u.indexOf(t+1);u.map(function(e){return r[e-1]}).join("");c={lineNo:l,idxInLine:d,line:u}}return c},z=function(e,t,r,n,i){var a=i.lineNo,s=i.idxInLine,o=i.line,u=o.map(function(e){return n[e-1]}).join(""),c=E(t,r,a),l=c.x,d=c.y,f=e.measureText(u.slice(0,s+1)).width;return{x:l+f,y1:d-r+7,y2:d+7}},P=function(e,t){var r=t.x,n=t.y1,i=t.y2;e.strokeStyle="rgba(255, 255, 255, 0.75)",e.lineWidth=1,e.lineCap="round",e.beginPath(),e.moveTo(r,n),e.lineTo(r,i),e.stroke(),e.strokeStyle=null},_=function(e,t,r,n,i,s){var o=r,u=n;if(o>u){var c=[u,o];o=c[0],u=c[1]}var l=C(e,o,s),d=C(e,u,s);if(l&&d){var f=w(e,h,s),p=a(f,2),m=(p[0],p[1]);if(l.lineNo===d.lineNo){var v=m.find(function(e){return-1!==e.indexOf(o+1)}),g=v.map(function(e){return s[e-1]}).join(""),y=E(t,i,l.lineNo),S=y.x,x=y.y,z=e.measureText(g.slice(0,l.idxInLine+1)).width,P=e.measureText(g.slice(l.idxInLine+1,d.idxInLine)).width;return[{x1:S+z,x2:S+z+P,y1:x-i+7,y2:x+7}]}var _=Array.apply(0,Array(d.lineNo-l.lineNo+1)).map(function(e,t){return t+l.lineNo});return _.map(function(r){var n=E(t,i,r),a=n.x,c=n.y,f=void 0,h=void 0;if(r==l.lineNo){var p=m.find(function(e){return-1!==e.indexOf(o+1)}),v=p.map(function(e){return s[e-1]}).join("");f=e.measureText(v.slice(0,l.idxInLine+1)).width,h=e.measureText(v.slice(l.idxInLine+1)).width}else if(r===d.lineNo){var g=m.find(function(e){return-1!==e.indexOf(u+1)}),y=g.map(function(e){return s[e-1]}).join("");f=0,h=e.measureText(y.slice(0,d.idxInLine)).width}else f=0,h=280;return{x1:a+f,x2:a+f+h,y1:c-i+7,y2:c+7}})}},b=function(e,t,r,n,s,o){e.font=t+"px Georgia",e.fillStyle="white";var u=h,c=w(e,u,o),l=a(c,2),d=l[0],f=(l[1],1.3*t);d.forEach(function(r,n){var i=E(s,t,n),a=i.x,o=i.y;e.fillText(r,a,o,s[2]-20)});var p=(Math.min(300,Math.max.apply(Math,i(d.map(function(t){return e.measureText(t).width})))),d.length*f);return s[3]=p+10,r&&(e.lineWidth=2,e.strokeStyle=n?"rgba(87, 205, 255, 0.5)":"#0092d1",e.strokeRect(s[0],s[1],s[2],s[3])),s};e["default"]=o["default"].createClass({displayName:"ImageCanvas",initSize:function(e,t){var r={},n=a({tall:c,wide:d,square:l}[e],2);r.canvasWidth=n[0],r.canvasHeight=n[1];var i=this.state;i.canvasWidth===r.canvasWidth&&i.canvasHeight===r.canvasHeight||this.setState(r,t)},componentWillReceiveProps:function(e){var t=this;this.initSize(e.size,function(){v(t.refs.canvas,t.state.canvasWidth,t.state.canvasHeight),t.redraw(e)})},getInitialState:function(){return{text:"“Others have seen what is and asked why. I have seen what could be and asked why not. ” - Pablo Picasso"}},componentWillMount:function(){this.initSize(this.props.size||"square")},componentDidMount:function(){var e=this,t=this.refs.canvas;v(t,this.state.canvasWidth,this.state.canvasHeight),document.addEventListener("keypress",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),this.textRect=[20,20,this.state.canvasWidth-40,this.state.canvasHeight-40],this.cursor=0,setTimeout(this.doRedraw,100),setInterval(function(){e.showCursor=!e.showCursor,setTimeout(e.doRedraw,100)},450)},doRedraw:function(){this.redraw(this.props)},redraw:function(e){e||(e=this.props);var t=this.refs.canvas,r=t.getContext("2d"),n=this.mouseHeld,i=this.showCursor,a=this.textRect,s=(this.cursor,this.state),o=s.text,u=s.isFocused,c=s.isEditing,l=(s.mouseDiff,e.contrast),d=e.fontSize,f=[].slice.apply(document.images).find(function(t){return e.image.url===t.src});if(f){y(r,this.state.canvasWidth,this.state.canvasHeight,f),l&&g(r,this.state.canvasWidth,this.state.canvasHeight),this.textRect=b(r,d,u,n,a,o);var h=void 0;if(c&&this.cursor1&&this.cursor2){var p=_(r,a,this.cursor1,this.cursor2,d,o);if(!p)return;h=!0,p.forEach(function(e){var t=e.x1,n=e.x2,i=e.y1,a=e.y2;r.fillStyle="rgba(87, 205, 255, 0.5)",r.fillRect(t,i,n-t,a-i)})}if(c&&i&&!h){var m=C(r,this.cursor,o);if(m){var v=z(r,a,d,o,m);P(r,v)}}this.props.onRedraw&&this.props.onRedraw(this.refs.canvas.toDataURL("image/jpeg"))}},cancelEditing:function(){this.setState({isEditing:!1}),setTimeout(this.doRedraw,50)},moveCursor:function(e,t){if(t=!1,!t||this.cursor1||this.cursor2||(this.cursor1=this.cursor2=this.cursor),t||(this.cursor1=this.cursor2=null),"left"===e)this.cursor=this.cursor-1,t&&(this.cursor2=this.cursor);else{if("right"!==e)return;this.cursor=this.cursor+1,t&&(this.cursor2=this.cursor)}setTimeout(this.doRedraw,50)},insertOrDeleteChar:function(e){var t=this.state.text,r=void 0;if(this.cursor1||this.cursor2){var n=this.cursor1,i=this.cursor2,a=t.slice(0,n+1),s=t.slice(i);e?(r=a+e+s,this.cursor1=null,this.cursor2=null,this.cursor=n+1):(r=a+s,this.cursor1=null,this.cursor2=null,this.cursor=n)}else{var o=this.cursor,u=t.slice(0,o+1),c=t.slice(o+1);e?(r=u+e+c,this.cursor=o+1):(r=u.slice(0,-1)+c,this.cursor=o-1)}this.setState({text:r}),setTimeout(this.doRedraw,50)},selectAll:function(){this.cursor1=1,this.cursor2=this.state.text.length,this.cursor=this.cursor2,setTimeout(this.doRedraw,150)},handleKeyDown:function(e){if(this.state.isEditing){if(65===e.which&&e.metaKey===!0)return e.preventDefault(),this.selectAll();switch(u[e.which]){case"escape":this.cancelEditing();break;case"arr_left":this.moveCursor("left",e.shiftKey);break;case"arr_right":this.moveCursor("right",e.shiftKey)}}},handleKeyUp:function(e){if("Meta"!==e.keyIdentifier&&"Alt"!==e.keyIdentifier&&"Control"!==e.keyIdentifier&&this.state.isEditing)if("backspace"===u[e.which])this.insertOrDeleteChar();else{var t=String.fromCharCode(e.charCode);e.shiftKey||(t=t.toLowerCase()),this.insertOrDeleteChar(t)}},handleMouseDown:function(e){var t=p(e,this.refs.canvas);this.startPos=t;var r=this.textRect,n=m(t,r);n?(this.mouseHeld=!0,this.state.isFocused&&(this.mouseDown=new Date),this.setState({isFocused:!0}),setTimeout(this.doRedraw,100)):(this.setState({isFocused:!1,isEditing:!1}),setTimeout(this.doRedraw,100))},handleMouseMove:function(e){if(this.mouseHeld){var t=p(e,this.refs.canvas),r={x:this.startPos.x-t.x,y:this.startPos.y-t.y};if(this.state.isFocused&&!this.state.isEditing)this.textRect=x(this.textRect,r),this.setState({mouseDiff:r}),this.startPos=t;else if(this.state.isFocused&&this.state.isEditing){var n=this.startPos,i=t,a=this.refs.canvas,s=a.getContext("2d"),o=this.textRect,u=this.state.text,c=this.props.fontSize,l=S(s,o,n,c,u),d=S(s,o,i,c,u);this.cursor1=l,this.cursor2=d}setTimeout(this.doRedraw,50)}},handleMouseUp:function(e){if(this.mouseDown&&new Date-this.mouseDown<200){var t=this.refs.canvas,r=t.getContext("2d"),n=(this.textRect,this.state.text),i=this.props.fontSize;this.cursor=S(r,this.textRect,this.startPos,i,n)||this.cursor,this.setState({isEditing:!0}),this.cursor1=null,this.cursor2=null,setTimeout(this.doRedraw,50)}this.setState({mouseDiff:null}),this.mouseDown=null,this.mouseHeld=!1,setTimeout(this.doRedraw,50)},render:function(){this.props.image||{};return o["default"].createElement("div",{className:"ImageCanvas"},o["default"].createElement("canvas",{ref:"canvas",width:this.state.canvasWidth,height:this.state.canvasHeight,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp}))}})}),require.register("components/ImagePicker.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i);e["default"]=a["default"].createClass({displayName:"ImagePicker",propTypes:{images:a["default"].PropTypes.arrayOf(a["default"].PropTypes.shape({url:a["default"].PropTypes.string})).isRequired,selected:a["default"].PropTypes.shape({url:a["default"].PropTypes.string}),onSelect:a["default"].PropTypes.func},handleSelect:function(e){this.props.onSelect&&this.props.onSelect(e)},render:function(){var e=this,t=this.props.selected||{};return a["default"].createElement("div",{className:"ImagePicker"},this.props.images.map(function(r){var n=r.url===t.url,i="ImagePicker-image"+(n?" ImagePicker-image--selected":"");return a["default"].createElement("div",{className:i,onClick:function(){return e.handleSelect(r)},key:r.url},a["default"].createElement("div",{className:"ImagePicker-image-wrapper"},a["default"].createElement("img",{src:r.url,crossOrigin:"anonymous"})))}))}})}),require.register("components/SizePicker.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i),s=function(e){var t=e.name,r=e.code,n=e.currentCode,i=e.onSelect,s=function(e){e.preventDefault(),i(r)},o="SizePicker-size SizePicker-size--"+r+(r===n?" SizePicker-size--selected":"");return a["default"].createElement("div",{className:o,onClick:s},a["default"].createElement("div",{className:"SizePicker-size-wrapper"},t))};e["default"]=a["default"].createClass({displayName:"SizePicker",render:function(){var e=this.props.size;return a["default"].createElement("div",{className:"SizePicker"},a["default"].createElement(s,{name:"Tall",code:"tall",currentCode:e,onSelect:this.props.onSizeSelect}),a["default"].createElement(s,{name:"Square",code:"square",currentCode:e,onSelect:this.props.onSizeSelect}),a["default"].createElement(s,{name:"Wide",code:"wide",currentCode:e,onSelect:this.props.onSizeSelect}))}})}),require.register("components/TextPropertiesPicker.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i);e["default"]=a["default"].createClass({displayName:"TextPropertiesPicker",propTypes:{fontSize:a["default"].PropTypes.number.isRequired,onFontSizeChange:a["default"].PropTypes.func.isRequired},updateFontSize:function(){var e=parseInt(this.refs.fontSize.value,10);this.props.onFontSizeChange(e)},render:function(){return a["default"].createElement("div",null,"Font size:",a["default"].createElement("select",{ref:"fontSize",value:this.props.fontSize,onChange:this.updateFontSize},[8,10,12,14,16,18,20,22,26,32,36,42,48,54].map(function(e){return a["default"].createElement("option",{key:e,value:e},e)})))}})}),require.register("container/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i),s=t("react-redux"),o=t("actions"),u=t("./LeftSidebar"),c=n(u),l=t("./RightSidebar"),d=n(l),f=t("components/ImageCanvas"),h=n(f),p=a["default"].createClass({displayName:"App",updateDrawnImage:function(e){this.props.drawing!==e&&this.props.onCacheDrawing(e)},render:function(){return a["default"].createElement("div",{className:"Container"},a["default"].createElement(c["default"],null),a["default"].createElement("div",{className:"Main"},a["default"].createElement("h4",{className:"Main-subtitle"},"Canvas"),a["default"].createElement(h["default"],{image:this.props.selected,fontSize:this.props.fontSize,contrast:this.props.contrast,size:this.props.size,onRedraw:this.updateDrawnImage})),a["default"].createElement(d["default"],null))}}),m=function(e){return{fontSize:e.fontSize,contrast:e.contrast,size:e.size,selected:e.selectedImage,drawing:e.drawing}},v=function(e){return{onCacheDrawing:function(t){e((0,o.cacheDrawing)(t))}}};e["default"]=(0,s.connect)(m,v)(p)}),require.register("container/LeftSidebar.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i),s=t("react-redux"),o=t("actions"),u=t("components/Card"),c=n(u),l=t("components/ImagePicker"),d=n(l),f=function(e){var t=e.availableImages,r=e.selectedImage,n=e.onSelectImage;return a["default"].createElement("div",{className:"Sidebar"},a["default"].createElement(c["default"],{title:"Images"},a["default"].createElement(d["default"],{images:t,selected:r,onSelect:n})))},h=function(e){return{availableImages:e.availableImages,selectedImage:e.selectedImage}},p=function(e){return{onSelectImage:function(t){e((0,o.selectImage)(t))}}};e["default"]=(0,s.connect)(h,p)(f)}),require.register("container/RightSidebar.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("react"),a=n(i),s=t("react-redux"),o=t("actions"),u=t("components/Card"),c=n(u),l=t("components/FiltersPicker"),d=n(l),f=t("components/TextPropertiesPicker"),h=n(f),p=t("components/SizePicker"),m=n(p),v=t("components/DownloadButton"),g=n(v),y=function(e){var t=e.drawing,r=e.contrast,n=e.onContrastChange,i=e.fontSize,s=e.onFontSizeChange,o=e.size,u=e.onSizeSelect;return a["default"].createElement("div",{className:"Sidebar"},a["default"].createElement(c["default"],{title:"Sizes"},a["default"].createElement(m["default"],{size:o,onSizeSelect:u})),a["default"].createElement(c["default"],{title:"Filters"},a["default"].createElement(d["default"],{contrast:r,onContrastChange:n})),a["default"].createElement(c["default"],{title:"Text"},a["default"].createElement(h["default"],{fontSize:i,onFontSizeChange:s})),a["default"].createElement(g["default"],{drawing:t}),a["default"].createElement("p",{className:"Credit"},"Made by ",a["default"].createElement("a",{href:"http://goshakkk.name"},"Gosha Arinich"),". ",a["default"].createElement("a",{href:"https://github.com/goshakkk/pabla"},"Repo"),"."))},w=function(e){return{fontSize:e.fontSize,contrast:e.contrast,size:e.size,drawing:e.drawing}},S=function(e){return{onFontSizeChange:function(t){e((0,o.setFontSize)(t))},onContrastChange:function(t){e((0,o.setContrast)(t))},onSizeSelect:function(t){e((0,o.setSize)(t))}}};e["default"]=(0,s.connect)(w,S)(y)}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=t("react-dom"),a=n(i),s=t("react"),o=n(s),u=t("redux"),c=t("react-redux"),l=t("reducer"),d=n(l),f=t("container/App"),h=n(f),p=(0,u.createStore)(d["default"]);document.addEventListener("DOMContentLoaded",function(){a["default"].render(o["default"].createElement(c.Provider,{store:p},o["default"].createElement(h["default"],null)),document.querySelector("#app"))})}),require.register("reducer.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case"SET_FONT_SIZE":return Object.assign({},e,{fontSize:t.size});case"SET_CONTRAST":return Object.assign({},e,{contrast:t.contrast});case"SELECT_IMAGE":return Object.assign({},e,{selectedImage:t.image});case"SET_SIZE":return Object.assign({},e,{size:t.size});case"CACHE_DRAWING":return Object.assign({},e,{drawing:t.drawing});default:return e}};var n=[{url:"https://images.unsplash.com/photo-1458640904116-093b74971de9?fm=jpg"},{url:"https://images.unsplash.com/photo-1453227588063-bb302b62f50b?fm=jpg"},{url:"https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?fm=jpg"},{url:"https://images.unsplash.com/photo-1447969025943-8219c41ea47a?fm=jpg"},{url:"https://images.unsplash.com/photo-1421749810611-438cc492b581?fm=jpg"},{url:"https://images.unsplash.com/photo-1449960238630-7e720e630019?fm=jpg"},{url:"https://images.unsplash.com/photo-1433190152045-5a94184895da?fm=jpg"}],i={fontSize:32,contrast:!0,availableImages:n,selectedImage:n[0],drawing:null,size:"square"}});